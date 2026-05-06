<script setup>
import DistillationCard from '../ui/DistillationCard.vue'
import SectionEyebrow from '../ui/SectionEyebrow.vue'
import { useReveal } from '../../composables/useReveal.js'

const { target, isRevealed } = useReveal()

const passos = [
  {
    index: 'Fase 01',
    title: 'Recepció',
    subtitle: 'Arribada de la matèria',
    video: '/unloading.mp4',
    tone: 'copper',
    text: "L'arribada del producte natural és el primer punt de control. Cada lot es revisa abans d'entrar al procés.",
  },
  {
    index: 'Fase 02',
    title: 'Càrrega',
    subtitle: 'Schinus molle al destil·lador',
    video: '/carrega.mp4',
    tone: 'clay',
    text: "La matèria viva es disposa amb cura dins la destil·ladora, preservant-ne l'estructura i l'expressió aromàtica.",
  },
  {
    index: 'Fase 03',
    title: 'Destil·lació',
    subtitle: "Treball de precisió a l'inox",
    video: '/destilacio-jordi.mp4',
    tone: 'copper',
    text: 'El destil·lat avança lentament. Llegim cada fase i ajustem temperatures i tirades segons el comportament de la matèria.',
  },
  {
    index: 'Fase 04',
    title: 'Control del destil·lat',
    subtitle: 'Seguiment i ajust en temps real',
    video: '/distillation_2.mp4',
    tone: 'clay',
    text: "Supervisem la sortida del destil·lat i ajustem els paràmetres per garantir la integritat aromàtica i la qualitat final del producte.",
  },
  {
    index: 'Fase 05',
    title: 'Embotellament',
    subtitle: 'Tancament i conservació',
    video: '/bottling.mp4',
    tone: 'clay',
    text: "El producte final es transfereix i es conserva amb el mateix criteri tècnic que ha guiat tota la destil·lació.",
  },
]
</script>

<template>
  <section id="proces" class="section-y bg-paper" aria-labelledby="proces-title">
    <div class="container-solana">
      <div ref="target" class="reveal" :class="{ 'is-revealed': isRevealed }">
        <div class="mx-auto max-w-2xl text-center">
          <div class="flex justify-center">
            <SectionEyebrow index="02" label="El Procés" />
          </div>

          <h2
            id="proces-title"
            class="mt-8 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.05] text-ink"
          >
            Precisió, control
            i <span class="italic text-copper">lectura tècnica</span>
            de cada destil·lació.
          </h2>

          <div class="mt-8 prose-solana">
            <p>
              Cada producte natural requereix una interpretació pròpia. Per això
              entenem la destil·lació com un procés de lectura tècnica i
              d'execució precisa, on cada decisió influeix en el resultat final.
            </p>
            <p>
              Ajustem cada destil·lació per extreure el millor perfil possible de
              la matèria primera, buscant màxima qualitat, puresa i fidelitat
              aromàtica.
            </p>
            <p>
              No treballem la destil·lació com una simple operació productiva,
              sinó com una pràctica tècnica en què la precisió és
              essencial.
            </p>
          </div>
        </div>

        <div class="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
          <DistillationCard
            v-for="p in passos"
            :key="p.index"
            :index="p.index"
            :title="p.title"
            :subtitle="p.subtitle"
            :text="p.text"
            :video="p.video"
            :tone="p.tone"
            :alt="`${p.title} — ${p.subtitle}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>
