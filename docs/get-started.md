## Installation


```shell
npm i vue-3-animated-number
```
Or
```shell
yarn add vue-3-animated-number
```

## Usage

Start by registring the component in your main.ts (or whatever entrypoint)
```js

import AnimatedNumber from 'vue-3-animated-number'
App.use(AnimatedNumber)

````

You can now start using the AnimatedNumber component in your templates
```html
<template>
  ....
  <AnimatedNumber :from="0" :to="2" :decimal-digits="2" :duration="5000" />
</template>

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

## What's next?

* Publish types to ease DX
* Test on large scale apps