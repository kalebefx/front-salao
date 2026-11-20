import { IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react'
import { buildWhatsappLink } from '../whatsapp'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream/80 pt-14 pb-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="flex flex-col items-center leading-none">
          <span className="italic font-light text-3xl text-cream">EM</span>
          <span className="text-[10px] tracking-[0.28em] text-cream/70 uppercase mt-2">
            Eula Moraes Studio
          </span>
        </div>

        <p className="text-sm text-cream/65 max-w-xs font-light">
          A beleza está nos detalhes.
        </p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a href="#inicio" className="hover:text-cream transition-colors">Início</a>
          <a href="#servicos" className="hover:text-cream transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-cream transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-cream transition-colors">Localização</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={buildWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-cream/10 hover:bg-cream hover:text-ink transition-colors"
          >
            <IconBrandWhatsapp size={18} />
          </a>
          <a
            href="https://instagram.com/eulamoraesstudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-cream/10 hover:bg-cream hover:text-ink transition-colors"
          >
            <IconBrandInstagram size={18} />
          </a>
        </div>

        <div className="w-full h-px bg-cream/15 mt-4" />

        <p className="text-xs text-cream/45">
          © {ano} Eula Moraes Studio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
