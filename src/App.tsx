import { useMemo, useState } from "react";
import { NAV, DOC_META, DEV_INFO } from "./data/doc";
import { useRevealObserver, useScrollSpy, useProgress, usePrefersReducedMotion } from "./hooks";
import { Icon } from "./components/Icons";
import { Sidebar } from "./components/Sidebar";
import { Cover } from "./components/Cover";
import { SDDSection, InfraSection, CodeSection, DesignSection, AISection } from "./components/ContentSections";
import { EvaluatorSection, PromptSection, UsageSection } from "./components/OpsSections";
import { AdditionsSection, NewAdditionsSection } from "./components/Additions";

function TopBar({ progress, onMenu }: { progress: number; onMenu: () => void }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 h-14 border-b border-line bg-ink-900/90 backdrop-blur-sm">
      <div className="h-full flex items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onMenu}
            className="lg:hidden w-9 h-9 border border-line flex items-center justify-center text-fog hover:text-amber hover:border-amber/50 transition-colors"
            aria-label="فتح الفهرس"
          >
            <Icon name="menu" size={17} />
          </button>
          <span className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-fog" dir="ltr">
            <span className="w-2 h-2 bg-teal pulse-dot rounded-full" />
            {DOC_META.file}
          </span>
          <span className="sm:hidden font-display font-semibold text-sm truncate">الوثيقة المرجعية الشاملة</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-dim hidden md:block">{DOC_META.status}</span>
          <span className="font-mono text-[11px] text-amber border border-amber/40 bg-amber/8 px-2 py-1" dir="ltr">
            v{DOC_META.version}
          </span>
        </div>
      </div>
      {/* reading progress */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-ink-800" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-l from-amber via-amber to-teal"
          style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }}
        />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative border-t-2 border-line mt-10">
      <div className="ruler-ticks" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-dim mb-3" dir="ltr">END OF DOCUMENT — REV {DOC_META.version}</p>
            <p className="font-display font-bold text-2xl md:text-3xl leading-snug max-w-xl">
              هذه وثيقة <span className="text-amber">حيّة</span> — كل تعديل جوهري في مشروعك يجب أن ينعكس عليها.
            </p>
            <p className="text-fog text-sm leading-7 mt-4 max-w-xl">
              انسخها إلى <span className="font-mono text-amber/90" dir="ltr">MASTER_ENGINEERING_REFERENCE.md</span> في
              مستودعك، قيّم قبل كل إطلاق، وراجِع محاور المُراجِع العشرة عند كل قرار معماري كبير.
            </p>
          </div>
          <div className="border border-line bg-ink-850/60 divide-y divide-line min-w-[280px]">
            {DEV_INFO.map((d, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3">
                <span className="text-bluep">
                  <Icon name={(["user", "robot", "phone", "mail"] as const)[i]} size={16} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] text-dim">{d.label}</p>
                  <p className={`text-[13px] font-semibold truncate ${d.mono ? "font-mono text-[12px]" : ""}`} dir={d.mono ? "ltr" : "rtl"}>
                    {d.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-10 pt-6 border-t border-line/60">
          <p className="font-mono text-[11px] text-dim" dir="ltr">SDLC · HA · SOLID · HEXAGONAL · AIOPS · GITOPS · ZERO TRUST · LLMOps</p>
          <p className="text-xs text-fog">أُعدّت هذه النسخة التفاعلية كمرفق هندسي للوثيقة المرجعية — {new Date().getFullYear()}</p>
        </div>
      </div>
      {/* ghost signature */}
      <div className="overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <p className="ghost-num text-[18vw] leading-[0.8] text-center whitespace-nowrap opacity-60">SDLC·REF</p>
      </div>
    </footer>
  );
}

export default function App() {
  const reduced = usePrefersReducedMotion();
  const progress = useProgress();
  const ids = useMemo(() => NAV.map((n) => n.id), []);
  const active = useScrollSpy(ids);
  const [menuOpen, setMenuOpen] = useState(false);
  useRevealObserver();

  const navigate = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="blueprint-bg noise-layer min-h-screen relative">
      <TopBar progress={progress} onMenu={() => setMenuOpen(true)} />

      {/* mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-label="إغلاق الفهرس"
          />
          <div className="absolute top-0 bottom-0 start-0 w-[300px] max-w-[85vw] bg-ink-900 border-e border-line shadow-2xl overflow-hidden">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 left-4 z-10 w-8 h-8 border border-line flex items-center justify-center text-fog hover:text-alert hover:border-alert/50 transition-colors"
              aria-label="إغلاق"
            >
              <Icon name="x" size={14} />
            </button>
            <Sidebar active={active} onNavigate={navigate} />
          </div>
        </div>
      )}

      <div className="pt-14">
        <div className="max-w-[1440px] mx-auto lg:grid lg:grid-cols-[300px_1fr]">
          {/* desktop sidebar */}
          <aside className="hidden lg:block sticky top-14 h-[calc(100vh-56px)] border-e border-line bg-ink-900/60 z-20">
            <Sidebar active={active} onNavigate={navigate} />
          </aside>

          {/* main content */}
          <main className="relative z-10 min-w-0 px-5 md:px-10 xl:px-14 max-w-6xl">
            <Cover onNavigate={navigate} />
            <SDDSection />
            <InfraSection />
            <CodeSection />
            <DesignSection />
            <AISection />
            <EvaluatorSection />
            <PromptSection />
            <UsageSection />
            <AdditionsSection />
            <NewAdditionsSection />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
