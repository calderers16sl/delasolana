<script setup>
import { useI18n } from 'vue-i18n'
import ImageSlot from '../ui/ImageSlot.vue'
import SectionEyebrow from '../ui/SectionEyebrow.vue'
import { useReveal } from '../../composables/useReveal.js'

const { t } = useI18n()
const { target, isRevealed } = useReveal()
</script>

<template>
  <section id="destilleria" class="section-y bg-cream" aria-labelledby="destilleria-title">
    <div class="container-solana">
      <div ref="target" class="reveal grid gap-12 lg:grid-cols-12 lg:gap-16" :class="{ 'is-revealed': isRevealed }">
        <div class="lg:col-span-6">
          <ImageSlot
            video="/desiladora.mp4"
            :alt="t('distillery.imageAlt')"
            :caption="t('distillery.imageCaption')"
            ratio="16/9"
            tone="copper"
          />
        </div>

        <div class="lg:col-span-6 lg:pl-4 xl:pl-10">
          <SectionEyebrow index="01" :label="t('distillery.eyebrow')" />

          <h2
            id="destilleria-title"
            class="mt-8 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.05] text-ink"
          >
            {{ t('distillery.titleLine1') }}<br />
            {{ t('distillery.titleConnector') }} <span class="italic text-copper">{{ t('distillery.titleEmphasis') }}</span> {{ t('distillery.titleLine3') }}
          </h2>

          <div class="mt-8 prose-solana">
            <p>{{ t('distillery.body1') }}</p>
            <p>{{ t('distillery.body2') }}</p>
            <p>{{ t('distillery.body3') }}</p>
          </div>

          <dl class="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-hairline pt-8">
            <div>
              <dt class="eyebrow !text-clay/70">{{ t('distillery.kv.method.k') }}</dt>
              <dd class="mt-2 font-display text-xl text-ink">{{ t('distillery.kv.method.v') }}</dd>
            </div>
            <div>
              <dt class="eyebrow !text-clay/70">{{ t('distillery.kv.origin.k') }}</dt>
              <dd class="mt-2 font-display text-xl text-ink">{{ t('distillery.kv.origin.v') }}</dd>
            </div>
            <div>
              <dt class="eyebrow !text-clay/70">{{ t('distillery.kv.material.k') }}</dt>
              <dd class="mt-2 font-display text-xl text-ink">{{ t('distillery.kv.material.v') }}</dd>
            </div>
            <div>
              <dt class="eyebrow !text-clay/70">{{ t('distillery.kv.focus.k') }}</dt>
              <dd class="mt-2 font-display text-xl text-ink">{{ t('distillery.kv.focus.v') }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
