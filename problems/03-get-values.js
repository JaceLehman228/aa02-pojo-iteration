/*
Write a function called getValues(obj) that iterates through the object and
returns an array of the object's values only.
*/

// Your code here 
function getValues(obj) {
  let arr = [];
  for (let keys in obj) {
    arr.push(obj[keys]);
  }
  return arr;
}
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2011
}
console.log(getValues(car)); // ['Toyota', 'Corolla', 2011]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = getValues;
} catch {}
