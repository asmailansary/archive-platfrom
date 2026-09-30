// ============================================================
// AFAS — shared texts (used by the public site AND the admin panel)
// ------------------------------------------------------------
// I18N            : every fixed text of the site in Arabic / English / French
// TEXT_GROUPS     : how the admin panel groups those texts
// TEXT_LABELS     : the Arabic label shown next to each text in the admin panel
// FALLBACK_*      : sample content shown only if the database is unreachable
// Texts edited from the admin panel are stored in the database and
// override the values below — this file only holds the defaults.
// ============================================================

const I18N = {
 "ar": {
  "site_name": "الأرشيفات الفرنسية لقبيلة الأنصار في السودان الفرنسي",
  "site_tagline": "المنصة التاريخية للتوثيق والبحث",
  "nav_home": "الرئيسية",
  "nav_archive": "الأرشيف والوثائق",
  "nav_timeline": "التسلسل الزمني",
  "nav_figures": "الشخصيات التاريخية",
  "hero_badge": "أكبر قاعدة بيانات أرشيفية وثائقية",
  "hero_title": "اكتشف التاريخ من خلال الوثائق والمراسلات الأصلية",
  "hero_desc": "منصة تفاعلية مخصصة لـ\"{name}\" توفر إمكانية الوصول إلى آلاف المخطوطات والقرارات التاريخية والتسلسلات الزمنية مع إمكانية البحث المتقدم.",
  "hero_btn_browse": "تصفح الأرشيف الكامل",
  "hero_btn_timeline": "استكشف الخط الزمني",
  "stat_docs": "وثيقة ومخطوطة",
  "stat_figures": "شخصية بارزة",
  "stat_eras": "حقبة زمنية",
  "stat_digit": "رقمنة عالية الدقة",
  "feat_title": "أبرز الأقسام الأرشيفية",
  "feat_sub": "تصفح الأرشيف حسب التصنيفات الرئيسية",
  "feat_corr": "المراسلات الرسمية",
  "feat_corr_d": "خطابات، برقيات، ورسائل دبلوماسية تاريخية بين الأطراف المعنية.",
  "feat_dec": "القرارات والمعاهدات",
  "feat_dec_d": "اتفاقيات رسمية وبنود ومستندات الإعلان والاتفاق التاريخي.",
  "photo_archive": "الأرشيف المصور",
  "feat_photo_d": "لقطات نادرة ومستندات مصورة بدقة عالية مع الشروح التاريخية.",
  "archive_sub": "ابحث وتصفح الوثائق التاريخية الرقمية بسهولة",
  "search_ph": "ابحث في عنوان أو رقم الوثيقة...",
  "filter_all": "الكل",
  "filter_corr": "المراسلات",
  "filter_dec": "القرارات",
  "filter_memo": "المذكرات والتقارير",
  "tl_title": "التسلسل الزمني للأحداث",
  "tl_sub": "محطات تاريخية رئيسية موثقة بالتواريخ والوثائق الملحقة",
  "tl_view": "عرض الوثيقة المرفقة",
  "fig_sub": "سير ذاتية ومستندات متعلقة بأبرز الشخصيات المؤثرة",
  "p_btn": "عرض السيرة والوثائق المرتبطة",
  "verif_pending": "قيد المراجعة",
  "verif_ok": "موثق ومعتمد",
  "verif_unsure": "غير مؤكد",
  "tab_source": "المصدر الأصلي",
  "tab_transcription": "التفريغ النصي",
  "tab_translation": "الترجمة",
  "tab_notes": "الهوامش والتحقيق",
  "tab_research": "الدراسة والتحليل",
  "modal_date_lbl": "تاريخ الوثيقة:",
  "modal_code_lbl": "الرقم الأرشيفي:",
  "modal_details": "تفاصيل ومحتوى المستند:",
  "modal_copy": "نسخ الرقم المرجعي",
  "modal_dl": "تحميل الوثيقة بدقة HD",
  "no_transcription": "لم تتم إضافة التفريغ النصي لهذه الوثيقة بعد.",
  "no_translation": "لم تتم إضافة الترجمة العربية لهذه الوثيقة بعد.",
  "no_notes": "لا توجد هوامش تحقيق مضافة بعد.",
  "no_research": "لا توجد دراسة تحليلية مضافة بعد.",
  "no_results": "لم يتم العثور على وثائق تطابق خيارات البحث",
  "view_doc": "استعراض الوثيقة",
  "cat_مراسلات": "مراسلات",
  "cat_قرارات": "قرارات",
  "cat_صور": "صور",
  "cat_مذكرات": "مذكرات",
  "toast_profile": "تم تحميل ملف الشخصية",
  "toast_pdf": "جاري فتح ملف PDF عالي الدقة...",
  "toast_copied": "تم نسخ الرقم المرجعي للوثيقة إلى الحافظة",
  "toast_ref": "الرقم المرجعي: ",
  "toast_dark": "تم تفعيل الوضع الليلي",
  "toast_light": "تم تفعيل الوضع النهارى",
  "toast_privacy": "سياسة الخصوصية",
  "toast_terms": "الشروط والأحكام",
  "toast_lang": "تم تغيير اللغة إلى العربية",
  "footer_usage": "سياسة الاستخدام",
  "footer_standards": "معايير التوثيق",
  "footer_copy": "جميع الحقوق محفوظة © 2026 منصة الأرشيف التاريخي - {name}.",
  "page_title": "منصة الأرشيف التاريخي - {name}",
  "aria_theme": "تغيير المظهر",
  "aria_lang": "اللغة",
  "aria_menu": "القائمة",
  "alt_figure": "شخصية تاريخية",
  "alt_preview": "معاينة الوثيقة",
  "stat_docs_n": "1,420+",
  "stat_figures_n": "85",
  "stat_eras_n": "12",
  "stat_digit_n": "100%",
  "tl_empty": "لا توجد أحداث منشورة بعد.",
  "fig_empty": "لا توجد شخصيات منشورة بعد.",
  "fig_bio": "السيرة الذاتية",
  "fig_related": "الوثائق المرتبطة",
  "fig_no_related": "لا توجد وثائق مرتبطة بهذه الشخصية بعد.",
  "aria_close": "إغلاق",
  "lang_ar_name": "العربية",
  "lang_en_name": "الإنجليزية"
 },
 "en": {
  "site_name": "French Archives of the Ansar Tribe in French Sudan",
  "site_tagline": "The historical platform for documentation and research",
  "nav_home": "Home",
  "nav_archive": "Archive & documents",
  "nav_timeline": "Timeline",
  "nav_figures": "Historical figures",
  "hero_badge": "The largest documentary archive database",
  "hero_title": "Discover history through original documents and correspondence",
  "hero_desc": "An interactive platform dedicated to “{name}”, giving access to thousands of manuscripts, historical decisions and chronologies, with advanced search.",
  "hero_btn_browse": "Browse the full archive",
  "hero_btn_timeline": "Explore the timeline",
  "stat_docs": "Documents & manuscripts",
  "stat_figures": "Notable figures",
  "stat_eras": "Historical periods",
  "stat_digit": "High-resolution digitisation",
  "feat_title": "Featured archive sections",
  "feat_sub": "Browse the archive by main category",
  "feat_corr": "Official correspondence",
  "feat_corr_d": "Historic letters, telegrams and diplomatic messages between the parties concerned.",
  "feat_dec": "Decisions & treaties",
  "feat_dec_d": "Official agreements, clauses and the documents of historic declarations and accords.",
  "photo_archive": "Photographic archive",
  "feat_photo_d": "Rare shots and high-resolution photographed documents with historical commentary.",
  "archive_sub": "Search and browse the digital historical documents with ease",
  "search_ph": "Search by document title or number...",
  "filter_all": "All",
  "filter_corr": "Correspondence",
  "filter_dec": "Decisions",
  "filter_memo": "Memoranda & reports",
  "tl_title": "Timeline of events",
  "tl_sub": "Key historical milestones documented with dates and attached records",
  "tl_view": "View attached document",
  "fig_sub": "Biographies and documents about the most influential figures",
  "p_btn": "View biography & related documents",
  "verif_pending": "Under review",
  "verif_ok": "Verified & approved",
  "verif_unsure": "Unconfirmed",
  "tab_source": "Original source",
  "tab_transcription": "Transcription",
  "tab_translation": "Translation",
  "tab_notes": "Footnotes & critical notes",
  "tab_research": "Study & analysis",
  "modal_date_lbl": "Document date:",
  "modal_code_lbl": "Archive number:",
  "modal_details": "Document details and content:",
  "modal_copy": "Copy reference number",
  "modal_dl": "Download document in HD",
  "no_transcription": "No transcription has been added for this document yet.",
  "no_translation": "No translation has been added for this document yet.",
  "no_notes": "No critical notes have been added yet.",
  "no_research": "No analytical study has been added yet.",
  "no_results": "No documents match your search",
  "view_doc": "View document",
  "cat_مراسلات": "Correspondence",
  "cat_قرارات": "Decisions",
  "cat_صور": "Photographs",
  "cat_مذكرات": "Memoranda",
  "toast_profile": "Profile loaded",
  "toast_pdf": "Opening the high-resolution PDF...",
  "toast_copied": "Reference number copied to the clipboard",
  "toast_ref": "Reference number: ",
  "toast_dark": "Dark mode enabled",
  "toast_light": "Light mode enabled",
  "toast_privacy": "Privacy policy",
  "toast_terms": "Terms and conditions",
  "toast_lang": "Language changed to English",
  "footer_usage": "Usage policy",
  "footer_standards": "Documentation standards",
  "footer_copy": "© 2026 Historical Archive Platform – {name}. All rights reserved.",
  "page_title": "Historical Archive Platform - {name}",
  "aria_theme": "Toggle theme",
  "aria_lang": "Language",
  "aria_menu": "Menu",
  "alt_figure": "Historical figure",
  "alt_preview": "Document preview",
  "stat_docs_n": "1,420+",
  "stat_figures_n": "85",
  "stat_eras_n": "12",
  "stat_digit_n": "100%",
  "tl_empty": "No events have been published yet.",
  "fig_empty": "No figures have been published yet.",
  "fig_bio": "Biography",
  "fig_related": "Related documents",
  "fig_no_related": "No documents are linked to this figure yet.",
  "aria_close": "Close",
  "lang_ar_name": "Arabic",
  "lang_en_name": "English"
 },
 "fr": {
  "site_name": "Archives françaises de la tribu des Ansar au Soudan français",
  "site_tagline": "La plateforme historique de documentation et de recherche",
  "nav_home": "Accueil",
  "nav_archive": "Archives et documents",
  "nav_timeline": "Chronologie",
  "nav_figures": "Personnalités historiques",
  "hero_badge": "La plus grande base de données d'archives documentaires",
  "hero_title": "Découvrez l'histoire à travers les documents et la correspondance d'origine",
  "hero_desc": "Une plateforme interactive consacrée aux « {name} », donnant accès à des milliers de manuscrits, de décisions historiques et de chronologies, avec une recherche avancée.",
  "hero_btn_browse": "Parcourir l'ensemble des archives",
  "hero_btn_timeline": "Explorer la chronologie",
  "stat_docs": "Documents et manuscrits",
  "stat_figures": "Personnalités marquantes",
  "stat_eras": "Périodes historiques",
  "stat_digit": "Numérisation haute définition",
  "feat_title": "Sections d'archives à la une",
  "feat_sub": "Parcourez les archives par grande catégorie",
  "feat_corr": "Correspondance officielle",
  "feat_corr_d": "Lettres, télégrammes et messages diplomatiques historiques entre les parties concernées.",
  "feat_dec": "Décisions et traités",
  "feat_dec_d": "Accords officiels, clauses et documents de déclarations et d'accords historiques.",
  "photo_archive": "Archives photographiques",
  "feat_photo_d": "Clichés rares et documents photographiés en haute définition, accompagnés de commentaires historiques.",
  "archive_sub": "Recherchez et parcourez facilement les documents historiques numérisés",
  "search_ph": "Rechercher par titre ou numéro de document...",
  "filter_all": "Tout",
  "filter_corr": "Correspondance",
  "filter_dec": "Décisions",
  "filter_memo": "Mémorandums et rapports",
  "tl_title": "Chronologie des événements",
  "tl_sub": "Grandes étapes historiques documentées par des dates et des pièces jointes",
  "tl_view": "Voir le document joint",
  "fig_sub": "Biographies et documents sur les personnalités les plus influentes",
  "p_btn": "Voir la biographie et les documents associés",
  "verif_pending": "En cours de révision",
  "verif_ok": "Vérifié et approuvé",
  "verif_unsure": "Non confirmé",
  "tab_source": "Source originale",
  "tab_transcription": "Transcription",
  "tab_translation": "Traduction",
  "tab_notes": "Notes et apparat critique",
  "tab_research": "Étude et analyse",
  "modal_date_lbl": "Date du document :",
  "modal_code_lbl": "Numéro d'archive :",
  "modal_details": "Détails et contenu du document :",
  "modal_copy": "Copier le numéro de référence",
  "modal_dl": "Télécharger le document en HD",
  "no_transcription": "Aucune transcription n'a encore été ajoutée pour ce document.",
  "no_translation": "Aucune traduction n'a encore été ajoutée pour ce document.",
  "no_notes": "Aucune note critique n'a encore été ajoutée.",
  "no_research": "Aucune étude analytique n'a encore été ajoutée.",
  "no_results": "Aucun document ne correspond à votre recherche",
  "view_doc": "Consulter le document",
  "cat_مراسلات": "Correspondance",
  "cat_قرارات": "Décisions",
  "cat_صور": "Photographies",
  "cat_مذكرات": "Mémorandums",
  "toast_profile": "Profil chargé",
  "toast_pdf": "Ouverture du PDF haute définition...",
  "toast_copied": "Numéro de référence copié dans le presse-papiers",
  "toast_ref": "Numéro de référence : ",
  "toast_dark": "Mode sombre activé",
  "toast_light": "Mode clair activé",
  "toast_privacy": "Politique de confidentialité",
  "toast_terms": "Conditions générales",
  "toast_lang": "Langue changée en français",
  "footer_usage": "Politique d'utilisation",
  "footer_standards": "Normes de documentation",
  "footer_copy": "© 2026 Plateforme d'archives historiques – {name}. Tous droits réservés.",
  "page_title": "Plateforme d'archives historiques - {name}",
  "aria_theme": "Changer le thème",
  "aria_lang": "Langue",
  "aria_menu": "Menu",
  "alt_figure": "Personnalité historique",
  "alt_preview": "Aperçu du document",
  "stat_docs_n": "1,420+",
  "stat_figures_n": "85",
  "stat_eras_n": "12",
  "stat_digit_n": "100%",
  "tl_empty": "Aucun événement n'a encore été publié.",
  "fig_empty": "Aucune personnalité n'a encore été publiée.",
  "fig_bio": "Biographie",
  "fig_related": "Documents associés",
  "fig_no_related": "Aucun document n'est encore associé à cette personnalité.",
  "aria_close": "Fermer",
  "lang_ar_name": "Arabe",
  "lang_en_name": "Anglais"
 }
};

