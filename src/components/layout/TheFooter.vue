<script setup>
const principal = [
  { label: 'Home', href: '#hero' },
  { label: 'La Destil·leria', href: '#destilleria' },
  { label: 'El Procés', href: '#proces' },
  { label: 'Matèria primera', href: '#origen' },
  { label: 'Contacte', href: '#contacte' },
]
const secundari = [
  { label: 'Destil·lacions', href: '#destilacions' },
  { label: 'Empordà', href: '#territori' },
]
const any_ = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink text-cream/85">
    <div class="container-solana py-20 lg:py-28">
      <div class="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div class="lg:col-span-5">
          <div class="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] text-cream">
            La Solana
          </div>
          <p class="mt-4 font-display text-xl italic text-cream/70">Destil·leria</p>
          <div class="mt-10 max-w-sm text-sm leading-relaxed text-cream/70">
            <p>Destil·lació premium d'olis essencials.<br />Empordà, Catalunya.</p>
            <p class="mt-4">Contacte professional</p>
          </div>
        </div>

        <div class="lg:col-span-3">
          <p class="eyebrow !text-copper">Menú</p>
          <ul class="mt-6 space-y-4 font-display text-xl">
            <li v-for="i in principal" :key="i.href">
              <a :href="i.href" class="group inline-flex items-center gap-3 text-cream transition-opacity duration-300 hover:opacity-100 opacity-90">
                <span class="h-px w-0 bg-copper transition-all duration-500 ease-out group-hover:w-6" aria-hidden="true" />
                {{ i.label }}
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-4">
          <p class="eyebrow !text-copper">Secundari</p>
          <ul class="mt-6 space-y-4 font-display text-xl">
            <li v-for="i in secundari" :key="i.href">
              <a :href="i.href" class="group inline-flex items-center gap-3 text-cream opacity-90 transition-opacity duration-300 hover:opacity-100">
                <span class="h-px w-0 bg-copper transition-all duration-500 ease-out group-hover:w-6" aria-hidden="true" />
                {{ i.label }}
              </a>
            </li>
          </ul>
          <div class="mt-10">
            <p class="eyebrow !text-copper">Segueix-nos</p>
            <ul class="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/75">
              <li><a class="hover:text-cream" href="#univers">Instagram</a></li>
              <li><a class="hover:text-cream" href="#univers">LinkedIn</a></li>
              <li><a class="hover:text-cream" href="#univers">Vimeo</a></li>
              <li><a class="hover:text-cream" href="#univers">Newsletter</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-20 flex flex-col gap-4 border-t border-cream/15 pt-8 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ any_ }} Destil·leria La Solana. Tots els drets reservats.</p>
        <p class="font-display italic">Destil·lem amb criteri.</p>
      </div>
    </div>
  </footer>
</template>
