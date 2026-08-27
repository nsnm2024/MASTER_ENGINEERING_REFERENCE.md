import { useMemo, useState } from "react";
import { NAV, ADDITIONS, NEW_ADDITIONS, INFRA_LAYERS, DOC_META } from "../data/doc";
import { Icon } from "./Icons";

type Entry = { label: string; hint: string; target: string };

function buildIndex(): Entry[] {
  const e: Entry[] = [];
  NAV.forEach((n) => e.push({ label: n.title, hint: `قسم ${n.num}`, target: n.id }));
  INFRA_LAYERS.forEach((l) => e.push({ label: l.title, hint: "البنية التحتية · 02", target: "s2" }));
  ADDITIONS.forEach((a, i) => e.push({ label: a.title, hint: `إضافة ${String(i + 1).padStart(2, "0")} · 09`, target: "s9" }));
  NEW_ADDITIONS.forEach((a) => e.push({ label: a.title, hint: `جديد ${a.code} · 10`, target: "s10" }));
  return e;
}

export function Sidebar({ active, onNavigate }: { active: string; onNavigate: (id: string) => void }) {
  const [q, setQ] = useState("");
  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const s = q.trim();
    if (!s) return [];
    return index.filter((i) => i.label.includes(s) || i.hint.includes(s)).slice(0, 12);
  }, [q, index]);

  return (
    <div className="h-full flex flex-col">
      {/* doc badge */}
      <div className="border-b border-line p-5">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-teal pulse-dot" />
          <span className="font-mono text-[11px] text-fog" dir="ltr">{DOC_META.file}</span>
        </div>
        <p className="font-mono text-[10px] text-dim mt-1.5" dir="ltr">v{DOC_META.version} · {DOC_META.edition}</p>
      </div>

      {/* search */}
      <div className="p-4 border-b border-line">
        <label className="relative block">
          <span className="absolute top-1/2 -translate-y-1/2 start-3 text-dim">
            <Icon name="search" size={14} />
          </span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ابحث في الوثيقة…"
            className="w-full bg-ink-950/70 border border-line text-sm text-paper placeholder:text-dim ps-9 pe-8 py-2.5 focus:border-amber/60 focus:outline-none transition-colors"
          />
          {q && (
            <button
              onClick={() => setQ("")}
              className="absolute top-1/2 -translate-y-1/2 end-2.5 text-dim hover:text-amber"
              aria-label="مسح البحث"
            >
              <Icon name="x" size={13} />
            </button>
          )}
        </label>
        {q && (
          <div className="mt-2 border border-line bg-ink-950/90 max-h-64 overflow-auto">
            {results.length === 0 && <p className="text-xs text-dim p-3">لا نتائج مطابقة لـ «{q}»</p>}
            {results.map((r, i) => (
              <button
                key={i}
                onClick={() => { onNavigate(r.target); setQ(""); }}
                className="w-full text-start px-3 py-2 hover:bg-ink-700/50 transition-colors border-b border-line/50 last:border-0"
              >
                <span className="block text-[13px] text-paper">{r.label}</span>
                <span className="block font-mono text-[10px] text-dim mt-0.5">{r.hint}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* nav */}
      <nav className="flex-1 overflow-y-auto py-3" aria-label="فهرس الوثيقة">
        <p className="px-5 pb-2 font-mono text-[10px] tracking-[0.25em] text-dim">TABLE OF CONTENTS</p>
        <ul>
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <li key={n.id}>
                <button
                  onClick={() => onNavigate(n.id)}
                  className={`group w-full flex items-center gap-3 px-5 py-2.5 text-start transition-all duration-200 border-s-2 ${
                    isActive
                      ? "border-amber bg-ink-800/70 text-paper"
                      : "border-transparent text-fog hover:text-paper hover:bg-ink-800/40 hover:ps-6"
                  }`}
                >
                  <span className={`font-mono text-[11px] ${isActive ? "text-amber" : "text-dim group-hover:text-bluep"}`} dir="ltr">
                    {n.num}
                  </span>
                  <span className="text-[13px] font-medium leading-5 flex-1">{n.title}</span>
                  {n.isNew && (
                    <span className="font-mono text-[9px] text-teal border border-teal/50 px-1.5 py-px">NEW</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* footer */}
      <div className="border-t border-line p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-dim">{DOC_META.status}</span>
          <span className="flex gap-1" aria-hidden="true">
            <span className="w-1.5 h-1.5 bg-teal pulse-dot" />
            <span className="w-1.5 h-1.5 bg-amber pulse-dot" style={{ animationDelay: "0.4s" }} />
            <span className="w-1.5 h-1.5 bg-bluep pulse-dot" style={{ animationDelay: "0.8s" }} />
          </span>
        </div>
      </div>
    </div>
  );
}
