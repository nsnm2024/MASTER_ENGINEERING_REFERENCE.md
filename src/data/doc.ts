export const DOC_META = {
  file: "MASTER_ENGINEERING_REFERENCE.md",
  version: "1.0.0",
  scope: "مرجع تقني شامل لجميع مراحل دورة حياة تطوير البرمجيات (SDLC)",
  status: "وثيقة حيّة — Living Document",
  edition: "النسخة التفاعلية",
};

export const DEV_INFO = [
  { label: "المطوِّر", value: "عامر عمر الأطرش", mono: false },
  { label: "الأداة التقنية", value: "الذكاء الاصطناعي Z AI GLM", mono: false },
  { label: "الهاتف", value: "+962 778 456 655", mono: true },
  { label: "البريد الإلكتروني", value: "amomabat2022@gmail.com", mono: true },
];

export const NAV = [
  { id: "cover", num: "00", title: "الغلاف والترويسة" },
  { id: "s1", num: "01", title: "الملخص التنفيذي ونطاق العمل" },
  { id: "s2", num: "02", title: "البنية التحتية السحابية" },
  { id: "s3", num: "03", title: "هندسة الكود و OOP" },
  { id: "s4", num: "04", title: "التصميم المظهري وتجربة المستخدم" },
  { id: "s5", num: "05", title: "الذكاء الاصطناعي والاتجاهات الحديثة" },
  { id: "s6", num: "06", title: "أدلة التشغيل والمصفوفات" },
  { id: "s7", num: "07", title: "برومبت التدقيق الشامل" },
  { id: "s8", num: "08", title: "طريقة الاستخدام العملي" },
  { id: "s9", num: "09", title: "الإضافات العشر المقترحة" },
  { id: "s10", num: "10", title: "إضافات المُراجِع — جديد", isNew: true },
];

export const TICKER_TERMS = [
  "High Availability 99.99%", "Kubernetes HPA", "Circuit Breakers", "SOLID Principles",
  "Hexagonal Architecture", "Redis Caching", "GitOps · ArgoCD", "AIOps Anomaly Detection",
  "OWASP Top 10", "OpenTelemetry", "Core Web Vitals", "Chaos Engineering",
  "Zero Trust", "SLO / Error Budgets", "Schema Registry", "Feature Flags",
  "FinOps", "Blameless Postmortems", "SBOM · Cosign", "Green Computing",
];

export const SDD_TEMPLATE = `# وثيقة تصميم مختصرة (SDD) — قالب البداية
اسم المشروع       : [اسم المشروع]
الحزمة التقنية    : [React/Next.js · Node.js/NestJS · PostgreSQL · Kubernetes]

المتطلبات الوظيفية (FR):
  - ماذا يفعل النظام؟ (تسجيل دخول، معالجة مدفوعات، ...)

المتطلبات غير الوظيفية (NFR):
  - الأداء         : زمن استجابة API أقل من 200ms
  - التوافر        : نسبة تشغيل 99.99% (Uptime)
  - قابلية التوسع  : دعم 10,000 مستخدم متزامن

نمط المعمارية     : [ميكروسيرفس | مونوليث معياري | Event-Driven Architecture]`;

export const NFR_CARDS = [
  { label: "الأداء", en: "PERFORMANCE", value: "200ms>", desc: "زمن استجابة API أقصى" },
  { label: "التوافر", en: "UPTIME", value: "99.99%", desc: "نسبة تشغيل مضمونة" },
  { label: "التوسع", en: "SCALE", value: "10K", desc: "مستخدم متزامن مدعوم" },
];

export const INFRA_LAYERS = [
  {
    step: "L1", icon: "globe", title: "طبقة DNS وتوجيه المرور",
    desc: "Cloudflare أو AWS Route 53 لتوجيه المرور جغرافياً (Geo-routing) وامتصاص هجمات الحجب عند الحافة.",
    stat: "Edge", tools: ["Cloudflare", "Route 53"],
  },
  {
    step: "L2", icon: "scale", title: "موازنة الأحمال",
    desc: "توزيع الـ Traffic على خوادم في مناطق متعددة (Multi-AZ) لمنع نقطة الفشل الواحدة (SPOF).",
    stat: "Multi-AZ", tools: ["NGINX", "ALB"],
  },
  {
    step: "L3", icon: "cpu", title: "التوسع التلقائي",
    desc: "Kubernetes (HPA) يزيد الـ Pods تلقائياً عند ارتفاع الضغط ويعيدها للانكماش عند انخفاضه.",
    stat: "HPA", tools: ["Kubernetes", "Karpenter"],
  },
  {
    step: "L4", icon: "bolt", title: "طبقة التخزين المؤقت",
    desc: "Redis للبيانات المؤقتة الساخنة — يخفّض الضغط على قاعدة البيانات بنسبة تصل إلى 70%.",
    stat: "-70% حمل", tools: ["Redis", "Memcached"],
  },
  {
    step: "L5", icon: "breaker", title: "قواطع الدائرة",
    desc: "عزل الخدمات الخارجية المتعثرة لمنع التأثير التسلسلي (Cascading Failures) عن بقية النظام.",
    stat: "Fail-Safe", tools: ["Resilience4j", "Hystrix"],
  },
  {
    step: "L6", icon: "lifebuoy", title: "التعافي من الكوارث",
    desc: "نسخ احتياطي يومي (RPO) مع قدرة استعادة كاملة خلال ساعة واحدة (RTO) مُختبَرة دورياً.",
    stat: "RTO < 1h", tools: ["Velero", "pgBackRest"],
  },
];

