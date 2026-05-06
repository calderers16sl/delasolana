<script setup>
import { useReveal } from '../../composables/useReveal.js'
const { target, isRevealed } = useReveal()
</script>

<template>
  <section id="missatge" class="section-y bg-paper" aria-labelledby="missatge-title">
    <div class="container-solana">
      <div ref="target" class="reveal mx-auto max-w-3xl" :class="{ 'is-revealed': isRevealed }">
        <p class="eyebrow text-center">Missatge de La Solana</p>
        <h2
          id="missatge-title"
          class="mt-6 text-center font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] text-ink"
        >
          Més de 35 anys d'experiència<br class="hidden sm:block" />
          <span class="italic text-copper">ens avalen</span> i defineixen<br class="hidden sm:block" />
          la nostra manera de treballar.
        </h2>

        <div class="mx-auto mt-12 max-w-2xl prose-solana text-[1.0625rem]">
          <p>
            Destil·leria La Solana és una destil·ladora premium ubicada a
            l'Empordà, creada per treballar únicament amb productes naturals
            d'alta qualitat i portar cada destil·lació al màxim nivell de precisió
            possible.
          </p>
          <p>
            Per a nosaltres, el resultat final depèn tant de l'origen de la
            matèria primera com de la qualitat real del sistema de producció. La
            destil·ladora, el serpentí, els materials i la conducció del procés
            formen part essencial del producte.
          </p>
          <p>
            Treballem amb un nivell d'exigència alt perquè el nostre objectiu no
            és produir més, sinó destil·lar millor.
          </p>
        </div>

        <div class="mx-auto mt-14 flex max-w-xl items-center gap-6">
          <span class="h-px flex-1 bg-copper/60" aria-hidden="true" />
          <p class="font-display text-[clamp(1.25rem,2vw,1.75rem)] italic leading-snug text-ink">
            Qualitat extrema.<br />
            <span class="text-copper">Destil·lem amb criteri.</span>
          </p>
          <span class="h-px flex-1 bg-copper/60" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
</template>
