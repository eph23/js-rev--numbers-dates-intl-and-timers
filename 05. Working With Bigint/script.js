'use strict';

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);

console.log(56456446454564654486487877893123123n);
console.log(BigInt(46454564564564787878842314231321231545));

console.log(10000n + 10000n);
console.log(4544646564848446486431212311684864431344446873123484n + 10000n);

const huge = 64867878456186n;
const num = 23;
console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n === '20');

console.log(11n / 3n);
console.log(11 / 3);