export const OOP_TABS = [
  {
    id: "pillars", label: "أعمدة OOP الأربعة", en: "FOUR PILLARS",
    items: [
      { t: "التغليف", en: "Encapsulation", d: "إخفاء الخصائص (Private) واستخدام Getters/Setters مع منطق تحقق داخلي." },
      { t: "التجريد", en: "Abstraction", d: "استخدام Interfaces لإخفاء التعقيد وإظهار الوظائف الأساسية فقط." },
      { t: "الوراثة", en: "Inheritance", d: "تُستخدم لعلاقة (IS-A) مع تجنّب الوراثة العميقة المعقّدة." },
      { t: "تعدد الأشكال", en: "Polymorphism", d: "استبدال جمل الشرط الضخمة (Switch) بسلوكيات ديناميكية عبر الواجهات." },
    ],
  },
  {
    id: "solid", label: "مبادئ SOLID", en: "SOLID PRINCIPLES",
    items: [
      { t: "S — المسؤولية الواحدة", en: "Single Responsibility", d: "كل كلاس له سبب واحد فقط للتغيير." },
      { t: "O — الانفتاح للإغلاق", en: "Open/Closed", d: "التوسّع دون تعديل الكود القديم (عبر الواجهات)." },
      { t: "L — استبدال ليسكوف", en: "Liskov Substitution", d: "القدرة على استبدال الكلاس الأب بالابن دون كسر النظام." },
      { t: "I — فصل الواجهات", en: "Interface Segregation", d: "واجهات صغيرة ومخصّصة بدلاً من واجهات عملاقة." },
      { t: "D — عكس التبعية", en: "Dependency Inversion", d: "الاعتماد على التجريدات مع حقن التبعيات (DI)." },
    ],
  },
  {
    id: "hex", label: "العمارة السداسية", en: "HEXAGONAL / CLEAN",
    items: [
      { t: "فصل النواة", en: "Core Domain", d: "منطق العمل يعيش في المركز، مستقلاً تماماً عن أي إطار عمل." },
      { t: "المنافذ والمحوّلات", en: "Ports & Adapters", d: "DB وUI وFrameworks تتصل بالنواة عبر محوّلات قابلة للاستبدال." },
      { t: "قابلية الاختبار", en: "100% Testable", d: "اختبار منطق العمل دون قاعدة بيانات أو شبكة — بسرعة الضوء." },
    ],
  },
];

export const DESIGN_CHECKS = [
  {
    cat: "البصريات", en: "VISUALS", icon: "eye",
    items: ["تباين ألوان متوافق مع WCAG", "نظام طباعة هرمي (H1, H2)", "شبكة محاذاة (Grid) متناسقة"],
  },
  {
    cat: "التفاعلات", en: "INTERACTIONS", icon: "cursor",
    items: ["تصميم جميع الحالات: Hover, Focus, Disabled, Skeletons", "Micro-interactions لتعزيز ملاحظات المستخدم"],
  },
  {
    cat: "إمكانية الوصول", en: "A11Y", icon: "keyboard",
    items: ["التنقل الكامل بلوحة المفاتيح", "نصوص بديلة (Alt text) للصور"],
  },
  {
    cat: "البرمجة الأمامية", en: "FRONTEND CODE", icon: "component",
    items: ["مكونات (Components) قابلة لإعادة الاستخدام", "منهجية تسمية واضحة (BEM)", "أصول بصيغ حديثة (WebP, SVG)"],
  },
];

export const AI_TRENDS = [
  { icon: "robot", t: "التطوير المعزز بالذكاء الاصطناعي", en: "AI-AUGMENTED DEV", d: "GitHub Copilot و AI Code Reviewers مثل CodeRabbit لفحص الكود قبل الـ Merge.", tools: ["Copilot", "CodeRabbit"] },
  { icon: "git", t: "GitOps للنشر الآلي", en: "GITOPS", d: "ArgoCD يجعل حالة الـ Git مصدر الحقيقة الوحيد لبنية Kubernetes — النشر تلقائي بمجرد دفع الكود.", tools: ["ArgoCD", "Flux"] },
  { icon: "radar", t: "مراقبة AIOps", en: "AIOPS", d: "Datadog Watchdog يكشف الشذوذ في الخوادم (Anomaly Detection) قبل أن يلاحظ المستخدمون.", tools: ["Datadog", "Watchdog"] },
  { icon: "leaf", t: "التكنولوجيا الخضراء", en: "GREEN COMPUTING", d: "خوارزميات تستهلك طاقة أقل وتقليل البصمة الكربونية عبر تحسين استهلاك الـ CPU.", tools: ["KEDA", "Spot"] },
];

