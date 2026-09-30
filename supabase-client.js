// ============================================================
// AFAS Archive Platform — Supabase client & RBAC helpers
// ------------------------------------------------------------
// The anon key below is meant to be public (this is how
// Supabase is designed to work). Real protection comes from the
// Row Level Security policies in supabase_setup.sql — never rely
// on hiding this key, and never put a real password in this file.
// ============================================================

const SUPABASE_URL = "https://qeevsrsntfbusftygudd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlZXZzcnNudGZidXNmdHlndWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk4NTAwNzksImV4cCI6MjEwNTQyNjA3OX0.cCw-s5wizS9owv1XiWvs9W_nV6UKrBy-Xga0Frlh_p8";

const _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const AFAS = {
  client: _sb,

  async signInWithEmail(email, password) {
    return _sb.auth.signInWithPassword({ email, password });
  },

  async signInWithGoogle() {
    return _sb.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "https://asmailansary.github.io/archive-platfrom/" }
    });
  },

  async signOut() {
    return _sb.auth.signOut();
  },

  async getCurrentUser() {
    const { data } = await _sb.auth.getUser();
    return data?.user || null;
  },

  async getMyProfile() {
    const user = await this.getCurrentUser();
    if (!user) return null;
    const { data, error } = await _sb.from("profiles").select("*").eq("id", user.id).single();
    if (error) { console.error(error); return null; }
    return data;
  },

  // A logged-in visitor asks to become an editor. This only marks
  // them "pending" — a super admin still has to approve it.
  async applyAsEditor() {
    const user = await this.getCurrentUser();
    if (!user) throw new Error("يجب تسجيل الدخول أولاً");
    const { error } = await _sb.from("profiles")
      .update({ role: "editor", status: "pending" })
      .eq("id", user.id);
    if (error) throw error;
  },

  async listPendingEditors() {
    const { data, error } = await _sb.from("profiles")
      .select("*").eq("role", "editor").eq("status", "pending")
      .order("created_at", { ascending: true });
    if (error) throw error;
    return data;
  },

  async listAllEditorsAndAdmins() {
    const { data, error } = await _sb.from("profiles")
      .select("*").in("role", ["editor", "super_admin"])
      .order("created_at", { ascending: true });
    if (error) throw error;
    return data;
  },

  // status: 'approved' | 'rejected' | 'suspended' — super admin only
  // (enforced server-side by the RLS trigger, not by this code)
  async setEditorStatus(userId, status) {
    const { error } = await _sb.from("profiles").update({ status }).eq("id", userId);
    if (error) throw error;
    await this.logAction(`editor_${status}`, userId);
  },

  async getAuditLog(limit = 100) {
    const { data, error } = await _sb.from("audit_logs")
      .select("*").order("created_at", { ascending: false }).limit(limit);
    if (error) throw error;
    return data;
  },

  async logAction(action, target, details = {}) {
    const user = await this.getCurrentUser();
    const { error } = await _sb.from("audit_logs").insert({
      actor_id: user?.id || null,
      actor_email: user?.email || null,
      action, target, details
    });
    if (error) console.error("Audit log failed:", error);
  },

  // ---------- Documents (editor/super_admin only, enforced by RLS) ----------

  async listAllDocuments() {
    const { data, error } = await _sb.from("documents")
      .select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  },

  // Pass an object with an `id` to update an existing document,
  // or without `id` to create a new one.
  async saveDocument(doc) {
    if (doc.id) {
      const { id, ...rest } = doc;
      const { error } = await _sb.from("documents").update(rest).eq("id", id);
      if (error) throw error;
      await this.logAction("document_updated", id);
      return id;
    } else {
      const { data, error } = await _sb.from("documents").insert(doc).select().single();
      if (error) throw error;
      await this.logAction("document_created", data.id);
      return data.id;
    }
  },

  async togglePublish(id, isPublished) {
    const { error } = await _sb.from("documents").update({ is_published: isPublished }).eq("id", id);
    if (error) throw error;
    await this.logAction(isPublished ? "document_published" : "document_unpublished", id);
  },

  // ---------- Generic content tables (timeline_events, figures) ----------

  async listRows(table, orderCol = "sort_order") {
    const { data, error } = await _sb.from(table).select("*").order(orderCol, { ascending: true });
    if (error) throw error;
    return data || [];
  },

  // Insert (no id) or update (with id). Returns the row id.
  async saveRow(table, row, auditName) {
    const payload = { ...row, updated_at: new Date().toISOString() };
    if (payload.id) {
      const { id, ...rest } = payload;
      const { error } = await _sb.from(table).update(rest).eq("id", id);
      if (error) throw error;
      await this.logAction(auditName + "_updated", id);
      return id;
    }
    delete payload.id;
    const { data, error } = await _sb.from(table).insert(payload).select().single();
    if (error) throw error;
    await this.logAction(auditName + "_created", data.id);
    return data.id;
  },

  async deleteRow(table, id, auditName) {
    const { error } = await _sb.from(table).delete().eq("id", id);
    if (error) throw error;
    await this.logAction(auditName + "_deleted", id);
  },

  // ---------- Editable site texts & images (super admin only, enforced by RLS) ----------

  async listSiteTexts() {
    const { data, error } = await _sb.from("site_texts").select("*");
    if (error) throw error;
    return data || [];
  },

  async saveSiteTexts(rows) {
    if (!rows.length) return;
    const uid = (await this.getCurrentUser())?.id || null;
    const stamped = rows.map(r => ({ ...r, updated_at: new Date().toISOString(), updated_by: uid }));
    const { error } = await _sb.from("site_texts").upsert(stamped, { onConflict: "key" });
    if (error) throw error;
    await this.logAction("site_texts_saved", null, { keys: rows.map(r => r.key) });
  },

  async deleteSiteTexts(keys) {
    if (!keys.length) return;
    const { error } = await _sb.from("site_texts").delete().in("key", keys);
    if (error) throw error;
    await this.logAction("site_texts_reset", null, { keys });
  },

  async listSiteImages() {
    const { data, error } = await _sb.from("site_images").select("*");
    if (error) throw error;
    return data || [];
  },

  async saveSiteImage(row) {
    const uid = (await this.getCurrentUser())?.id || null;
    const { error } = await _sb.from("site_images")
      .upsert({ ...row, updated_at: new Date().toISOString(), updated_by: uid }, { onConflict: "key" });
    if (error) throw error;
    await this.logAction("site_image_saved", row.key);
  },

  async deleteSiteImage(key) {
    const { error } = await _sb.from("site_images").delete().eq("key", key);
    if (error) throw error;
    await this.logAction("site_image_reset", key);
  },

  // ---------- Image upload (from the phone gallery/camera) ----------
  // Photos from phones are often 4–10 MB. They are shrunk in the browser
  // first (max 1600px, WebP) so the site stays fast, then stored in the
  // public "site-media" bucket. Returns the public URL.
  async uploadImage(file, folder = "misc") {
    if (!file) throw new Error("لم يتم اختيار صورة");
    if (!/^image\//.test(file.type)) throw new Error("الملف المختار ليس صورة");
    if (file.size > 25 * 1024 * 1024) throw new Error("حجم الصورة كبير جداً (الحد 25 ميجابايت)");

    let blob = file;
    let ext = (file.type.split("/")[1] || "png").replace("svg+xml", "svg").replace("jpeg", "jpg");
    if (file.type !== "image/svg+xml" && file.type !== "image/gif") {
      const out = await _shrinkImage(file, 1600, 0.85);
      blob = out.blob;
      ext = out.ext;
    }
    const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await _sb.storage.from("site-media")
      .upload(path, blob, { contentType: blob.type || file.type, cacheControl: "31536000", upsert: false });
    if (error) throw error;
    const { data } = _sb.storage.from("site-media").getPublicUrl(path);
    await this.logAction("image_uploaded", path);
    return data.publicUrl;
  }
};

// Shrinks a photo in the browser; falls back to the original if anything fails.
async function _shrinkImage(file, maxSide, quality) {
  try {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.src = url;
    await img.decode();
    const scale = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight));
    const w = Math.max(1, Math.round(img.naturalWidth * scale));
    const h = Math.max(1, Math.round(img.naturalHeight * scale));
    const canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    canvas.getContext("2d").drawImage(img, 0, 0, w, h);
    URL.revokeObjectURL(url);
    const toBlob = (type) => new Promise(res => canvas.toBlob(res, type, quality));
    let blob = await toBlob("image/webp");
    if (!blob || blob.type !== "image/webp") blob = await toBlob("image/jpeg");
    if (!blob) throw new Error("encode failed");
    return { blob, ext: blob.type === "image/webp" ? "webp" : "jpg" };
  } catch (e) {
    console.warn("Image shrink failed, uploading original:", e);
    return { blob: file, ext: (file.type.split("/")[1] || "png").replace("jpeg", "jpg") };
  }
}

window.AFAS = AFAS;