// Pristine copy — lets the site restore a default when an override is removed.
const I18N_DEFAULTS = JSON.parse(JSON.stringify(I18N));

const TEXT_GROUPS = [
 {
  "title": "الترويسة والقائمة",
  "keys": [
   "site_name",
   "site_tagline",
   "nav_home",
   "nav_archive",
   "nav_timeline",
   "nav_figures",
   "page_title"
  ]
 },
 {
  "title": "البانر الرئيسي",
  "keys": [
   "hero_badge",
   "hero_title",
   "hero_desc",
   "hero_btn_browse",
   "hero_btn_timeline"
  ]
 },
 {
  "title": "الإحصائيات",
  "keys": [
   "stat_docs_n",
   "stat_docs",
   "stat_figures_n",
   "stat_figures",
   "stat_eras_n",
   "stat_eras",
   "stat_digit_n",
   "stat_digit"
  ]
 },
 {
  "title": "الأقسام المميزة (الصفحة الرئيسية)",
  "keys": [
   "feat_title",
   "feat_sub",
   "feat_corr",
   "feat_corr_d",
   "feat_dec",
   "feat_dec_d",
   "photo_archive",
   "feat_photo_d"
  ]
 },
 {
  "title": "صفحة الأرشيف والوثائق",
  "keys": [
   "archive_sub",
   "search_ph",
   "filter_all",
   "filter_corr",
   "filter_dec",
   "filter_memo",
   "view_doc",
   "no_results"
  ]
 },
 {
  "title": "صفحة التسلسل الزمني",
  "keys": [
   "tl_title",
   "tl_sub",
   "tl_view",
   "tl_empty"
  ]
 },
 {
  "title": "صفحة الشخصيات التاريخية",
  "keys": [
   "fig_sub",
   "p_btn",
   "fig_bio",
   "fig_related",
   "fig_no_related",
   "fig_empty"
  ]
 },
 {
  "title": "نافذة الوثيقة",
  "keys": [
   "tab_source",
   "tab_transcription",
   "tab_translation",
   "tab_notes",
   "tab_research",
   "modal_date_lbl",
   "modal_code_lbl",
   "modal_details",
   "modal_copy",
   "modal_dl",
   "no_transcription",
   "no_translation",
   "no_notes",
   "no_research",
   "verif_pending",
   "verif_ok",
   "verif_unsure",
   "lang_ar_name",
   "lang_en_name"
  ]
 },
 {
  "title": "أسماء التصنيفات",
  "keys": [
   "cat_مراسلات",
   "cat_قرارات",
   "cat_صور",
   "cat_مذكرات"
  ]
 },
 {
  "title": "رسائل الإشعارات",
  "keys": [
   "toast_profile",
   "toast_pdf",
   "toast_copied",
   "toast_ref",
   "toast_dark",
   "toast_light",
   "toast_privacy",
   "toast_terms",
   "toast_lang"
  ]
 },
 {
  "title": "التذييل",
  "keys": [
   "footer_copy",
   "footer_usage",
   "footer_standards"
  ]
 },
 {
  "title": "نصوص إمكانية الوصول",
  "keys": [
   "aria_theme",
   "aria_lang",
   "aria_menu",
   "aria_close",
   "alt_figure",
   "alt_preview"
  ]
 }
];

