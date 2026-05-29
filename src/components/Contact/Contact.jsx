import { useTranslation } from 'react-i18next'
import { useRTL } from '../../hooks/useRTL'

const PHOTO = 'https://images.unsplash.com/photo-1505664194779-8beaceb5a88b?w=900&q=85&auto=format&fit=crop'

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

// Translated matter keys — rendered via i18n, no hardcoding
const MATTER_KEYS = [
  'civil', 'commercial', 'criminal', 'realestate',
  'personal', 'labor', 'rental', 'arbitration', 'other',
]

const CONTACT_ITEMS = [
  {
    key: 'wa',
    href: 'https://wa.me/971564320744',
    // Phone always displays LTR regardless of page direction
    value: '+971 56 432 0744',
    external: true,
    icon: <svg className="w-4 h-4 fill-gold flex-shrink-0" viewBox="0 0 24 24"><path d={WA_PATH}/></svg>,
  },
  {
    key: 'phone',
    href: 'tel:+971564320744',
    value: '+971 56 432 0744',
    external: false,
    icon: <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>,
  },
  {
    key: 'email',
    href: 'mailto:alkhouloudlawfirm@gmail.com',
    // Email always displays LTR
    value: 'alkhouloudlawfirm@gmail.com',
    external: false,
    icon: <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>,
  },
]

const fieldCls = (isRTL) =>
  `w-full bg-offwhite/80 border border-gold-light/50 rounded-sm px-4 py-3 text-[13px] text-brown placeholder-brown-light/35 transition-all duration-200 ${isRTL ? 'text-right' : ''}`

const labelCls = (isRTL) =>
  `block text-[9px] font-medium tracking-[.18em] uppercase text-brown-light/55 mb-2 transition-colors duration-200 group-focus-within:text-gold-dark ${isRTL ? 'text-right' : ''}`

