<script setup>
defineProps({
  index: { type: String, default: null },
  label: { type: String, required: true },
})
</script>

<template>
  <div class="flex items-center gap-4 text-copper">
    <span v-if="index" class="font-display text-base italic text-clay/80">{{ index }}</span>
    <span v-if="index" class="h-px w-8 bg-copper/60" aria-hidden="true" />
    <span class="eyebrow">{{ label }}</span>
  </div>
</template>
