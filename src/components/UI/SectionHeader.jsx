export default function SectionHeader({ eyebrow, heading, subheading, isRTL, className = '' }) {
  return (
    <div className={className}>
      <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <span className="w-7 h-px bg-gold flex-shrink-0" />
        <span className="text-[10px] font-medium tracking-[.18em] uppercase text-gold-dark">
          {eyebrow}
        </span>
      </div>
      <h2 className={`font-display font-light text-[clamp(26px,3.2vw,40px)] leading-[1.12] text-brown ${isRTL ? 'text-right' : ''}`}>
        {heading}
      </h2>
      {subheading && (
        <p className={`text-[14px] text-brown-light mt-3 max-w-[520px] leading-[1.85] ${isRTL ? 'text-right' : ''}`}>
          {subheading}
        </p>
      )}
    </div>
  )
}
