import { useState } from "react";
import { ADDITIONS, NEW_ADDITIONS, NEW_TAGS, COVERAGE_TABLE } from "../data/doc";
import { Icon } from "./Icons";
import { SectionShell, Chip } from "./ui";

/* ================= 09 — ten proposed additions (accordion) ================= */
export function AdditionsSection() {
  const [open, setOpen] = useState<string | null>("a1");

  return (
    <SectionShell
      id="s9" num="09" en="PROPOSED ADD-ONS" tone="blue"
      title="الإضافات العشر المقترحة على الوثيقة"
      desc="عشر حزم توسعة تعمّق محاور الوثيقة الأصلية — من الأمان المتقدم حتى FinOps وإدارة الحوادث. افتح أي حزمة لاستعراض بنودها وأدواتها."
    >
      <div className="space-y-3">
        {ADDITIONS.map((a, i) => {
          const isOpen = open === a.id;
          return (
            <div
              key={a.id}
              className={`reveal border transition-all duration-300 ${isOpen ? "border-bluep/60 bg-ink-850/80" : "border-line bg-ink-850/50 hover:border-bluep/40"}`}
              style={{ transitionDelay: `${Math.min(i * 50, 300)}ms` }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : a.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-4 px-5 py-4 text-start"
              >
                <span className={`font-mono text-sm shrink-0 w-9 h-9 border flex items-center justify-center transition-colors ${isOpen ? "border-bluep text-bluep" : "border-line text-dim"}`} dir="ltr">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-display font-semibold text-base md:text-lg leading-snug">{a.title}</span>
                  <span className="block font-mono text-[10px] text-dim tracking-[0.2em] mt-0.5" dir="ltr">{a.en} · {a.items.length} بنود</span>
                </span>
                <Chip tone={isOpen ? "amber" : "dim"}>{a.tag}</Chip>
                <span className={`text-dim transition-transform duration-300 shrink-0 ${isOpen ? "rotate-45 text-amber" : ""}`}>
                  <Icon name="plus" size={18} />
                </span>
              </button>
              <div className={`acc-body ${isOpen ? "open" : ""}`}>
                <div className="acc-inner">
                  <div className="px-5 pb-5 pt-1">
                    <p className="text-fog text-sm leading-7 mb-4 border-s-2 border-bluep/50 ps-4">{a.intro}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {a.items.map((it) => (
                        <div key={it.t} className="border border-line/70 bg-ink-900/50 p-4 hover:border-bluep/40 hover:-translate-y-0.5 transition-all duration-200">
                          <div className="flex items-start gap-2.5">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-bluep shrink-0" aria-hidden="true" />
                            <div>
                              <p className="text-sm font-semibold text-paper">{it.t}</p>
                              <p className="text-fog text-[13px] leading-6 mt-1">{it.d}</p>
                              <div className="flex flex-wrap gap-1.5 mt-2.5">
                                {it.tools.map((t) => <Chip key={t} tone="dim">{t}</Chip>)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

/* ================= 10 — reviewer's new additions (the answer) ================= */
export function NewAdditionsSection() {
  return (
    <SectionShell
      id="s10" num="10" en="REVIEWER ADDENDUM — NEW" tone="teal"
      title="إضافات المُراجِع: ما الذي تفتقده الوثيقة؟"
      desc="إجابة سؤال «هل من إضافات؟» — عشرة محاور جديدة كلياً لم تغطّها الوثيقة الأصلية ولا الإضافات المقترحة عليها، مرتبة حسب أثرها على نضج المشروع."
    >
      {/* direct answer banner */}
      <div className="reveal relative border-2 border-teal/50 bg-teal/5 p-6 md:p-8 overflow-hidden">
        <span className="stamp absolute top-5 left-5 md:top-7 md:left-8 font-mono text-xs px-3 py-1.5 tracking-[0.3em] hidden sm:block">ADDENDUM</span>
        <h3 className="font-display font-bold text-xl md:text-2xl text-teal">نعم — هناك 10 محاور مفقودة.</h3>
        <p className="mt-3 text-fog text-sm md:text-[15px] leading-8 max-w-3xl">
          الوثيقة الأصلية وإضافاتها العشر تُغطّي <strong className="text-paper">الهندسة التشغيلية</strong> بإتقان:
          البنية، الكود، الأمان التقليدي، المراقبة، والاختبار. لكنها تتوقف عند حافة 2023 —
          بينما مشاريع 2026 تحتاج <strong className="text-teal">حوكمة الذكاء الاصطناعي</strong> الذي يكتب كودها،
          و<strong className="text-teal">قياساً رقمياً</strong> لكل وعد (SLOs/DORA)، و<strong className="text-teal">تسليماً تدريجياً</strong>
          يجعل الـ 99.99% حقيقة قابلة للإثبات لا مجرد بند في SDD. المحاور التالية تسد هذه الفجوات بنداً بنداً.
        </p>
      </div>

      {/* tags row */}
      <div className="reveal flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.25em] text-dim me-2" dir="ltr">COVERAGE TAGS:</span>
        {NEW_TAGS.map((t) => <Chip key={t} tone="teal">{t}</Chip>)}
      </div>

      {/* new additions grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {NEW_ADDITIONS.map((n, i) => (
          <article
            key={n.id}
            className="reveal group relative corner-cut border border-line bg-ink-850/80 p-5 md:p-6 transition-all duration-300 hover:border-teal/60 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_-18px_rgba(62,201,167,0.3)]"
            style={{ transitionDelay: `${(i % 4) * 70}ms` }}
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="font-mono text-[11px] text-teal border border-teal/40 bg-teal/8 px-2 py-0.5" dir="ltr">{n.code}</span>
              <Chip tone="teal">{n.tag}</Chip>
            </div>
            <h3 className="font-display font-semibold text-lg md:text-xl leading-snug group-hover:text-teal transition-colors">{n.title}</h3>
            <p className="mt-2.5 text-[13px] text-amber/90 leading-6 border-s-2 border-amber/50 ps-3">
              <span className="font-semibold">لماذا الآن؟ </span>{n.why}
            </p>
            <ul className="mt-3.5 space-y-2">
              {n.items.map((it) => (
                <li key={it} className="flex gap-2.5 text-[13px] text-fog leading-6">
                  <span className="mt-[9px] w-1 h-1 bg-teal shrink-0" aria-hidden="true" />
                  {it}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-line/60">
              {n.tools.map((t) => <Chip key={t} tone="dim">{t}</Chip>)}
            </div>
          </article>
        ))}
      </div>

      {/* coverage table */}
      <div className="reveal">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="font-display font-semibold text-lg md:text-xl">مصفوفة التغطية: قبل الإلحاق وبعده</h3>
          <span className="font-mono text-[10px] text-dim" dir="ltr">COVERAGE MATRIX · SCALE 0–5</span>
        </div>
        <div className="border border-line overflow-x-auto">
          <table className="w-full min-w-[620px] text-sm">
            <thead>
              <tr className="bg-ink-900/80 border-b border-line">
                <th className="text-start font-medium text-fog px-4 py-3">المحور الهندسي</th>
                <th className="font-medium text-dim px-4 py-3">الوثيقة الأصلية</th>
                <th className="font-medium text-bluep px-4 py-3">+ الإضافات العشر</th>
                <th className="font-medium text-teal px-4 py-3">+ إضافات المُراجِع</th>
              </tr>
            </thead>
            <tbody>
              {COVERAGE_TABLE.map((r, ri) => (
                <tr key={r.axis} className={`border-b border-line/60 last:border-0 transition-colors hover:bg-ink-800/40 ${ri % 2 ? "bg-ink-950/30" : ""}`}>
                  <td className="px-4 py-3 text-paper/90">{r.axis}</td>
                  <td className="px-4 py-3"><Dots n={r.doc} color="var(--color-dim)" /></td>
                  <td className="px-4 py-3"><Dots n={r.add} color="var(--color-bluep)" /></td>
                  <td className="px-4 py-3"><Dots n={r.rev} color="var(--color-teal)" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-mono text-[11px] text-dim mt-3" dir="ltr">
          * SCALE: 0 = غير مغطى · 5 = مغطى بعمق قابل للتنفيذ
        </p>
      </div>
    </SectionShell>
  );
}

function Dots({ n, color }: { n: number; color: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className="w-2.5 h-2.5 rotate-45 transition-transform duration-300 hover:scale-125"
          style={{ background: i < n ? color : "var(--color-ink-700)", outline: `1px solid ${i < n ? "transparent" : "var(--color-line)"}` }}
        />
      ))}
      <span className="font-mono text-[11px] text-fog ms-1.5">{n}/5</span>
    </span>
  );
}
