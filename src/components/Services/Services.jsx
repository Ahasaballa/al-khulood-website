import { useTranslation } from 'react-i18next'
import { useRTL } from '../../hooks/useRTL'
import SectionHeader from '../UI/SectionHeader'

const SERVICES = [
  { key: 'consultations',  cat: 'cat_advisory',   icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
  { key: 'contracts',      cat: 'cat_docs',        icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { key: 'representation', cat: 'cat_court',       icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg> },
  { key: 'civil',          cat: 'cat_civil',       icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> },
  { key: 'commercial',     cat: 'cat_commercial',  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg> },
  { key: 'criminal',       cat: 'cat_criminal',    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { key: 'labor',          cat: 'cat_labor',       icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg> },
  { key: 'rental',         cat: 'cat_property',    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg> },
  { key: 'personal',       cat: 'cat_family',      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
]

export default function Services() {
  const { t } = useTranslation()
  const { isRTL } = useRTL()

  return (
    <section id="services" className="relative bg-beige reveal">
      <div className="absolute top-0 inset-x-0 h-px bg-gold-light/40" />

      <div className="max-w-site mx-auto section-px section-py">
        <div className="mb-12">
          <SectionHeader
            eyebrow={t('services.eyebrow')}
            heading={t('services.heading')}
            subheading={t('services.subheading')}
            isRTL={isRTL}
          />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gold-light/40 rounded-sm overflow-hidden"
          style={ isRTL ? { direction: 'rtl' } : {} }
        >
          {SERVICES.map((svc, i) => {
            const col = i % 3
            const row = Math.floor(i / 3)
            const lastRow = Math.floor((SERVICES.length - 1) / 3)
            return (
              <div
                key={svc.key}
                className={`
                  group relative bg-offwhite p-7 transition-colors duration-200 hover:bg-cream
                  ${col < 2 ? 'border-r border-gold-light/35' : ''}
                  ${row < lastRow ? 'border-b border-gold-light/35' : ''}
                `}
              >
                {/* Gold top accent on hover */}
                <div className={`absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-350 ${isRTL ? 'left-auto right-0' : ''}`} />

                {/* Category badge */}
                <div className="mb-4">
                  <span className="text-[9px] font-medium tracking-[.18em] uppercase text-gold-dark bg-beige px-2.5 py-1 rounded-sm">
                    {t(`services.${svc.cat}`)}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-brown-light group-hover:text-gold-dark transition-colors duration-200 mb-4">
                  {svc.icon}
                </div>

                {/* Title */}
                <h3 className={`font-display text-[18px] font-semibold text-brown mb-2.5 ${isRTL ? 'text-right' : ''}`}>
                  {t(`services.${svc.key}.title`)}
                </h3>

                {/* Desc */}
                <p className={`text-[12.5px] text-brown-light mb-4 ${isRTL ? 'text-right' : ''}`} style={{ lineHeight: 1.82 }}>
                  {t(`services.${svc.key}.desc`)}
                </p>

                {/* Enquire link */}
                <a
                  href="https://wa.me/971564320744"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[.1em] uppercase text-gold-dark opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-250 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('services.enquire')}
                  <svg viewBox="0 0 16 16" className={`w-3 h-3 ${isRTL ? 'rtl-flip' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
