// !JavaScript Problem Solving - 31! //
/**
 * Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
 * 
 * Examples:
   1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
   2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
   3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
   4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
 */

// function isDivisible(n, x, y) {
//   if (n % x === 0 && n % y === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isDivisible(12, 3, 6));

// !JavaScript Problem Solving - 32! //
/**
 * There was a test in your class and you passed it. Congratulations!
 * But you're an ambitious person. You want to know if you're better than the average student in your class.
 * You receive an array with your peers' test scores. Now calculate the average and compare your score!
 * Return true if you're better, else false!

 * Note:
   Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
 */

// function betterThanAverage(classPoints, yourPoints) {
//   let sum = 0;
//   for (const points of classPoints) {
//     sum = sum + points;
//   }

//   let pointsLength = classPoints.length;
//   let averagePoint = sum / pointsLength;

//   if (yourPoints > averagePoint) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 59));
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 29));

// !JavaScript Problem Solving - 33! //
/**
 * Write a function which calculates the average of the numbers in a given array.
 * Note: Empty arrays should return 0.
 */

// function findAverage(array) {
//   if (array.length === 0) {
//     return 0;
//   }
//   let sum = 0;
//   for (const number of array) {
//     sum = sum + number;
//   }
//   let arrayLength = array.length;
//   let averageNumber = sum / arrayLength;
//   return averageNumber;
// }
// console.log(findAverage([24, 56, 75, 34, 67]));
// console.log(findAverage([]));

// !JavaScript Problem Solving - 34! //
/**
 * Clock shows h hours, m minutes and s seconds after midnight.
 * Your task is to write a function which returns the time since midnight in milliseconds.

 * Example:
   h = 0
   m = 1
   s = 1

 * result = 61000
*/

// function past(h, m, s) {
//   const miliSeconds = h * 3600000 + m * 60000 + s * 1000;
//   return miliSeconds;
// }
// console.log(past(0, 1, 1));

// !JavaScript Problem Solving - 35! //
/**
 * This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 */

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}
console.log(simpleMultiplication(4));
