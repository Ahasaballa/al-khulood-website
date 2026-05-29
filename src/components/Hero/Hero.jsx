import { useTranslation } from 'react-i18next'
import { useRTL } from '../../hooks/useRTL'

/**
 * PHOTO SELECTION — Premium legal / executive atmosphere
 * All photos: dark, warm wood tones, formal legal interiors.
 * Images selected to feel: restrained, editorial, trustworthy.
 *
 * main  → dark elegant law office / mahogany interior
 * panel → refined legal document / desk detail — editorial warmth
 */
const PHOTOS = {
  main:  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85&auto=format&fit=crop',
  panel: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop',
}

function ScalesIcon({ size = 28, color = '#C9A84C' }) {
  return (
    <svg viewBox="0 0 40 40" style={{ width: size, height: size, flexShrink: 0 }} fill="none">
      <rect x="19" y="3"  width="2"  height="26" rx="1"    fill={color}/>
      <rect x="6"  y="9"  width="28" height="2"  rx="1"    fill={color}/>
      <line x1="7"  y1="11" x2="7"  y2="20" stroke={color} strokeWidth="1.4"/>
      <line x1="13" y1="11" x2="13" y2="20" stroke={color} strokeWidth="1.4"/>
      <path d="M5,20 Q10,24.5 15,20"  fill="none" stroke={color} strokeWidth="1.8"/>
      <line x1="27" y1="11" x2="27" y2="20" stroke={color} strokeWidth="1.4"/>
      <line x1="33" y1="11" x2="33" y2="20" stroke={color} strokeWidth="1.4"/>
      <path d="M25,20 Q30,24.5 35,20" fill="none" stroke={color} strokeWidth="1.8"/>
      <rect x="14" y="29" width="12" height="1.8" rx=".9" fill={color} opacity=".5"/>
    </svg>
  )
}

const TRUST_ITEMS = [
  { key: 'trust_avail', d: <><circle cx="9" cy="9" r="7"/><path d="M9 5v4l2.5 2.5"/></> },
  { key: 'trust_conf',  d: <><rect x="3" y="8" width="12" height="8" rx="1.5"/><path d="M6 8V6a3 3 0 016 0v2"/></> },
  { key: 'trust_uae',   d: <><path d="M9 2a7 7 0 100 14A7 7 0 009 2z"/><path d="M2 9h14M9 2c-2 2.5-3 5-3 7s1 4.5 3 7M9 2c2 2.5 3 5 3 7s-1 4.5-3 7"/></> },
  { key: 'trust_exp',   d: <path d="M9 2l2 4 4.5.7-3.25 3.15.77 4.48L9 12.25l-4.02 2.1.77-4.48L2.5 6.7 7 6z"/> },
  { key: 'trust_langs', d: <><path d="M2 4h9M7 4v1a5 5 0 003.5 4.75M11 4c0 2 1.5 4 4 5"/><path d="M9 14l-3-6 3 1 3-1-3 6z"/></> },
]

