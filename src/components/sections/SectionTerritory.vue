<script setup>
import ImageSlot from '../ui/ImageSlot.vue'
import { useReveal } from '../../composables/useReveal.js'
const { target, isRevealed } = useReveal()
</script>

<template>
  <section id="territori" class="section-y bg-cream" aria-labelledby="territori-title">
    <div class="container-solana">
      <div ref="target" class="reveal" :class="{ 'is-revealed': isRevealed }">
        <div class="grid items-end gap-12 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="eyebrow">Territori</p>
            <h2
              id="territori-title"
              class="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1] text-ink"
            >
              L'Empordà<br />
              com a <span class="italic text-copper">origen</span><br />
              i caràcter.
            </h2>
          </div>
          <div class="lg:col-span-8">
            <ImageSlot
              video="/emporda2.mp4"
              alt="Paisatge de l'Empordà — llum, vegetació i territori"
              caption="L'Empordà — llum, vegetació i temps"
              ratio="16/9"
              tone="clay"
            />
          </div>
        </div>

        <div class="mt-16 grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-6 lg:col-start-4">
            <div class="prose-solana">
              <p>
                La Solana està ubicada a l'Empordà, un entorn que reforça la
                nostra manera d'entendre el producte natural, el temps i el
                procés.
              </p>
              <p>
                No és només una ubicació. És part del caràcter de la
                destil·leria. La llum, el paisatge, la relació amb la matèria
                vegetal i una manera de fer més pausada i més precisa formen
                part del nostre llenguatge.
              </p>
              <p>
                Aquest context acompanya una producció orientada a
                l'excel·lència, on cada detall importa i on la qualitat no es
                negocia.
              </p>
            </div>
          </div>
          <div class="lg:col-span-2 lg:col-start-11">
            <div class="flex flex-col gap-4 border-l border-hairline pl-6">
              <div>
                <p class="eyebrow !text-clay/70">Latitud</p>
                <p class="mt-1 font-display text-lg text-ink">42.16° N</p>
              </div>
              <div>
                <p class="eyebrow !text-clay/70">Clima</p>
                <p class="mt-1 font-display text-lg text-ink">Mediterrani</p>
              </div>
              <div>
                <p class="eyebrow !text-clay/70">Tramuntana</p>
                <p class="mt-1 font-display text-lg text-ink">Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
