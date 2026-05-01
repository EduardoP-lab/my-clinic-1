const oralFacts = [
  {
    value: '3.7B',
    label: 'Casos globales',
  },
  {
    value: '#1',
    label: 'Caries no tratada',
  },
  {
    value: '21%',
    label: 'Sin tratar',
  },
]

const clinicalSignals = [
  {
    title: 'Diagnostico preventivo',
    detail: 'Revision clinica completa para detectar cambios antes de que aparezca dolor.',
  },
  {
    title: 'Radiografia digital',
    detail: 'Lectura visual clara para explicar hallazgos y planear tratamientos con precision.',
  },
  {
    title: 'Limpieza profunda',
    detail: 'Control de placa, encias y habitos para sostener resultados en el tiempo.',
  },
  {
    title: 'Plan de sonrisa',
    detail: 'Opciones esteticas y funcionales organizadas por prioridad y objetivo.',
  },
]

function HeroBackground() {
  return (
    <div className="hero-css-bg absolute inset-0 -z-20" aria-hidden="true">
      <div className="hero-static-field" />
      <div className="hero-diagnostics-stage">
        <svg
          className="hero-arch-map"
          viewBox="0 0 900 760"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="heroStroke" x1="140" y1="120" x2="760" y2="660">
              <stop offset="0" stopColor="#e8fdff" />
              <stop offset="0.48" stopColor="#65e3ff" />
              <stop offset="1" stopColor="#0070bb" />
            </linearGradient>
            <radialGradient id="heroCore" cx="52%" cy="46%" r="58%">
              <stop offset="0" stopColor="#dffcff" stopOpacity="0.22" />
              <stop offset="0.52" stopColor="#32d5ff" stopOpacity="0.08" />
              <stop offset="1" stopColor="#0070bb" stopOpacity="0" />
            </radialGradient>
          </defs>

          <ellipse className="hero-core-glow" cx="510" cy="388" rx="245" ry="292" />

          <g className="hero-depth-rings">
            <ellipse cx="500" cy="388" rx="300" ry="110" />
            <ellipse cx="500" cy="388" rx="236" ry="86" />
            <ellipse cx="500" cy="388" rx="168" ry="61" />
          </g>

          <g className="hero-jaw-wire">
            <path d="M228 318C268 170 375 102 504 116C648 132 752 250 744 410C737 551 642 650 512 662C374 674 263 594 228 470C215 423 214 370 228 318Z" />
            <path d="M315 329C348 238 418 197 506 203C606 210 674 286 672 398C670 504 602 579 511 587C414 594 337 537 312 447C301 406 302 366 315 329Z" />
            <path d="M404 348C424 306 460 286 506 289C561 292 598 333 598 394C598 455 561 499 509 502C454 506 412 473 398 424C391 398 393 371 404 348Z" />
          </g>

          <g className="hero-tooth-wire">
            <path d="M454 255C474 239 529 239 550 255C580 278 571 341 548 385C535 410 532 463 515 493C508 506 496 506 490 493C473 462 471 410 458 385C435 341 424 278 454 255Z" />
            <path d="M458 318C486 335 522 335 550 318" />
            <path d="M472 401C487 414 522 414 537 401" />
          </g>

          <g className="hero-clinical-links">
            <path d="M506 288L644 220" />
            <path d="M550 388L708 420" />
            <path d="M474 408L308 514" />
            <path d="M458 318L282 268" />
          </g>

          <g className="hero-diagnostic-nodes">
            <circle cx="644" cy="220" r="7" />
            <circle cx="708" cy="420" r="7" />
            <circle cx="308" cy="514" r="7" />
            <circle cx="282" cy="268" r="7" />
            <circle cx="506" cy="288" r="5" />
            <circle cx="550" cy="388" r="5" />
            <circle cx="474" cy="408" r="5" />
            <circle cx="458" cy="318" r="5" />
          </g>

          <g className="hero-status-bars">
            <rect x="636" y="192" width="86" height="6" rx="3" />
            <rect x="636" y="207" width="58" height="6" rx="3" />
            <rect x="704" y="444" width="108" height="6" rx="3" />
            <rect x="704" y="459" width="72" height="6" rx="3" />
            <rect x="188" y="514" width="96" height="6" rx="3" />
            <rect x="214" y="529" width="70" height="6" rx="3" />
          </g>
        </svg>

        <div className="hero-scan-volume">
          <span />
          <span />
        </div>
        <div className="hero-scan-plane" />
        <div className="hero-metric-column">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="hero-depth-vignette" />
    </div>
  )
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-[#031724] px-4 pt-32 text-white sm:px-6 lg:px-10"
    >
      <HeroBackground />

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        <div className="hero-copy-reveal relative z-10 max-w-5xl">
          <div className="hero-kicker mb-6 inline-flex items-center gap-3 rounded-[8px] border border-[#7cd8ff]/30 bg-white/8 px-4 py-2 text-sm font-semibold text-[#c9f2ff] shadow-[0_0_30px_rgba(0,112,187,0.18)] backdrop-blur">
            <span className="hero-kicker-dot" />
            Odontologia preventiva + tecnologia clinica
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[0] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Tu sonrisa bajo una precision que se ve.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#c7dce8] sm:text-xl">
            En MyClinic1 convertimos revision, diagnostico y tratamiento en una
            experiencia clara: datos reales, lectura visual avanzada y cuidado
            dental pensado para detectar antes de que duela.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {clinicalSignals.map((signal) => (
              <div
                className="hero-signal min-h-32 rounded-[8px] border border-white/10 bg-white/7 p-5 text-left backdrop-blur"
                key={signal.title}
              >
                <h3 className="text-base font-black text-[#effaff]">
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#bdd5e2]">
                  {signal.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-orbit-stage relative flex min-h-[580px] w-full items-center justify-end">
          <div className="hero-facts-panel hero-panel-reveal relative z-10 ml-auto w-full max-w-[430px] rounded-[8px] border border-[#7cd8ff]/24 bg-[#041f31]/72 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <div className="hero-visual-card">
              <div className="hero-panel-topline">
                <span>Escaneo preventivo</span>
                <span>Activo</span>
              </div>

              <div className="hero-scan-display">
                <div className="hero-scan-ring">
                  <span />
                  <span />
                  <span />
                  <div className="hero-scan-tooth" />
                </div>
                <div className="hero-scan-readout">
                  <strong>92</strong>
                  <span>Indice claro</span>
                </div>
              </div>

              <div className="hero-mini-bars">
                <span />
                <span />
                <span />
              </div>
            </div>

            {oralFacts.map((fact) => (
              <article
                className="hero-fact rounded-[8px] border border-white/10 bg-white/8 p-4"
                key={fact.value}
              >
                <div className="text-3xl font-black leading-none text-[#7cd8ff]">
                  {fact.value}
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#bdeeff]">
                  {fact.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
