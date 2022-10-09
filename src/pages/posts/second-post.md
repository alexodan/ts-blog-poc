---
layout: '@/templates/BasePost.astro'
title: Ejercicio 01 con TypeScript
description: Un poco de array reduce y generics.
pubDate: 2022-10-09T00:00:00Z
imgSrc: '/assets/images/image-post5.jpeg'
imgAlt: 'Image post 5'
---

# Usando reduce y generics

### Consigna

Supongamos que tenemos un array de productos, y queremos una función que retorne la suma total del precio,
pero solo para los productos que estén disponibles (status _available_):

```ts
const products = [
  { id: 1, name: 'Gaming chair', status: 'AVAILABLE', price: 300 },
  { id: 2, name: 'Monitor', status: 'AVAILABLE', price: 200 },
  { id: 3, name: 'Mouse', status: 'AVAILABLE', price: 300 },
  { id: 4, name: 'Keyboard', status: 'AVAILABLE', price: 100 },
  { id: 5, name: 'Mousepad', status: 'OUT_OF_STOCK', price: null },
  { id: 6, name: 'Headphones', status: 'AVAILABLE', price: 200 },
  { id: 7, name: 'Microphone', status: 'COMING_SOON', price: 100 },
  { id: 8, name: 'Glasses', status: 'OUT_OF_STOCK', price: null },
  { id: 9, name: 'Standing Desk', status: 'COMING_SOON', price: 500 },
]
```

### Bonus

Podemos imaginar que el tipo que recibiría la función anterior sería algo como un array de `Product`:

```ts
type Product = {
  id: number;
  name: string;
  description: string;
  price: number | null;
}
```

Como bonus se pide programar una función que haga la misma tarea (sumar el precio total, esta vez
ignorando si el status es disponible o no) pero que lo pueda hacer para _cualquier_ tipo de dato que
tenga un atributo _price_, de manera tal que la función pueda invocarse de la siguiente forma:

```ts
const otherProducts = [
  {
    name: 'Gaming chair',
    currency: 'usd',
    description: 'Some description about Gaming chair',
    price: 300
  },
  {
    name: 'Monitor',
    currency: 'usd',
    description: 'Some description about Monitor',
    price: 200
  },
  {
    name: 'Mouse',
    currency: 'usd',
    description: 'Some description about Mouse',
    price: 300
  },
]
var total = getTotalPriceOfAnything(products);
var total2 = getTotalPriceOfAnything(otherProducts);
console.log(total1); // 1600
console.log(total2); // 800
```

Si la primera función que escribiste hace un filtrado y luego la suma, eso no está para nada mal,
pero no te da la impresión que cumple dos tareas distintas en lugar de una? Puede que sea buena
idea hacer cumplir el principio de unica responsabilidad ([Single responsability principle]())
y separar en dos funciones, una que filtre y otra que haga la suma.

Mi resolución a estos ejercicios en este [gist](https://gist.github.com/alexodan/80882194608528bd08b805dce050ec08).
