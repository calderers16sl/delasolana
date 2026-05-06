<script setup>
import BaseButton from '../ui/BaseButton.vue'
import ImageSlot from '../ui/ImageSlot.vue'
import { useReveal } from '../../composables/useReveal.js'
const { target, isRevealed } = useReveal()

const blocs = [
  {
    n: '01',
    tag: 'Cultiu propi',
    title: '10.000 xiprés',
    text: 'Una plantació pròpia de xiprés mediterrani, criada amb paciència i destinada a obtenir essències netes, fidels al perfil aromàtic de l\'Empordà.',
  },
  {
    n: '02',
    tag: 'Cultiu propi',
    title: 'Hectàrees de julivert',
    text: 'Camps dedicats que ens asseguren un volum constant i una qualitat homogènia, collits en el moment òptim per a cada destil·lació.',
  },
  {
    n: '03',
    tag: 'Importació · Pacífic',
    title: 'Schinus molle',
    text: 'Llavors importades de la vessant pacífica de Llatinoamèrica, on l\'arbre creix en el seu hàbitat originari i ofereix un caràcter aromàtic especiat i lluminós.',
  },
  {
    n: '04',
    tag: 'Importació · Atlàntic',
    title: 'Schinus terebinthifolius',
    text: 'Origen a la costa atlàntica del Brasil, una espècie que aporta un perfil resinós i pebrat amb una identitat botànica clarament diferenciada.',
  },
]
</script>

<template>
  <section id="origen" class="section-y bg-paper" aria-labelledby="origen-title">
    <div class="container-solana">
      <div ref="target" class="reveal" :class="{ 'is-revealed': isRevealed }">
        <div class="grid gap-14 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="eyebrow">Matèria primera</p>
            <h2
              id="origen-title"
              class="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] text-ink"
            >
              Cultivada per nosaltres,<br />
              <span class="italic text-copper">seleccionada al món</span>.
            </h2>
          </div>
          <div class="lg:col-span-6 lg:col-start-7">
            <div class="prose-solana">
              <p>
                A la Solana no esperem el subministrament: el cultivem. Tenim
                producció agrícola pròpia, amb 10.000 xiprés i hectàrees
                dedicades al julivert que destinem íntegrament a la destil·lació
                — una garantia de disponibilitat, traçabilitat i sostenibilitat
                real.
              </p>
              <p>
                Per als botànics que demanen un origen específic, anem a
                buscar-lo. Importem llavors de <em>Schinus molle</em> de la
                vessant pacífica de Llatinoamèrica i <em>Schinus terebinthifolius</em>
                de la costa atlàntica del Brasil, dues espècies que només
                expressen el seu caràcter ple en el seu territori d'origen.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-16 grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div class="lg:col-span-2 lg:pt-2">
            <p class="eyebrow">Producció pròpia</p>
          </div>
          <div class="lg:col-span-10">
            <ImageSlot
              video="/produccio-julivert.mp4"
              alt="Camps de julivert de cultiu propi a la Solana"
              caption="Cultiu propi · Camps de julivert"
              ratio="16/9"
              tone="clay"
            />
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
            <h3 class="mt-10 font-display text-[clamp(1.5rem,2.2vw,1.875rem)] leading-[1.1] text-ink">
              {{ b.title }}
            </h3>
            <p class="prose-solana mt-5 text-[0.95rem]">{{ b.text }}</p>
          </article>
        </div>

        <div class="mt-14 flex justify-center">
          <BaseButton href="#territori" variant="ghost">Conèixer el territori</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