const TEXT_LABELS = {
 "site_name": "اسم الموقع",
 "site_tagline": "السطر التعريفي تحت الاسم",
 "nav_home": "قائمة: الرئيسية",
 "nav_archive": "قائمة: الأرشيف والوثائق (وعنوان صفحته)",
 "nav_timeline": "قائمة: التسلسل الزمني",
 "nav_figures": "قائمة: الشخصيات التاريخية (وعنوان صفحتها)",
 "page_title": "عنوان تبويب المتصفح",
 "hero_badge": "شارة أعلى العنوان",
 "hero_title": "العنوان الكبير",
 "hero_desc": "الفقرة التعريفية",
 "hero_btn_browse": "الزر الأول",
 "hero_btn_timeline": "الزر الثاني",
 "stat_docs_n": "رقم: الوثائق",
 "stat_docs": "وصف: الوثائق",
 "stat_figures_n": "رقم: الشخصيات",
 "stat_figures": "وصف: الشخصيات",
 "stat_eras_n": "رقم: الحقب",
 "stat_eras": "وصف: الحقب",
 "stat_digit_n": "رقم: الرقمنة",
 "stat_digit": "وصف: الرقمنة",
 "feat_title": "عنوان القسم",
 "feat_sub": "الوصف تحت العنوان",
 "feat_corr": "بطاقة 1: العنوان",
 "feat_corr_d": "بطاقة 1: الوصف",
 "feat_dec": "بطاقة 2: العنوان",
 "feat_dec_d": "بطاقة 2: الوصف",
 "photo_archive": "بطاقة 3: العنوان (وزر الفلتر)",
 "feat_photo_d": "بطاقة 3: الوصف",
 "archive_sub": "وصف الصفحة",
 "search_ph": "نص خانة البحث",
 "filter_all": "فلتر: الكل",
 "filter_corr": "فلتر: المراسلات",
 "filter_dec": "فلتر: القرارات",
 "filter_memo": "فلتر: المذكرات",
 "view_doc": "زر بطاقة الوثيقة",
 "no_results": "رسالة: لا نتائج",
 "tl_title": "عنوان الصفحة",
 "tl_sub": "الوصف تحت العنوان",
 "tl_view": "زر عرض الوثيقة",
 "tl_empty": "رسالة: لا أحداث",
 "fig_sub": "وصف الصفحة",
 "p_btn": "زر بطاقة الشخصية",
 "fig_bio": "عنوان: السيرة",
 "fig_related": "عنوان: الوثائق المرتبطة",
 "fig_no_related": "رسالة: لا وثائق مرتبطة",
 "fig_empty": "رسالة: لا شخصيات",
 "tab_source": "تبويب: المصدر الأصلي",
 "tab_transcription": "تبويب: التفريغ النصي",
 "tab_translation": "تبويب: الترجمة",
 "tab_notes": "تبويب: الهوامش",
 "tab_research": "تبويب: الدراسة",
 "modal_date_lbl": "عنوان: تاريخ الوثيقة",
 "modal_code_lbl": "عنوان: الرقم الأرشيفي",
 "modal_details": "عنوان: تفاصيل المستند",
 "modal_copy": "زر: نسخ الرقم",
 "modal_dl": "زر: تحميل الوثيقة",
 "no_transcription": "رسالة: لا تفريغ",
 "no_translation": "رسالة: لا ترجمة",
 "no_notes": "رسالة: لا هوامش",
 "no_research": "رسالة: لا دراسة",
 "verif_pending": "حالة: قيد المراجعة",
 "verif_ok": "حالة: موثق ومعتمد",
 "verif_unsure": "حالة: غير مؤكد",
 "lang_ar_name": "اسم اللغة العربية (في الترجمة)",
 "lang_en_name": "اسم اللغة الإنجليزية (في الترجمة)",
 "cat_مراسلات": "تصنيف: مراسلات",
 "cat_قرارات": "تصنيف: قرارات",
 "cat_صور": "تصنيف: صور",
 "cat_مذكرات": "تصنيف: مذكرات",
 "toast_profile": "إشعار: تحميل الشخصية",
 "toast_pdf": "إشعار: فتح PDF",
 "toast_copied": "إشعار: تم النسخ",
 "toast_ref": "إشعار: الرقم المرجعي",
 "toast_dark": "إشعار: الوضع الليلي",
 "toast_light": "إشعار: الوضع النهاري",
 "toast_privacy": "إشعار: سياسة الخصوصية",
 "toast_terms": "إشعار: الشروط والأحكام",
 "toast_lang": "إشعار: تغيير اللغة",
 "footer_copy": "نص الحقوق",
 "footer_usage": "رابط: سياسة الاستخدام",
 "footer_standards": "رابط: معايير التوثيق",
 "aria_theme": "وصف زر المظهر",
 "aria_lang": "وصف زر اللغة",
 "aria_menu": "وصف زر القائمة",
 "aria_close": "وصف زر الإغلاق",
 "alt_figure": "وصف صور الشخصيات",
 "alt_preview": "وصف صورة الوثيقة"
};

