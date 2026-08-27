import { DOC_META, DEV_INFO, NAV, TICKER_TERMS } from "../data/doc";
import { Icon } from "./Icons";
import { useScramble, useCountUp } from "../hooks";

function Metric({ value, suffix, label, en }: { value: number; suffix?: string; label: string; en: string }) {
  const [ref, v] = useCountUp(value);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col items-center py-5 px-3">
      <span className="font-display font-bold text-3xl md:text-4xl text-paper" dir="ltr">
        {v}
        <span className="text-amber">{suffix}</span>
      </span>
      <span className="text-fog text-xs mt-1">{label}</span>
      <span className="font-mono text-[9px] tracking-[0.2em] text-dim mt-0.5" dir="ltr">{en}</span>
    </div>
  );
}

export function Cover({ onNavigate }: { onNavigate: (id: string) => void }) {
  const title = useScramble("الوثيقة المرجعية الشاملة");

  return (
    <section id="cover" className="relative scroll-mt-24 pt-10 md:pt-16">
      {/* title block frame — engineering drawing style */}
      <div className="reveal border-2 border-line relative bg-ink-850/50">
        {/* corner marks */}
        <span className="absolute -top-px -start-px w-6 h-6 border-t-2 border-s-2 border-amber" aria-hidden="true" />
        <span className="absolute -top-px -end-px w-6 h-6 border-t-2 border-e-2 border-amber" aria-hidden="true" />
        <span className="absolute -bottom-px -start-px w-6 h-6 border-b-2 border-s-2 border-amber" aria-hidden="true" />
        <span className="absolute -bottom-px -end-px w-6 h-6 border-b-2 border-e-2 border-amber" aria-hidden="true" />

        <div className="grid lg:grid-cols-[1fr_320px]">
          {/* main title area */}
          <div className="p-7 md:p-12 border-b lg:border-b-0 lg:border-e border-line">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-[11px] text-teal border border-teal/40 bg-teal/8 px-2.5 py-1" dir="ltr">
                {DOC_META.file}
              </span>
              <span className="font-mono text-[11px] text-fog border border-line px-2.5 py-1" dir="ltr">
                REV {DOC_META.version}
              </span>
              <span className="font-mono text-[11px] text-amber border border-amber/40 bg-amber/8 px-2.5 py-1">
                {DOC_META.edition}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl md:text-6xl xl:text-7xl leading-[1.15] text-paper">
              <span className="block">{title}<span className="caret-blink text-amber">_</span></span>
              <span className="block mt-1">
                لهندسة <span className="text-amber">وتطوير</span> البرمجيات
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-fog text-sm md:text-base leading-8">
              {DOC_META.scope} — من البنية التحتية السحابية ومنع انهيار الخوادم، مروراً بهندسة الكود
              ومبادئ SOLID، وصولاً إلى الذكاء الاصطناعي ومصفوفات التقييم الآلي. وثيقة واحدة تُنسخ إلى
              مستودع مشروعك وتُملأ حقولها، ثم تُقيَّم قبل كل إطلاق.
            </p>

            {/* section quick chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {NAV.filter((n) => n.id !== "cover").map((n) => (
                <button
                  key={n.id}
                  onClick={() => onNavigate(n.id)}
                  className="group flex items-center gap-2 border border-line bg-ink-900/60 px-3 py-1.5 text-xs text-fog hover:border-amber/60 hover:text-paper hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="font-mono text-[10px] text-dim group-hover:text-amber transition-colors" dir="ltr">{n.num}</span>
                  {n.title}
                  {n.isNew && <span className="w-1.5 h-1.5 rounded-full bg-teal pulse-dot" />}
                </button>
              ))}
            </div>
          </div>

          {/* meta strip — drawing title block cells */}
          <div className="grid grid-cols-2 lg:grid-cols-1 border-t lg:border-t-0 border-line">
            {[
              { k: "الإصدار", v: DOC_META.version, mono: true },
              { k: "الحالة", v: DOC_META.status, mono: false },
              { k: "النطاق", v: "دورة SDLC كاملة", mono: false },
              { k: "التصنيف", v: "مرجع هندسي داخلي", mono: false },
            ].map((c, i) => (
              <div key={i} className={`p-4 md:p-5 border-line ${i % 2 === 0 ? "border-e lg:border-e-0" : "lg:border-e-0"} ${i < 2 ? "border-b lg:border-b" : ""} ${i === 0 ? "lg:border-b" : ""} ${i < 3 ? "lg:border-b" : ""} ${i < 2 ? "border-b" : ""}`}>
                <p className="font-mono text-[10px] tracking-[0.2em] text-dim mb-1.5" dir="ltr">
                  {["VERSION", "STATUS", "SCOPE", "CLASS"][i]}
                </p>
                <p className={`text-sm font-semibold ${i === 1 ? "text-teal" : "text-paper"}`} dir={c.mono ? "ltr" : "rtl"}>
                  {c.mono ? "v" + c.v : c.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* developer info — drawing approval block */}
      <div className="reveal grid md:grid-cols-[200px_1fr] border-2 border-line border-t-0 bg-ink-850/30" style={{ transitionDelay: "120ms" }}>
        <div className="p-5 border-b md:border-b-0 md:border-e border-line flex md:flex-col items-center md:items-start justify-between gap-2">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] text-dim" dir="ltr">AUTHOR BLOCK</p>
            <p className="font-display font-semibold text-lg mt-1">معلومات المطوِّر</p>
          </div>
          <span className="stamp font-mono text-[10px] px-2.5 py-1 tracking-widest">APPROVED</span>
        </div>
        <div className="grid sm:grid-cols-2">
          {DEV_INFO.map((d, i) => (
            <div key={i} className={`p-4 md:p-5 border-line flex items-center gap-3 group hover:bg-ink-800/40 transition-colors ${i % 2 === 0 ? "sm:border-e" : ""} ${i < 2 ? "border-b sm:border-b" : ""} ${i === 0 ? "sm:border-b" : ""} ${i < 3 ? "border-b sm:border-b" : ""} ${i === 1 ? "sm:border-b" : ""}`}>
              <span className="text-bluep group-hover:text-amber transition-colors shrink-0">
                <Icon name={["user", "robot", "phone", "mail"][i] as "user" | "robot" | "phone" | "mail"} size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] text-dim">{d.label}</p>
                <p className={`text-sm font-semibold truncate ${d.mono ? "font-mono text-[13px]" : ""}`} dir={d.mono ? "ltr" : "rtl"} style={d.mono ? { textAlign: "start" } : undefined}>
                  {d.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* metrics strip */}
      <div className="reveal grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-line border-2 border-line border-t-0 bg-ink-950/50" style={{ transitionDelay: "200ms" }}>
        <Metric value={7} label="أقسام رئيسية" en="SECTIONS" />
        <Metric value={10} label="إضافات مقترحة" en="ADD-ONS" />
        <Metric value={12} label="بند تقييم هندسي" en="CRITERIA" />
        <Metric value={10} suffix="+" label="محاور جديدة من المُراجِع" en="NEW AXES" />
      </div>

      {/* ticker */}
      <div className="reveal relative mt-8 border-y border-line bg-ink-950/60 overflow-hidden py-3" style={{ transitionDelay: "260ms" }} aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {TICKER_TERMS.map((t, i) => (
                <span key={i} className="flex items-center gap-3 px-4 whitespace-nowrap">
                  <span className="font-mono text-[11px] text-fog/80">{t}</span>
                  <span className="text-amber/70 text-[10px]">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 start-0 w-16 bg-gradient-to-l from-transparent to-ink-900 pointer-events-none" />
        <div className="absolute inset-y-0 end-0 w-16 bg-gradient-to-r from-transparent to-ink-900 pointer-events-none" />
      </div>
    </section>
  );
}
