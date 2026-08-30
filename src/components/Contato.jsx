import { IconBrandInstagram, IconBrandWhatsapp, IconClock, IconMapPin } from '@tabler/icons-react'
import ImagePlaceholder from './ImagePlaceholder'
import { buildWhatsappLink } from '../whatsapp'

export default function Contato() {
  return (
    <section id="contato" className="bg-cream py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-display italic text-gold text-lg">Localização</span>
          <h2 className="mt-2 text-2xl sm:text-3xl text-forest font-medium">
            Venha nos visitar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ImagePlaceholder
            label="Mapa do Google Maps (embed do endereço do salão)"
            className="w-full aspect-[4/3] rounded-2xl"
          />

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-forest/10 text-forest">
                <IconMapPin size={20} stroke={1.6} />
              </span>
              <div>
                <h3 className="text-forest font-medium">Endereço</h3>
                <p className="text-studio-charcoal/70 text-sm mt-1">
                  Rua Exemplo, 123 — Centro, Anápolis - GO
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-forest/10 text-forest">
                <IconClock size={20} stroke={1.6} />
              </span>
              <div>
                <h3 className="text-forest font-medium">Horário de atendimento</h3>
                <p className="text-studio-charcoal/70 text-sm mt-1">
                  Terça a sábado, 9h às 19h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-forest/10 text-forest">
                <IconBrandInstagram size={20} stroke={1.6} />
              </span>
              <div>
                <h3 className="text-forest font-medium">Instagram</h3>
                <a href="https://instagram.com/eulamoraesstudio" target="_blank" rel="noopener noreferrer" className="text-studio-charcoal/70 text-sm mt-1 inline-block hover:text-gold transition-colors">
                  @eulamoraesstudio
                </a>
              </div>
            </div>

            <a href={buildWhatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-forest hover:bg-forest-light text-cream text-sm font-medium px-6 py-3 transition-colors">
              <IconBrandWhatsapp size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}