<script setup>
import ImageSlot from '../ui/ImageSlot.vue'
import SectionEyebrow from '../ui/SectionEyebrow.vue'
import { useReveal } from '../../composables/useReveal.js'
const { target, isRevealed } = useReveal()
</script>

<template>
  <section id="destilleria" class="section-y bg-cream" aria-labelledby="destilleria-title">
    <div class="container-solana">
      <div ref="target" class="reveal grid gap-12 lg:grid-cols-12 lg:gap-16" :class="{ 'is-revealed': isRevealed }">
        <div class="lg:col-span-6">
          <ImageSlot
            video="/desiladora.mp4"
            alt="Interior de la destil·leria La Solana amb destil·ladora d'inox"
            caption="La destil·ladora — cor del procés"
            ratio="16/9"
            tone="copper"
          />
        </div>

        <div class="lg:col-span-6 lg:pl-4 xl:pl-10">
          <SectionEyebrow index="01" label="La Destil·leria" />

          <h2
            id="destilleria-title"
            class="mt-8 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.05] text-ink"
          >
            Equip, materials, territori<br />
            i <span class="italic text-copper">filosofia</span> de producció.
          </h2>

          <div class="mt-8 prose-solana">
            <p>
              La Solana és una destil·ladora premium on la qualitat del
              sistema de producció forma part directa del valor final. La nostra
              infraestructura no és un detall tècnic secundari: és una eina
              essencial per assolir una destil·lació més fina, més neta i més
              precisa.
            </p>
            <p>
              La qualitat de la destil·ladora, del serpentí i dels materials
              utilitzats ens permet treballar amb més control i més sensibilitat
              sobre cada tirada.
            </p>
            <p>
              Mantenim una atenció constant sobre cada fase del procés.
              Aquesta manera de treballar ens permet preservar l'exigència, la
              coherència i la qualitat en cada producció.
            </p>
          </div>

          <dl class="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-hairline pt-8">
            <div>
              <dt class="eyebrow !text-clay/70">Mètode</dt>
              <dd class="mt-2 font-display text-xl text-ink">De precisió</dd>
            </div>
            <div>
              <dt class="eyebrow !text-clay/70">Origen</dt>
              <dd class="mt-2 font-display text-xl text-ink">Empordà</dd>
            </div>
            <div>
              <dt class="eyebrow !text-clay/70">Matèria</dt>
              <dd class="mt-2 font-display text-xl text-ink">Natural, alta qualitat</dd>
            </div>
            <div>
              <dt class="eyebrow !text-clay/70">Enfocament</dt>
              <dd class="mt-2 font-display text-xl text-ink">Premium</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
