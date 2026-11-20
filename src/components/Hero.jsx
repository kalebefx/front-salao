import { IconArrowRight } from '@tabler/icons-react'
import ImagePlaceholder from './ImagePlaceholder'
import { buildWhatsappLink } from '../whatsapp'

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-ink overflow-hidden">
      <ImagePlaceholder silent className="absolute inset-0 w-full h-full opacity-40" />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/72 to-ink" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-cream/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-24 h-64 w-64 rounded-full bg-cream/10 blur-3xl"
      />

      <div className="relative max-w-3xl mx-auto px-6 pt-36 pb-40 sm:pt-44 sm:pb-48 text-center flex flex-col items-center">
        <span className="text-cream/80 text-[11px] tracking-[0.34em] uppercase mb-6">
          Eula Moraes Studio
        </span>

        <h1 className="font-light text-[2.6rem] sm:text-6xl leading-[1.12] text-cream tracking-[-0.03em]">
          A <em className="italic font-normal">beleza</em> está nos
          <br className="hidden sm:block" /> <em className="italic font-normal">detalhes</em>
        </h1>

        <p className="mt-6 max-w-md text-cream/75 text-sm sm:text-base leading-relaxed font-light">
          Cuidamos de cada detalhe para que você se sinta ainda mais bonita e confiante em
          todos os momentos.
        </p>

        <a
          href={buildWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 rounded-[10px] bg-cream hover:bg-white text-ink font-medium text-sm px-7 py-3.5 transition-colors"
        >
          Agendar
          <IconArrowRight size={18} />
        </a>
      </div>

      <div className="absolute bottom-0 inset-x-0 leading-none">
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-16 sm:h-20"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="#f3f4f2" />
        </svg>
      </div>
    </section>
  )
}
