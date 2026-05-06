<script setup>
import { reactive, ref } from 'vue'
import { submitMessage } from '../../lib/contact.js'
import { useReveal } from '../../composables/useReveal.js'

const { target, isRevealed } = useReveal()

const form = reactive({
  nom: '',
  email: '',
  organitzacio: '',
  assumpte: 'Consulta',
  missatge: '',
})
const errors = reactive({})
const status = ref('idle') // idle | submitting | success | error

const assumptes = ['Consulta', 'Col·laboració', 'Sol·licitar informació', 'Altres']

function validate() {
  const e = {}
  if (!form.nom.trim()) e.nom = 'Indica el teu nom.'
  if (!form.email.trim()) {
    e.email = 'Cal un correu electrònic.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    e.email = 'El format del correu no és vàlid.'
  }
  if (form.missatge.trim().length < 10) {
    e.missatge = 'Explica una mica el teu projecte (mínim 10 caràcters).'
  }
  Object.keys(errors).forEach((k) => delete errors[k])
  Object.assign(errors, e)
  return Object.keys(e).length === 0
}

function onBlur(field) {
  if (errors[field]) validate()
}

async function onSubmit() {
  if (!validate()) return
  status.value = 'submitting'
  try {
    const res = await submitMessage({
      ...form,
      sentAt: new Date().toISOString(),
    })
    status.value = res?.ok ? 'success' : 'error'
  } catch (err) {
    console.error(err)
    status.value = 'error'
  }
}

function reset() {
  form.nom = ''
  form.email = ''
  form.organitzacio = ''
  form.assumpte = 'Consulta'
  form.missatge = ''
  Object.keys(errors).forEach((k) => delete errors[k])
  status.value = 'idle'
}

const fieldClass =
  'w-full border-0 border-b border-hairline bg-transparent px-0 py-3 font-sans text-base text-ink placeholder:text-clay/50 focus:border-copper focus:outline-none focus:ring-0'
</script>

<template>
  <section id="contacte" class="section-y bg-cream" aria-labelledby="contacte-title">
    <div class="container-solana">
      <div ref="target" class="reveal grid gap-14 lg:grid-cols-12 lg:gap-20" :class="{ 'is-revealed': isRevealed }">
        <div class="lg:col-span-5">
          <p class="eyebrow">Contacte</p>
          <h2
            id="contacte-title"
            class="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.02] text-ink"
          >
            Parlem de<br />
            <span class="italic text-copper">producte, procés</span><br />
            i qualitat.
          </h2>

          <p class="prose-solana mt-8 max-w-md">
            Si busques una destil·ladora amb enfocament premium,
            criteri tècnic i una veritable exigència en el procés, ens agradarà
            conèixer el teu projecte.
          </p>

          <div class="mt-12 space-y-6 border-t border-hairline pt-8 text-sm">
            <div>
              <p class="eyebrow !text-clay/70">Ubicació</p>
              <p class="mt-1 font-display text-lg text-ink">Empordà, Catalunya</p>
            </div>
            <div>
              <p class="eyebrow !text-clay/70">Contacte</p>
              <p class="mt-1 font-display text-lg text-ink">Professional &amp; col·laboracions</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="relative rounded-sm bg-paper p-8 shadow-[0_1px_0_0_rgba(124,97,79,0.08)] lg:p-12">
            <transition name="fade" mode="out-in">
              <form
                v-if="status !== 'success'"
                key="form"
                novalidate
                @submit.prevent="onSubmit"
                class="space-y-8"
              >
                <div class="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label for="nom" class="eyebrow !text-clay/70">Nom</label>
                    <input
                      id="nom"
                      v-model="form.nom"
                      :class="fieldClass"
                      type="text"
                      autocomplete="name"
                      :aria-invalid="!!errors.nom"
                      :aria-describedby="errors.nom ? 'err-nom' : null"
                      @blur="onBlur('nom')"
                    />
                    <p v-if="errors.nom" id="err-nom" class="mt-2 text-xs text-copper">{{ errors.nom }}</p>
                  </div>
                  <div>
                    <label for="email" class="eyebrow !text-clay/70">Correu electrònic</label>
                    <input
                      id="email"
                      v-model="form.email"
                      :class="fieldClass"
                      type="email"
                      autocomplete="email"
                      :aria-invalid="!!errors.email"
                      :aria-describedby="errors.email ? 'err-email' : null"
                      @blur="onBlur('email')"
                    />
                    <p v-if="errors.email" id="err-email" class="mt-2 text-xs text-copper">{{ errors.email }}</p>
                  </div>
                </div>

                <div class="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label for="organitzacio" class="eyebrow !text-clay/70">Organització <span class="normal-case tracking-normal text-clay/50">(opcional)</span></label>
                    <input
                      id="organitzacio"
                      v-model="form.organitzacio"
                      :class="fieldClass"
                      type="text"
                      autocomplete="organization"
                    />
                  </div>
                  <div>
                    <label for="assumpte" class="eyebrow !text-clay/70">Assumpte</label>
                    <select
                      id="assumpte"
                      v-model="form.assumpte"
                      :class="fieldClass + ' appearance-none pr-6 bg-[url(\'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22><path fill=%22none%22 stroke=%22%237C614F%22 stroke-width=%221.2%22 d=%22M2 4l4 4 4-4%22/></svg>\')] bg-[length:12px_12px] bg-[right_0_center] bg-no-repeat'"
                    >
                      <option v-for="a in assumptes" :key="a" :value="a">{{ a }}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label for="missatge" class="eyebrow !text-clay/70">Missatge</label>
                  <textarea
                    id="missatge"
                    v-model="form.missatge"
                    rows="5"
                    :class="fieldClass + ' resize-none'"
                    :aria-invalid="!!errors.missatge"
                    :aria-describedby="errors.missatge ? 'err-missatge' : null"
                    placeholder="Explica breument el teu projecte, matèria primera o consulta."
                    @blur="onBlur('missatge')"
                  />
                  <p v-if="errors.missatge" id="err-missatge" class="mt-2 text-xs text-copper">{{ errors.missatge }}</p>
                </div>

                <div class="flex flex-col items-start gap-6 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p class="text-xs text-clay/70">
                    En enviar acceptes ser contactat per Destil·leria La Solana<br class="hidden sm:block" />
                    en relació al teu projecte.
                  </p>
                  <button
                    type="submit"
                    :disabled="status === 'submitting'"
                    class="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-cream transition-all duration-300 hover:bg-copper disabled:opacity-70"
                  >
                    <span>{{ status === 'submitting' ? 'Enviant…' : 'Contactar' }}</span>
                    <svg class="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>

                <p v-if="status === 'error'" class="text-sm text-copper">
                  No hem pogut enviar el missatge. Torna-ho a provar en uns moments.
                </p>
              </form>

              <div v-else key="success" class="py-8 text-center">
                <p class="eyebrow">Missatge rebut</p>
                <p class="mt-6 font-display text-[clamp(1.5rem,3vw,2.25rem)] italic leading-tight text-ink">
                  Gràcies, {{ form.nom || 'hola' }}.<br />
                  <span class="text-copper">Et contactarem aviat.</span>
                </p>
                <p class="prose-solana mx-auto mt-6 max-w-md text-[0.95rem]">
                  Hem rebut la teva consulta. Revisarem el projecte i et
                  respondrem en el termini de pocs dies.
                </p>
                <button
                  type="button"
                  class="mt-10 text-sm uppercase tracking-[0.22em] text-copper hover:text-ink"
                  @click="reset"
                >
                  Enviar un altre missatge
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 400ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
