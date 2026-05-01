const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

const schedule = [
  { day: 'Lun - Vie', time: '9:00 AM - 7:00 PM' },
  { day: 'Sabado', time: '9:00 AM - 2:00 PM' },
]

function Footer() {
  return (
    <footer className="footer-section relative overflow-hidden px-4 py-16 sm:px-6 lg:px-10">
      <div className="footer-flow" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="footer-shell mx-auto max-w-7xl">
        <div className="footer-brand" data-aos="block-rise">
          <a
            className="footer-logo"
            href="#inicio"
            aria-label="Ir al inicio"
          >
            <span className="footer-logo-mark" aria-hidden="true">
              <span />
            </span>
            <span>MyClinic1</span>
          </a>

          <p>
            Odontologia clara, moderna y humana para pacientes que quieren
            entender cada paso de su tratamiento.
          </p>

          <a
            className="footer-cta"
            href="#contacto"
          >
            Agendar valoracion
          </a>
        </div>

        <div className="footer-columns" data-aos="block-rise" data-aos-delay="120">
          <div className="footer-column">
            <h2>Navegacion</h2>
            <nav aria-label="Navegacion de pie de pagina">
              {footerLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h2>Horario</h2>
            <div className="footer-schedule">
              {schedule.map((item) => (
                <p key={item.day}>
                  <span>{item.day}</span>
                  <strong>{item.time}</strong>
                </p>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h2>Contacto</h2>
            <address className="footer-contact">
              <a href="tel:+520000000000">+52 000 000 0000</a>
              <a href="mailto:hola@myclinic1.com">hola@myclinic1.com</a>
              <span>Av. Salud 120, Consultorio 4</span>
            </address>
          </div>
        </div>

        <div className="footer-bottom" data-aos="block-rise" data-aos-delay="120">
          <p>&copy; 2026 MyClinic1. Todos los derechos reservados.</p>
          <div className="footer-status" aria-label="Estado de atencion">
            <span aria-hidden="true" />
            Recibiendo pacientes nuevos
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
