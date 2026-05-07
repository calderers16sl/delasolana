<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '../ui/BaseButton.vue'
import DistillationCard from '../ui/DistillationCard.vue'
import { useReveal } from '../../composables/useReveal.js'

const { t } = useI18n()
const { target, isRevealed } = useReveal()

// Latin species names live here (not translated).
const cardKeys = [
  { key: 'xiprer', index: '01', subtitle: 'Cupressus sempervirens', image: '/src/assets/images/xiprer.jpg', video: '/xipre.mp4', tone: 'copper' },
  { key: 'schinus', index: '02', subtitle: 'molle & terebinthifolius', image: '/src/assets/images/schinus.jpg', video: '/schinus.mp4', tone: 'clay' },
  { key: 'julivert', index: '03', subtitle: 'Petroselinum crispum', image: null, video: '/julivert.mp4', tone: 'clay' },
]

const fitxes = computed(() =>
  cardKeys.map((c) => ({
    index: c.index,
    title: t(`distillations.cards.${c.key}.title`),
    subtitle: c.subtitle,
    text: t(`distillations.cards.${c.key}.text`),
    image: c.image,
    video: c.video,
    tone: c.tone,
  })),
)
</script>

<template>
  <section id="destilacions" class="section-y bg-cream" aria-labelledby="destilacions-title">
    <div class="container-solana">
      <div ref="target" class="reveal" :class="{ 'is-revealed': isRevealed }">
        <div class="mx-auto max-w-2xl text-center">
          <p class="eyebrow">{{ t('distillations.eyebrow') }}</p>
          <h2 id="destilacions-title"
            class="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] text-ink">
            {{ t('distillations.titleLine1') }}<br class="hidden sm:block" />
            {{ t('distillations.titlePre') }} <span class="italic text-copper">{{ t('distillations.titleEmphasis')
              }}</span>{{ t('distillations.titleSuffix') }}
          </h2>
          <p class="prose-solana mt-6 text-[1rem]">
            {{ t('distillations.intro') }}
          </p>
        </div>

        <div class="mt-16 grid gap-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          <DistillationCard v-for="f in fitxes" :key="f.index" :index="f.index" :title="f.title" :subtitle="f.subtitle"
            :text="f.text" :image="f.image" :video="f.video" :tone="f.tone" :alt="`${f.title} — ${f.subtitle || ''}`" />
        </div>


      </div>
    </div>
  </section>
</template>
