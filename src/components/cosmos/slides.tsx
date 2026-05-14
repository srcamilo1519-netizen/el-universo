import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] as const },
};

export function SlideHero({ onNext, onAi }: { onNext: () => void; onAi: () => void }) {
  return (
    <section className="cosmos-slide relative overflow-hidden">
      {/* Galaxy disk */}
      <div
        className="galaxy-disk"
        style={{
          width: "120vh",
          height: "120vh",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute float"
        style={{
          width: "30vh",
          height: "30vh",
          right: "8vw",
          top: "20vh",
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, oklch(0.7 0.15 220), oklch(0.15 0.05 260) 70%)",
          boxShadow: "inset -20px -20px 60px oklch(0 0 0 / 0.6), 0 0 80px oklch(0.4 0.15 240 / 0.3)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p {...fade} className="eyebrow mb-8">
          ✦ Una experiencia cinematográfica del cosmos
        </motion.p>
        <motion.h1
          {...fade}
          transition={{ ...fade.transition, delay: 0.1 }}
          className="hero-title text-glow"
        >
          Origen y evolución
          <br />
          <span className="italic font-extralight">del universo</span>
        </motion.h1>
        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.25 }}
          className="mt-10 max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed"
        >
          Un recorrido cinematográfico desde el nacimiento del cosmos hasta la
          expansión del universo moderno. 13.800 millones de años en una sola experiencia.
        </motion.p>
        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-4 flex-wrap"
        >
          <button onClick={onNext} className="btn-cosmic btn-cosmic-primary">
            Iniciar recorrido <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={onAi} className="btn-cosmic">
            <Sparkles className="w-4 h-4" /> Explorar con COSMO AI
          </button>
        </motion.div>
      </div>

      <motion.div
        {...fade}
        transition={{ ...fade.transition, delay: 0.8 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3 text-foreground/40 text-xs uppercase tracking-[0.3em]"
      >
        <span>Desliza para explorar</span>
        <span className="scroll-hint">→</span>
      </motion.div>
    </section>
  );
}

export function SlideUniverse() {
  return (
    <section className="cosmos-slide">
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <motion.p {...fade} className="eyebrow mb-6">02 / Fundamentos</motion.p>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="text-5xl lg:text-7xl font-light leading-[1.05] tracking-tight">
            ¿Qué es <br /><span className="italic">el universo?</span>
          </motion.h2>
          <motion.p {...fade} transition={{ ...fade.transition, delay: 0.2 }} className="mt-8 text-foreground/70 leading-relaxed text-lg">
            El universo es la totalidad del espacio, el tiempo, la materia y la
            energía que existen. Una entidad geométrica en expansión continua,
            descrita por la cosmología moderna a través de la relatividad
            general y la mecánica cuántica.
          </motion.p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          {[
            { k: "Espacio-tiempo", v: "Una sola entidad geométrica de cuatro dimensiones donde la gravedad emerge como curvatura.", n: "01" },
            { k: "Materia", v: "Apenas el 5% del contenido total. Lo demás es materia oscura y energía oscura.", n: "02" },
            { k: "Expansión", v: "El espacio mismo se expande. Las galaxias se alejan a velocidades proporcionales a su distancia.", n: "03" },
            { k: "Cosmología", v: "La rama de la física que estudia el universo a sus mayores escalas y su evolución temporal.", n: "04" },
          ].map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="data-panel p-6 rounded-sm hover:border-cosmos-cyan/40 transition-all duration-500"
            >
              <span className="font-mono text-xs text-cosmos-cyan tracking-widest">{c.n}</span>
              <h3 className="mt-3 text-xl font-light">{c.k}</h3>
              <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{c.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SlideBigBang() {
  return (
    <section className="cosmos-slide overflow-hidden">
      {/* BB visual */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <div className="bigbang-core glow-cyan" />
          <div className="shockwave" style={{ left: "50%", top: "50%", marginLeft: -30, marginTop: -30 }} />
          <div className="shockwave" style={{ left: "50%", top: "50%", marginLeft: -30, marginTop: -30, animationDelay: "2s" }} />
          <div className="shockwave" style={{ left: "50%", top: "50%", marginLeft: -30, marginTop: -30, animationDelay: "4s" }} />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <motion.p {...fade} className="eyebrow mb-6">03 / El origen</motion.p>
        <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="text-6xl lg:text-8xl font-extralight tracking-tight text-glow">
          Big Bang
        </motion.h2>
        <motion.blockquote
          {...fade}
          transition={{ ...fade.transition, delay: 0.3 }}
          className="mt-12 text-2xl lg:text-3xl font-light leading-snug italic text-foreground/85"
        >
          “El Big Bang no fue una explosión en el espacio,
          <br /> sino la <span className="text-cosmos-cyan not-italic">expansión del propio espacio-tiempo</span>.”
        </motion.blockquote>
        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.5 }}
          className="mt-10 max-w-2xl mx-auto text-foreground/60 leading-relaxed"
        >
          Hace 13.800 millones de años, en un estado de densidad y temperatura
          extremas, comenzó la expansión que dio origen a toda la materia,
          energía, espacio y tiempo que conocemos.
        </motion.p>
      </div>
    </section>
  );
}

export function SlideEvidence() {
  const items = [
    { title: "Expansión del universo", desc: "Hubble (1929) demostró que las galaxias se alejan unas de otras con velocidades proporcionales a su distancia." },
    { title: "Radiación cósmica de fondo", desc: "Descubierta en 1965, es la luz remanente del universo primitivo a 2,725 K, mapeada por COBE, WMAP y Planck." },
    { title: "Abundancia de elementos ligeros", desc: "Las proporciones observadas de hidrógeno, helio y litio coinciden con las predicciones de la nucleosíntesis primordial." },
    { title: "Corrimiento al rojo cosmológico", desc: "La luz de las galaxias distantes se desplaza hacia el rojo, confirmando la expansión a escalas cosmológicas." },
  ];
  return (
    <section className="cosmos-slide">
      <div className="relative z-10 max-w-7xl w-full">
        <motion.p {...fade} className="eyebrow mb-6">04 / Evidencias observacionales</motion.p>
        <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="text-5xl lg:text-7xl font-light tracking-tight max-w-3xl">
          Cuatro pilares <br />de una teoría sólida
        </motion.h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
              className="data-panel p-7 min-h-[260px] rounded-sm flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-500"
            >
              <div>
                <span className="font-mono text-cosmos-cyan text-xs">EVIDENCIA / 0{i + 1}</span>
                <h3 className="mt-4 text-xl font-light leading-snug">{it.title}</h3>
              </div>
              <p className="text-sm text-foreground/60 leading-relaxed mt-4">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TIMELINE = [
  { t: "0 s", title: "Singularidad inicial", desc: "Densidad y temperatura extremas. Las cuatro fuerzas fundamentales unificadas." },
  { t: "10⁻³⁶ s", title: "Inflación cósmica", desc: "Expansión exponencial por un factor mínimo de 10²⁶." },
  { t: "10⁻⁶ s", title: "Formación de partículas", desc: "Quarks se combinan en protones y neutrones." },
  { t: "3 min", title: "Nucleosíntesis primordial", desc: "Se forman los primeros núcleos de hidrógeno, helio y litio." },
  { t: "380 000 a", title: "Formación de átomos", desc: "Recombinación: la luz se libera. Origen del CMB." },
  { t: "100 M a", title: "Edad oscura", desc: "Sólo gas neutro frío. Aún no hay estrellas." },
  { t: "200 M a", title: "Primeras estrellas", desc: "Población III. Comienza la reionización del cosmos." },
  { t: "1 000 M a", title: "Formación de galaxias", desc: "Se ensamblan las primeras estructuras gravitacionales." },
  { t: "1 500 M a", title: "Agujeros negros supermasivos", desc: "Crecen en los centros galácticos. Aparecen los cuásares." },
  { t: "9 200 M a", title: "Sistema solar", desc: "Colapso de una nebulosa molecular forma el Sol y los planetas." },
  { t: "9 260 M a", title: "Formación de la Tierra", desc: "Acreción y diferenciación. Aparece la Luna tras el impacto de Theia." },
  { t: "13 800 M a", title: "Universo moderno", desc: "Expansión acelerada dominada por la energía oscura." },
];

export function SlideTimeline() {
  return (
    <section className="cosmos-slide !p-0">
      <div className="relative z-10 w-full h-full flex flex-col">
        <div className="px-12 lg:px-24 pt-24">
          <motion.p {...fade} className="eyebrow mb-6">05 / Línea temporal cósmica</motion.p>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="text-5xl lg:text-7xl font-light tracking-tight">
            13.800 millones de años,<br />
            <span className="italic text-cosmos-cyan">una sola línea</span>
          </motion.h2>
        </div>

        <div className="flex-1 relative overflow-x-auto overflow-y-hidden mt-20">
          <div className="absolute left-0 right-0 top-1/2 timeline-line" />
          <div className="flex h-full items-center px-12 lg:px-24 gap-12 min-w-max pb-20">
            {TIMELINE.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="relative flex-shrink-0 w-72"
                style={{ marginTop: i % 2 === 0 ? "-180px" : "180px" }}
              >
                <div className={`absolute left-1/2 -translate-x-1/2 ${i % 2 === 0 ? "top-full" : "bottom-full"}`}>
                  <div className="w-px h-32 bg-gradient-to-b from-cosmos-cyan to-transparent" />
                  <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cosmos-cyan glow-cyan"
                       style={{ [i % 2 === 0 ? "top" : "bottom"]: "100%", transform: "translate(-50%, -50%)" }} />
                </div>
                <div className="data-panel p-5 rounded-sm">
                  <span className="font-mono text-cosmos-cyan text-xs tracking-widest">{e.t}</span>
                  <h3 className="mt-2 text-lg font-light">{e.title}</h3>
                  <p className="mt-2 text-xs text-foreground/60 leading-relaxed">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SlideEvolution() {
  const items = [
    { k: "Estrellas", v: "Hornos nucleares que sintetizan los elementos pesados del universo." },
    { k: "Galaxias", v: "Sistemas gravitacionales de millones a billones de estrellas, gas y materia oscura." },
    { k: "Agujeros negros", v: "Regiones de gravedad extrema que esculpen la evolución galáctica." },
    { k: "Nebulosas", v: "Cunas y cementerios estelares: aquí nacen y mueren las estrellas." },
    { k: "Exoplanetas", v: "Más de 5.500 mundos confirmados orbitando otras estrellas." },
    { k: "Cúmulos", v: "Las estructuras gravitacionales más grandes ligadas del universo." },
  ];
  return (
    <section className="cosmos-slide">
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <motion.p {...fade} className="eyebrow mb-6">06 / Evolución</motion.p>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="text-5xl lg:text-6xl font-light tracking-tight">
            La materia<br /><span className="italic">se organiza</span>
          </motion.h2>
          <motion.p {...fade} transition={{ ...fade.transition, delay: 0.2 }} className="mt-8 text-foreground/65 leading-relaxed">
            Tras el Big Bang, la gravedad esculpió un universo en jerarquías:
            estrellas, galaxias, cúmulos y supercúmulos formaron la red cósmica
            que observamos hoy.
          </motion.p>
        </div>
        <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.k}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="data-panel p-6 rounded-sm group hover:border-cosmos-violet/40 transition-all duration-500"
            >
              <h3 className="text-xl font-light text-cosmos-cyan group-hover:text-white transition">{it.k}</h3>
              <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{it.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SlideModern() {
  const stats = [
    { n: "13,8", u: "mil M años", l: "Edad del universo" },
    { n: "68%", u: "del cosmos", l: "Energía oscura" },
    { n: "27%", u: "del cosmos", l: "Materia oscura" },
    { n: "5%", u: "del cosmos", l: "Materia bariónica" },
    { n: "2 ×10¹²", u: "galaxias", l: "Universo observable" },
    { n: "46 500", u: "M años luz", l: "Radio observable" },
  ];
  return (
    <section className="cosmos-slide">
      <div className="relative z-10 max-w-7xl w-full">
        <motion.p {...fade} className="eyebrow mb-6">07 / Universo actual</motion.p>
        <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="text-5xl lg:text-7xl font-light tracking-tight max-w-3xl">
          El cosmos en cifras
        </motion.h2>
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="data-panel p-8 rounded-sm"
            >
              <p className="font-mono text-xs text-cosmos-cyan tracking-widest">{s.l.toUpperCase()}</p>
              <p className="mt-6 text-5xl lg:text-6xl font-extralight tracking-tight text-glow">
                {s.n}
              </p>
              <p className="mt-1 text-xs text-foreground/50 uppercase tracking-widest">{s.u}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-cosmos-cyan via-cosmos-violet to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SlideAI({ onAi }: { onAi: () => void }) {
  return (
    <section className="cosmos-slide">
      <div className="relative z-10 max-w-5xl text-center">
        <motion.p {...fade} className="eyebrow mb-6">08 / Inteligencia educativa</motion.p>
        <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="text-6xl lg:text-8xl font-extralight tracking-tight text-glow">
          COSMO <span className="italic text-cosmos-cyan">AI</span>
        </motion.h2>
        <motion.p {...fade} transition={{ ...fade.transition, delay: 0.2 }} className="mt-8 max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed">
          Una interfaz holográfica entrenada con cosmología contemporánea.
          Más de cien dominios científicos respondidos con rigor académico.
          Pregúntale lo que quieras sobre el cosmos.
        </motion.p>
        <motion.div {...fade} transition={{ ...fade.transition, delay: 0.4 }} className="mt-12">
          <button onClick={onAi} className="btn-cosmic btn-cosmic-primary">
            <Sparkles className="w-4 h-4" /> Conversar con COSMO AI
          </button>
        </motion.div>
        <motion.div {...fade} transition={{ ...fade.transition, delay: 0.55 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {["Big Bang", "Materia oscura", "Agujeros negros", "James Webb", "Multiverso", "Relatividad", "Exoplanetas", "Energía oscura"].map((t) => (
            <div key={t} className="glass px-4 py-3 rounded-full text-xs text-foreground/70">
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function SlideEnd() {
  return (
    <section className="cosmos-slide">
      <div
        className="galaxy-disk"
        style={{
          width: "180vh",
          height: "180vh",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.6,
        }}
      />
      <div className="relative z-10 max-w-4xl text-center">
        <motion.p {...fade} className="eyebrow mb-6">09 / Conclusión</motion.p>
        <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="text-4xl lg:text-6xl font-light leading-tight tracking-tight">
          “El universo tiene una historia larga y compleja
          que comenzó hace miles de millones de años
          y continúa <span className="italic text-cosmos-cyan">evolucionando</span>.”
        </motion.h2>
        <motion.div {...fade} transition={{ ...fade.transition, delay: 0.4 }} className="mt-20 holo-line w-40 mx-auto" />
        <motion.div {...fade} transition={{ ...fade.transition, delay: 0.5 }} className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
          <div>
            <p className="eyebrow mb-3">Developer</p>
            <p className="text-lg font-light">Adrian</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Colaboradores</p>
            <p className="text-lg font-light">Matsuel · Manuel</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Referencias</p>
            <p className="text-sm text-foreground/60 leading-relaxed">NASA · ESA · JWST · National Geographic</p>
          </div>
        </motion.div>
        <motion.p {...fade} transition={{ ...fade.transition, delay: 0.7 }} className="mt-16 text-xs text-foreground/40 tracking-[0.3em] uppercase">
          Una experiencia cinematográfica del cosmos · 2026
        </motion.p>
      </div>
    </section>
  );
}
