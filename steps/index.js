// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//function steps(n) {
//  let index = 1;
//  while (index <= n) {
//    const steps = index;
//    const spaces = n - index;
//    const logger = createLogger(steps, spaces);
//    console.log(logger);
//    index++;
//  }
//}

//function createLogger(steps, spaces) {
//  let logger = "";
//  for (let i = 0; i < steps; i++) {
//    logger += "#";
//  }
//  for (let j = 0; j < spaces; j++) {
//    logger += " ";
//  }
//  return logger;
//}

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

module.exports = steps;
