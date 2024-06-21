// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//function fib(n) {
//  const sequence = [0];
//  for (let i = 0; i < n; i++) {
//    if (i === 0) {
//      sequence.push(1);
//    } else {
//      const last =
//        sequence[sequence.length - 1] + sequence[sequence.length - 2];
//      sequence.push(last);
//    }
//  }
//  return sequence[sequence.length - 1];
//}
//function fib(n) {
//  const result = [0, 1];

//  for (let i = 2; i <= n; i++) {
//    const a = result[i - 1];
//    const b = result[i - 2];

//    result.push(a + b);
//  }

//  return result[n];
//}
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
