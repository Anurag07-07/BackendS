// const {Addition,bubbleSort:bs} = require('./main')
// console.log(Addition(45,56));
// import sorting, * as Sorting from './sorting.js'
const sorting  = require('./sorting')
let arr = [4,5,4,5,2,1,3,5,4,5,3]
// let ans =   bs(arr)
let ans1 = sorting.heapSort(arr)
console.log(ans1);