export const REVIEW_MATRIX: Record<string, string[]> = {
  "البنية التحتية والموثوقية": [
    "تطبيق التوسع التلقائي (Auto-scaling) وعدم وجود نقطة فشل واحدة (SPOF)",
    "تطبيق قواطع الدائرة (Circuit Breakers) لمنع الانهيار المتسلسل",
    "وجود خطة استعادة كوارث (DRP) ونسخ احتياطي دوري",
  ],
  "هندسة الكود و OOP": [
    "تطبيق مبادئ SOLID بشكل صارم وخلوّ النظام من God Classes",
    "استخدام حقن التبعيات (Dependency Injection) بشكل سليم",
    "فصل منطق العمل عن طبقة قاعدة البيانات (Hexagonal/Clean Arch)",
  ],
  "التصميم وتجربة المستخدم": [
    "تصميم جميع حالات العناصر (Hover, Loading, Error, Empty States)",
    "توافق التصميم مع معايير الوصول (WCAG) وإمكانية استخدام الكيبورد",
    "أداء الواجهة (Core Web Vitals) وتحميل الأصول بصيغ حديثة (WebP)",
  ],
  "الابتكار والذكاء الاصطناعي": [
    "دمج أدوات مراجعة الكود الآلية (AI Code Review)",
    "استخدام GitOps للنشر التلقائي من مستودع الكود",
    "تطبيق المراقبة الذكية (AIOps) لرصد الأخطاء قبل المستخدم",
  ],
};

export const PYTHON_CODE = `import json
import datetime
import os

REVIEW_MATRIX = {
    "1. البنية التحتية والموثوقية (Infra & Reliability)": [
        "تطبيق التوسع التلقائي (Auto-scaling) وعدم وجود نقطة فشل واحدة (SPOF)",
        "تطبيق قواطع الدائرة (Circuit Breakers) لمنع الانهيار المتسلسل",
        "وجود خطة استعادة كوارث (DRP) ونسخ احتياطي دوري"
    ],
    "2. هندسة الكود و OOP (Code & SOLID)": [
        "تطبيق مبادئ SOLID بشكل صارم وخلو النظام من God Classes",
        "استخدام حقن التبعيات (Dependency Injection) بشكل سليم",
        "فصل منطق العمل (Business Logic) عن طبقة قاعدة البيانات (Hexagonal/Clean Arch)"
    ],
    "3. التصميم وتجربة المستخدم (UI/UX & Frontend)": [
        "تصميم جميع حالات العناصر (Hover, Loading, Error, Empty States)",
        "توافق التصميم مع معايير الوصول (WCAG) وإمكانية استخدام الكيبورد",
        "أداء الواجهة (Core Web Vitals) وتحميل الأصول بصيغ حديثة (WebP)"
    ],
    "4. الابتكار والذكاء الاصطناعي (AI & Modern Practices)": [
        "دمج أدوات مراجعة الكود الآلية (AI Code Review)",
        "استخدام GitOps للنشر التلقائي من مستودع الكود",
        "تطبيق المراقبة الذكية (AIOps) لرصد الأخطاء قبل المستخدم"
    ]
}

def run_review():
    print("=" * 60)
    print("📋 نظام المراجعة الاحترافي الشامل (Master Engineering Evaluator)")
    print("نظام التقييم: (1=ضعيف، 3=مقبول، 5=ممتاز احترافي)")
    print("=" * 60)

    project_name = input("أدخل اسم المشروع: ")
    reviewer_name = input("أدخل اسم المراجع: ")

    results = {}
    total_score = 0
    total_items = 0

    for category, items in REVIEW_MATRIX.items():
        print(f"\\n--- {category} ---")
        category_scores = []
        for item in items:
            while True:
                try:
                    score = int(input(f"  {item} (1-5): "))
                    if 1 <= score <= 5:
                        category_scores.append(score)
                        total_score += score
                        total_items += 1
                        break
                    print("  الرجاء إدخال رقم بين 1 و 5.")
                except ValueError:
                    print("  إدخال غير صالح.")

        results[category] = {
            "scores": category_scores,
            "average": sum(category_scores) / len(category_scores)
        }

    overall_percentage = (total_score / total_items) * 20 if total_items > 0 else 0
    grade = (
        "احترافي ممتاز (جاهز للإطلاق)" if overall_percentage >= 90
        else "جيد جداً (تعديلات طفيفة)" if overall_percentage >= 75
        else "مقبول (يحتاج تحسينات)" if overall_percentage >= 60
        else "ضعيف (إعادة هيكلة)"
    )

    print(f"\\n📊 النتيجة الإجمالية للاحترافية: {overall_percentage:.2f}% - {grade}")

    if input("\\nحفظ التقرير كـ JSON؟ (y/n): ").lower() == 'y':
        report_data = {
            "Project": project_name,
            "Reviewer": reviewer_name,
            "Date": datetime.datetime.now().strftime('%Y-%m-%d'),
            "Score": f"{overall_percentage:.2f}%",
            "Grade": grade,
            "Details": results
        }
        filename = f"Master_Review_{project_name}_{datetime.datetime.now().strftime('%Y%m%d')}.json"
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(report_data, f, ensure_ascii=False, indent=4)
        print(f"✅ تم الحفظ في: {os.path.abspath(filename)}")

if __name__ == "__main__":
    run_review()`;

