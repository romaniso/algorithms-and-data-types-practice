// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//function pyramid(n) {
//  for (let row = 0; row < n; row++) {
//    let stair = "";
//    const cols = 2 * n - 1;
//    const middleOfRow = Math.floor(cols / 2);
//    const hashNumber = row * 2 + 1;
//    let leftHashes = hashNumber;
//    for (let col = 0; col < cols; col++) {
//      const stepsForwardBackward = Math.floor(hashNumber / 2);
//      if (leftHashes === 1 && col === middleOfRow) {
//        stair += "#";
//        leftHashes--;
//      } else if (
//        leftHashes &&
//        col >= middleOfRow - stepsForwardBackward &&
//        col <= middleOfRow + stepsForwardBackward
//      ) {
//        stair += "#";
//        leftHashes--;
//      } else {
//        stair += " ";
//      }
//    }
//    console.log(stair);
//  }
//}

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

module.exports = pyramid;
