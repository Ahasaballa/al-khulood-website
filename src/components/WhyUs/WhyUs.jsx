import { useTranslation } from 'react-i18next'
import { useRTL } from '../../hooks/useRTL'

/**
 * PHOTO: Empty courtroom interior — architectural, formal, cinematic.
 * The overlay is deliberately strong so this section reads as
 * "dark premium legal brand" not "dramatic stock image."
 * Content always wins. Photo adds atmosphere, nothing more.
 */
const PHOTO = 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1400&q=80&auto=format&fit=crop'

const FEATURES = [
  { key: 'experience',      d: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></> },
  { key: 'confidentiality', d: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></> },
  { key: 'precision',       d: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/> },
  { key: 'multilingual',    d: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10"/></> },
]

const STATS = [
  { num: '25+', lk: 'why.stat_exp_label',  dk: 'why.stat_exp_desc' },
  { num: '9+',  lk: 'why.stat_area_label', dk: 'why.stat_area_desc' },
  { num: '5',   lk: 'why.stat_lang_label', dk: 'why.stat_lang_desc' },
]

export default function WhyUs() {
  const { t } = useTranslation()
  const { isRTL } = useRTL()

  return (
    <section id="why" className="relative overflow-hidden reveal">

      {/* Background */}
      <div className="absolute inset-0">
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', backgroundColor: '#4A2C0A' }}>
          <img
            src={PHOTO}
            alt=""
            aria-hidden="true"
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.40) saturate(0.55)',
            }}
          />
        </div>
        {/* Brand overlay — makes this unmistakably brown/gold, not just "dark" */}
        <div className="absolute inset-0 bg-brown/80" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(74,44,10,0.50) 0%, rgba(74,44,10,0.05) 50%, rgba(74,44,10,0.55) 100%)' }}
        />
        {/* Fine dot texture */}
        <div
          className="absolute inset-0 opacity-[.022]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23C9A84C'/%3E%3C/svg%3E\")",
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-site mx-auto section-px section-py" style={ isRTL ? { direction: 'rtl' } : {} }>

        {/* Header */}
        <div className={`mb-12 ${isRTL ? 'text-right' : ''}`}>
          <div className={`flex items-center gap-3 mb-3.5 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="w-6 h-px bg-gold flex-shrink-0" />
            <span className="text-[10px] font-medium tracking-[.2em] uppercase text-gold">{t('why.eyebrow')}</span>
          </div>
          <h2 className="font-display font-light text-offwhite" style={{ fontSize: 'clamp(26px,3.2vw,42px)', lineHeight: 1.12 }}>
            {t('why.heading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-16">

          {/* Left: quote + features */}
          <div>
            <blockquote
              className={`font-display font-light italic text-gold-light/70 mb-10 pl-5 border-l-2 border-gold ${isRTL ? 'pl-0 pr-5 border-l-0 border-r-2 text-right' : ''}`}
              style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', lineHeight: 1.72 }}
            >
              {t('why.quote')}
            </blockquote>

            <div>
              {FEATURES.map(({ key, d }) => (
                <div
                  key={key}
                  className={`flex gap-4 py-5 border-b border-gold/10 last:border-none group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/18 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/18 group-hover:border-gold/35 transition-all duration-200">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">{d}</svg>
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <h4 className="text-[13px] font-medium text-offwhite mb-0.5 leading-snug">{t(`why.feat_${key}_title`)}</h4>
                    <p className="text-[12px] text-gold-light/45" style={{ lineHeight: 1.82 }}>{t(`why.feat_${key}_desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats + conf */}
          <div className="flex flex-col gap-4">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map(({ num, lk, dk }) => (
                <div
                  key={lk}
                  className="bg-white/[.042] border border-gold/12 rounded-sm p-4 hover:bg-white/[.07] hover:border-gold/25 transition-all duration-200"
                >
                  {/*
                    Numbers (25+, 9+, 5) must always render LTR — never reversed by
                    the Arabic bidi algorithm. dir="ltr" + unicodeBidi:isolate isolates
                    the number from surrounding RTL context.
                  */}
                  <div
                    className="font-display text-[32px] font-semibold text-gold leading-none mb-1"
                    dir="ltr"
                    style={{ unicodeBidi: 'isolate' }}
                  >{num}</div>
                  <div className={`text-[9px] font-medium tracking-[.13em] uppercase text-gold-light/50 mb-2 ${isRTL ? 'text-right' : ''}`}>{t(lk)}</div>
                  <p className={`text-[11px] text-gold-light/50 ${isRTL ? 'text-right' : ''}`} style={{ lineHeight: 1.78 }}>{t(dk)}</p>
                </div>
              ))}
            </div>

            {/* Confidentiality card */}
            <div className="border border-gold/14 rounded-sm bg-white/[.04] p-6">
              <div className={`flex items-start gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-9 h-9 rounded-full bg-gold/12 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <h4 className="text-[13px] font-medium text-offwhite leading-snug">{t('why.conf_label')}</h4>
                  <p className="text-[12px] text-gold-light/85 mt-1.5" style={{ lineHeight: 1.82 }}>{t('why.conf_desc')}</p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-gold/28 via-gold/14 to-transparent" />
              <div className={`mt-4 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <svg viewBox="0 0 16 16" className={`w-3 h-3 text-gold flex-shrink-0 ${isRTL ? 'rtl-flip' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
                <a
                  href="https://wa.me/971564320744"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-medium tracking-[.14em] uppercase text-gold hover:text-gold-light transition-colors"
                >
                  {t('nav.consultation')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