export const AUDIT_PROMPT = `تقمص دور "كبير المعماريين ومُدقق الأنظمة التقنية". أريد تقييماً مجهرياً (Microscopic Review) للمشروع الذي سأعطيك إياه.
يجب أن يغطي تقييمك 5 محاور صارمة:
1. البنية التحتية والـ DevOps: (التوافر العالي، منع الـ SPOF، الـ GitOps، CI/CD).
2. هندسة الكود: (تطبيق SOLID، OOP، الـ Hexagonal Architecture، والابتعاد عن God Classes).
3. واجهة المستخدم: (UI/UX، حالات العناصر، الـ Accessibility، Core Web Vitals).
4. الأمان: (OWASP Top 10، إدارة الأسرار، تشفير البيانات).
5. الابتكار والمستقبل: (إمكانية دمج الـ AIOps، كفاءة استهلاك الطاقة، التحسينات المستمرة).

أخرج التقرير في جدول (Markdown) يحتوي على: (المحور، النتيجة من 10، الثغرات الحرجة، التوصيات التنفيذية المباشرة).`;

export const USAGE_STEPS = [
  { n: "01", t: "إنشاء ملف جديد", d: "في مستودع مشروعك، أنشئ ملفاً باسم MASTER_ENGINEERING_REFERENCE.md وانسخ محتوى هذه الوثيقة." },
  { n: "02", t: "تعبئة الحقول", d: "استبدل [اسم المشروع] والبيانات الواردة بين أقواس مربعة بمعلومات مشروعك." },
  { n: "03", t: "تنفيذ التقييم", d: "استخدم سكريبت بايثون — أو المقيّم التفاعلي أعلاه — في مرحلة ما قبل الإطلاق لتقييم الجاهزية." },
  { n: "04", t: "التدقيق بالذكاء الاصطناعي", d: "استخدم البرومبت المرفق للحصول على تقرير معمّق حول أي جزء من المشروع." },
  { n: "05", t: "تحديث مستمر", d: "كل تعديل جوهري في المشروع يجب أن ينعكس على هذه الوثيقة — فهي وثيقة حيّة (Living Document)." },
];

