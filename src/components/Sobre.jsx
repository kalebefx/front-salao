import { IconCheck } from '@tabler/icons-react'
import ImagePlaceholder from './ImagePlaceholder'

const DIFERENCIAIS = [
  'Profissionais altamente qualificados',
  'Produtos profissionais de alta qualidade',
  'Atendimento exclusivo e humanizado',
]

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="italic font-light text-ink text-lg">Sobre o studio</span>
          <h2 className="mt-2 text-2xl sm:text-3xl text-ink font-medium leading-snug tracking-[-0.02em]">
            Mais que beleza, <br className="hidden sm:block" /> uma experiência
          </h2>

          <p className="mt-5 text-muted text-sm sm:text-base leading-relaxed">
            O Eula Moraes Studio nasceu para realçar a sua beleza natural com
            exclusividade e cuidado. Cada atendimento é único, pensando
            especialmente em você.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {DIFERENCIAIS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-ink">
                <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-cream text-ink">
                  <IconCheck size={14} stroke={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ImagePlaceholder
          label="Foto do salão / atendimento"
          className="w-full aspect-[4/5] rounded-[10px] border border-line"
        />
      </div>
    </section>
  )
}
