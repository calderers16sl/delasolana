<script setup>
import { useI18n } from 'vue-i18n'
import BaseButton from '../ui/BaseButton.vue'
import { useReveal } from '../../composables/useReveal.js'

const { t } = useI18n()
const { target, isRevealed } = useReveal()
</script>

<template>
  <section id="proposta" class="relative overflow-hidden bg-ink text-cream" aria-labelledby="proposta-title">
    <div class="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true">
      <div
        class="absolute -left-40 top-0 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle,rgba(187,112,78,0.6),transparent_60%)]" />
      <div
        class="absolute -right-60 -bottom-40 h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(circle,rgba(238,236,233,0.35),transparent_60%)]" />
    </div>
    <div class="container-solana relative section-y">
      <div ref="target" class="reveal grid gap-16 lg:grid-cols-12" :class="{ 'is-revealed': isRevealed }">
        <div class="lg:col-span-6">
          <div class="flex items-center gap-4 text-copper">
            <span class="h-px w-10 bg-copper" aria-hidden="true" />
            <span class="eyebrow">{{ t('valueProp.eyebrow') }}</span>
          </div>
          <h2 id="proposta-title"
            class="mt-8 font-display text-[clamp(2.25rem,5.5vw,4.25rem)] font-light leading-[1] tracking-[-0.02em] text-cream">
            <template v-if="t('valueProp.titleLine1')">{{ t('valueProp.titleLine1') }} </template><span
              class="italic text-copper">{{ t('valueProp.titleEmphasis') }}</span><br />
            {{ t('valueProp.titleLine2') }}<br />
            {{ t('valueProp.titleLine3') }}
          </h2>
        </div>

        <div class="lg:col-span-6 lg:pt-10">
          <div class="space-y-6 text-[1.0625rem] leading-[1.7] text-cream/80">
            <p>{{ t('valueProp.body1') }}</p>

          </div>

          <div class="mt-12">
            <BaseButton href="#contacte">
              <span class="!text-cream">{{ t('valueProp.cta') }}</span>
            </BaseButton>
          </div>

          <dl class="mt-16 grid grid-cols-3 gap-6 border-t border-cream/15 pt-10">
            <div>
              <dt class="eyebrow !text-copper">{{ t('valueProp.stats.years.k') }}</dt>
              <dd class="mt-2 text-sm text-cream/70">{{ t('valueProp.stats.years.v') }}</dd>
            </div>
            <div>
              <dt class="eyebrow !text-copper">{{ t('valueProp.stats.natural.k') }}</dt>
              <dd class="mt-2 text-sm text-cream/70">{{ t('valueProp.stats.natural.v') }}</dd>
            </div>
            <div>
              <dt class="eyebrow !text-copper">{{ t('valueProp.stats.distiller.k') }}</dt>
              <dd class="mt-2 text-sm text-cream/70">{{ t('valueProp.stats.distiller.v') }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