export const ADDITIONS = [
  {
    id: "a1", tag: "أمان", title: "الأمان المتقدم", en: "ADVANCED SECURITY",
    intro: "تعميق محور OWASP ليشمل دورة الأمان كاملة: من الأسرار حتى الامتثال التنظيمي.",
    items: [
      { t: "إدارة الأسرار", d: "HashiCorp Vault أو AWS Secrets Manager — لا مفاتيح في الكود أو ملفات الإعداد أبداً.", tools: ["Vault", "AWS Secrets"] },
      { t: "أمان سلسلة التوريد", d: "SBOM وتوقيع الصور (Cosign) وفحص الاعتماديات باستمرار.", tools: ["SBOM", "Cosign", "Dependabot", "Snyk"] },
      { t: "نمذجة التهديدات", d: "جلسات Threat Modeling بمنهجية STRIDE لكل ميزة حساسة قبل تطويرها.", tools: ["STRIDE"] },
      { t: "أمان الحاويات", d: "فحص الصور قبل النشر وصور أساسية خفيفة خالية من الثغرات.", tools: ["Trivy", "Grype", "Distroless"] },
      { t: "حماية الـ APIs", d: "Rate Limiting متدرج، API Gateway بطبقة تحقق مركزية، وحماية ضد BOLA/IDOR.", tools: ["Kong", "OPA"] },
      { t: "الامتثال التنظيمي", d: "قوائم مرجعية: GDPR للخصوصية، HIPAA للصحة، PCI-DSS للمدفوعات.", tools: ["GDPR", "PCI-DSS"] },
    ],
  },
  {
    id: "a2", tag: "مراقبة", title: "المراقبة والملاحظة", en: "OBSERVABILITY",
    intro: "ثلاثية الملاحظة الحديثة: مقاييس، تتبعات، وسجلات — من متصفح المستخدم حتى العمق.",
    items: [
      { t: "التتبع الموزع", d: "OpenTelemetry كمعيار موحّد مع Jaeger أو Grafana Tempo لتحليل زمن الاستجابة عبر الخدمات.", tools: ["OpenTelemetry", "Jaeger", "Tempo"] },
      { t: "مراقبة المستخدم الحقيقي (RUM)", d: "قياس أداء الواجهة من متصفحات المستخدمين الفعليين.", tools: ["Sentry", "Datadog RUM"] },
      { t: "مراقبة البنية التحتية", d: "مؤشرات مخصصة وتنبيهات ذكية بعتبات ديناميكية.", tools: ["Prometheus", "Grafana"] },
      { t: "تحليل السجلات", d: "Structured Logging بصيغة JSON لتسهيل البحث والتحليل.", tools: ["ELK", "Loki"] },
    ],
  },
  {
    id: "a3", tag: "بيانات", title: "إدارة البيانات وقواعد البيانات", en: "DATA MANAGEMENT",
    intro: "من ترحيل المخططات إلى تناسق المعاملات الموزعة واستراتيجيات الكاش المتقدمة.",
    items: [
      { t: "استراتيجية الترحيل", d: "تتبع تغييرات المخطط (Schema) بجعلها قابلة للتكرار والتراجع.", tools: ["Flyway", "Liquibase", "Alembic"] },
      { t: "الاستعادة الزمنية (PITR)", d: "WAL Archiving في PostgreSQL أو Binlog في MySQL للاستعادة لأي نقطة زمنية.", tools: ["WAL", "Binlog"] },
      { t: "تناسق البيانات", d: "Saga Pattern أو Outbox Pattern للمعاملات الموزعة في الميكروسيرفس.", tools: ["Saga", "Outbox"] },
      { t: "التخزين المؤقت المتقدم", d: "TTL و Write-Through/Write-Back ومعالجة تغلغل الكاش (Cache Stampede).", tools: ["TTL", "Write-Through"] },
    ],
  },
  {
    id: "a4", tag: "جودة", title: "جودة الكود والأتمتة", en: "CODE QUALITY",
    intro: "بوابات جودة إلزامية داخل خط الأنابيب — لا يُدمج كود لم يجتز الفحص.",
    items: [
      { t: "الفحوصات الساكنة", d: "قياس التغطية والتعقيد والروائح الكودية مع حدود دنيا إلزامية.", tools: ["SonarQube", "CodeClimate"] },
      { t: "التنسيق والفحص", d: "فرض التنسيق كخطوة CI تمنع أي كود غير منسّق.", tools: ["ESLint", "Prettier", "Black", "Golangci-lint"] },
      { t: "فحص الاعتماديات", d: "رصد الثغرات في المكتبات المستخدمة أولاً بأول.", tools: ["Snyk", "Dependency-Check"] },
      { t: "اختبارات الأمان SAST/DAST", d: "تحليل الكود المصدري واختبار الاختراق الديناميكي في بيئات Staging.", tools: ["Semgrep", "Checkmarx", "OWASP ZAP"] },
    ],
  },
  {
    id: "a5", tag: "تكلفة", title: "إدارة التكاليف السحابية (FinOps)", en: "FINOPS",
    intro: "السحابة ليست بلا حدود — حوكمة الإنفاق جزء من الهندسة المسؤولة.",
    items: [
      { t: "مراقبة التكاليف", d: "تنبيهات فورية عند تجاوز الميزانية المخططة.", tools: ["AWS Cost Explorer", "GCP Cost Mgmt"] },
      { t: "تحسين التكاليف", d: "Right-sizing للموارد، Spot Instances للأحمال غير الحرجة، وحذف الموارد المهملة.", tools: ["Spot", "Right-sizing"] },
      { t: "الوسوم (Tagging)", d: "وسوم إلزامية على كل الموارد لتتبع التكلفة حسب الفريق أو البيئة.", tools: ["Tags"] },
    ],
  },
  {
    id: "a6", tag: "حوادث", title: "إدارة الحوادث", en: "INCIDENT MGMT",
    intro: "الحوادث حتمية — الاحتراف يُقاس بسرعة الاحتواء وعمق التعلم بعدها.",
    items: [
      { t: "خطة الاستجابة", d: "أدوار واضحة: Incident Commander و Scribe و Ops Lead مع خطوات تصعيد.", tools: ["IRP"] },
      { t: "تحليل ما بعد الحادث", d: "Blameless Postmortems — تعلم بلا لوم، وتحويل الدروس لمهام تحسين.", tools: ["Postmortem"] },
      { t: "التنبيه والتواصل", d: "تنبيه الفريق عند الأعطال مع قنوات اتصال محددة مسبقاً.", tools: ["PagerDuty", "Opsgenie", "Slack"] },
    ],
  },
  {
    id: "a7", tag: "اختبار", title: "الاختبار المتقدم", en: "ADVANCED TESTING",
    intro: "اختبار المرونة تحت الفوضى المتعمدة، والأداء المستمر، والاختراق الدوري.",
    items: [
      { t: "اختبارات الفوضى", d: "حقن أعطال متعمدة للتأكد من مرونة النظام الحقيقية.", tools: ["Chaos Mesh", "Gremlin"] },
      { t: "التوافق عبر المتصفحات", d: "اختبار الواجهة على متصفحات وأجهزة متعددة.", tools: ["BrowserStack", "Sauce Labs"] },
      { t: "الأداء المستمر", d: "اختبارات حمل خفيفة مع كل بناء، وإجهاد شامل قبل الإصدارات الكبرى.", tools: ["k6", "Gatling"] },
      { t: "اختبارات الاختراق", d: "اختراق يدوي أو شبه آلي مجدول كل 6 أشهر على الأقل.", tools: ["Pentest"] },
    ],
  },
  {
    id: "a8", tag: "توثيق", title: "التوثيق وإدارة المعرفة", en: "KNOWLEDGE MGMT",
    intro: "المعرفة غير الموثقة دينٌ تقني — القرارات والواجهات والمساهمات تُكتب لتبقى.",
    items: [
      { t: "سجل القرارات المعمارية (ADRs)", d: "توثيق كل قرار هام بسياقه وخياراته وأسبابه داخل مستودع الكود.", tools: ["ADR", "Markdown"] },
      { t: "توثيق الـ APIs", d: "توثيق تفاعلي تلقائي، و AsyncAPI للأحداث غير المتزامنة.", tools: ["OpenAPI", "Swagger", "AsyncAPI"] },
      { t: "دليل المساهمة", d: "إرشادات إعداد البيئة وتشغيل الاختبارات وتقديم المساهمات.", tools: ["CONTRIBUTING.md"] },
      { t: "كتالوج الخدمات", d: "بوابة مركزية تعرض جميع الخدمات وملكيتها وحالتها.", tools: ["Backstage"] },
    ],
  },
  {
    id: "a9", tag: "تعاون", title: "التعاون الفعال", en: "COLLABORATION",
    intro: "حماية الفروع والتوقيعات وفحوصات ما قبل الدمج — ثقة مضمونة في كل Merge.",
    items: [
      { t: "استراتيجية الفروع", d: "Git Flow أو Trunk-Based مع حماية الفروع الرئيسية (PR + Reviews + Checks).", tools: ["Git Flow", "Trunk-Based"] },
      { t: "توقيع الـ Commits", d: "فرض GPG signing للتحقق من هوية المساهمين.", tools: ["GPG"] },
      { t: "فحوصات ما قبل الدمج", d: "اختبارات وفحص أمني وجودة تلقائياً عند كل PR — ومنع الدمج عند الفشل.", tools: ["CI Checks"] },
    ],
  },
  {
    id: "a10", tag: "أداء", title: "الأداء وتجربة المستخدم المتقدمة", en: "PERFORMANCE & UX",
    intro: "أهداف Core Web Vitals رقمية وقابلة للقياس، مع استراتيجيات تحميل ذكية.",
    items: [
      { t: "أهداف CWV محددة", d: "LCP < 2.5s و INP < 200ms و CLS < 0.1 مع مراقبة مستمرة.", tools: ["LCP", "INP", "CLS"] },
      { t: "التحميل المسبق", d: "preload للموارد الحرجة، prefetch للمسارات المحتملة، و Lazy Loading لما عداها.", tools: ["preload", "prefetch"] },
      { t: "تقسيم الكود", d: "Code Splitting حسب المسارات أو المكونات لتقليل الحمل الأولي.", tools: ["Code Splitting"] },
      { t: "تحسين الصور تلقائياً", d: "ضغط وتحويل للصيغ الحديثة تلقائياً حسب جهاز المستخدم.", tools: ["Cloudinary", "Imgix"] },
    ],
  },
];