const FALLBACK_TIMELINE = [
 {
  "id": "tl-1",
  "date": {
   "ar": "15 مايو 1956",
   "en": "15 May 1956",
   "fr": "15 mai 1956"
  },
  "title": {
   "ar": "تأسيس هيئة التنسيق والاتصال الأرشيفي",
   "en": "Founding of the Archival Coordination and Liaison Body",
   "fr": "Création de l'organe de coordination et de liaison archivistique"
  },
  "desc": {
   "ar": "صدر القرار التأسيسي لتجميع المراسلات والتقارير الميدانية وتوثيقها بشكل رسمي لحفظ الأرشيف التاريخي.",
   "en": "The founding decision was issued to gather correspondence and field reports and document them officially in order to preserve the historical archive.",
   "fr": "La décision fondatrice a été prise afin de rassembler la correspondance et les rapports de terrain et de les documenter officiellement pour préserver les archives historiques."
  },
  "docId": "doc-1"
 },
 {
  "id": "tl-2",
  "date": {
   "ar": "10 سبتمبر 1958",
   "en": "10 September 1958",
   "fr": "10 septembre 1958"
  },
  "title": {
   "ar": "اتفاقية التبادل الوثائقي والدبلوماسي",
   "en": "Documentary and Diplomatic Exchange Agreement",
   "fr": "Accord d'échange documentaire et diplomatique"
  },
  "desc": {
   "ar": "مذكرة تفاهم حول تنظيم تداول الوثائق السرية والرسائل الخاصة المتبادلة بين الوفود.",
   "en": "A memorandum of understanding on regulating the circulation of confidential documents and private messages exchanged between delegations.",
   "fr": "Protocole d'accord réglementant la circulation des documents confidentiels et des messages privés échangés entre les délégations."
  },
  "docId": "doc-2"
 },
 {
  "id": "tl-3",
  "date": {
   "ar": "22 مارس 1962",
   "en": "22 March 1962",
   "fr": "22 mars 1962"
  },
  "title": {
   "ar": "اعتماد الأرشيف النهائي وتوثيقه رقمياً",
   "en": "Adoption of the final archive and its digital documentation",
   "fr": "Adoption des archives définitives et de leur documentation numérique"
  },
  "desc": {
   "ar": "إنهاء جمع كافة التقارير الرسمية وإيداع نسخة منها في السجلات الوطنية الأرشيفية.",
   "en": "Completion of the collection of all official reports and deposit of a copy in the national archival registers.",
   "fr": "Achèvement de la collecte de tous les rapports officiels et dépôt d'une copie dans les registres nationaux d'archives."
  },
  "docId": "doc-3"
 }
];

