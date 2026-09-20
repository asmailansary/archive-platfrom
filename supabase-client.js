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

  async signUpWithEmail(email, password) {
    return _sb.auth.signUp({ email, password });
  },

  async signInWithEmail(email, password) {
    return _sb.auth.signInWithPassword({ email, password });
  },

  async signInWithGoogle() {
    return _sb.auth.signInWithOAuth({ provider: "google" });
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
  }
};

window.AFAS = AFAS;
