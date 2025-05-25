'use strict';

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

console.log(Math.trunc(50.3));
console.log(Math.round(20.9));
console.log(Math.ceil(15.9));
console.log(Math.floor(11.9));

console.log(Math.trunc(-50.3));
console.log(Math.round(-20.9));
console.log(Math.ceil(-15.9));
console.log(Math.floor(-11.9));

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.745345646465).toFixed(2));
