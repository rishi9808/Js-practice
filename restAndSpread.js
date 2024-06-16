//rest and spread operator in js

/* rest operator is used when an array or object is provided as an argument 
    in a function and use it in fn call.
*/


//rest example

const sum = (...numbers) =>{
    return numbers.reduce((total,num)=>total+num,0);
}

console.log(sum(1,2,3,4,5))


/* spread operator is used to expand an  array/object into individual lements */

const arr1 = [1,2];
const arr2 = [3,4];

const arr3=[...arr1,...arr2];

console.log(arr3)