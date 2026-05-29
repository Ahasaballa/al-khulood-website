import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const RTL_LANGS = ['ar', 'ur']

export function useRTL() {
  const { i18n } = useTranslation()
  const lang = i18n.language

  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    const isRTL = RTL_LANGS.includes(lang)

    html.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
    html.setAttribute('lang', lang)

    // Font class switching
    body.classList.remove('urdu', 'hindi')
    if (lang === 'ur') body.classList.add('urdu')
    if (lang === 'hi') body.classList.add('hindi')
  }, [lang])

  return {
    isRTL: RTL_LANGS.includes(lang),
    lang,
  }
}
