import React from "react";
import { Icon } from "./Icons";
import { useCopy } from "../hooks";

/* ---------- section shell ---------- */
export function SectionShell({
  id, num, title, en, desc, children, tone = "blue",
}: {
  id: string; num: string; title: string; en: string; desc?: string;
  children: React.ReactNode; tone?: "blue" | "amber" | "teal";
}) {
  const toneCls = tone === "amber" ? "text-amber" : tone === "teal" ? "text-teal" : "text-bluep";
  return (
    <section id={id} className="relative scroll-mt-24 py-14 md:py-20">
      <div className="reveal flex items-start gap-5 md:gap-8">
        <span className="ghost-num text-[72px] md:text-[116px] leading-none mt-1 shrink-0">{num}</span>
        <div className="min-w-0 flex-1 pt-2 md:pt-4">
          <p className={`font-mono text-[11px] md:text-xs tracking-[0.3em] ${toneCls} mb-2`}>
            {"SECTION " + num + " — " + en}
          </p>
          <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight">{title}</h2>
          {desc && <p className="mt-3 text-fog text-sm md:text-base leading-relaxed max-w-3xl">{desc}</p>}
        </div>
      </div>
      <div className="ruler-ticks mt-6 mb-8 md:mb-10" aria-hidden="true" />
      <div className="space-y-8">{children}</div>
    </section>
  );
}

/* ---------- chip ---------- */
export function Chip({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "amber" | "teal" | "dim" }) {
  const map = {
    blue: "border-bluep/40 text-bluep bg-bluep/8",
    amber: "border-amber/40 text-amber bg-amber/8",
    teal: "border-teal/40 text-teal bg-teal/8",
    dim: "border-line text-fog bg-ink-800/60",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1 border px-2 py-0.5 font-mono text-[10px] md:text-[11px] leading-4 ${map[tone]}`}>
      {children}
    </span>
  );
}

/* ---------- copy button ---------- */
export function CopyButton({ text, label = "نسخ", small = false }: { text: string; label?: string; small?: boolean }) {
  const [copied, copy] = useCopy();
  return (
    <button
      onClick={() => copy(text)}
      className={`group inline-flex items-center gap-2 border transition-all duration-300 ${
        small ? "px-2.5 py-1 text-[11px]" : "px-4 py-2 text-sm"
      } font-medium ${
        copied
          ? "border-teal/60 bg-teal/10 text-teal"
          : "border-line bg-ink-800/70 text-fog hover:border-amber/60 hover:text-amber hover:-translate-y-0.5"
      }`}
      aria-label={label}
    >
      <Icon name={copied ? "check" : "copy"} size={small ? 13 : 15} />
      <span>{copied ? "تم النسخ ✓" : label}</span>
    </button>
  );
}

/* ---------- code block ---------- */
export function CodeBlock({
  code, lang, filename, dir = "ltr", maxH = "max-h-[440px]",
}: {
  code: string; lang: string; filename?: string; dir?: "ltr" | "rtl"; maxH?: string;
}) {
  return (
    <div className="corner-cut border border-line bg-ink-950/80 overflow-hidden group/code">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-ink-850 px-4 py-2.5" dir="rtl">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-alert/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-teal/70" />
          </div>
          <span className="font-mono text-[11px] text-fog truncate">{filename}</span>
          <span className="font-mono text-[10px] text-dim border border-line px-1.5 py-0.5 shrink-0">{lang}</span>
        </div>
        <CopyButton text={code} small />
      </div>
      <pre
        dir={dir}
        className={`${maxH} overflow-auto p-4 md:p-5 font-mono text-[12px] md:text-[12.5px] leading-6 text-paper/90`}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

/* ---------- stat card ---------- */
export function StatCard({ label, en, value, desc }: { label: string; en: string; value: string; desc: string }) {
  return (
    <div className="reveal corner-cut relative border border-line bg-ink-850/80 p-5 transition-all duration-300 hover:border-amber/50 hover:-translate-y-1 group">
      <span className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.25em] text-dim group-hover:text-amber transition-colors">{en}</span>
      <p className="text-fog text-xs mb-3">{label}</p>
      <p className="font-display font-bold text-3xl md:text-4xl text-amber" dir="ltr">{value}</p>
      <p className="text-fog/80 text-xs mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}
