import { useTranslation } from 'react-i18next'
import { useRTL } from '../../hooks/useRTL'
import SectionHeader from '../UI/SectionHeader'

/**
 * Dark executive law library — warm wood panelling, leather, bookshelves.
 * Formal, premium, UAE legal consultancy atmosphere.
 * photo-1521587760476: verified stable — classic legal library interior.
 */
const PHOTO = 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900&q=85&auto=format&fit=crop'

const EXPERTISE = [
  { key: 'ex_civil',       icon: '⚖️' },
  { key: 'ex_commercial',  icon: '🏢' },
  { key: 'ex_criminal',    icon: '🛡️' },
  { key: 'ex_realestate',  icon: '🏠' },
  { key: 'ex_personal',    icon: '👨‍👩‍👧' },
  { key: 'ex_arbitration', icon: '🤝' },
]

export default function About() {
  const { t } = useTranslation()
  const { isRTL } = useRTL()

  return (
    <section id="about" className="relative bg-offwhite reveal">
      <div className="absolute top-0 inset-x-0 h-px shimmer-line opacity-40" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gold-light/35" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gold/[.022] pointer-events-none" />

      <div className="max-w-site mx-auto section-px section-py">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 xl:gap-20"
          style={ isRTL ? { direction: 'rtl' } : {} }
        >

          {/* Photo */}
          <div className="relative">
            {/*
              Image wrapper uses 100% inline styles — no custom CSS class dependency.
              position:relative + overflow:hidden on parent, position:absolute + inset:0
              on img ensures object-cover fills the container regardless of build output.
            */}
            <div
              className="rounded shadow-[0_6px_40px_rgba(74,44,10,0.10)]"
              style={{
                position: 'relative',
                overflow: 'hidden',
                height: 'clamp(320px, 40vw, 480px)',
                backgroundColor: '#E8D5B7', /* beige fallback if image fails */
              }}
            >
              <img
                src={PHOTO}
                alt="Al Khulood Legal office"
                loading="lazy"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(0.88) saturate(0.78)',
                }}
              />
              {/* Very light brand grade — dark library needs minimal intervention */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(140deg, rgba(74,44,10,0.16) 0%, rgba(201,168,76,0.03) 55%, rgba(74,44,10,0.10) 100%)' }}
              />
              {/* Caption bar */}
              <div
                className="absolute bottom-0 inset-x-0 px-5 py-4"
                style={{ background: 'linear-gradient(to top, rgba(74,44,10,0.78) 0%, transparent 100%)' }}
              >
                <p className={`font-display text-[13px] font-light tracking-wide text-gold-light ${isRTL ? 'text-right' : ''}`}>
                  {t('about.office_caption')}
                </p>
                <p className={`text-[9px] tracking-[.18em] uppercase text-gold/45 mt-0.5 ${isRTL ? 'text-right' : ''}`}>
                  {t('about.office_sub')}
                </p>
              </div>
              {/* Corner accent */}
              <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} w-9 h-9 border-t border-r border-gold/30`} />
            </div>

            {/* 25+ credential badge */}
            <div
              className={`absolute -bottom-4 z-10 bg-brown px-5 py-4 rounded-sm shadow-[0_8px_28px_rgba(74,44,10,0.22)] ${isRTL ? '-left-4' : '-right-4'}`}
            >
              <div className="font-display text-[26px] font-semibold text-gold leading-none" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                25<span className="text-[16px]">+</span>
              </div>
              <div className="text-[9px] tracking-[.14em] uppercase text-gold-light/55 mt-1">Years of Practice</div>
            </div>

            {/* Decorative L corner */}
            <div className={`absolute -bottom-4 w-14 h-14 border-b border-l border-gold-light/22 rounded-bl ${isRTL ? '-right-4' : '-left-4'}`} />
          </div>

          {/* Content */}
          <div className={`pt-4 ${isRTL ? 'text-right' : ''}`}>
            <SectionHeader
              eyebrow={t('about.eyebrow')}
              heading={t('about.heading')}
              isRTL={isRTL}
              className="mb-8"
            />

            <div className="space-y-4 mb-9">
              {['body_1', 'body_2', 'body_3'].map((k) => (
                <p key={k} className={`text-[14px] text-brown-light ${isRTL ? 'text-right' : ''}`} style={{ lineHeight: 1.92 }}>
                  {t(`about.${k}`)}
                </p>
              ))}
            </div>

            {/* Expertise grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-9">
              {EXPERTISE.map(({ key, icon }) => (
                <div
                  key={key}
                  className={`flex items-center gap-2 py-2.5 px-3 rounded-sm bg-beige/50 border border-gold-light/45 hover:bg-beige hover:border-gold/35 transition-all duration-200 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className="text-[13px] flex-shrink-0 leading-none">{icon}</span>
                  <span className="text-[11px] font-medium text-brown">{t(`about.${key}`)}</span>
                </div>
              ))}
            </div>

            {/* Language callout */}
            <div className={`border-l-2 border-gold pl-4 py-1 ${isRTL ? 'border-l-0 border-r-2 pl-0 pr-4' : ''}`}>
              <div className="text-[9.5px] font-medium tracking-[.16em] uppercase text-gold-dark mb-1.5">
                {t('about.lang_title')}
              </div>
              <div className="text-[13px] text-brown-light">{t('about.lang_desc')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
