<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '../ui/BaseButton.vue'
import { useReveal } from '../../composables/useReveal.js'

const { t } = useI18n()
const { target, isRevealed } = useReveal()
const videoLoaded = ref(false)
const cardVideoLoaded = ref(false)
</script>

<template>
  <section id="hero" class="relative overflow-hidden bg-cream" aria-labelledby="hero-title">
    <video
      :src="'/emporda2.mp4'"
      autoplay
      loop
      muted
      playsinline
      preload="metadata"
      :aria-label="t('hero.videoAlt')"
      class="absolute inset-0 h-full w-full object-cover transition-[transform,opacity] duration-[1200ms] ease-out will-change-transform"
      :class="videoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
      @loadeddata="videoLoaded = true"
    />
    <div class="absolute inset-0 bg-cream/75" aria-hidden="true" />

    <div class="relative z-10 flex min-h-[100svh] flex-col">
      <div class="container-solana flex-1 pt-8 pb-24 lg:py-0 lg:flex lg:items-center">
        <div class="grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div
            ref="target"
            class="reveal order-2 lg:order-1 lg:col-span-7 lg:pr-8"
            :class="{ 'is-revealed': isRevealed }"
          >
            <div class="flex items-center gap-4 text-copper">
              <span class="h-px w-10 bg-copper" aria-hidden="true" />
              <span class="eyebrow">{{ t('hero.eyebrow') }}</span>
            </div>

            <h1
              id="hero-title"
              class="mt-10 font-display text-[clamp(3rem,7.2vw,6.75rem)] font-light leading-[0.98] tracking-[-0.03em] text-ink"
            >
              {{ t('hero.titleLine1') }}
              <span class="block italic text-copper">{{ t('hero.titleEmphasis') }}</span>
              <span class="block">{{ t('hero.titleLine3') }}</span>
            </h1>

            <p class="mt-10 max-w-xl font-display text-[clamp(1.25rem,1.6vw,1.5rem)] italic leading-[1.45] text-clay">
              {{ t('hero.lede') }}
            </p>

            <p class="prose-solana mt-8 max-w-xl text-[1rem]">
              {{ t('hero.body') }}
            </p>

            <div class="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
              <BaseButton href="#destilleria">{{ t('hero.cta') }}</BaseButton>
              <div class="flex items-center gap-4">
                <span class="h-px w-8 bg-copper/60" aria-hidden="true" />
                <span class="font-display text-base italic text-clay">{{ t('hero.tagline') }}</span>
              </div>
            </div>
          </div>

          <div class="hidden lg:order-2 lg:col-span-5 lg:block">
            <div class="relative">
              <div class="pointer-events-none absolute -left-6 -top-6 hidden h-40 w-px bg-copper/40 lg:block" aria-hidden="true" />
              <div class="pointer-events-none absolute -right-6 -bottom-6 hidden h-40 w-px bg-copper/40 lg:block" aria-hidden="true" />
              <figure class="group relative overflow-hidden">
                <div class="relative w-full overflow-hidden bg-clay/10" style="aspect-ratio: 3/4">
                  <video
                    :src="'/emporda2.mp4'"
                    autoplay
                    loop
                    muted
                    playsinline
                    preload="metadata"
                    :aria-label="t('hero.videoAlt')"
                    class="absolute inset-0 h-full w-full object-cover transition-[transform,opacity] duration-[1200ms] ease-out will-change-transform"
                    :class="cardVideoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
                    @loadeddata="cardVideoLoaded = true"
                  />
                </div>
                <figcaption class="mt-3 font-display text-sm italic text-clay">
                  {{ t('hero.videoCaption') }}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div class="container-solana">
        <div class="flex items-center justify-between border-t border-hairline pb-8 pt-6 text-[0.72rem] uppercase tracking-[0.28em] text-clay/70">
          <span>{{ t('hero.statsLocation') }}</span>
          <span class="hidden sm:inline">{{ t('hero.statsExperience') }}</span>
          <span>{{ t('hero.scroll') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