export default function Contact() {
  const { t } = useTranslation()
  const { isRTL } = useRTL()

  return (
    <section id="contact" className="relative bg-cream reveal">
      <div className="absolute top-0 inset-x-0 h-px bg-gold-light/45" />

      <div className="max-w-site mx-auto section-px section-py" style={isRTL ? { direction: 'rtl' } : {}}>

        {/* Header */}
        <div className={`mb-13 ${isRTL ? 'text-right' : 'text-center'}`} style={{ marginBottom: 52 }}>
          <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-center'}`}>
            <span className="w-6 h-px bg-gold flex-shrink-0" />
            <span className="text-[10px] font-medium tracking-[.22em] uppercase text-gold-dark">{t('contact.eyebrow')}</span>
            <span className="w-6 h-px bg-gold flex-shrink-0" />
          </div>
          <h2 className="font-display font-light text-brown" style={{ fontSize: 'clamp(26px,3.2vw,42px)', lineHeight: 1.12 }}>
            {t('contact.heading')}
          </h2>
          <p className="text-[13.5px] text-brown-light mt-3 max-w-[420px] mx-auto" style={{ lineHeight: 1.88 }}>
            {t('contact.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr] gap-8 xl:gap-10">

          {/* Left: contact cards + photo */}
          <div className="flex flex-col gap-3">
            {CONTACT_ITEMS.map(({ key, href, icon, value, external }) => (
              <a
                key={key}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`flex items-center gap-3.5 p-4 bg-offwhite border border-gold-light/50 rounded-sm hover:border-gold/55 card-hover no-underline group ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-beige border border-gold-light/55 flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-colors">
                  {icon}
                </div>
                <div className={`flex-1 min-w-0 ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-[9px] font-medium tracking-[.18em] uppercase text-gold-dark mb-0.5">{t(`contact.${key}_label`)}</div>
                  {/*
                    CRITICAL: phone numbers and email must always render LTR
                    even when page is in RTL mode (Arabic/Urdu).
                    dir="ltr" + unicode-bidi:isolate forces correct number order.
                  */}
                  <div
                    className="text-[13px] font-medium text-brown truncate"
                    dir="ltr"
                    style={{ unicodeBidi: 'isolate' }}
                  >
                    {value}
                  </div>
                  <div className="text-[11px] text-brown-light/65 mt-0.5">{t(`contact.${key}_sub`)}</div>
                </div>
                {/* Arrow always points outward — flipped in RTL via rtl-flip */}
                <svg
                  viewBox="0 0 16 16"
                  className={`w-3.5 h-3.5 text-gold/28 group-hover:text-gold/60 transition-colors flex-shrink-0 ${isRTL ? 'rtl-flip' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </a>
            ))}

            {/* Photo strip */}
            <div
              className="rounded-sm flex-1"
              style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: 185,
                backgroundColor: '#E8D5B7',
              }}
            >
              <img
                src={PHOTO}
                alt="Legal consultation office"
                loading="lazy"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(0.60) saturate(0.65)',
                }}
              />
              <div className="absolute inset-0 bg-brown/55" />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(140deg, rgba(74,44,10,0.30) 0%, rgba(201,168,76,0.06) 100%)' }}
              />
              {/*
                Text overlay — safe padding on all sides so text never touches edges.
                dir="ltr" on the Arabic quote preserves the Arabic text's own RTL shaping
                while the container handles the page-level direction.
              */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="font-display text-[13.5px] font-light italic text-gold-light/85"
                  style={{ lineHeight: 1.55 }}
                >
                  "{t('hero.subtitle')}"
                </p>
                <p
                  className="text-[9px] tracking-[.14em] uppercase text-gold/55 mt-2"
                  dir="ltr"
                  style={{ unicodeBidi: 'isolate' }}
                >
                  Est. 2000 · United Arab Emirates
                </p>
              </div>
              <div className="absolute top-3 right-3 w-7 h-7 border-t border-r border-gold/35" />
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-offwhite border border-gold-light/42 rounded-sm p-7 lg:p-9">
            <h3 className={`font-display text-[19px] font-light text-brown mb-1 ${isRTL ? 'text-right' : ''}`}>
              {t('contact.form_title')}
            </h3>
            <p className={`text-[12px] text-brown-light/65 mb-7 ${isRTL ? 'text-right' : ''}`} style={{ lineHeight: 1.75 }}>
              {t('contact.form_sub')}
            </p>

            <div className="space-y-5">
              {/* Name */}
              <div className="group">
                <label className={labelCls(isRTL)}>{t('contact.field_name')}</label>
                <input type="text" placeholder={t('contact.field_name')} className={fieldCls(isRTL)} />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <label className={labelCls(isRTL)}>{t('contact.field_phone')}</label>
                  {/* Phone input: always LTR so "+971…" types correctly */}
                  <input
                    type="tel"
                    placeholder="+971 50 000 0000"
                    dir="ltr"
                    className={fieldCls(false) /* LTR regardless of page dir */}
                    style={{ textAlign: isRTL ? 'right' : 'left' }}
                  />
                </div>
                <div className="group">
                  <label className={labelCls(isRTL)}>{t('contact.field_email')}</label>
                  {/* Email input: always LTR */}
                  <input
                    type="email"
                    placeholder="you@example.com"
                    dir="ltr"
                    className={fieldCls(false)}
                    style={{ textAlign: isRTL ? 'right' : 'left' }}
                  />
                </div>
              </div>

              {/* Legal Matter — fully translated dropdown via i18n keys */}
              <div className="group">
                <label className={labelCls(isRTL)}>{t('contact.field_matter')}</label>
                <div className="relative">
                  <select
                    className={`${fieldCls(isRTL)} appearance-none cursor-pointer ${isRTL ? 'pl-9 pr-4' : 'pr-9 pl-4'}`}
                    defaultValue=""
                    style={{ paddingLeft: isRTL ? 36 : 16, paddingRight: isRTL ? 16 : 36 }}
                  >
                    <option value="" disabled>{t('contact.field_matter')}</option>
                    {MATTER_KEYS.map((k) => (
                      <option key={k} value={k}>
                        {t(`contact.matter_${k}`)}
                      </option>
                    ))}
                  </select>
                  {/* Dropdown chevron — positioned correctly for both LTR and RTL */}
                  <svg
                    viewBox="0 0 10 6"
                    className={`absolute top-1/2 -translate-y-1/2 w-2.5 fill-brown-light/35 pointer-events-none ${isRTL ? 'left-4' : 'right-4'}`}
                  >
                    <path d="M0 0l5 6 5-6z"/>
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label className={labelCls(isRTL)}>{t('contact.matter_placeholder')}</label>
                <textarea
                  rows={4}
                  placeholder={t('contact.matter_placeholder')}
                  className={`${fieldCls(isRTL)} resize-none`}
                />
              </div>

              <div className="h-px bg-gold-light/30" />

              {/* CTAs */}
              <div className={`flex gap-3 flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>
                <a
                  href="https://wa.me/971564320744"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-3 bg-brown text-gold-light text-[11px] font-medium tracking-[.1em] uppercase rounded-sm hover:bg-brown-mid transition-all duration-200 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <svg className="w-3.5 h-3.5 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d={WA_PATH}/></svg>
                  {t('contact.cta_wa')}
                </a>
                <a
                  href="mailto:alkhouloudlawfirm@gmail.com"
                  className={`inline-flex items-center gap-2 px-5 py-[11px] border border-gold-light text-brown text-[11px] font-medium tracking-[.1em] uppercase rounded-sm hover:border-gold hover:bg-beige/60 transition-all duration-200 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                  {t('contact.cta_email')}
                </a>
              </div>

              <p
                className={`text-[10px] text-brown-light/40 ${isRTL ? 'text-right' : ''}`}
                dir="ltr"
                style={{ unicodeBidi: 'isolate' }}
              >
                {t('contact.location')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
