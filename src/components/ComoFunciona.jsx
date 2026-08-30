import { IconBrandWhatsapp, IconCalendarCheck, IconSparkles } from '@tabler/icons-react'

const PASSOS = [
  {
    numero: '01',
    icone: IconBrandWhatsapp,
    titulo: 'Chame no WhatsApp',
    descricao: 'Toque em "Agendar" e fale direto com a gente pelo WhatsApp.',
  },
  {
    numero: '02',
    icone: IconCalendarCheck,
    titulo: 'Combine o horário',
    descricao: 'Escolha o serviço e o melhor dia e horário pra você.',
  },
  {
    numero: '03',
    icone: IconSparkles,
    titulo: 'Aproveite o cuidado',
    descricao: 'É só chegar no studio e deixar a beleza por nossa conta.',
  },
]

export default function ComoFunciona() {
  return (
    <section className="bg-cream py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-display italic text-gold text-lg">Como funciona</span>
          <h2 className="mt-2 text-2xl sm:text-3xl text-forest font-medium">
            Agendar é simples assim
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {PASSOS.map(({ numero, icone: Icone, titulo, descricao }) => (
            <div key={numero} className="flex flex-col items-center text-center gap-3">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-forest text-gold">
                <Icone size={26} stroke={1.6} />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-studio-black text-xs font-semibold flex items-center justify-center">
                  {numero}
                </span>
              </div>
              <h3 className="text-forest font-medium text-base mt-1">{titulo}</h3>
              <p className="text-studio-charcoal/65 text-sm max-w-[220px]">{descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}