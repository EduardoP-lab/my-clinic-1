const serviceStats = [
  {
    value: '6',
    label: 'areas clinicas',
  },
  {
    value: '30-90',
    label: 'min por cita comun',
  },
  {
    value: '1-2',
    label: 'citas en tratamientos simples',
  },
]

const services = [
  {
    title: 'Diagnostico integral',
    description:
      'Revision clinica, fotografias intraorales y plan inicial explicado por prioridad.',
    time: '45-60 min',
    signal: 'Primera visita',
    tone: 'blue',
  },
  {
    title: 'Limpieza y prevencion',
    description:
      'Control de placa, pulido y orientacion de habitos para mantenimiento diario.',
    time: '40-60 min',
    signal: 'Seguimiento',
    tone: 'mint',
  },
  {
    title: 'Resinas esteticas',
    description:
      'Restauraciones del color del diente para caries pequenas o fracturas moderadas.',
    time: '45-90 min',
    signal: 'Funcion + estetica',
    tone: 'white',
  },
  {
    title: 'Blanqueamiento',
    description:
      'Aclaramiento supervisado con evaluacion previa de encia, esmalte y sensibilidad.',
    time: '60-90 min',
    signal: 'Cosmetico',
    tone: 'blue',
  },
  {
    title: 'Endodoncia',
    description:
      'Tratamiento del conducto cuando existe dolor profundo, infeccion o lesion pulpar.',
    time: '1-2 citas',
    signal: 'Dolor dental',
    tone: 'white',
  },
  {
    title: 'Ortodoncia y alineadores',
    description:
      'Planeacion gradual para mejorar mordida, alineacion y estabilidad de la sonrisa.',
    time: '6-18 meses',
    signal: 'Plan progresivo',
    tone: 'mint',
  },
]

function Services() {
  return (
    <section
      id="servicios"
      className="services-section relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="services-intro">
          <p className="services-kicker">Servicios dentales</p>
          <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-[0] text-[#062338] sm:text-5xl">
            Cuidado claro, medible y pensado por etapas.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#4d6574] sm:text-lg">
            Cada servicio combina diagnostico, explicacion visual y tiempos de
            cita realistas para que sepas que esperar antes de iniciar.
          </p>

          <div className="services-stats mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {serviceStats.map((stat) => (
              <div className="services-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className={`service-card service-card-${service.tone}`}
              key={service.title}
            >
              <div className="service-card-icon" aria-hidden="true">
                <span />
              </div>
              <div>
                <p className="service-card-signal">{service.signal}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-card-meta">
                <span>Tiempo estimado</span>
                <strong>{service.time}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
