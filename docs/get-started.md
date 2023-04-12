## Installation


```shell
npm install guiguiboy/vue3-animated-number
```
Or
```shell
yarn add guiguiboy/vue3-animated-number
```

## Usage

Start by importing the component
```js
<script setup>
  import AnimatedNumber from '../src/components/AnimatedNumber.vue'
...

````
::: warning
Must check the path after releasing it into npm. Must also simplify the import statement.
:::

```html
<AnimatedNumber :from="0" :to="2" :decimal-digits="2" :duration="5000" />
```

The component takes 2 mandatory parameters: 
* from: the starting value of the counter
* to: the ending value

The component takes additional optional parameters:
* duration: the duration in ms it takes to move from the starting value to the ending value (default: 1000ms)
* class: a class name to customize the output
* decimalDigits: the number of decimal digits to display
* formatCb: a function to customize the output of the value (add a currency / unit)


::: warning
This component has not been yet tested on pages with lots of animated numbers. Additional performance testing should be planned.
:::
