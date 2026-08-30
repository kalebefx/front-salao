import { IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react'
import { buildWhatsappLink } from '../whatsapp'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-studio-black text-white/80 pt-14 pb-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="flex flex-col items-center leading-none">
          <span className="font-display italic text-2xl text-gold">EM</span>
          <span className="text-[10px] tracking-[0.25em] text-white/70 uppercase mt-1">
            Eula Moraes Studio
          </span>
        </div>

        <p className="text-sm text-white/60 max-w-xs">
          A beleza está nos detalhes.
        </p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a href="#inicio" className="hover:text-gold transition-colors">Início</a>
          <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-gold transition-colors">Localização</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href={buildWhatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-studio-black transition-colors">
            <IconBrandWhatsapp size={18} />
          </a>
          <a href="https://instagram.com/eulamoraesstudio" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-studio-black transition-colors">
            <IconBrandInstagram size={18} />
          </a>
        </div>

        <div className="w-full h-px bg-white/10 mt-4" />

        <p className="text-xs text-white/40">
          © {ano} Eula Moraes Studio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}