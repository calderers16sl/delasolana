<script setup>
import { useI18n } from 'vue-i18n'
import { useReveal } from '../../composables/useReveal.js'

const { t } = useI18n()
const { target, isRevealed } = useReveal()
</script>

<template>
  <section id="missatge" class="section-y bg-paper" aria-labelledby="missatge-title">
    <div class="container-solana">
      <div ref="target" class="reveal mx-auto max-w-3xl" :class="{ 'is-revealed': isRevealed }">
        <p class="eyebrow text-center">{{ t('message.eyebrow') }}</p>
        <h2
          id="missatge-title"
          class="mt-6 text-center font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] text-ink"
        >
          {{ t('message.titleLine1') }}<br class="hidden sm:block" />
          <span class="italic text-copper">{{ t('message.titleEmphasis') }}</span> {{ t('message.titleLine3') }}<br class="hidden sm:block" />
          {{ t('message.titleLine4') }}
        </h2>

        <div class="mx-auto mt-12 max-w-2xl prose-solana text-[1.0625rem]">
          <p>{{ t('message.body1') }}</p>
          <p>{{ t('message.body2') }}</p>
          <p>{{ t('message.body3') }}</p>
        </div>

        <div class="mx-auto mt-14 flex max-w-xl items-center gap-6">
          <span class="h-px flex-1 bg-copper/60" aria-hidden="true" />
          <p class="font-display text-[clamp(1.25rem,2vw,1.75rem)] italic leading-snug text-ink">
            {{ t('message.taglineLine1') }}<br />
            <span class="text-copper">{{ t('message.taglineEmphasis') }}</span>
          </p>
          <span class="h-px flex-1 bg-copper/60" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
</template>
