import { useMemo, useState } from "react";
import { REVIEW_MATRIX, PYTHON_CODE, AUDIT_PROMPT, USAGE_STEPS, gradeFor } from "../data/doc";
import { Icon } from "./Icons";
import { SectionShell, CopyButton, CodeBlock, Chip } from "./ui";

/* ================= 06 — Evaluator ================= */
const FLAT = Object.entries(REVIEW_MATRIX).flatMap(([cat, items]) =>
  items.map((item, i) => ({ key: `${cat}-${i}`, cat, item }))
);

export function EvaluatorSection() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [project, setProject] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [saved, setSaved] = useState(false);

  const { pct, answered, total, grade, catStats } = useMemo(() => {
    const entries = FLAT.filter((f) => scores[f.key] != null);
    const totalScore = entries.reduce((s, f) => s + scores[f.key], 0);
    const pct = entries.length > 0 ? (totalScore / (entries.length * 5)) * 100 : 0;
    const catStats = Object.entries(REVIEW_MATRIX).map(([cat, items]) => {
      const s = items.map((_, i) => scores[`${cat}-${i}`]).filter((v) => v != null) as number[];
      const avg = s.length ? s.reduce((a, b) => a + b, 0) / s.length : 0;
      return { cat, avg, done: s.length, count: items.length };
    });
    return { pct, answered: entries.length, total: FLAT.length, grade: gradeFor(pct), catStats };
  }, [scores]);

  const toneColor = { teal: "var(--color-teal)", blue: "var(--color-bluep)", amber: "var(--color-amber)", alert: "var(--color-alert)" }[grade.tone];
  const C = 2 * Math.PI * 54;

  const downloadReport = () => {
    const details: Record<string, unknown> = {};
    catStats.forEach((c, i) => {
      const keys = FLAT.filter((f) => f.cat === c.cat).map((f) => f.key);
      details[`${i + 1}. ${c.cat}`] = {
        scores: keys.map((k) => scores[k] ?? 0),
        average: c.avg,
      };
    });
    const report = {
      Project: project.trim() || "مشروع بدون اسم",
      Reviewer: reviewer.trim() || "مراجع مجهول",
      Date: new Date().toISOString().slice(0, 10),
      Score: `${pct.toFixed(2)}%`,
      Grade: grade.label,
      Details: details,
    };
    const blob = new Blob([JSON.stringify(report, null, 4)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Master_Review_${report.Project}_${report.Date.replace(/-/g, "")}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  };

  return (
    <SectionShell
      id="s6" num="06" en="RUNBOOKS & MATRICES" tone="amber"
      title="أدلة التشغيل الآلي والمصفوفات"
      desc="أداة تقييم هندسية موحدة: سكريبت بايثون لسطر الأوامر، ونسخة تفاعلية تعمل داخل هذه الوثيقة — نفس المصفوفة، نفس المنطق، نفس التقديرات."
    >
      {/* ---- interactive evaluator ---- */}
      <div className="reveal corner-cut border-2 border-amber/40 bg-ink-850/70 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-ink-900/70 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <span className="text-amber"><Icon name="gauge" size={22} /></span>
            <div>
              <p className="font-display font-semibold">المقيّم التفاعلي — النسخة الويب</p>
              <p className="font-mono text-[10px] text-dim" dir="ltr">MASTER ENGINEERING EVALUATOR · SCALE 1–5</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Chip tone="amber">12 بنداً</Chip>
            <button
              onClick={() => { setScores({}); setSaved(false); }}
              className="inline-flex items-center gap-1.5 border border-line px-3 py-1.5 text-xs text-fog hover:text-alert hover:border-alert/50 transition-colors"
            >
              <Icon name="reset" size={13} /> تصفير
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr]">
          {/* gauge column */}
          <div className="border-b lg:border-b-0 lg:border-e border-line p-6 flex flex-col items-center justify-start gap-5 bg-ink-950/40">
            <div className="relative">
              <svg width="150" height="150" viewBox="0 0 150 150" className="-rotate-90">
                <circle cx="75" cy="75" r="54" fill="none" stroke="var(--color-ink-700)" strokeWidth="10" />
                <circle
                  cx="75" cy="75" r="54" fill="none"
                  stroke={answered ? toneColor : "var(--color-ink-600)"}
                  strokeWidth="10" strokeLinecap="round"
                  strokeDasharray={C}
                  strokeDashoffset={C * (1 - pct / 100)}
                  className="gauge-arc"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display font-extrabold text-3xl" style={{ color: answered ? toneColor : "var(--color-dim)" }} dir="ltr">
                  {pct.toFixed(0)}%
                </span>
                <span className="font-mono text-[9px] text-dim mt-0.5">{answered}/{total} مُقيَّم</span>
              </div>
            </div>
            <p className="text-center text-sm font-semibold px-2" style={{ color: answered ? toneColor : "var(--color-dim)" }}>
              {answered === 0 ? "ابدأ التقييم من البنود ←" : grade.label}
            </p>
            <div className="w-full space-y-3">
              {catStats.map((c) => (
                <div key={c.cat}>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-fog">{c.cat}</span>
                    <span className="font-mono text-dim" dir="ltr">{c.done}/{c.count}</span>
                  </div>
                  <div className="h-1.5 bg-ink-950 border border-line/60">
                    <div className="h-full bg-amber transition-all duration-500" style={{ width: `${(c.avg / 5) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
            {/* report inputs */}
            <div className="w-full space-y-2.5 pt-2">
              <input
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder="اسم المشروع"
                className="w-full bg-ink-950/80 border border-line px-3 py-2.5 text-sm placeholder:text-dim focus:border-amber/60 focus:outline-none transition-colors"
              />
              <input
                value={reviewer}
                onChange={(e) => setReviewer(e.target.value)}
                placeholder="اسم المراجع"
                className="w-full bg-ink-950/80 border border-line px-3 py-2.5 text-sm placeholder:text-dim focus:border-amber/60 focus:outline-none transition-colors"
              />
              <button
                onClick={downloadReport}
                disabled={answered === 0}
                className="w-full inline-flex items-center justify-center gap-2 border border-amber/60 bg-amber/10 text-amber px-4 py-2.5 text-sm font-semibold hover:bg-amber hover:text-ink-950 transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
              >
                <Icon name={saved ? "check" : "download"} size={15} />
                {saved ? "تم تنزيل التقرير ✓" : "تنزيل تقرير JSON"}
              </button>
            </div>
          </div>

          {/* matrix column */}
          <div className="p-5 md:p-6 space-y-7">
            {Object.entries(REVIEW_MATRIX).map(([cat, items], ci) => (
              <fieldset key={cat}>
                <legend className="flex items-center gap-2.5 font-display font-semibold text-base mb-3">
                  <span className="font-mono text-[11px] text-amber border border-amber/40 bg-amber/8 w-7 h-7 flex items-center justify-center" dir="ltr">{ci + 1}</span>
                  {cat}
                </legend>
                <div className="space-y-3">
                  {items.map((item, i) => {
                    const key = `${cat}-${i}`;
                    return (
                      <div key={key} className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 border border-line/70 bg-ink-900/40 px-4 py-3 hover:border-bluep/40 transition-colors">
                        <p className="flex-1 text-[13px] text-paper/90 leading-6">{item}</p>
                        <div className="flex gap-1 shrink-0" role="radiogroup" aria-label={item}>
                          {[1, 2, 3, 4, 5].map((v) => {
                            const on = scores[key] === v;
                            return (
                              <button
                                key={v}
                                role="radio"
                                aria-checked={on}
                                onClick={() => setScores((p) => ({ ...p, [key]: v }))}
                                className={`w-9 h-9 border font-mono text-sm transition-all duration-200 ${
                                  on
                                    ? v >= 4
                                      ? "border-teal bg-teal text-ink-950 font-semibold scale-110"
                                      : v === 3
                                        ? "border-amber bg-amber text-ink-950 font-semibold scale-110"
                                        : "border-alert bg-alert text-paper font-semibold scale-110"
                                    : "border-line text-fog hover:border-amber/60 hover:text-amber hover:-translate-y-0.5"
                                }`}
                              >
                                {v}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>
        </div>
      </div>

      {/* ---- python script ---- */}
      <div className="grid lg:grid-cols-[1fr_300px] gap-6 items-start">
        <CodeBlock code={PYTHON_CODE} lang="PYTHON" filename="evaluator.py" dir="ltr" maxH="max-h-[420px]" />
        <aside className="reveal space-y-4">
          <div className="border border-line bg-ink-850/70 p-5">
            <p className="font-mono text-[10px] tracking-[0.25em] text-amber mb-3" dir="ltr">RUN IT</p>
            <div className="corner-cut bg-ink-950 border border-line p-3.5 font-mono text-[12px] text-teal mb-3" dir="ltr">
              <span className="text-dim">$ </span>python evaluator.py
            </div>
            <p className="text-fog text-[13px] leading-7">
              احفظ الكود في ملف <span className="font-mono text-amber" dir="ltr">evaluator.py</span> ثم نفّذه —
              سيحاورك بنداً بنداً ويحفظ التقرير بصيغة JSON عند الطلب.
            </p>
          </div>
          <div className="border border-line bg-ink-850/70 p-5">
            <p className="font-mono text-[10px] tracking-[0.25em] text-bluep mb-3" dir="ltr">GRADING SCALE</p>
            <ul className="space-y-2 text-[13px]">
              <li className="flex items-center gap-2.5"><span className="w-2 h-2 bg-teal" /><span className="text-fog"><span className="font-mono text-paper" dir="ltr">≥ 90%</span> — احترافي ممتاز (جاهز للإطلاق)</span></li>
              <li className="flex items-center gap-2.5"><span className="w-2 h-2 bg-bluep" /><span className="text-fog"><span className="font-mono text-paper" dir="ltr">≥ 75%</span> — جيد جداً (تعديلات طفيفة)</span></li>
              <li className="flex items-center gap-2.5"><span className="w-2 h-2 bg-amber" /><span className="text-fog"><span className="font-mono text-paper" dir="ltr">≥ 60%</span> — مقبول (يحتاج تحسينات)</span></li>
              <li className="flex items-center gap-2.5"><span className="w-2 h-2 bg-alert" /><span className="text-fog"><span className="font-mono text-paper" dir="ltr">&lt; 60%</span> — ضعيف (إعادة هيكلة)</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}

/* ================= 07 — Audit prompt ================= */
export function PromptSection() {
  return (
    <SectionShell
      id="s7" num="07" en="AI AUDIT PROMPT" tone="teal"
      title="برومبت التدقيق الشامل بالذكاء الاصطناعي"
      desc="انسخ هذا النص وضعه في أي ذكاء اصطناعي (مثل Z AI GLM) لتوليد تقرير تدقيق مجهري لأي كود أو تصميم — بخمسة محاور صارمة وجدول نتائج نهائي."
    >
      <div className="grid lg:grid-cols-[1fr_300px] gap-6 items-start">
        <CodeBlock code={AUDIT_PROMPT} lang="PROMPT" filename="master_audit_prompt.txt" dir="rtl" maxH="max-h-[400px]" />
        <aside className="reveal space-y-4">
          <div className="border border-teal/30 bg-teal/5 p-5">
            <p className="font-display font-semibold text-teal mb-2">المحاور الخمسة</p>
            <ol className="space-y-2 text-[13px] text-fog leading-6">
              {["البنية التحتية والـ DevOps", "هندسة الكود (SOLID / Hexagonal)", "واجهة المستخدم و Core Web Vitals", "الأمان (OWASP Top 10)", "الابتكار والمستقبل (AIOps)"].map((m, i) => (
                <li key={m} className="flex gap-2.5">
                  <span className="font-mono text-teal text-xs mt-0.5">{i + 1}.</span>{m}
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-line bg-ink-850/70 p-5">
            <p className="font-mono text-[10px] tracking-[0.25em] text-dim mb-3" dir="ltr">EXPECTED OUTPUT</p>
            <div className="overflow-hidden border border-line font-mono text-[11px]" dir="rtl">
              <div className="grid grid-cols-4 bg-ink-900 text-fog divide-x divide-x-reverse divide-line">
                {["المحور", "من 10", "الثغرات", "التوصيات"].map((h) => <span key={h} className="px-2 py-1.5 text-center">{h}</span>)}
              </div>
              <div className="grid grid-cols-4 text-dim divide-x divide-x-reverse divide-line/60">
                {["الأمان", "8.5", "—", "—"].map((h, i) => <span key={i} className="px-2 py-1.5 text-center">{h}</span>)}
              </div>
            </div>
            <p className="text-fog text-[12px] leading-6 mt-3">جدول Markdown جاهز للصق في مستودعك أو في تذكرة المتابعة.</p>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}

/* ================= 08 — Usage steps ================= */
export function UsageSection() {
  return (
    <SectionShell
      id="s8" num="08" en="PRACTICAL USAGE" tone="blue"
      title="طريقة الاستخدام العملي لهذه الوثيقة"
      desc="خمس خطوات تفصل بين قراءة الوثيقة وتحويلها إلى ممارسة هندسية يومية داخل مستودعك."
    >
      <ol className="relative space-y-0">
        {USAGE_STEPS.map((s, i) => (
          <li key={s.n} className="reveal relative flex gap-5 md:gap-7 pb-8 last:pb-0" style={{ transitionDelay: `${i * 90}ms` }}>
            {/* rail */}
            {i < USAGE_STEPS.length - 1 && (
              <span className="absolute top-12 bottom-0 start-[27px] md:start-[31px] w-px bg-line" aria-hidden="true" />
            )}
            <span className="relative shrink-0 w-14 h-14 md:w-16 md:h-16 border border-line bg-ink-850 flex items-center justify-center font-mono text-amber text-sm group-hover:border-amber/50" dir="ltr">
              {s.n}
              <span className="absolute -top-1 -end-1 w-2.5 h-2.5 bg-amber rotate-45" aria-hidden="true" />
            </span>
            <div className="flex-1 border border-line bg-ink-850/70 p-5 hover:border-bluep/50 hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-display font-semibold text-lg">{s.t}</h3>
              <p className="text-fog text-sm leading-7 mt-1.5">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
