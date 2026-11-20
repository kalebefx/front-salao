import { IconPhoto } from '@tabler/icons-react'

/**
 * Placeholder de imagem.
 *
 * Troque pelo conteúdo real assim que tiver as fotos, por exemplo:
 *   <img src="/images/hero.jpg" alt="Salão Eula Moraes Studio" className={className} />
 */
export default function ImagePlaceholder({ label, className = '', silent = false }) {
  return (
    <div
      className={`relative overflow-hidden bg-[linear-gradient(160deg,#e7eee4_0%,#f7f1dc_48%,#e4ebe1_100%)] text-muted ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(28,49,18,0.08), transparent 42%), radial-gradient(circle at 80% 70%, rgba(247,241,220,0.9), transparent 36%)',
        }}
      />
      {!silent && (
        <div className="relative flex h-full flex-col items-center justify-center gap-2 px-4 text-center">
          <IconPhoto size={26} stroke={1.4} />
          {label && <span className="max-w-[16rem] text-[11px] font-medium tracking-[0.14em] uppercase">{label}</span>}
        </div>
      )}
    </div>
  )
}
