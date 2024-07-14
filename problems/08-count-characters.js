/*
Write a function called countCharacters(str) that takes in a string and returns
an object with all the characters in the string as keys and the frequency that
the characters show up in the string as values.
*/

function countCharacters(str) {
  let obj = {};
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let letters of str) {
      if (str[i] === letters) {
        count += 1;
      }
    }
    obj[str[i]] = count;
    count = 0;
  }
  return obj;
}

console.log(countCharacters('hello')); // => { h: 1, e: 1, l: 2, o: 1}


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = countCharacters;
} catch {}
