import { IconBrandInstagram, IconBrandWhatsapp, IconClock, IconMapPin } from '@tabler/icons-react'
import { buildWhatsappLink } from '../whatsapp'

const MAPS_URL =
  'https://www.google.com/maps/place/Studio+Eula+Moraes/@-16.8256401,-49.2307494,17z'

export default function Contato() {
  return (
    <section id="contato" className="bg-canvas py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="italic font-light text-ink text-lg">Localização</span>
          <h2 className="mt-2 text-2xl sm:text-3xl text-ink font-medium tracking-[-0.02em]">
            Venha nos visitar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <iframe
            title="Mapa do Studio Eula Moraes"
            src="https://maps.google.com/maps?q=Studio+Eula+Moraes&ll=-16.8256401,-49.2307494&z=16&output=embed"
            className="w-full aspect-[4/3] rounded-[10px] border border-line"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-white text-ink border border-line">
                <IconMapPin size={20} stroke={1.6} />
              </span>
              <div>
                <h3 className="text-ink font-medium">Endereço</h3>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted text-sm mt-1 inline-block leading-relaxed hover:text-ink transition-colors"
                >
                  Rua Alfa, Qd 05, Lt 21 — Jardim Casa Grande
                  <br />
                  Aparecida de Goiânia - GO, 74986-860
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-white text-ink border border-line">
                <IconClock size={20} stroke={1.6} />
              </span>
              <div>
                <h3 className="text-ink font-medium">Horário de atendimento</h3>
                <p className="text-muted text-sm mt-1">
                  Terça a sábado, 9h às 19h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-white text-ink border border-line">
                <IconBrandInstagram size={20} stroke={1.6} />
              </span>
              <div>
                <h3 className="text-ink font-medium">Instagram</h3>
                <a
                  href="https://instagram.com/eulamoraesstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted text-sm mt-1 inline-block hover:text-ink transition-colors"
                >
                  @eulamoraesstudio
                </a>
              </div>
            </div>

            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-[10px] bg-ink hover:bg-white hover:text-ink border border-ink text-cream text-sm font-medium px-6 py-3 transition-colors"
            >
              <IconBrandWhatsapp size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
