// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversedN = "";
  n.toString()
    .split("")
    .forEach((n) => {
      reversedN = n + reversedN;
    });

  const number = parseInt(reversedN);
  return Math.sign(n) * number;
}

module.exports = reverseInt;