export const NEW_ADDITIONS = [
  {
    id: "n1", code: "N-01", tag: "حوكمة", title: "حوكمة الذكاء الاصطناعي و LLMOps",
    why: "الوثيقة تستخدم الذكاء الاصطناعي في التطوير والمراجعة — لكنها لا تحوكمه. الاستخدام بلا حوكمة يحوّل الميزة إلى ثغرة.",
    items: [
      "إدارة إصدارات الـ Prompts كأنها كود (Prompt Versioning) مع اختبارات تقييم (Evals)",
      "تتبع استدعاءات النماذج ومراقبتها عبر OpenTelemetry GenAI Semantics",
      "Guardrails ضد تسريب الأسرار أو البيانات الشخصية داخل الـ Prompts",
      "سياسة ملكية واضحة للكود المولّد آلياً: من يراجعه ومن يتحمل مسؤوليته قبل الـ Merge",
    ],
    tools: ["Promptfoo", "LangSmith", "OTel GenAI"],
  },
  {
    id: "n2", code: "N-02", tag: "قياس", title: "مؤشرات DORA و ميزانيات الأخطاء",
    why: "الوثيقة تذكر 99.99% كهدف — لكنها لا تشرح كيف نقيس النضج الهندسي ولا كيف نقرر إيقاف الإصدارات.",
    items: [
      "مؤشرات DORA الأربعة: Deployment Frequency، Lead Time، MTTR، Change Failure Rate",
      "تحويل الـ SLAs إلى SLOs وSLIs قابلة للقياس على مستوى كل خدمة",
      "Error Budgets كآلية قرار موضوعية: نفاد الميزانية = تجميد الميزات حتى تستقر الموثوقية",
      "مراجعة ربع سنوية للمؤشرات ضمن خطة تحسين مستمرة",
    ],
    tools: ["Sloth", "OpenSLO", "Grafana SLO"],
  },
  {
    id: "n3", code: "N-03", tag: "أمان", title: "معمارية الثقة الصفرية (Zero Trust)",
    why: "الأمان المذكور يدور حول perimeter تقليدي. في عالم الميكروسيرفس والسحابة، الثقة الافتراضية بين الخدمات ثغرة بحد ذاتها.",
    items: [
      "mTLS بين جميع الخدمات الداخلية — لا اتصال بلا تحقق متبادل",
      "هوية عمل موحّدة للخدمات عبر SPIFFE/SPIRE بدلاً من أسرار ثابتة",
      "وصول Just-in-Time بأقل صلاحية ممكنة، يُسحب تلقائياً بعد انتهاء المهمة",
      "رفع نضج سلسلة التوريد لمستويات SLSA مع تحقق من كل Artifact",
    ],
    tools: ["SPIFFE", "Istio", "SLSA"],
  },
  {
    id: "n4", code: "N-04", tag: "تنظيم", title: "هندسة المنصات وتجربة المطور (DevEx)",
    why: "الوثيقة تهندس النظام بإتقان — لكنها لا تهندس تجربة من يبنيه. البطء اليومي للمطورين دينٌ خفي لا يظهر في المراجعات.",
    items: [
      "Golden Paths: مسارات معتمدة جاهزة (قوالب خدمات، بيئات، نشر) تقلل القرارات اليومية",
      "بوابة مطور داخلية (IDP) تجمع الخدمات والتوثيق والملكية في مكان واحد",
      "قياس تجربة المطور بإطار SPACE: الرضا، الأداء، التواصل، الكفاءة",
      "ميزانية عبء معرفي: كل خدمة جديدة يجب ألا ترفع تعقيد التشغيل على الفرق",
    ],
    tools: ["Backstage", "Port", "SPACE"],
  },
  {
    id: "n5", code: "N-05", tag: "معمارية", title: "حوكمة العقود والمخططات (Schemas)",
    why: "الأنظمة Event-Driven والميكروسيرفس تنهار بصمت عند كسر العقود بين الخدمات — لا يوجد بند واحد عن ذلك في الوثيقة.",
    items: [
      "Schema Registry (Avro/Protobuf) مع قواعد توافق صارمة (Backward/Forward)",
      "اختبار عقود موجّه بالمستهلك (Consumer-Driven Contracts) قبل كل إصدار",
      "إصدار دلالي للـ APIs مع سياسة Deprecation معلنة (إشعار N أشهر قبل الحذف)",
      "فحص كسر العقود تلقائياً في CI ومنع الدمج عند المخالفة",
    ],
    tools: ["Confluent SR", "Pact", "Buf"],
  },
  {
    id: "n6", code: "N-06", tag: "نشر", title: "التسليم التدريجي (Progressive Delivery)",
    why: "بين GitOps والتوافر العالي حلقة مفقودة: كيف نطلق ميزة لـ 5% فقط من المستخدمين ونتراجع آلياً عند أول خطأ؟",
    items: [
      "Feature Flags منفصلة عن دورة النشر — نشر الكود ≠ تفعيل الميزة",
      "Canary Releases مع تحليل مقاييس آلي وتراجع تلقائي (Rollback)",
      "Dark Launching: تشغيل المسار الجديد في الظل ومقارنة النتائج قبل التفعيل",
      "تجارب A/B مرتبطة بمؤشرات العمل وليس فقط مؤشرات النظام",
    ],
    tools: ["Argo Rollouts", "Unleash", "Flagsmith"],
  },
  {
    id: "n7", code: "N-07", tag: "معمارية", title: "إدارة الديون التقني واللياقة المعمارية",
    why: "مبادئ SOLID تمنع نشوء الديون — لكنها لا تعالج الديون المتراكمة فعلياً، ولا تمنع انجراف المعمارية مع الوقت.",
    items: [
      "سجل ديون تقني مُسعَّر: كل بند له تكلفة تقديرية ويُراجَع ربع سنوياً",
      "Fitness Functions: اختبارات معمارية آلية (مثل ArchUnit) تعمل في CI",
      "نمط Strangler Fig لتحديث الأنظمة القديمة تدريجياً دون إعادة كتابة كاملة",
      "ميزانية صريحة: نسبة ثابتة من كل Sprint لمعالجة الديون (20% نموذجاً)",
    ],
    tools: ["ArchUnit", "Dependabot", "SonarQube"],
  },
  {
    id: "n8", code: "N-08", tag: "تجربة", title: "الشمولية والتدويل المتقدم (i18n + RTL)",
    why: "بند إمكانية الوصول موجود — لكنه يتوقف عند WCAG الأساسية، ولا يذكر التدويل أو دعم RTL الذي تكتب به هذه الوثيقة نفسها.",
    items: [
      "الترقية لمعايير WCAG 2.2: مناطق الهدف، الاتساق، والمساعدة على الإدخال",
      "تصميم RTL-first للمنطقة العربية: محاذاة، أيقونات اتجاهية، وتنسيقات تواريخ هجرية",
      "بنية i18n حقيقية (ICU MessageFormat) تفصل النصوص عن الكود من اليوم الأول",
      "اختبار أداء خاص بكل Locale — حجم الخطوط العربية وأشكالها يؤثر على LCP",
    ],
    tools: ["formatjs", "axe-core", "CLDR"],
  },
  {
    id: "n9", code: "N-09", tag: "أداء", title: "الحوسبة الطرفية (Edge-First)",
    why: "الوثيقة تذكر Cloudflare عند DNS فقط — بينما الحافة اليوم منصة تنفيذ كاملة تقرّب المنطق من المستخدم وتخفض زمن الاستجابة جذرياً.",
    items: [
      "Edge Functions للمنطق خفيف الوزن: تحقق، توجيه، تحويل استجابات",
      "استراتيجية Data Residency: أين يجوز تخزين بيانات كل منطقة قانونياً",
      "تخزين مؤقت ذكي عند الحافة مع Stale-While-Revalidate للمحتوى شبه الثابت",
      "تقييم متى يكون الـ Edge أنسب من الخوادم المركزية — وليس افتراضه دائماً",
    ],
    tools: ["Cloudflare Workers", "Vercel Edge", "Fastly Compute"],
  },
  {
    id: "n10", code: "N-10", tag: "استدامة", title: "قياس الاستدامة (Software Carbon Intensity)",
    why: "بند التكنولوجيا الخضراء وصفي بلا مقياس. ما لا يُقاس لا يُحسَّن — وكثافة الكربون البرمجية مقياس معياري جاهز.",
    items: [
      "حساب SCI = (الطاقة × كثافة الكربون) + الكربون المضمّن لكل وحدة خدمة",
      "قياس فعلي لاستهلاك الخدمات (مثل Cloud Carbon Footprint) لا تقديرات نظرية",
      "تحسينات مبنية على القياس: جدولة الأحمال في أوقات الطاقة الأنظف",
      "تضمين بند الاستدامة في تعريف الإنجاز (Definition of Done) للخدمات عالية الحمل",
    ],
    tools: ["SCI", "Green Software Fdn", "Cloud Carbon"],
  },
];

