<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: { type: String, default: null },
  video: { type: String, default: null },
  alt: { type: String, required: true },
  caption: { type: String, default: null },
  ratio: { type: String, default: '4/5' },
  tone: { type: String, default: 'copper' },
})

const failed = ref(false)
const loaded = ref(false)

function onError() {
  failed.value = true
}
function onLoad() {
  loaded.value = true
}

const toneGradient = {
  copper: 'from-[#c9825f] via-[#a96340] to-[#6b4a38]',
  clay: 'from-[#a98f79] via-[#826652] to-[#4a382b]',
  cream: 'from-[#f2ede4] via-[#dfd4c2] to-[#bda88e]',
}
</script>

<template>
  <figure class="group relative overflow-hidden">
    <div
      class="relative w-full overflow-hidden bg-clay/10"
      :style="{ aspectRatio: ratio }"
    >
      <video
        v-if="video && !failed"
        :src="video"
        :aria-label="alt"
        autoplay
        loop
        muted
        playsinline
        preload="metadata"
        class="absolute inset-0 h-full w-full object-cover transition-[transform,opacity] duration-[1200ms] ease-out will-change-transform"
        :class="loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
        @error="onError"
        @loadeddata="onLoad"
      />
      <img
        v-else-if="src && !failed"
        :src="src"
        :alt="alt"
        loading="lazy"
        decoding="async"
        class="absolute inset-0 h-full w-full object-cover transition-[transform,opacity] duration-[1200ms] ease-out will-change-transform"
        :class="loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
        @error="onError"
        @load="onLoad"
      />
      <div
        v-if="!src && !video || failed"
        class="grain absolute inset-0 bg-gradient-to-br"
        :class="toneGradient[tone] || toneGradient.copper"
        aria-hidden="true"
      >
        <div class="absolute inset-0 flex items-end p-6">
          <p class="relative z-10 font-display italic text-sm leading-snug text-cream/90 max-w-xs">
            {{ caption || alt }}
          </p>
        </div>
        <div class="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
      </div>
    </div>
    <figcaption v-if="caption && (src || video) && !failed" class="mt-3 font-display text-sm italic text-clay">
      {{ caption }}
    </figcaption>
  </figure>
</template>
