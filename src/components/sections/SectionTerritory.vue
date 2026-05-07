<script setup>
import { useI18n } from 'vue-i18n'
import ImageSlot from '../ui/ImageSlot.vue'
import { useReveal } from '../../composables/useReveal.js'

const { t } = useI18n()
const { target, isRevealed } = useReveal()
</script>

<template>
  <section id="territori" class="section-y bg-cream" aria-labelledby="territori-title">
    <div class="container-solana">
      <div ref="target" class="reveal" :class="{ 'is-revealed': isRevealed }">
        <div class="grid items-end gap-12 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="eyebrow">{{ t('territory.eyebrow') }}</p>
            <h2
              id="territori-title"
              class="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1] text-ink"
            >
              {{ t('territory.titleLine1') }}<br />
              {{ t('territory.titleConnector') }} <span class="italic text-copper">{{ t('territory.titleEmphasis') }}</span><br />
              {{ t('territory.titleLine3') }}
            </h2>
          </div>
          <div class="lg:col-span-8">
            <ImageSlot
              video="/solana1.mp4"
              :alt="t('territory.imageAlt')"
              :caption="t('territory.imageCaption')"
              ratio="16/9"
              tone="clay"
            />
          </div>
        </div>

        <div class="mt-16 grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-6 lg:col-start-4">
            <div class="prose-solana">
              <p>{{ t('territory.body1') }}</p>
              <p>{{ t('territory.body2') }}</p>
              <p>{{ t('territory.body3') }}</p>
            </div>
          </div>
          <div class="lg:col-span-2 lg:col-start-11">
            <div class="flex flex-col gap-4 border-l border-hairline pl-6">
              <div>
                <p class="eyebrow !text-clay/70">{{ t('territory.stats.latitude.k') }}</p>
                <p class="mt-1 font-display text-lg text-ink">{{ t('territory.stats.latitude.v') }}</p>
              </div>
              <div>
                <p class="eyebrow !text-clay/70">{{ t('territory.stats.climate.k') }}</p>
                <p class="mt-1 font-display text-lg text-ink">{{ t('territory.stats.climate.v') }}</p>
              </div>
              <div>
                <p class="eyebrow !text-clay/70">{{ t('territory.stats.tramuntana.k') }}</p>
                <p class="mt-1 font-display text-lg text-ink">{{ t('territory.stats.tramuntana.v') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
