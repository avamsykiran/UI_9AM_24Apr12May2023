import { simpleInterest } from './loan.js';
import { sum,prd } from './arth.js';
import * as arth from './arth.js';

import isPrime,{ getFactors } from './module1.js';

console.log( simpleInterest(100,1,1) );
console.log(sum(10,20));
console.log(prd(10,20));
console.log(arth.dif(20,10));

console.log(isPrime(13));
console.log(getFactors(13));
console.log(isPrime(169));
console.log(getFactors(169));