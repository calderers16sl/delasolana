import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const target = ref(null)
  const isRevealed = ref(false)
  let observer

  onMounted(() => {
    if (!target.value) return
    if (typeof IntersectionObserver === 'undefined') {
      isRevealed.value = true
      return
    }
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isRevealed.value = true
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(target.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { target, isRevealed }
}
