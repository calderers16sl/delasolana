import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
import ca from './locales/ca.js'
import es from './locales/es.js'
import en from './locales/en.js'
import fr from './locales/fr.js'
import ja from './locales/ja.js'
import zh from './locales/zh.js'

export const SUPPORTED = [
  { code: 'ca', name: 'Català' },
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ja', name: '日本語' },
  { code: 'zh', name: '中文' },
]

export const FALLBACK = 'ca'
const STORAGE_KEY = 'lasolana.locale'

function detect() {
  if (typeof window === 'undefined') return FALLBACK
  try {
    const stored = window.localStorage?.getItem(STORAGE_KEY)
    if (stored && SUPPORTED.some((l) => l.code === stored)) return stored
  } catch {}
  const nav = (navigator.language || '').toLowerCase().split('-')[0]
  return SUPPORTED.some((l) => l.code === nav) ? nav : FALLBACK
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: detect(),
  fallbackLocale: FALLBACK,
  messages: { ca, es, en, fr, ja, zh },
})

export function setLocale(code) {
  if (!SUPPORTED.some((l) => l.code === code)) return
  i18n.global.locale.value = code
  try {
    window.localStorage?.setItem(STORAGE_KEY, code)
  } catch {}
}

if (typeof window !== 'undefined') {
  watch(
    i18n.global.locale,
    (l) => {
      document.documentElement.lang = l
    },
    { immediate: true },
  )
}
