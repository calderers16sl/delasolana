<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '../ui/LanguageSwitcher.vue'

const { t } = useI18n()

const scrolled = ref(false)
const menuOpen = ref(false)

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

function closeMenu() {
  menuOpen.value = false
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
    <!-- Mobile: two-row layout -->
    <div class="container-solana lg:hidden">
      <div class="flex h-12 items-center justify-between">
        <LanguageSwitcher />
        <button
          type="button"
          class="flex h-10 items-center gap-2 pl-2 text-ink/80 transition-colors duration-300 hover:text-ink"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="sr-only">{{ menuOpen ? t('nav.aria.close') : t('nav.aria.open') }}</span>
          <span class="text-[0.82rem] font-medium uppercase tracking-[0.2em]" aria-hidden="true">
            {{ t('nav.menu') }}
          </span>
          <span class="flex flex-col items-end gap-1.5">
            <span
              class="block h-px bg-ink transition-all duration-300"
              :class="menuOpen ? 'w-6 translate-y-[3.5px] rotate-45' : 'w-6'"
            />
            <span
              class="block h-px bg-ink transition-all duration-300"
              :class="menuOpen ? 'w-6 -translate-y-[3.5px] -rotate-45' : 'w-4'"
            />
          </span>
        </button>
      </div>
      <a href="#hero" class="flex h-14 items-center justify-center" @click="closeMenu">
        <img
          src="/logo.png"
          :alt="t('nav.brand')"
          class="h-10 w-auto"
          width="1000"
          height="180"
        />
      </a>
    </div>

    <!-- Desktop: single-row layout -->
    <div class="container-solana hidden h-20 items-center justify-between lg:flex">
      <a href="#hero" class="group flex items-center font-display text-ink">
        <img
          src="/logo.png"
          :alt="t('nav.brand')"
          class="h-12 w-auto"
          width="1000"
          height="180"
        />
      </a>

      <div class="flex items-center gap-6">
        <nav class="flex items-center gap-8" :aria-label="t('nav.aria.primary')">
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

    <div
      id="mobile-menu"
      class="overflow-hidden border-t border-hairline-soft bg-cream transition-[max-height] duration-500 ease-out lg:hidden"
      :class="menuOpen ? 'max-h-[720px]' : 'max-h-0'"
    >
      <nav class="container-solana flex flex-col py-4" :aria-label="t('nav.aria.mobile')">
        <a
          v-for="item in items"
          :key="item.href"
          :href="item.href"
          class="border-b border-hairline-soft py-4 font-display text-xl text-ink last:border-b-0"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
