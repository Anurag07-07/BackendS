// console.log('Give Current Directory');
// console.log(__dirname);
// console.log('====================================');

// console.log('It is function,this can help you to import code from other files');
// console.log(require);
// console.log('====================================');

// console.log('it is Object, Gice information of process');
// console.log(process);
// console.log('====================================');

//Module  is just a reusable piece of code


// const  {binarySearch} = require('./searching.js')

// let arr = [1,2,3,4,5]
// console.log('====================================');
// console.log(binarySearch(arr,5));
// console.log('====================================');

import { add as sum,subtract,multiply } from "../esmoduleing/math.js";

console.log('======ADD=============================');
console.log(sum(45,56));
console.log('====================================');

// Default vs Named Export 

