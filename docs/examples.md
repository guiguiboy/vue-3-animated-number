<script setup>
  import AnimatedNumber from '../src/components/AnimatedNumber.vue'
  import { ref } from 'vue'
  const customFromInput = ref()
  const customToInput = ref()
  const customFrom = ref(0)
  const customTo = ref(2000)

  function resetAnimatedNumber() {

      if (!customFromInput.value.value || isNaN(customFromInput.value.value) || !customToInput.value.value || isNaN(customToInput.value.value)) {
        return
      }

      customFrom.value = parseInt(customFromInput.value.value)
      customTo.value = parseInt(customToInput.value.value)
  }


  function formatCb(input)
  {
    return 'The value -->' + input
  }

</script>

# Examples

This page demonstrates a few use cases for the animated number component

## The common use case

Make a counter that goes from 0 to 2000

<AnimatedNumber :from="0" :to="2000" :duration="6000" />

**Code**

```html
<AnimatedNumber :from="0" :to="2000" :duration="6000" />
```


## It can also go down

<AnimatedNumber :from="3000" :to="50" :duration="8000" />

**Code**

```html
<AnimatedNumber :from="3000" :to="50" :duration="8000" />
```

## With small intervals, you can choose to display additional digits

<AnimatedNumber :from="0" :to="2" :decimal-digits="2" :duration="5000" />

```html
<AnimatedNumber :from="0" :to="2" :decimal-digits="2" :duration="5000" />
```

## You can provide a class attribute to customiez the style

<AnimatedNumber :from="3000" :to="50" :duration="3000" class="bold-red" />

```html
<AnimatedNumber :from="3000" :to="50" :duration="3000" class="bold-red" />
```

```css
.bold-red {
    font-weight: bold;
    color: red;
}
```


## It is reactive to values

<div>
      From: <input ref="customFromInput" type="text"  style="border: 1px solid black;" /><br/>
      To: <input ref="customToInput" type="text"  style="border: 1px solid black;" /><br/>
      <button @click="resetAnimatedNumber">Click to recompute</button>
</div>

<AnimatedNumber :from="customFrom" :to="customTo" :duration="3000" />


::: info
Recomputing will only work if values changes. This is the standard behavior of Vue.
:::


```html
<div>
  From: <input ref="customFromInput" type="text"  style="border: 1px solid black;" /><br/>
  To: <input ref="customToInput" type="text"  style="border: 1px solid black;" /><br/>
  <button @click="resetAnimatedNumber">Click to recompute</button>
</div>

<AnimatedNumber :from="customFrom" :to="customTo" :duration="3000" />

```

```js
  import { ref } from 'vue'
const customFromInput = ref()
const customToInput = ref()
const customFrom = ref(0)
const customTo = ref(2000)

function resetAnimatedNumber() {

  if (!customFromInput.value.value || isNaN(customFromInput.value.value) || !customToInput.value.value || isNaN(customToInput.value.value)) {
    return
  }

  customFrom.value = parseInt(customFromInput.value.value)
  customTo.value = parseInt(customToInput.value.value)
}
```

## Add a callback to customiez the display


<AnimatedNumber :from="1" :to="2" :duration="3000" :decimal-digits="5" :format-cb="formatCb" />

```html
<AnimatedNumber :from="1" :to="2" :duration="3000" :decimal-digits="5" :format-cb="formatCb" />
```

```js
function formatCb(input: string): string
{
  return 'The value -->' + input
}
```

::: info
This can be useful if you have a unit or a currency to provide. 
:::
