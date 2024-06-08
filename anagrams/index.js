// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  function createMap(string) {
    let map = {};
    for (const char of string) {
      if (!map[char]) {
        map[char] = 1;
      } else {
        map[char]++;
      }
    }
    return map;
  }
  function processStr(str) {
    return str.replace(/[^\w]/g, "").toLowerCase();
  }

  const stringAMap = createMap(processStr(stringA));
  const stringBMap = createMap(processStr(stringB));

  let isAnagram = true;

  if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length)
    return false;
  for (const char in stringAMap) {
    if (stringAMap[char] !== stringBMap[char]) isAnagram = !isAnagram;
  }

  return isAnagram;
}

//anagrams("rail safety", "fairy tales");
anagrams("A tree, a life, a bench", "A tree, a fence, a yard");

module.exports = anagrams;
