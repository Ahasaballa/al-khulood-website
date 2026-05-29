import { useTranslation } from 'react-i18next'
import { useRTL } from '../../hooks/useRTL'

const VALUES = [
  { key: 'val1', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> },
  { key: 'val2', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> },
  { key: 'val3', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l2.5 5 5.5.8-4 3.9.95 5.5L12 15.5l-4.95 2.7.95-5.5L4 8.8l5.5-.8z"/></svg> },
  { key: 'val4', icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10"/></svg> },
]

const PILLARS = ['pil1', 'pil2', 'pil3']

export default function Mission() {
  const { t } = useTranslation()
  const { isRTL } = useRTL()

  return (
    <section id="mission" className="relative bg-cream reveal overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[.025]"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 28px,rgba(201,168,76,1) 28px,rgba(201,168,76,1) 29px)' }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gold-light/40" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gold-light/40" />

      <div className="max-w-site mx-auto section-px section-py" style={ isRTL ? { direction: 'rtl' } : {} }>

        {/* Header */}
        <div className={`text-center mb-14 ${isRTL ? 'text-right' : ''}`}>
          <div className={`flex items-center gap-3 mb-5 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-center'}`}>
            <span className="w-7 h-px bg-gold flex-shrink-0" />
            <span className="text-[10px] font-medium tracking-[.2em] uppercase text-gold-dark">{t('mission.eyebrow')}</span>
            <span className="w-7 h-px bg-gold flex-shrink-0" />
          </div>
          <h2 className="font-display font-light text-brown" style={{ fontSize: 'clamp(26px,3.2vw,40px)', lineHeight: 1.12 }}>
            {t('mission.heading')}
          </h2>
        </div>

        {/* Mission + Vision panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden shadow-[0_4px_32px_rgba(74,44,10,0.08)] mb-10">
          {/* Mission — dark */}
          <div className="bg-brown px-8 lg:px-11 py-10 relative overflow-hidden">
            <svg viewBox="0 0 40 40" className="w-9 h-9 mb-5" fill="none">
              <rect x="19" y="4" width="2" height="24" rx="1" fill="#C9A84C"/>
              <rect x="6"  y="10" width="28" height="2" rx="1" fill="#C9A84C"/>
              <line x1="7"  y1="12" x2="7"  y2="20" stroke="#C9A84C" strokeWidth="1.4"/>
              <line x1="13" y1="12" x2="13" y2="20" stroke="#C9A84C" strokeWidth="1.4"/>
              <path d="M5,20 Q10,24 15,20" fill="none" stroke="#C9A84C" strokeWidth="1.8"/>
              <line x1="27" y1="12" x2="27" y2="20" stroke="#C9A84C" strokeWidth="1.4"/>
              <line x1="33" y1="12" x2="33" y2="20" stroke="#C9A84C" strokeWidth="1.4"/>
              <path d="M25,20 Q30,24 35,20" fill="none" stroke="#C9A84C" strokeWidth="1.8"/>
              <rect x="14" y="28" width="12" height="2" rx="1" fill="#C9A84C" opacity=".5"/>
            </svg>
            <h3 className={`font-display text-[20px] font-light text-gold-light mb-3 ${isRTL ? 'text-right' : ''}`}>{t('mission.mission_title')}</h3>
            <p className={`text-[13.5px] text-gold-light/55 ${isRTL ? 'text-right' : ''}`} style={{ lineHeight: 1.9 }}>{t('mission.mission_desc')}</p>
          </div>
          {/* Vision — light */}
          <div className="bg-beige px-8 lg:px-11 py-10 border border-gold-light/40">
            <svg viewBox="0 0 40 40" className="w-9 h-9 mb-5" fill="none" stroke="#C9A84C" strokeWidth="1.5">
              <path d="M5 20C5 20 10 12 20 12s15 8 15 8-5 8-15 8S5 20 5 20z"/>
              <circle cx="20" cy="20" r="3.5"/>
              <circle cx="20" cy="20" r="1.5" fill="#C9A84C"/>
            </svg>
            <h3 className={`font-display text-[20px] font-light text-brown mb-3 ${isRTL ? 'text-right' : ''}`}>{t('mission.vision_title')}</h3>
            <p className={`text-[13.5px] text-brown-light ${isRTL ? 'text-right' : ''}`} style={{ lineHeight: 1.9 }}>{t('mission.vision_desc')}</p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {PILLARS.map((p) => (
            <div
              key={p}
              className="relative bg-offwhite border border-gold-light/45 rounded-sm p-6 group hover:border-gold/40 hover:-translate-y-0.5 transition-all duration-250"
            >
              <div className={`absolute top-0 left-0 w-full h-[2px] rounded-t-sm bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-250 ${isRTL ? 'left-auto right-0' : ''}`} />
              <div className="font-display text-[24px] font-semibold text-gold mb-2" dir="ltr" style={{ unicodeBidi: 'isolate', textAlign: isRTL ? 'right' : 'left' }}>{t(`mission.${p}_title`)}</div>
              <p className={`text-[12.5px] text-brown-light ${isRTL ? 'text-right' : ''}`} style={{ lineHeight: 1.82 }}>{t(`mission.${p}_desc`)}</p>
            </div>
          ))}
        </div>

        {/* Core values */}
        <div className={`text-center mb-7 ${isRTL ? 'text-right' : ''}`}>
          <span className="text-[10px] font-medium tracking-[.18em] uppercase text-gold-dark">{t('mission.value_prefix')}</span>
          <div className={`w-10 h-px bg-gold mt-2.5 ${isRTL ? 'mr-0' : 'mx-auto'}`} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {VALUES.map(({ key, icon }) => (
            <div
              key={key}
              className={`group bg-offwhite border border-gold-light/45 rounded-sm p-5 hover:border-gold/35 transition-all duration-250 relative overflow-hidden ${isRTL ? 'text-right' : ''}`}
            >
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-350" />
              <div className="text-gold mb-3.5 group-hover:text-gold-dark transition-colors duration-250">{icon}</div>
              <h4 className="font-display text-[16px] font-semibold text-brown mb-1.5">{t(`mission.${key}_title`)}</h4>
              <p className="text-[12.5px] text-brown-light" style={{ lineHeight: 1.82 }}>{t(`mission.${key}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
