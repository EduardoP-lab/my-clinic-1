const testimonials = [
  {
    name: 'Mariana Torres',
    detail: 'Limpieza y diagnostico',
    comment:
      'Llegue con nervios porque hacia anos no iba al dentista. Me explicaron cada paso con calma, vi mis fotos en pantalla y sali con un plan claro sin sentir presion.',
  },
  {
    name: 'Carlos Medina',
    detail: 'Resina estetica',
    comment:
      'Me repararon una muela fracturada en una cita. El color quedo muy natural y pude volver a comer normal ese mismo dia siguiendo las indicaciones.',
  },
  {
    name: 'Andrea Ruiz',
    detail: 'Endodoncia',
    comment:
      'Tenia dolor fuerte y pense que iba a ser una experiencia pesada. Fueron puntuales, cuidadosos con la anestesia y al dia siguiente ya estaba mucho mejor.',
  },
]

function Stars() {
  return (
    <div className="testimonial-stars" aria-label="5 de 5 estrellas">
      <span aria-hidden="true">&#9733;</span>
      <span aria-hidden="true">&#9733;</span>
      <span aria-hidden="true">&#9733;</span>
      <span aria-hidden="true">&#9733;</span>
      <span aria-hidden="true">&#9733;</span>
    </div>
  )
}

function Testimonials() {
  return (
    <section
      id="testimonios"
      className="testimonials-section px-4 py-24 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="testimonials-header" data-aos="block-rise">
          <p>Testimonios</p>
          <h2>Pacientes que llegaron con dudas y salieron con claridad.</h2>
        </div>

        <div className="testimonials-list" data-aos="block-rise" data-aos-delay="120">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-item" key={testimonial.name}>
              <Stars />
              <blockquote>&ldquo;{testimonial.comment}&rdquo;</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
