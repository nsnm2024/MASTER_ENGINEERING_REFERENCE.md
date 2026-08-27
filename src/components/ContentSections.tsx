import { useState } from "react";
import {
  SDD_TEMPLATE, NFR_CARDS, INFRA_LAYERS, OOP_TABS, DESIGN_CHECKS, AI_TRENDS,
} from "../data/doc";
import { Icon, IconName } from "./Icons";
import { SectionShell, Chip, CopyButton, CodeBlock, StatCard } from "./ui";

/* ================= 01 — SDD ================= */
export function SDDSection() {
  return (
    <SectionShell
      id="s1" num="01" en="EXECUTIVE SUMMARY / SDD" tone="blue"
      title="الملخص التنفيذي ونطاق العمل"
      desc="هذا القسم يوضح هوية المشروع ومتطلباته الأساسية. يُنسخ القالب أدناه ويُملأ في بداية أي مشروع كوثيقة تصميم مختصرة (Software Design Document)."
    >
      <div className="grid lg:grid-cols-3 gap-4">
        {NFR_CARDS.map((c) => (
          <StatCard key={c.en} {...c} />
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-6 items-start">
        <CodeBlock code={SDD_TEMPLATE} lang="MARKDOWN" filename="SDD_TEMPLATE.md" dir="rtl" maxH="max-h-[380px]" />
        <aside className="reveal space-y-4">
          <div className="border border-line bg-ink-850/70 p-5">
            <p className="font-mono text-[10px] tracking-[0.25em] text-amber mb-3" dir="ltr">HOW TO USE</p>
            <ol className="space-y-3 text-sm text-fog leading-7">
              <li className="flex gap-3"><span className="font-mono text-amber text-xs mt-1">١.</span>انسخ القالب إلى جذر مستودع مشروعك.</li>
              <li className="flex gap-3"><span className="font-mono text-amber text-xs mt-1">٢.</span>استبدل كل ما بين الأقواس المربعة ببيانات المشروع.</li>
              <li className="flex gap-3"><span className="font-mono text-amber text-xs mt-1">٣.</span>اجعلها مرجع القرار عند أي خلاف تقني — تُحدَّث مع كل تغيير جوهري.</li>
            </ol>
          </div>
          <div className="border border-amber/30 bg-amber/5 p-5">
            <p className="text-sm text-paper/90 leading-7">
              <span className="text-amber font-semibold">💡 القاعدة الذهبية:</span> مشروع بلا SDD مكتوبة هو
              مشروع تُكتب متطلباته في رؤوس أصحابه — وتتغير كل أسبوع.
            </p>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}

/* ================= 02 — Infrastructure flow ================= */
export function InfraSection() {
  return (
    <SectionShell
      id="s2" num="02" en="CLOUD INFRASTRUCTURE" tone="teal"
      title="البنية التحتية السحابية ومنع انهيار الخوادم"
      desc="استراتيجية ضمان التوافر العالي (HA) وتحمل الأخطاء (Fault Tolerance) — مسار الطلب الكامل من الحافة حتى خطة التعافي، بست طبقات متعاقبة."
    >
      {/* animated pipeline */}
      <div className="reveal relative">
        {/* connecting line */}
        <div className="hidden lg:block absolute top-1/2 inset-x-8 -translate-y-1/2 z-0" aria-hidden="true">
          <svg width="100%" height="2" className="overflow-visible">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="var(--color-bluep)" strokeWidth="2" className="flow-dash" opacity="0.55" />
          </svg>
        </div>
        <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INFRA_LAYERS.map((l, i) => (
            <article
              key={l.step}
              className="reveal corner-cut group relative border border-line bg-ink-850/80 p-5 transition-all duration-300 hover:border-teal/60 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-16px_rgba(62,201,167,0.25)]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 border border-line bg-ink-900 flex items-center justify-center text-teal group-hover:border-teal/50 group-hover:scale-105 transition-all duration-300">
                  <Icon name={l.icon as IconName} size={22} />
                </span>
                <div className="text-end">
                  <span className="font-mono text-[10px] text-dim block" dir="ltr">{l.step}</span>
                  <Chip tone="teal">{l.stat}</Chip>
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg leading-snug">{l.title}</h3>
              <p className="text-fog text-[13px] leading-6 mt-2">{l.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {l.tools.map((t) => <Chip key={t} tone="dim">{t}</Chip>)}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="reveal flex flex-wrap items-center gap-x-6 gap-y-2 border border-line bg-ink-950/50 px-5 py-3.5">
        <span className="flex items-center gap-2 font-mono text-[11px] text-fog"><span className="w-1.5 h-1.5 rounded-full bg-teal pulse-dot" />مسار الطلب يتدفق من L1 ← L6</span>
        <span className="font-mono text-[11px] text-dim" dir="ltr">SPOF = Single Point of Failure</span>
        <span className="font-mono text-[11px] text-dim" dir="ltr">RPO: نسخ يومي · RTO: استعادة &lt; 1h</span>
      </div>
    </SectionShell>
  );
}

/* ================= 03 — Code engineering / OOP ================= */
export function CodeSection() {
  const [tab, setTab] = useState(0);
  const t = OOP_TABS[tab];
  return (
    <SectionShell
      id="s3" num="03" en="CODE ENGINEERING / OOP" tone="amber"
      title="هندسة الكود والبرمجة كائنية التوجه"
      desc="ضمان نظافة الكود ومتانة بنيانه الداخلي — من الأعمدة الأربعة، مروراً بمبادئ SOLID، وصولاً إلى هندسة المنظومات الحديثة."
    >
      {/* tabs */}
      <div className="reveal flex flex-wrap gap-2" role="tablist" aria-label="محاور هندسة الكود">
        {OOP_TABS.map((o, i) => (
          <button
            key={o.id}
            role="tab"
            aria-selected={tab === i}
            onClick={() => setTab(i)}
            className={`px-4 py-2.5 border text-sm font-medium transition-all duration-300 ${
              tab === i
                ? "border-amber bg-amber/10 text-amber -translate-y-0.5"
                : "border-line bg-ink-850/60 text-fog hover:text-paper hover:border-bluep/50"
            }`}
          >
            {o.label}
            <span className="font-mono text-[10px] text-dim ms-2 hidden sm:inline" dir="ltr">{o.en}</span>
          </button>
        ))}
      </div>

      {/* tab body */}
      <div key={t.id} className="grid md:grid-cols-2 gap-4">
        {t.items.map((item, i) => (
          <div
            key={item.t}
            className="reveal is-in corner-cut group relative border border-line bg-ink-850/80 p-5 transition-all duration-300 hover:border-amber/50 hover:-translate-y-1"
            style={{ animation: "none" }}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display font-semibold text-lg text-paper group-hover:text-amber transition-colors">{item.t}</h3>
              <span className="font-mono text-[10px] text-dim tracking-wider" dir="ltr">{String(i + 1).padStart(2, "0")} · {item.en}</span>
            </div>
            <p className="text-fog text-sm leading-7 mt-2">{item.d}</p>
            <span className="absolute bottom-0 start-0 h-[3px] w-0 bg-amber group-hover:w-full transition-all duration-500" aria-hidden="true" />
          </div>
        ))}
      </div>

      <div className="reveal border border-teal/30 bg-teal/5 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
        <span className="text-teal shrink-0"><Icon name="component" size={30} /></span>
        <div>
          <p className="font-display font-semibold text-teal">3.3 — إضافة حديثة: هندسة المنظومات (Hexagonal / Clean Architecture)</p>
          <p className="text-fog text-sm leading-7 mt-1">
            فصل منطق العمل (Core Domain) عن البنية التحتية (DB, UI, Frameworks) باستخدام Ports & Adapters،
            مما يجعل الكود قابلاً للاختبار بنسبة 100% ومستقلاً عن قواعد البيانات.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ================= 04 — UI/UX review (interactive checklist) ================= */
export function DesignSection() {
  const total = DESIGN_CHECKS.reduce((s, c) => s + c.items.length, 0);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const doneCount = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((doneCount / total) * 100);

  const toggle = (key: string) => setChecked((p) => ({ ...p, [key]: !p[key] }));
  const resetAll = () => setChecked({});

  return (
    <SectionShell
      id="s4" num="04" en="UI / UX REVIEW" tone="blue"
      title="مراجعة التصميم المظهري وتجربة المستخدم"
      desc="مصفوفة مجهرية لتدقيق جودة الواجهة وبرمجتها — قائمة تحقق تفاعلية: علّم ما أنجزه مشروعك وشاهد نسبة الجاهزية لحظياً."
    >
      {/* progress bar */}
      <div className="reveal border border-line bg-ink-850/70 p-4 md:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <p className="text-sm text-fog">
            جاهزية الواجهة في مشروعك: <span className="font-display font-bold text-amber text-lg" dir="ltr">{pct}%</span>
            <span className="text-dim text-xs ms-2">({doneCount} من {total} بنداً)</span>
          </p>
          <button onClick={resetAll} className="inline-flex items-center gap-1.5 text-xs text-fog hover:text-alert transition-colors">
            <Icon name="reset" size={13} /> إعادة تعيين
          </button>
        </div>
        <div className="h-2 bg-ink-950 border border-line overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div
            className={`h-full transition-all duration-700 ease-out ${pct >= 80 ? "bg-teal" : pct >= 40 ? "bg-amber" : "bg-bluep"}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {DESIGN_CHECKS.map((c) => (
          <div key={c.cat} className="reveal corner-cut border border-line bg-ink-850/80 overflow-hidden transition-colors hover:border-bluep/50">
            <div className="flex items-center justify-between gap-3 border-b border-line bg-ink-900/60 px-5 py-3.5">
              <div className="flex items-center gap-3">
                <span className="text-bluep"><Icon name={c.icon as IconName} size={20} /></span>
                <h3 className="font-display font-semibold">{c.cat}</h3>
              </div>
              <span className="font-mono text-[10px] text-dim" dir="ltr">{c.en}</span>
            </div>
            <ul>
              {c.items.map((item, i) => {
                const key = c.cat + i;
                const on = !!checked[key];
                return (
                  <li key={key}>
                    <button
                      onClick={() => toggle(key)}
                      role="checkbox"
                      aria-checked={on}
                      className={`w-full flex items-start gap-3 px-5 py-3 text-start text-sm transition-all duration-200 border-b border-line/50 last:border-0 ${
                        on ? "bg-teal/8 text-fog" : "hover:bg-ink-800/50 text-paper/90"
                      }`}
                    >
                      <span className={`mt-0.5 shrink-0 w-[18px] h-[18px] border flex items-center justify-center transition-all duration-200 ${
                        on ? "border-teal bg-teal text-ink-950 scale-105" : "border-line group-hover:border-bluep"
                      }`}>
                        {on && <Icon name="check" size={12} strokeWidth={2.4} />}
                      </span>
                      <span className={`leading-6 transition-all duration-200 ${on ? "line-through decoration-teal/60" : ""}`}>{item}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="reveal border border-amber/30 bg-amber/5 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
        <span className="text-amber shrink-0"><Icon name="gauge" size={30} /></span>
        <div>
          <p className="font-display font-semibold text-amber">إضافة حديثة: البرمجة المستجيبة المتقدمة و SSR/SSG</p>
          <p className="text-fog text-sm leading-7 mt-1">
            استخدام Server-Side Rendering (SSR) أو Static Site Generation (SSG) لتحسين الـ SEO وسرعة
            التحميل الأولي ضمن أهداف Core Web Vitals.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ================= 05 — AI & trends ================= */
export function AISection() {
  return (
    <SectionShell
      id="s5" num="05" en="AI & MODERN TRENDS" tone="teal"
      title="الذكاء الاصطناعي والاتجاهات الحديثة"
      desc="دمج تقنيات المستقبل لضمان تفوق المشروع — من المراجعة الآلية للكود حتى المراقبة الذكية والحوسبة الخضراء."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {AI_TRENDS.map((a, i) => (
          <article
            key={a.t}
            className="reveal group relative border border-line bg-ink-850/80 p-5 md:p-6 transition-all duration-300 hover:border-teal/50 hover:-translate-y-1 overflow-hidden"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="absolute -top-4 -start-2 font-display font-extrabold text-7xl text-ink-700/60 group-hover:text-teal/10 transition-colors duration-500 select-none" aria-hidden="true" dir="ltr">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 border border-line bg-ink-900 flex items-center justify-center text-teal group-hover:scale-110 group-hover:border-teal/50 transition-all duration-300">
                  <Icon name={a.icon as IconName} size={22} />
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-dim" dir="ltr">{a.en}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mt-4 group-hover:text-teal transition-colors">{a.t}</h3>
              <p className="text-fog text-sm leading-7 mt-2">{a.d}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {a.tools.map((t) => <Chip key={t} tone="dim">{t}</Chip>)}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="reveal flex items-center gap-3 flex-wrap">
        <CopyButton text="GitHub Copilot · CodeRabbit · ArgoCD · Datadog Watchdog · KEDA" label="نسخ قائمة الأدوات" small />
        <span className="text-xs text-dim">الأدوات المذكورة في هذا القسم — جاهزة للنسخ إلى SDD مشروعك.</span>
      </div>
    </SectionShell>
  );
}