const FALLBACK_FIGURES = [
 {
  "id": "fig-1",
  "name": {
   "ar": "سليمان الأرشيڤي",
   "en": "Suleiman Al-Archivi",
   "fr": "Souleiman Al-Archivi"
  },
  "role": {
   "ar": "مؤرخ رئيسي ورئيس اللجنة",
   "en": "Lead historian and committee chair",
   "fr": "Historien principal et président du comité"
  },
  "desc": {
   "ar": "أشرف على جمع وتوثيق أكثر من 500 مراسلة تاريخية صادرة في الفترة ما بين 1955 و1962.",
   "en": "Oversaw the collection and documentation of more than 500 historical letters issued between 1955 and 1962.",
   "fr": "A supervisé la collecte et la documentation de plus de 500 correspondances historiques émises entre 1955 et 1962."
  },
  "bio": {
   "ar": "أشرف على جمع وتوثيق أكثر من 500 مراسلة تاريخية صادرة في الفترة ما بين 1955 و1962.",
   "en": "Oversaw the collection and documentation of more than 500 historical letters issued between 1955 and 1962.",
   "fr": "A supervisé la collecte et la documentation de plus de 500 correspondances historiques émises entre 1955 et 1962."
  },
  "image": "https://placehold.co/200x200/8c5e38/ffffff?text=شخصية+1",
  "docIds": [
   "doc-1",
   "doc-4"
  ]
 },
 {
  "id": "fig-2",
  "name": {
   "ar": "د. أمين الدبلوماسي",
   "en": "Dr. Amin Al-Diplomasi",
   "fr": "Dr Amine Al-Diplomasi"
  },
  "role": {
   "ar": "مستشار العلاقات والتصاوير",
   "en": "Adviser on relations and photographic records",
   "fr": "Conseiller pour les relations et les archives photographiques"
  },
  "desc": {
   "ar": "قاد المفاوضات التوثيقية وحافظ على الأرشيف المصور للقرارات والمعاهدات الثنائية.",
   "en": "Led the documentation negotiations and safeguarded the photographic archive of decisions and bilateral treaties.",
   "fr": "A mené les négociations documentaires et préservé les archives photographiques des décisions et des traités bilatéraux."
  },
  "bio": {
   "ar": "قاد المفاوضات التوثيقية وحافظ على الأرشيف المصور للقرارات والمعاهدات الثنائية.",
   "en": "Led the documentation negotiations and safeguarded the photographic archive of decisions and bilateral treaties.",
   "fr": "A mené les négociations documentaires et préservé les archives photographiques des décisions et des traités bilatéraux."
  },
  "image": "https://placehold.co/200x200/734d33/ffffff?text=شخصية+2",
  "docIds": [
   "doc-2",
   "doc-3",
   "doc-6"
  ]
 },
 {
  "id": "fig-3",
  "name": {
   "ar": "فاطمة التوثيقية",
   "en": "Fatima Al-Tawthiqiya",
   "fr": "Fatima Al-Tawthiqiya"
  },
  "role": {
   "ar": "أخصائية ترميم المخطوطات",
   "en": "Manuscript restoration specialist",
   "fr": "Spécialiste de la restauration des manuscrits"
  },
  "desc": {
   "ar": "شغلت منصب مسؤولة التدقيق والترميم الكيميائي للرسائل الورقية القديمة في الأرشيف.",
   "en": "Served as head of verification and chemical restoration of the archive's old paper letters.",
   "fr": "A occupé le poste de responsable de la vérification et de la restauration chimique des anciennes lettres sur papier des archives."
  },
  "bio": {
   "ar": "شغلت منصب مسؤولة التدقيق والترميم الكيميائي للرسائل الورقية القديمة في الأرشيف.",
   "en": "Served as head of verification and chemical restoration of the archive's old paper letters.",
   "fr": "A occupé le poste de responsable de la vérification et de la restauration chimique des anciennes lettres sur papier des archives."
  },
  "image": "https://placehold.co/200x200/5f402d/ffffff?text=شخصية+3",
  "docIds": [
   "doc-4"
  ]
 }
];