export const NEW_TAGS = ["حوكمة", "قياس", "أمان", "تنظيم", "معمارية", "نشر", "تجربة", "أداء", "استدامة"];

export const COVERAGE_TABLE = [
  { axis: "البنية التحتية والموثوقية", doc: 5, add: 3, rev: 4 },
  { axis: "الأمان وسلسلة التوريد", doc: 1, add: 4, rev: 5 },
  { axis: "هندسة الكود والمعمارية", doc: 5, add: 3, rev: 4 },
  { axis: "المراقبة والملاحظة", doc: 2, add: 5, rev: 4 },
  { axis: "حوكمة الذكاء الاصطناعي", doc: 1, add: 0, rev: 5 },
  { axis: "القياس والحوكمة (DORA/SLO)", doc: 1, add: 1, rev: 5 },
  { axis: "تجربة المطور والمنصات", doc: 0, add: 2, rev: 4 },
  { axis: "التسليم والتشغيل التدريجي", doc: 2, add: 2, rev: 5 },
  { axis: "الاستدامة القابلة للقياس", doc: 1, add: 0, rev: 4 },
];

export function gradeFor(pct: number): { label: string; tone: "teal" | "amber" | "blue" | "alert" } {
  if (pct >= 90) return { label: "احترافي ممتاز — جاهز للإطلاق", tone: "teal" };
  if (pct >= 75) return { label: "جيد جداً — تعديلات طفيفة", tone: "blue" };
  if (pct >= 60) return { label: "مقبول — يحتاج تحسينات", tone: "amber" };
  return { label: "ضعيف — إعادة هيكلة", tone: "alert" };
}
