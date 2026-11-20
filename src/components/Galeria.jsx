import ImagePlaceholder from './ImagePlaceholder'

const FOTOS = [
  'Foto 1 — trabalho em destaque',
  'Foto 2 — ambiente do studio',
  'Foto 3 — corte finalizado',
  'Foto 4 — coloração/mechas',
  'Foto 5 — recepção/decoração',
  'Foto 6 — cliente satisfeita',
]

export default function Galeria() {
  return (
    <section className="bg-white py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="italic font-light text-ink text-lg">Galeria</span>
          <h2 className="mt-2 text-2xl sm:text-3xl text-ink font-medium tracking-[-0.02em]">
            Alguns dos nossos trabalhos
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {FOTOS.map((label) => (
            <ImagePlaceholder
              key={label}
              label={label}
              className="aspect-square rounded-[10px] border border-line"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
