<script setup>
import { ref } from 'vue'
import BaseButton from '../ui/BaseButton.vue'
import { useReveal } from '../../composables/useReveal.js'

const { target, isRevealed } = useReveal()
const videoLoaded = ref(false)
</script>

<template>
  <section id="hero" class="relative overflow-hidden bg-cream" aria-labelledby="hero-title">
    <div class="container-solana relative">
      <div class="grid min-h-[100svh] items-center gap-14 py-24 lg:grid-cols-12 lg:gap-16 lg:py-0">
        <div
          ref="target"
          class="reveal order-2 lg:order-1 lg:col-span-7 lg:pr-8"
          :class="{ 'is-revealed': isRevealed }"
        >
          <div class="flex items-center gap-4 text-copper">
            <span class="h-px w-10 bg-copper" aria-hidden="true" />
            <span class="eyebrow">Destil·leria La Solana · Empordà</span>
          </div>

          <h1
            id="hero-title"
            class="mt-10 font-display text-[clamp(3rem,7.2vw,6.75rem)] font-light leading-[0.98] tracking-[-0.03em] text-ink"
          >
            Destil·lació
            <span class="block italic text-copper">d'olis essencials</span>
            <span class="block">a l'Empordà</span>
          </h1>

          <p class="mt-10 max-w-xl font-display text-[clamp(1.25rem,1.6vw,1.5rem)] italic leading-[1.45] text-clay">
            Destil·lem únicament productes naturals d'alta qualitat amb un sistema
            de producció d'alt nivell, pensat per obtenir la màxima puresa,
            precisió i expressió aromàtica.
          </p>

          <p class="prose-solana mt-8 max-w-xl text-[1rem]">
            A Destil·leria La Solana, una gran part del valor afegit no rau només
            en la matèria primera, sinó també en la qualitat de la destil·ladora,
            del serpentí i dels materials de producció. Aquesta infraestructura,
            situada a l'Empordà, ens permet treballar cada destil·lació amb una
            exigència extrema i obtenir un resultat de gamma premium.
          </p>

          <div class="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
            <BaseButton href="#destilleria">Descobrir la destil·leria</BaseButton>
            <div class="flex items-center gap-4">
              <span class="h-px w-8 bg-copper/60" aria-hidden="true" />
              <span class="font-display text-base italic text-clay">Destil·lació premium des de l'origen</span>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2 lg:col-span-5">
          <div class="relative">
            <div class="pointer-events-none absolute -left-6 -top-6 hidden h-40 w-px bg-copper/40 lg:block" aria-hidden="true" />
            <div class="pointer-events-none absolute -right-6 -bottom-6 hidden h-40 w-px bg-copper/40 lg:block" aria-hidden="true" />
            <figure class="group relative overflow-hidden">
              <div class="relative w-full overflow-hidden bg-clay/10" style="aspect-ratio: 3/4">
                <video
                  :src="'/solana1.mp4'"
                  autoplay
                  loop
                  muted
                  playsinline
                  preload="metadata"
                  aria-label="Destil·lació al taller La Solana, Empordà"
                  class="absolute inset-0 h-full w-full object-cover transition-[transform,opacity] duration-[1200ms] ease-out will-change-transform"
                  :class="videoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
                  @loadeddata="videoLoaded = true"
                />
              </div>
              <figcaption class="mt-3 font-display text-sm italic text-clay">
                Serpentí d'inox — taller La Solana, Empordà
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>

    <div class="container-solana">
      <div class="flex items-center justify-between border-t border-hairline pb-8 pt-6 text-[0.72rem] uppercase tracking-[0.28em] text-clay/70">
        <span>Est. Empordà</span>
        <span class="hidden sm:inline">+35 anys d'experiència</span>
        <span>Scroll</span>
      </div>
    </div>
  </section>
</template>
