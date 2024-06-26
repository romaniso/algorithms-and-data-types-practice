// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  for (const char of str.toLowerCase()) {
    for (const vowel of ["a", "e", "i", "o", "u"]) {
      if (char === vowel) count++;
    }
  }

  return count;
}

//function vowels(str) {
//  let counter = 0;
//  const checker = ["a", "e", "i", "o", "u"];

//  for (const char of str.toLowerCase()) {
//    if (checker.includes(char)) {
//      counter++;
//    }
//  }
//  return counter;
//}

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
