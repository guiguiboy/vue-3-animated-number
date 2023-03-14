<script setup lang="ts">
import AnimatedNumber from './components/AnimatedNumber.vue'
import { ref } from 'vue'

const customFromInput = ref()
const customToInput = ref()
const customFrom = ref(0)
const customTo = ref(2000)

function formatCb(input: string): string
{
  return '-->' + input
}

function resetAnimatedNumber(): void {

  if (isNaN(customFromInput.value.value) || isNaN(customToInput.value.value)) {
    return
  }

  customFrom.value = parseInt(customFromInput.value.value)
  customTo.value = parseInt(customToInput.value.value)
}

</script>

<template>
  <div>
    <span>It can go up...</span>
    <AnimatedNumber :from="0" :to="2000" :duration="6000" />
  </div>
  <div>
   <span>Or it can go down...</span>
   <AnimatedNumber :from="3000" :to="50" :duration="8000" />
  </div>
  <div>
   <span>With small values, you can display any number of decimals you want</span>
   <AnimatedNumber :from="0" :to="2" :decimal-digits="2" :duration="5000" />
  </div>
  <div>
   <span>You can pass a class attribute to customize display</span>
   <AnimatedNumber :from="3000" :to="50" :duration="3000" class="bold-red" />
  </div>
  <div>
   <span>It is reactive to values:</span>
    <div>
      From: <input ref="customFromInput" type="text" value="30" /><br/>
      To: <input ref="customToInput" type="text" value="70"/><br/>
      <button @click="resetAnimatedNumber">Recompute</button>
    </div>

   <AnimatedNumber
     :from="customFrom"
     :to="customTo"
     :duration="3000"
   />
  </div>
  <div>
   <span>You can pass a formatCb function to customize output (add some formating depending on the value)</span>
   <AnimatedNumber :from="1" :to="2" :duration="3000" :decimal-digits="5" :format-cb="formatCb" />
  </div>
</template>

<style>
  .bold-red {
      font-weight: bold;
      color: red;
  }
</style>