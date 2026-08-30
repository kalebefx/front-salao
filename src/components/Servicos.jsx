import { buildWhatsappLink } from '../whatsapp'

const SERVICOS = [
  { nome: 'Escova', preco: 'R$ 60,00', duracao: '1h' },
  { nome: 'Corte', preco: 'R$ 50,00', duracao: '45min' },
  { nome: 'Coloração', preco: 'R$ 150,00', duracao: '2h' },
  { nome: 'Progressiva', preco: 'R$ 200,00', duracao: '3h' },
  { nome: 'Hidratação', preco: 'R$ 80,00', duracao: '1h30' },
  { nome: 'Mechas', preco: 'R$ 180,00', duracao: '2h30' },
]

export default function Servicos() {
  return (
    <section id="servicos" className="bg-cream py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-14">
          <span className="font-display italic text-gold text-lg">Serviços</span>
          <h2 className="mt-2 text-2xl sm:text-3xl text-forest font-medium">
            Tudo que você precisa para se sentir incrível
          </h2>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICOS.map((servico) => (
            <div
              key={servico.nome}
              className="group bg-white border border-forest/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-gold/60 hover:shadow-lg hover:shadow-forest/5 transition-all"
            >
              <h3 className="text-lg font-medium text-forest">{servico.nome}</h3>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gold font-semibold text-base">{servico.preco}</span>
                <span className="text-studio-charcoal/50">{servico.duracao}</span>
              </div>

              <a
                href={buildWhatsappLink(`Olá! Gostaria de agendar: ${servico.nome}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-forest font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Agendar <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}