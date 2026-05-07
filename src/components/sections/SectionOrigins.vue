<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '../ui/BaseButton.vue'
import ImageSlot from '../ui/ImageSlot.vue'
import { useReveal } from '../../composables/useReveal.js'

const { t } = useI18n()
const { target, isRevealed } = useReveal()

// Latin species names are not translated.
const blockKeys = [
  { key: 'cypress', n: '01', latin: 'Cupressus sempervirens', latinTitle: null },
  { key: 'parsley', n: '02', latin: 'Petroselinum crispum', latinTitle: null },
  { key: 'molle', n: '03', latin: null, latinTitle: 'Schinus molle' },
  { key: 'terebinthifolius', n: '04', latin: null, latinTitle: 'Schinus terebinthifolius' },
]

const blocs = computed(() =>
  blockKeys.map((b) => ({
    n: b.n,
    tag: t(`origins.blocks.${b.key}.tag`),
    title: b.latinTitle ?? t(`origins.blocks.${b.key}.title`),
    titleIsLatin: !!b.latinTitle,
    latin: b.latin,
    text: t(`origins.blocks.${b.key}.text`),
  })),
)
</script>

<template>
  <section id="origen" class="section-y bg-paper" aria-labelledby="origen-title">
    <div class="container-solana">
      <div ref="target" class="reveal" :class="{ 'is-revealed': isRevealed }">
        <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div class="lg:col-span-5">
            <ImageSlot
              video="/produccio-julivert.mp4"
              :alt="t('origins.productionAlt')"
              :caption="`${t('origins.productionCaption')} · Petroselinum crispum`"
              ratio="9/16"
              tone="clay"
            />
          </div>
          <div class="lg:col-span-6 lg:col-start-7">
            <p class="eyebrow">{{ t('origins.eyebrow') }}</p>
            <h2
              id="origen-title"
              class="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] text-ink"
            >
              {{ t('origins.titleLine1') }}<br />
              <span class="italic text-copper">{{ t('origins.titleEmphasis') }}</span>{{ t('origins.titleSuffix') }}
            </h2>
            <div class="prose-solana mt-8">
              <p>{{ t('origins.body1') }}</p>
              <p>
                {{ t('origins.body2Prefix') }}<em>Schinus molle</em>{{ t('origins.body2Middle') }}<em>Schinus terebinthifolius</em>{{ t('origins.body2Suffix') }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-16 grid gap-px border-y border-hairline bg-hairline md:grid-cols-2">
          <article
            v-for="b in blocs"
            :key="b.n"
            class="group bg-paper p-8 transition-colors duration-500 hover:bg-cream lg:p-12"
          >
            <div class="flex items-baseline justify-between">
              <span class="font-display text-base italic text-copper">{{ b.n }}</span>
              <span class="text-[0.7rem] uppercase tracking-[0.22em] text-clay">{{ b.tag }}</span>
            </div>
            <h3
              class="mt-10 font-display text-[clamp(1.5rem,2.2vw,1.875rem)] leading-[1.1] text-ink"
              :class="{ italic: b.titleIsLatin }"
            >
              {{ b.title }}
            </h3>
            <p v-if="b.latin" class="mt-2 font-display text-sm italic text-copper">{{ b.latin }}</p>
            <p class="prose-solana mt-5 text-[0.95rem]">{{ b.text }}</p>
          </article>
        </div>

        <div class="mt-14 flex justify-center">
          <BaseButton href="#territori" variant="ghost">{{ t('origins.cta') }}</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
