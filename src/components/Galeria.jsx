import ImagePlaceholder from './ImagePlaceholder'

// 6 espaços de foto — troque cada label pela foto real depois
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
          <span className="font-display italic text-gold text-lg">Galeria</span>
          <h2 className="mt-2 text-2xl sm:text-3xl text-forest font-medium">
            Alguns dos nossos trabalhos
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {FOTOS.map((label, i) => (
            <ImagePlaceholder
              key={i}
              label={label}
              className="aspect-square rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  )
}