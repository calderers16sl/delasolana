<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' },
  href: { type: String, default: null },
  type: { type: String, default: 'button' },
})

const tag = computed(() => (props.href ? 'a' : 'button'))
const baseClasses =
  'group inline-flex items-center gap-3 text-sm font-medium tracking-wide transition-all duration-300 ease-out'
const variantClasses = computed(() => {
  if (props.variant === 'ghost') {
    return 'text-ink hover:text-copper'
  }
  if (props.variant === 'link') {
    return 'text-copper hover:text-[color:var(--color-copper-deep)] uppercase tracking-[0.22em] text-xs'
  }
  return 'bg-ink text-cream px-7 py-4 rounded-full hover:bg-copper'
})
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :type="href ? null : type"
    :class="[baseClasses, variantClasses]"
  >
    <span class="relative">
      <slot />
      <span
        v-if="variant === 'ghost' || variant === 'link'"
        class="pointer-events-none absolute left-0 right-0 -bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-500 ease-out group-hover:scale-x-100"
      />
    </span>
    <svg
      v-if="variant !== 'link'"
      class="h-4 w-4 shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-1"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </component>
</template>
