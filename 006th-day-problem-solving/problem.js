// !JavaScript Problem Solving - 26! //
/**
 * Create a function which answers the question "Are you playing banjo?".
 * If your name starts with the letter "R" or lower case "r", you are playing banjo!

 * The function takes a name as its only argument, and returns one of the following strings:
   name + " plays banjo" 
   name + " does not play banjo"

 * Names given are always valid strings.
 */

// function areYouPlayingBanjo(name) {
//   if (
//     name.toLowerCase().startsWith("r") ||
//     name.toUpperCase().startsWith("R")
//   ) {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo"
//   }
// }
// console.log(areYouPlayingBanjo("rafi"));

// !JavaScript Problem Solving - 27! //
/**
 * Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

 * Examples
   Input: [1, 5.2, 4, 0, -1]
   Output: 9.2

   Input: []
   Output: 0
 */

// function sum(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     sum = sum + number;
//   }
//   return sum;
// }
// console.log(sum([1, 5.2, 4, 0, -1]));

// !JavaScript Problem Solving - 28! //
/**
 * Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
 * Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

 * Example:
   n= 5, m=5: 25
   n=-5, m=5:  0
 */

// function paperwork(n, m) {
//   if (n < 0 || m < 0) {
//     return 0;
//   } else {
//     return n * m;
//   }
// }
// console.log(paperwork(5, 5));

// !JavaScript Problem Solving - 29! //
/**
 * Given an array of integers, return a new array with each value doubled.
 * For example:
 * [1, 2, 3] --> [2, 4, 6]
 */

// function maps(x) {
//   let newArray = [];
//   for (const y of x) {
//     const z = y * 2;
//     newArray.push(z);
//   }
//   return newArray;
// }
// console.log(maps([1, 2, 3]));

// !JavaScript Problem Solving - 30! //
/**
 * Implement a function which convert the given boolean value into its string representation.
 */

// function booleanToString(b) {
//   return String(b);
// }
// console.log(booleanToString(true));
