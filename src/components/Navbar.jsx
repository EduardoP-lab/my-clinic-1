import { useEffect, useState } from 'react'

const navLinks = ['inicio', 'contacto', 'servicios']

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`navbar-fixed fixed left-0 top-0 z-50 w-full px-4 py-3 transition-[padding,background-color,box-shadow,border-color] duration-500 ease-out sm:px-6 lg:px-10 ${
        isScrolled
          ? 'bg-white/95 shadow-[0_18px_45px_rgba(0,112,187,0.12)]'
          : 'bg-[#eff8ff]/88'
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-[8px] border border-white/70 bg-white/84 px-4 shadow-[0_12px_35px_rgba(2,35,58,0.08)] backdrop-blur-xl sm:px-6"
        aria-label="Navegacion principal"
      >
        <a
          href="#inicio"
          className="group flex items-center gap-3 text-[#07324f] outline-none transition-transform duration-300 ease-out hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#0070BB] focus-visible:ring-offset-4"
          onClick={closeMenu}
        >
          <span className="logo-pulse grid size-11 place-items-center rounded-[8px] bg-[#0070BB] text-white shadow-[0_10px_24px_rgba(0,112,187,0.3)]">
            <span className="logo-tooth" aria-hidden="true" />
          </span>
          <span className="text-xl font-bold tracking-[0] sm:text-2xl">
            MyClinic1
          </span>
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="nav-link relative px-4 py-2 text-sm font-semibold capitalize text-[#0a3858] transition-colors duration-300 ease-out hover:text-[#0070BB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070BB] focus-visible:ring-offset-4"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="hamburger-button grid size-11 place-items-center rounded-[8px] border border-[#0070BB]/20 bg-[#0070BB] text-white shadow-[0_10px_22px_rgba(0,112,187,0.22)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#005f9f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070BB] focus-visible:ring-offset-4 md:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className={`hamburger-lines ${isOpen ? 'is-open' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-menu mx-auto mt-3 max-w-7xl overflow-hidden rounded-[8px] border border-white/70 bg-white/96 shadow-[0_20px_50px_rgba(2,35,58,0.14)] backdrop-blur-xl md:hidden ${
          isOpen ? 'is-open' : ''
        }`}
      >
        <ul className="grid gap-1 p-2">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="mobile-nav-link rounded-[8px] px-4 py-3 text-base font-semibold capitalize text-[#07324f] transition-colors duration-300 ease-out hover:bg-[#e8f6ff] hover:text-[#0070BB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070BB] focus-visible:ring-offset-2"
                onClick={closeMenu}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
