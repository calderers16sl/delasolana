<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '../ui/LanguageSwitcher.vue'

const { t } = useI18n()

const scrolled = ref(false)

const items = computed(() => [
  { label: t('nav.items.destilleria'), href: '#destilleria' },
  { label: t('nav.items.proces'), href: '#proces' },
  { label: t('nav.items.destilacions'), href: '#destilacions' },
  { label: t('nav.items.origen'), href: '#origen' },
  { label: t('nav.items.contacte'), href: '#contacte' },
])

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <a href="#hero" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream">
    {{ t('nav.skip') }}
  </a>
  <header
    class="sticky top-0 z-50 backdrop-blur transition-all duration-300"
    :class="scrolled ? 'bg-cream/92 border-b border-hairline-soft' : 'bg-cream/60'"
  >
    <div class="container-solana flex h-16 items-center justify-between lg:h-20">
      <a href="#hero" class="group flex items-center font-display text-ink">
        <img
          src="/logo.png"
          :alt="t('nav.brand')"
          class="h-10 w-auto lg:h-12"
          width="1000"
          height="180"
        />
      </a>

      <div class="flex items-center gap-2 lg:gap-6">
        <nav class="hidden items-center gap-8 lg:flex" :aria-label="t('nav.aria.primary')">
          <a
            v-for="item in items"
            :key="item.href"
            :href="item.href"
            class="group relative text-[0.82rem] font-medium uppercase tracking-[0.2em] text-ink/80 transition-colors duration-300 hover:text-ink"
          >
            {{ item.label }}
            <span class="pointer-events-none absolute -bottom-1.5 left-0 right-0 h-px origin-left scale-x-0 bg-copper transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </a>
        </nav>

        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>
