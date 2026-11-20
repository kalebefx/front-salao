import { useEffect, useState } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { buildWhatsappLink } from '../whatsapp'

const LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Localização', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        <a href="#inicio" className="flex flex-col items-center leading-none shrink-0">
          <span className="font-light italic text-[1.35rem] text-cream tracking-wide">EM</span>
          <span className="text-[9px] tracking-[0.28em] text-cream/75 uppercase mt-1">
            Eula Moraes
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-cream/85 hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={buildWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-[10px] bg-cream text-ink text-sm font-medium px-5 py-2.5 transition-colors hover:bg-white"
        >
          Agendar
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-cream p-1"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <IconX size={26} /> : <IconMenu2 size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-cream/15 px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-cream/90 text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={buildWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full justify-center items-center rounded-[10px] bg-cream text-ink text-sm font-medium px-5 py-3"
          >
            Agendar
          </a>
        </div>
      )}
    </header>
  )
}
