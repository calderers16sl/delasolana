import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export function useDocumentMeta() {
  const { t } = useI18n()
  watchEffect(() => {
    document.title = t('meta.title')
    setMeta('meta[name="description"]', 'content', t('meta.description'))
    setMeta('meta[property="og:title"]', 'content', t('meta.title'))
    setMeta('meta[property="og:description"]', 'content', t('meta.ogDescription'))
  })
}
