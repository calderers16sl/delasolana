<script setup>
import ImageSlot from './ImageSlot.vue'

defineProps({
  index: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: null },
  text: { type: String, required: true },
  image: { type: String, default: null },
  video: { type: String, default: null },
  alt: { type: String, default: '' },
  tone: { type: String, default: 'copper' },
  variant: { type: String, default: 'product' },
})
</script>

<template>
  <article class="group flex flex-col">
    <div class="mb-5 flex items-baseline gap-3 text-clay/70">
      <span class="eyebrow !text-clay/70">{{ index }}</span>
      <span class="h-px flex-1 bg-hairline" aria-hidden="true" />
    </div>
    <ImageSlot
      :src="image"
      :video="video"
      :alt="alt || title"
      :caption="subtitle || title"
      :tone="tone"
      ratio="4/5"
      class="mb-6"
    />
    <h3 class="font-display text-[clamp(1.5rem,2.2vw,1.875rem)] leading-tight text-ink">
      <span class="block">{{ title }}</span>
      <span v-if="subtitle" class="mt-1 block font-sans text-xs uppercase tracking-[0.22em] text-copper">
        {{ subtitle }}
      </span>
    </h3>
    <p class="prose-solana mt-4 text-[0.95rem]">{{ text }}</p>
  </article>
</template>
