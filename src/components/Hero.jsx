import { IconArrowRight } from '@tabler/icons-react'
import ImagePlaceholder from './ImagePlaceholder'
import { buildWhatsappLink } from '../whatsapp'

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-studio-black overflow-hidden">
      {/* Foto de fundo — trocar pela imagem real do salão */}
      <ImagePlaceholder
        label="Foto de fundo do hero (ex: lavagem/atendimento no salão)"
        className="absolute inset-0 w-full h-full"
      />

      {/* Overlay escuro para garantir contraste do texto sobre a foto */}
      <div className="absolute inset-0 bg-gradient-to-b from-studio-black/80 via-studio-black/55 to-studio-black" />

      {/* Conteúdo */}
      <div className="relative max-w-3xl mx-auto px-6 pt-36 pb-40 sm:pt-44 sm:pb-48 text-center flex flex-col items-center">
        <span className="text-gold text-xs tracking-[0.3em] uppercase mb-5">
          Eula Moraes Studio
        </span>

        <h1 className="font-display text-4xl sm:text-6xl leading-[1.15] text-white">
          A <em className="italic text-gold">beleza</em> está nos
          <br className="hidden sm:block" /> <em className="italic text-gold">detalhes</em>
        </h1>

        <p className="mt-6 max-w-md text-white/75 text-sm sm:text-base leading-relaxed">
          Cuidamos de cada detalhe para que você se sinta ainda mais bonita e confiante em
          todos os momentos.
        </p>

        <a
          href={buildWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light text-studio-black font-medium text-sm px-7 py-3.5 transition-colors"
        >
          Agendar
          <IconArrowRight size={18} />
        </a>
      </div>

      {/* Curva branca — transição para as seções claras */}
      <div className="absolute bottom-0 inset-x-0 leading-none">
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-16 sm:h-20"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="#fdf9f4" />
        </svg>
      </div>
    </section>
  )
}
