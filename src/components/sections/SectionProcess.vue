<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DistillationCard from '../ui/DistillationCard.vue'
import SectionEyebrow from '../ui/SectionEyebrow.vue'
import { useReveal } from '../../composables/useReveal.js'

const { t } = useI18n()
const { target, isRevealed } = useReveal()

const stepKeys = [
  { key: 'reception', n: '01', video: '/unloading.mp4', tone: 'copper' },
  { key: 'loading', n: '02', video: '/carrega.mp4', tone: 'clay' },
  { key: 'distill', n: '03', video: '/destilacio-jordi.mp4', tone: 'copper' },
  { key: 'monitor', n: '04', video: '/distillation_2.mp4', tone: 'clay' },
  { key: 'bottling', n: '05', video: '/bottling.mp4', tone: 'clay' },
]

const passos = computed(() =>
  stepKeys.map((s) => ({
    index: t('process.phaseLabel', { n: s.n }),
    title: t(`process.steps.${s.key}.title`),
    subtitle: t(`process.steps.${s.key}.subtitle`),
    text: t(`process.steps.${s.key}.text`),
    video: s.video,
    tone: s.tone,
  })),
)
</script>

<template>
  <section id="proces" class="section-y bg-paper" aria-labelledby="proces-title">
    <div class="container-solana">
      <div ref="target" class="reveal" :class="{ 'is-revealed': isRevealed }">
        <div class="mx-auto max-w-2xl text-center">
          <div class="flex justify-center">
            <SectionEyebrow index="02" :label="t('process.eyebrow')" />
          </div>

          <h2
            id="proces-title"
            class="mt-8 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.05] text-ink"
          >
            {{ t('process.titleLine1') }}
            {{ t('process.titleConnector') }} <span class="italic text-copper">{{ t('process.titleEmphasis') }}</span>
            {{ t('process.titleLine3') }}
          </h2>

          <div class="mt-8 prose-solana">
            <p>{{ t('process.body1') }}</p>
            <p>{{ t('process.body2') }}</p>
            <p>{{ t('process.body3') }}</p>
          </div>
        </div>

        <div class="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
          <DistillationCard
            v-for="p in passos"
            :key="p.index"
            :index="p.index"
            :title="p.title"
            :subtitle="p.subtitle"
            :text="p.text"
            :video="p.video"
            :tone="p.tone"
            :alt="`${p.title} — ${p.subtitle}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>
