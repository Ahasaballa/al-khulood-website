import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useRTL } from '../../hooks/useRTL'

const LANGUAGES = [
  { code: 'en', label: 'English',  native: 'EN', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية',  native: 'AR', flag: '🇦🇪' },
  { code: 'ur', label: 'اردو',     native: 'UR', flag: '🇵🇰' },
  { code: 'hi', label: 'हिन्दी',   native: 'HI', flag: '🇮🇳' },
  { code: 'tl', label: 'Filipino', native: 'TL', flag: '🇵🇭' },
]

const NAV_LINKS = [
  { key: 'about',    href: '#about' },
  { key: 'mission',  href: '#mission' },
  { key: 'services', href: '#services' },
  { key: 'why',      href: '#why' },
  { key: 'contact',  href: '#contact' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { isRTL } = useRTL()
  const [scrolled, setScrolled]     = useState(false)
  const [langOpen, setLangOpen]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const cur = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0]

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', s, { passive: true })
    return () => window.removeEventListener('scroll', s)
  }, [])

  useEffect(() => {
    const close = e => { if (!e.target.closest('.ls')) setLangOpen(false) }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const setLang = code => {
    i18n.changeLanguage(code)
    setLangOpen(false)
    setMobileOpen(false)
  }

  return (
    <nav className={`
      fixed top-0 inset-x-0 z-50 h-[72px]
      bg-offwhite/96 backdrop-blur-sm
      border-b border-gold-light/70
      transition-all duration-300
      ${scrolled ? 'shadow-[0_2px_20px_rgba(74,44,10,0.07)]' : ''}
    `}>
      <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-12 flex items-center justify-between">

        {/* Logo — official PNG asset */}
        <a href="#" className={`flex items-center gap-2.5 flex-shrink-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <img
            src="/logo.png"
            alt="Al Khulood Legal Services"
            width={48}
            height={48}
            className="w-[48px] h-[48px] object-contain flex-shrink-0"
          />
          <div className={`flex flex-col leading-snug ${isRTL ? 'items-end' : ''}`}>
            <span className="font-display text-[15px] font-semibold text-brown tracking-[.03em]">Al Khulood Legal</span>
            <span className="font-arabic text-[10.5px] text-brown-light/70 tracking-wide">شركة الخلود للاستشارات القانونية</span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className={`hidden lg:flex items-center gap-8 list-none ${isRTL ? 'flex-row-reverse' : ''}`}>
          {NAV_LINKS.map(l => (
            <li key={l.key}>
              <a href={l.href}
                className="relative text-[11.5px] font-medium tracking-[.1em] uppercase text-brown-light hover:text-brown transition-colors duration-200 group">
                {t(`nav.${l.key}`)}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300"/>
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>

          {/* Lang selector */}
          <div className="ls relative">
            <button onClick={() => setLangOpen(o => !o)}
              className="flex items-center gap-2 px-3 py-[7px] border border-gold-light rounded-sm text-[11px] font-medium text-brown tracking-wide hover:bg-beige/80 hover:border-gold transition-all duration-200">
              <span className="text-[15px] leading-none">{cur.flag}</span>
              <span>{cur.native}</span>
              <svg viewBox="0 0 10 6" className={`w-2.5 fill-brown-light transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}>
                <path d="M0 0l5 6 5-6z"/>
              </svg>
            </button>
            {langOpen && (
              <div className={`absolute top-[calc(100%+6px)] min-w-[170px] bg-offwhite border border-gold-light/80 rounded-lg shadow-[0_8px_28px_rgba(74,44,10,0.11)] overflow-hidden z-50 ${isRTL ? 'left-0' : 'right-0'}`}>
                {LANGUAGES.map(lang => (
                  <button key={lang.code} onClick={() => setLang(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-[12.5px] hover:bg-beige transition-colors ${isRTL ? 'flex-row-reverse text-right' : ''} ${i18n.language === lang.code ? 'text-brown font-semibold bg-beige/60' : 'text-brown-light'}`}>
                    <span className="text-[15px]">{lang.flag}</span>
                    <span>{lang.label}</span>
                    <span className={`text-[10px] text-brown-light/50 ${isRTL ? 'mr-auto' : 'ml-auto'}`}>{lang.native}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp CTA */}
          <a href="https://wa.me/971564320744" target="_blank" rel="noreferrer"
            className={`hidden md:flex items-center gap-2 px-5 py-2.5 bg-brown text-gold-light text-[11.5px] font-medium tracking-[.08em] uppercase rounded-sm hover:bg-brown-mid transition-all duration-200 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t('nav.consultation')}
          </a>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 text-brown" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
            <svg viewBox="0 0 22 16" className="w-5 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen
                ? <><path d="M1 1l20 14M21 1L1 15"/></>
                : <><path d="M0 1h22M0 8h22M0 15h22"/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-offwhite border-t border-gold-light/50 px-6 py-5">
          <ul className="space-y-1 mb-5">
            {NAV_LINKS.map(l => (
              <li key={l.key}>
                <a href={l.href} onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-[13px] font-medium tracking-wide text-brown-light hover:text-brown">
                  {t(`nav.${l.key}`)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map(lang => (
              <button key={lang.code} onClick={() => setLang(lang.code)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm border text-[11.5px] transition-all ${i18n.language === lang.code ? 'border-gold bg-beige text-brown font-semibold' : 'border-gold-light text-brown-light'}`}>
                <span>{lang.flag}</span>{lang.native}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
