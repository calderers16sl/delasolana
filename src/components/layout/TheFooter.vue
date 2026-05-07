<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const principal = computed(() => [
  { label: t('footer.primary.home'), href: '#hero' },
  { label: t('footer.primary.destilleria'), href: '#destilleria' },
  { label: t('footer.primary.proces'), href: '#proces' },
  { label: t('footer.primary.origen'), href: '#origen' },
  { label: t('footer.primary.contacte'), href: '#contacte' },
])
const secundari = computed(() => [
  { label: t('footer.secondary.destilacions'), href: '#destilacions' },
  { label: t('footer.secondary.emporda'), href: '#territori' },
])
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink text-cream/85">
    <div class="container-solana py-20 lg:py-28">
      <div class="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div class="lg:col-span-5">
          <div class="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] text-cream">
            {{ t('nav.brand') }}
          </div>
          <p class="mt-4 font-display text-xl italic text-cream/70">{{ t('nav.brandSuffix') }}</p>
          <div class="mt-10 max-w-sm text-sm leading-relaxed text-cream/70">
            <p>{{ t('footer.tagline') }}<br />{{ t('footer.location') }}</p>
            <p class="mt-4">{{ t('footer.professional') }}</p>
          </div>
        </div>

        <div class="lg:col-span-3">
          <p class="eyebrow !text-copper">{{ t('footer.sections.primary') }}</p>
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
          <p class="eyebrow !text-copper">{{ t('footer.sections.secondary') }}</p>
          <ul class="mt-6 space-y-4 font-display text-xl">
            <li v-for="i in secundari" :key="i.href">
              <a :href="i.href" class="group inline-flex items-center gap-3 text-cream opacity-90 transition-opacity duration-300 hover:opacity-100">
                <span class="h-px w-0 bg-copper transition-all duration-500 ease-out group-hover:w-6" aria-hidden="true" />
                {{ i.label }}
              </a>
            </li>
          </ul>
          <div class="mt-10">
            <p class="eyebrow !text-copper">{{ t('footer.sections.social') }}</p>
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
        <p>{{ t('footer.rights', { year }) }}</p>
        <p class="font-display italic">{{ t('footer.motto') }}</p>
      </div>
    </div>
  </footer>
</template>
