<script setup>
import { ref, computed, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED, setLocale } from '../../i18n'

const { t, locale } = useI18n()
const open = ref(false)
const root = ref(null)

const current = computed(
  () => SUPPORTED.find((l) => l.code === locale.value) || SUPPORTED[0],
)

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function pick(code) {
  setLocale(code)
  close()
}

function onDocClick(e) {
  if (!root.value) return
  if (!root.value.contains(e.target)) close()
}

function onKey(e) {
  if (e.key === 'Escape') close()
}

watch(open, (isOpen) => {
  if (isOpen) {
    window.addEventListener('mousedown', onDocClick)
    window.addEventListener('keydown', onKey)
  } else {
    window.removeEventListener('mousedown', onDocClick)
    window.removeEventListener('keydown', onKey)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('mousedown', onDocClick)
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div ref="root" class="relative">
    <button
      type="button"
      class="group inline-flex h-10 items-center gap-2 rounded-full px-3 text-ink/80 transition-colors duration-300 hover:text-copper"
      :aria-label="t('nav.aria.languageMenu')"
      :aria-expanded="open"
      aria-haspopup="menu"
      aria-controls="language-menu"
      @click="toggle"
    >
      <span class="sr-only">{{ t('language.current') }}: {{ current.name }}</span>
      <span class="text-[0.82rem] font-medium uppercase tracking-[0.2em]" aria-hidden="true">
        Lang.
      </span>
      <svg viewBox="0 0 20 20" fill="none" class="h-5 w-5" aria-hidden="true">
        <circle cx="10" cy="10" r="7.25" stroke="currentColor" stroke-width="1.25" />
        <path
          d="M2.75 10h14.5M10 2.75c2.2 2.2 3.5 4.7 3.5 7.25S12.2 15.05 10 17.25M10 2.75C7.8 4.95 6.5 7.45 6.5 10s1.3 5.05 3.5 7.25"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
        />
      </svg>
    </button>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <ul
        v-if="open"
        id="language-menu"
        role="menu"
        :aria-label="t('nav.aria.languageMenu')"
        class="absolute left-0 lg:left-auto lg:right-0 z-50 mt-3 min-w-[12rem] origin-top-left lg:origin-top-right border border-hairline-soft bg-paper py-2 shadow-[0_8px_24px_-8px_rgba(42,31,23,0.18)]"
      >
        <li v-for="l in SUPPORTED" :key="l.code">
          <button
            type="button"
            role="menuitemradio"
            :aria-checked="l.code === locale"
            class="flex w-full items-center justify-between gap-4 px-5 py-2.5 text-left font-display text-base transition-colors duration-200"
            :class="l.code === locale ? 'text-copper' : 'text-ink hover:bg-cream hover:text-copper'"
            @click="pick(l.code)"
          >
            <span>{{ l.name }}</span>
            <span
              v-if="l.code === locale"
              class="text-[0.65rem] uppercase tracking-[0.22em] text-copper"
              aria-hidden="true"
            >
              ●
            </span>
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>
