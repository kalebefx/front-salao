import { IconPhoto } from '@tabler/icons-react'

/**
 * Placeholder de imagem.
 *
 * Troque pelo conteúdo real assim que tiver as fotos, por exemplo:
 *   <img src="/images/hero.jpg" alt="Salão Eula Moraes Studio" className={className} />
 *
 * O prop `label` é só uma dica visual de qual foto vai naquele lugar
 * (ex: "Foto do hero — lavatório") e não aparece no site final.
 */
export default function ImagePlaceholder({ label, className = '' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-studio-charcoal/10 text-studio-charcoal/40 border border-dashed border-studio-charcoal/20 ${className}`}
    >
      <IconPhoto size={28} stroke={1.5} />
      {label && <span className="text-xs tracking-wide text-center px-4">{label}</span>}
    </div>
  )
}
