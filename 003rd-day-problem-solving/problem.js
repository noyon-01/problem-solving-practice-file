// !JavaScript Problem Solving - 01! //
/**
 * Square(n) Sum
 * Complete the square sum function so that it squares each number passed into it and then sums the results together.

 * For example, for [1, 2, 2] it should return 9 because 
   1^2 + 2^2 + 2^2 = 9.
   1^2 + 2^2 + 2^2 = 9.
 */

// function squareSum(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     let sqare = number ** 2;
//     sum = sum + sqare;
//   }
//   return sum;
// }
// squareSum([1, 2, 2]);

// !JavaScript Problem Solving - 02! //
/**
 * Sum of positive
 * Task
 * You get an array of numbers, return the sum of all of the positives ones.

 * Example
   [1, -4, 7, 12] => 1 + 7 + 12 = 20.

 * Note
   If there is nothing to sum, the sum is default to 0.
 */

// function positiveSum(numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     if (number > 0) {
//       sum += number;
//     }
//   }
//   return sum;
// }
// positiveSum([1, -4, 7, 12]);

// !JavaScript Problem Solving - 03! //
/**
 * Convert boolean values to strings 'Yes' or 'No'.
 * Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 */

// function boolToWord(bool) {
//   if (bool === true) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }
// boolToWord(true);

// !JavaScript Problem Solving - 04! //
/**
 * Even or Odd
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// evenOrOdd(5);

// !JavaScript Problem Solving - 05! //
/**
 * Find the smallest integer in the array
 * Given an array of integers your solution should find the smallest integer.

 * For example:
 * Given [34, 15, 88, 2] your solution will return 2
 * Given [34, -345, -1, 100] your solution will return -345
 * You can assume, for the purpose of this kata, that the supplied array will not be empty.
 */

// function findSmallestInt(arr) {
//   return Math.min(...arr);
// }
