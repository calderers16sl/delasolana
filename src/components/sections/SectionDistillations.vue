<script setup>
import BaseButton from '../ui/BaseButton.vue'
import DistillationCard from '../ui/DistillationCard.vue'
import { useReveal } from '../../composables/useReveal.js'
const { target, isRevealed } = useReveal()

const fitxes = [
  {
    index: '01',
    title: 'Xiprer',
    subtitle: 'Cupressus sempervirens',
    image: '/src/assets/images/xiprer.jpg',
    video: '/xipre.mp4',
    tone: 'copper',
    text: 'Destil·lació de perfil net, estructurat i elegant, treballada per preservar la identitat natural del producte i oferir-ne una expressió precisa i refinada.',
  },
  {
    index: '02',
    title: 'Schinus',
    subtitle: 'molle & terebinthifolius',
    image: '/src/assets/images/schinus.jpg',
    video: '/schinus.mp4',
    tone: 'clay',
    text: "Dues espècies pròximes que comparteixen el perfil del pebre rosa, amb matisos propis a cada destil·lació. Les treballem amb la mateixa cura per fer-ne emergir el caràcter aromàtic més precís.",
  },
  {
    index: '03',
    title: 'Julivert',
    subtitle: 'Petroselinum crispum',
    image: null,
    video: '/julivert.mp4',
    tone: 'clay',
    text: "Una matèria fresca i herbàcia que reclama una destil·lació delicada. Treballem el julivert amb baixa intensitat per preservar-ne la viva expressió vegetal.",
  },
]
</script>

<template>
  <section id="destilacions" class="section-y bg-cream" aria-labelledby="destilacions-title">
    <div class="container-solana">
      <div ref="target" class="reveal" :class="{ 'is-revealed': isRevealed }">
        <div class="mx-auto max-w-2xl text-center">
          <p class="eyebrow">Destil·lacions destacades</p>
          <h2
            id="destilacions-title"
            class="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] text-ink"
          >
            Una selecció de matèries naturals<br class="hidden sm:block" />
            treballades amb <span class="italic text-copper">criteri tècnic</span>.
          </h2>
          <p class="prose-solana mt-6 text-[1rem]">
            Cada fitxa és un exercici propi de precisió. Treballem matèries
            vives, sense fórmules genèriques, cercant l'expressió més fidel de
            cada producte.
          </p>
        </div>

        <div class="mt-16 grid gap-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          <DistillationCard
            v-for="f in fitxes"
            :key="f.index"
            :index="f.index"
            :title="f.title"
            :subtitle="f.subtitle"
            :text="f.text"
            :image="f.image"
            :video="f.video"
            :tone="f.tone"
            :alt="`${f.title} — ${f.subtitle || ''}`"
          />
        </div>

        <div class="mt-20 flex flex-col items-center gap-8 text-center">
          <p class="mx-auto max-w-2xl font-display text-[clamp(1.25rem,2vw,1.625rem)] italic leading-snug text-ink">
            Cada destil·lació és una peça pròpia. No treballem sobre fórmules
            genèriques, sinó sobre matèries vives que requereixen coneixement,
            sensibilitat i precisió.
          </p>
          <BaseButton href="#contacte" variant="ghost">Consultar sobre una destil·lació</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
