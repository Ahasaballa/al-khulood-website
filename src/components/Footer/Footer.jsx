import { useTranslation } from 'react-i18next'
import { useRTL } from '../../hooks/useRTL'

const SERVICES_LINKS = ['svc_consult','svc_contracts','svc_represent','svc_civil','svc_criminal','svc_labor']
const PRACTICE_LINKS = ['prac_commercial','prac_realestate','prac_personal','prac_arbitration','prac_rental','prac_cyber']
const LANG_BADGES    = [
  { key: 'lang_badge_en', code: 'en' },
  { key: 'lang_badge_ar', code: 'ar' },
  { key: 'lang_badge_ur', code: 'ur' },
  { key: 'lang_badge_hi', code: 'hi' },
  { key: 'lang_badge_tl', code: 'tl' },
]

export default function Footer() {
  const { t } = useTranslation()
  const { isRTL } = useRTL()

  return (
    <footer className="bg-brown text-gold-light relative overflow-hidden">
      {/* Ambient texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[.025]"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 28px,#C9A84C 28px,#C9A84C 29px)' }}/>

      {/* Top shimmer line */}
      <div className="relative h-px shimmer-line opacity-60"/>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className={`grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10 mb-14 ${isRTL ? '' : ''}`}>

          {/* Brand column */}
          <div className={isRTL ? 'text-right' : ''}>
            {/* Logo — official PNG asset */}
            <div className={`flex items-center gap-2.5 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <img
                src="/logo.png"
                alt="Al Khulood Legal Services"
                width={42}
                height={42}
                className="w-[42px] h-[42px] object-contain flex-shrink-0"
              />
              <div className={`flex flex-col leading-snug ${isRTL ? 'items-end' : ''}`}>
                <span className="font-display text-[14.5px] font-semibold text-gold tracking-[.03em]">Al Khulood Legal</span>
                <span className="font-arabic text-[10px] text-gold/40">شركة الخلود للاستشارات</span>
              </div>
            </div>

            <p className="text-[12.5px] leading-[1.95] text-gold-light/40 mb-7 max-w-[240px]">
              {t('footer.tagline')}
            </p>

            {/* Language badges */}
            <div className={`flex flex-wrap gap-1.5 ${isRTL ? 'justify-end' : ''}`}>
              {LANG_BADGES.map(b => (
                <span key={b.code} className="px-2.5 py-1 border border-gold/15 rounded-sm text-[9.5px] font-medium tracking-[.1em] text-gold/50 hover:border-gold/40 hover:text-gold/80 transition-all cursor-default">
                  {t(`footer.${b.key}`)}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className={isRTL ? 'text-right' : ''}>
            <h4 className="text-[10px] font-medium tracking-[.2em] uppercase text-gold mb-6">{t('footer.col_services')}</h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map(k => (
                <li key={k}>
                  <a href="#services" className="text-[12.5px] text-gold-light/40 hover:text-gold-light/80 transition-colors duration-200">
                    {t(`footer.${k}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className={isRTL ? 'text-right' : ''}>
            <h4 className="text-[10px] font-medium tracking-[.2em] uppercase text-gold mb-6">{t('footer.col_practice')}</h4>
            <ul className="space-y-3">
              {PRACTICE_LINKS.map(k => (
                <li key={k}>
                  <a href="#services" className="text-[12.5px] text-gold-light/40 hover:text-gold-light/80 transition-colors duration-200">
                    {t(`footer.${k}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={isRTL ? 'text-right' : ''}>
            <h4 className="text-[10px] font-medium tracking-[.2em] uppercase text-gold mb-6">{t('footer.col_contact')}</h4>
            <ul className="space-y-4">
              {[
                { href: 'https://wa.me/971564320744', label: '+971 56 432 0744', sub: 'WhatsApp', icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>, fill: true },
                { href: 'tel:+971564320744', label: '+971 56 432 0744', sub: 'Phone', icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>, fill: false },
                { href: 'mailto:alkhouloudlawfirm@gmail.com', label: 'alkhouloudlawfirm@gmail.com', sub: 'Email', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></>, fill: false },
              ].map(({ href, label, sub, icon, fill }) => (
                <li key={sub}>
                  <a href={href} target={sub === 'WhatsApp' ? '_blank' : undefined} rel={sub === 'WhatsApp' ? 'noreferrer' : undefined}
                    className={`flex items-start gap-3 group ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 mt-0.5 text-gold/30 group-hover:text-gold/60 transition-colors flex-shrink-0"
                      fill={fill ? 'currentColor' : 'none'} stroke={fill ? 'none' : 'currentColor'} strokeWidth="1.5">{icon}</svg>
                    <div className={isRTL ? 'text-right' : ''}>
                      {/*
                        Phone numbers and email addresses must always render LTR.
                        dir="ltr" + unicodeBidi:isolate prevents Arabic bidi algorithm
                        from reversing the digit order (e.g. "0744 432 56 971+").
                      */}
                      <div
                        className="text-[12px] text-gold-light/45 group-hover:text-gold-light/70 transition-colors leading-snug"
                        dir="ltr"
                        style={{ unicodeBidi: 'isolate' }}
                      >{label}</div>
                      <div className="text-[10px] text-gold/25 tracking-wide">{sub}</div>
                    </div>
                  </a>
                </li>
              ))}
              <li className={`flex items-center gap-2 text-[11.5px] text-gold-light/30 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gold/25 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {t('footer.uae')}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/8 pt-6">
          <div className={`flex flex-wrap items-center justify-between gap-4 text-[10.5px] text-gold-light/25 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span>{t('footer.copyright')}</span>
            <span>{t('footer.disclaimer')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
