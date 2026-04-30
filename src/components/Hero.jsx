const oralFacts = [
  {
    value: '3.7B',
    label: 'Personas viven con enfermedades bucales en el mundo',
    source: 'OMS, 2025',
  },
  {
    value: '#1',
    label: 'La caries no tratada en dientes permanentes es la condicion mas comun',
    source: 'GBD 2021 / OMS',
  },
  {
    value: '21%',
    label: 'De adultos de 20 a 64 anos en EE. UU. tiene al menos una caries sin tratar',
    source: 'CDC, 2024',
  },
]

const clinicalSignals = [
  'Diagnostico preventivo',
  'Radiografia digital',
  'Limpieza profunda',
  'Plan de sonrisa',
]

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-[#031724] px-4 pt-32 text-white sm:px-6 lg:px-10"
    >
      <div className="hero-electric-grid absolute inset-0 -z-20" />
      <div className="hero-light-sweep absolute inset-0 -z-10" />

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="relative z-10 max-w-3xl">
          <div className="hero-kicker mb-6 inline-flex items-center gap-3 rounded-[8px] border border-[#7cd8ff]/30 bg-white/8 px-4 py-2 text-sm font-semibold text-[#c9f2ff] shadow-[0_0_30px_rgba(0,112,187,0.18)] backdrop-blur">
            <span className="hero-kicker-dot" />
            Odontologia preventiva + tecnologia clinica
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[0] text-white sm:text-6xl lg:text-7xl">
            Tu sonrisa bajo una precision que se ve.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c7dce8] sm:text-xl">
            En MyClinic1 convertimos revision, diagnostico y tratamiento en una
            experiencia clara: datos reales, lectura visual avanzada y cuidado
            dental pensado para detectar antes de que duela.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {clinicalSignals.map((signal) => (
              <div
                className="hero-signal rounded-[8px] border border-white/10 bg-white/7 px-4 py-3 text-sm font-semibold text-[#effaff] backdrop-blur"
                key={signal}
              >
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-orbit-stage relative min-h-[580px] w-full">
          <div className="dental-engine absolute left-1/2 top-1/2 h-[min(76vw,620px)] w-[min(76vw,620px)] -translate-x-1/2 -translate-y-1/2">
            <div className="engine-ring engine-ring-one" />
            <div className="engine-ring engine-ring-two" />
            <div className="engine-ring engine-ring-three" />

            <div className="tooth-scan">
              <div className="tooth-core">
                <div className="tooth-crown" />
                <div className="tooth-root tooth-root-left" />
                <div className="tooth-root tooth-root-right" />
              </div>
              <div className="scan-band scan-band-one" />
              <div className="scan-band scan-band-two" />
              <div className="scan-data-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="jaw-map" aria-hidden="true">
              {Array.from({ length: 28 }, (_, index) => (
                <span
                  className="jaw-node"
                  style={{
                    '--node-index': index,
                    '--node-angle': `${index * 12.85}deg`,
                  }}
                  key={index}
                />
              ))}
            </div>

            <div className="pulse-matrix" aria-hidden="true">
              {Array.from({ length: 42 }, (_, index) => (
                <span
                  style={{
                    '--pulse-index': index,
                    '--pulse-column': index % 7,
                    '--pulse-row': Math.floor(index / 7),
                  }}
                  key={index}
                />
              ))}
            </div>
          </div>

          <div className="hero-facts-panel relative z-10 ml-auto grid max-w-sm gap-3 rounded-[8px] border border-[#7cd8ff]/24 bg-[#041f31]/78 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            {oralFacts.map((fact) => (
              <article
                className="hero-fact rounded-[8px] border border-white/10 bg-white/8 p-4"
                key={fact.value}
              >
                <div className="text-3xl font-black text-[#7cd8ff]">
                  {fact.value}
                </div>
                <p className="mt-2 text-sm leading-6 text-[#e5f7ff]">
                  {fact.label}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7fb3cd]">
                  {fact.source}
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