export default function Hero() {
  const { t } = useTranslation()
  const { isRTL } = useRTL()

  return (
    <section
      id="hero"
      className="relative bg-cream overflow-hidden"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Dot texture — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23C9A84C'/%3E%3C/svg%3E\")",
          backgroundSize: '20px 20px',
        }}
      />
      {/* Warm ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 90% 30%, rgba(201,168,76,0.06) 0%, transparent 70%)' }}
      />

      {/* Main content */}
      <div
        className="relative z-10 max-w-site mx-auto section-px flex-1 flex flex-col"
        style={{ paddingTop: 88 }}
      >
        <div
          className={`
            flex-1 grid items-center gap-10 xl:gap-12
            grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] 2xl:grid-cols-[1fr_540px]
            py-10 lg:py-12
          `}
          style={ isRTL ? { direction: 'rtl' } : {} }
        >

          {/* Content */}
          <div>
            {/* Eyebrow */}
            <div className={`flex items-center gap-3 mb-7 au-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="w-7 h-px bg-gold flex-shrink-0" />
              <span className="text-[10.5px] font-medium tracking-[.2em] uppercase text-gold-dark">
                {t('hero.eyebrow')}
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-display font-light text-brown au-2 ${isRTL ? 'text-right' : ''}`}
              style={{ fontSize: 'clamp(34px, 4.2vw, 56px)', lineHeight: 1.08 }}
            >
              {t('hero.headline_a')}<br />
              <em className="italic text-gold-dark">{t('hero.headline_b')}</em>
              {' '}{t('hero.headline_c')}<br />
              <em className="italic text-gold-dark">{t('hero.headline_d')}</em>
            </h1>

            {/* Arabic subtitle for LTR languages */}
            {!isRTL && (
              <p className="font-arabic text-[15px] text-brown-light/60 mt-3.5 au-2">
                {t('hero.subtitle')}
              </p>
            )}

            <div className={`mt-6 mb-6 h-px w-12 bg-gold au-3 ${isRTL ? 'mr-auto' : ''}`} />

            <p
              className={`text-[14.5px] text-brown-light max-w-[480px] mb-8 au-3 ${isRTL ? 'text-right' : ''}`}
              style={{ lineHeight: 1.88 }}
            >
              {t('hero.description')}
            </p>

            {/* CTAs */}
            <div className={`flex gap-3 flex-wrap au-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a
                href="https://wa.me/971564320744"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2.5 px-6 py-3.5 bg-brown text-gold-light text-[11px] font-medium tracking-[.1em] uppercase rounded-sm hover:bg-brown-mid transition-all duration-200 hover:-translate-y-px ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('hero.cta_wa')}
              </a>
              <a
                href="tel:+971564320744"
                className={`inline-flex items-center gap-2.5 px-6 py-[13px] border border-gold-light text-brown text-[11px] font-medium tracking-[.1em] uppercase rounded-sm hover:border-gold hover:bg-beige transition-all duration-200 hover:-translate-y-px ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                {t('hero.cta_call')}
              </a>
            </div>

            {/* Trust chips */}
            <div className={`flex flex-wrap gap-2 mt-6 au-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {[
                { key: 'badge_exp',    label: t('hero.badge_exp') },
                { key: 'badge_courts', label: t('hero.badge_courts') },
                { key: 'badge_conf',   label: t('hero.badge_conf') },
                { key: 'badge_langs',  label: t('hero.badge_langs') },
              ].map(({ key, label }) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-beige/80 border border-gold-light/70 rounded-full text-[10px] font-medium text-brown-light"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Photo composition — hidden on mobile */}
          <div className="relative hidden lg:flex flex-col gap-3">

            {/* Outer decorative frame */}
            <div className="absolute -inset-3 border border-gold-light/15 rounded pointer-events-none" />

            {/* Main photo — inline styles, no CSS class dependency */}
            <div
              className="rounded"
              style={{
                position: 'relative',
                overflow: 'hidden',
                height: 420,
                backgroundColor: '#E8D5B7',
              }}
            >
              <img
                src={PHOTOS.main}
                alt="Al Khulood Legal — premium legal office"
                loading="eager"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  animation: 'panSlow 24s ease-in-out infinite alternate',
                  filter: 'brightness(0.85) saturate(0.80)',
                }}
              />
              {/* Subtle brand grade */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(145deg, rgba(74,44,10,0.38) 0%, rgba(201,168,76,0.04) 55%, rgba(74,44,10,0.20) 100%)' }}
              />
              {/* Identity strip at bottom */}
              <div
                className="absolute bottom-0 inset-x-0 px-5 py-4"
                style={{ background: 'linear-gradient(to top, rgba(74,44,10,0.82) 0%, transparent 100%)' }}
              >
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <ScalesIcon size={20} color="#C9A84C" />
                  <div>
                    <div className="font-display text-[12.5px] font-light tracking-[.15em] text-gold-light uppercase">Al Khulood Legal</div>
                    <div className="font-arabic text-[10px] text-gold/45 mt-0.5">استشارات قانونية · منذ 2000</div>
                  </div>
                </div>
              </div>
              {/* Corner accent */}
              <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} w-9 h-9 border-t border-r border-gold/30`} />
              {/* 25+ floating badge — number always LTR */}
              <div
                className={`absolute top-5 ${isRTL ? 'right-5' : 'left-5'} bg-offwhite/95 border border-gold-light rounded-sm px-4 py-3 shadow-[0_6px_24px_rgba(74,44,10,0.14)]`}
                style={{ animation: 'floatY 5s ease-in-out infinite' }}
              >
                <div
                  className="font-display text-[26px] font-semibold text-brown leading-none"
                  dir="ltr"
                  style={{ unicodeBidi: 'isolate' }}
                >
                  25<span className="text-[16px]">+</span>
                </div>
                <div className="text-[9px] font-medium tracking-[.14em] uppercase text-brown-light mt-1">
                  {t('hero.fc_exp_label')}
                </div>
              </div>
            </div>

            {/* Bottom row — two panels */}
            <div className="grid grid-cols-2 gap-3">

              {/* Left: editorial photo detail */}
              <div
                className="rounded group"
                style={{ position: 'relative', overflow: 'hidden', height: 112, backgroundColor: '#E8D5B7' }}
              >
                <img
                  src={PHOTOS.panel}
                  alt="Legal consultation"
                  loading="lazy"
                  className="group-hover:scale-105 transition-transform duration-700"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    filter: 'brightness(0.80) saturate(0.75)',
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(145deg, rgba(74,44,10,0.42) 0%, rgba(74,44,10,0.15) 100%)' }}
                />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[9px] font-medium tracking-[.16em] uppercase text-gold-light/75">{t('hero.badge_exp')}</span>
                </div>
              </div>

              {/* Right: brand stat card */}
              <div
                className="rounded flex flex-col justify-between p-4 relative overflow-hidden bg-brown"
                style={{ height: 112 }}
              >
                <div
                  className="absolute inset-0 opacity-[.04]"
                  style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 12px,#C9A84C 12px,#C9A84C 13px),repeating-linear-gradient(90deg,transparent,transparent 12px,#C9A84C 12px,#C9A84C 13px)' }}
                />
                <div className="relative">
                  <div
                    className="font-display text-[28px] font-semibold text-gold leading-none"
                    dir="ltr"
                    style={{ unicodeBidi: 'isolate' }}
                  >{t('hero.fc_areas')}</div>
                  <div className="text-[9px] font-medium tracking-[.12em] uppercase text-gold-light/40 mt-1">{t('hero.fc_areas_label')}</div>
                </div>
                <div className="relative">
                  <div className="w-8 h-px bg-gold/25 mb-2" />
                  <span className="text-[9px] tracking-[.12em] uppercase text-gold/40">{t('hero.badge_conf')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip — full width at bottom */}
        <div className="border-t border-gold-light/50 bg-offwhite/70 -mx-6 lg:-mx-12 px-6 lg:px-12 py-3.5">
          <div className={`flex flex-wrap items-center gap-5 lg:gap-9 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            {TRUST_ITEMS.map(({ key, d }) => (
              <div key={key} className={`flex items-center gap-2 text-[10px] font-medium tracking-[.1em] uppercase text-brown-light ${isRTL ? 'flex-row-reverse' : ''}`}>
                <svg viewBox="0 0 18 18" className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">{d}</svg>
                {t(`hero.${key}`)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
