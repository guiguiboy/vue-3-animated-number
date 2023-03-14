<script setup lang="ts">
import {
  defineProps,
  onUpdated,
  onMounted,
  shallowRef,
  withDefaults
} from 'vue'

interface Props {
  from: number
  to: number
  duration?: number
  class?: string,
  decimalDigits?: number,
  formatCb?: Function
}

const props = withDefaults(defineProps<Props>(), {
  duration: 1000,
  decimalDigits: 0,
  formatCb: (input) => input
})

onMounted(() => {
  animateValue(animatedDivElement.value, props.from, props.to, props.duration)
})
onUpdated(() => {
  animateValue(animatedDivElement.value, props.from, props.to, props.duration)
})

function animateValue(el: any, start: number, end: number, duration: number) {
  let startTimestamp: any = null
  const step = (timestamp: any) => {
    if (!startTimestamp) startTimestamp = timestamp

    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const currentValue: string = (progress * (end - start) + start).toFixed(props.decimalDigits)

    el.innerHTML = props.formatCb(currentValue)

    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

const animatedDivElement = shallowRef(null)

</script>

<template>
  <div :class="props.class" ref="animatedDivElement">{{ from }}</div>
</template>
