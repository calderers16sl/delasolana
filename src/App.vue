<script setup>
import TheNav from './components/layout/TheNav.vue'
import TheFooter from './components/layout/TheFooter.vue'
import TheHero from './components/sections/TheHero.vue'
import SectionMessage from './components/sections/SectionMessage.vue'
import SectionDistillery from './components/sections/SectionDistillery.vue'
import SectionProcess from './components/sections/SectionProcess.vue'
import SectionDistillations from './components/sections/SectionDistillations.vue'
import SectionValueProp from './components/sections/SectionValueProp.vue'
import SectionOrigins from './components/sections/SectionOrigins.vue'
import SectionTerritory from './components/sections/SectionTerritory.vue'
import SectionContact from './components/sections/SectionContact.vue'
import { useDocumentMeta } from './composables/useDocumentMeta.js'

useDocumentMeta()
</script>

<template>
  <TheNav />
  <main>
    <TheHero />
    <SectionMessage />
    <SectionDistillery />
    <SectionProcess />
    <SectionDistillations />
    <SectionValueProp />
    <SectionOrigins />
    <SectionTerritory />
    <SectionContact />
  </main>
  <TheFooter />
</template>
