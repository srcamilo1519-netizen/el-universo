import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { CosmicBackground } from "@/components/cosmos/CosmicBackground";
import { CosmoAI } from "@/components/cosmos/CosmoAI";
import {
  SlideHero,
  SlideUniverse,
  SlideBigBang,
  SlideEvidence,
  SlideTimeline,
  SlideEvolution,
  SlideModern,
  SlideAI,
  SlideEnd,
} from "@/components/cosmos/slides";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Origen y evolución del universo · Una experiencia cinematográfica" },
      {
        name: "description",
        content:
          "Recorrido cinematográfico horizontal por 13.800 millones de años de evolución cósmica, desde el Big Bang hasta el universo moderno, con la IA educativa COSMO AI.",
      },
      { property: "og:title", content: "Origen y evolución del universo" },
      { property: "og:description", content: "Documental interactivo AAA del cosmos." },
    ],
  }),
  component: Index,
});

const SLIDE_COUNT = 9;

function Index() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [aiOpen, setAiOpen] = useState(false);

  // Track active slide
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const idx = Math.round(el.scrollLeft / window.innerWidth);
        setActive(idx);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Vertical wheel -> horizontal scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      // Use the larger axis. Convert to horizontal.
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY * 1.4, behavior: "auto" });
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (aiOpen) return;
      const el = scrollRef.current;
      if (!el) return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        el.scrollTo({ left: (active + 1) * window.innerWidth, behavior: "smooth" });
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        el.scrollTo({ left: (active - 1) * window.innerWidth, behavior: "smooth" });
      } else if (e.key === "Home") {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else if (e.key === "End") {
        el.scrollTo({ left: SLIDE_COUNT * window.innerWidth, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, aiOpen]);

  const goTo = (i: number) => {
    scrollRef.current?.scrollTo({ left: i * window.innerWidth, behavior: "smooth" });
  };

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <CosmicBackground />

      {/* Top nav */}
      <header className="top-nav">
        <div className="flex items-center gap-3 glass px-4 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-cosmos-cyan glow-cyan" />
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Cosmos · 2026</span>
        </div>
        <button
          onClick={() => setAiOpen(true)}
          className="glass px-4 py-2 rounded-full flex items-center gap-2 text-xs hover:border-cosmos-cyan/50 transition"
        >
          <Sparkles className="w-3.5 h-3.5 text-cosmos-cyan" />
          <span className="font-medium tracking-wide">COSMO AI</span>
        </button>
      </header>

      {/* Horizontal scroller */}
      <main ref={scrollRef} className="cosmos-scroll">
        <div className="cosmos-track">
          <SlideHero onNext={() => goTo(1)} onAi={() => setAiOpen(true)} />
          <SlideUniverse />
          <SlideBigBang />
          <SlideEvidence />
          <SlideTimeline />
          <SlideEvolution />
          <SlideModern />
          <SlideAI onAi={() => setAiOpen(true)} />
          <SlideEnd />
        </div>
      </main>

      {/* Progress */}
      <div className="progress-track">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`progress-dot ${active === i ? "active" : ""}`}
            aria-label={`Ir a la escena ${i + 1}`}
          />
        ))}
      </div>

      <CosmoAI open={aiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}
