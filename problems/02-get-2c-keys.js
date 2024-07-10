/*
Write a function called get2CKeys(obj) that iterates through the object and
returns an array of the object's keys that have values with at least 2 'c's.
*/

// Your code here 
function get2CKeys(obj) {
  let count = 0;
  for (let keys in obj) {
    for(let i = 0; i < obj[keys].length; i++) {
      if(obj[keys][i] === 'c') {
        count += 1;
      }
    }
    if(count > 1) {
      return keys;
    }
  }
}
const obj = {
  red: 'circle',
  blue: 'octagon',
  green: 'square'
}
console.log(get2CKeys(obj)); // ['red']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = get2CKeys;
} catch {}
