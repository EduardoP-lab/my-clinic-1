import { useEffect, useState } from 'react'

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

function ServiceCard({ service }) {
  return (
    <article className={`service-card service-card-${service.tone}`}>
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
  )
}

function Services() {
  const [showAllServices, setShowAllServices] = useState(false)
  const [isMobileServices, setIsMobileServices] = useState(false)
  const visibleServices = services.slice(0, 2)
  const hiddenServices = services.slice(2)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 640px)')
    const updateMobileState = () => {
      setIsMobileServices(mobileQuery.matches)
    }

    updateMobileState()
    mobileQuery.addEventListener('change', updateMobileState)

    return () => {
      mobileQuery.removeEventListener('change', updateMobileState)
    }
  }, [])

  return (
    <section
      id="servicios"
      className="services-section relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="services-intro flex flex-col items-center">
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

        <div
          className={`services-grid ${
            showAllServices ? 'services-grid-expanded' : ''
          }`}
        >
          {visibleServices.map((service) => (
            <ServiceCard service={service} key={service.title} />
          ))}

          <div
            className="services-extra"
            aria-hidden={isMobileServices && !showAllServices}
          >
            <div className="services-extra-inner">
              {hiddenServices.map((service) => (
                <ServiceCard service={service} key={service.title} />
              ))}
            </div>
          </div>
        </div>

        <button
          className="services-toggle"
          type="button"
          aria-expanded={showAllServices}
          onClick={() => setShowAllServices((current) => !current)}
        >
          {showAllServices ? 'Ver menos' : 'Ver todos'}
        </button>
      </div>
    </section>
  )
}

export default Services
