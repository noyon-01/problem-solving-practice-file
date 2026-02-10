// !JavaScript Problem Solving - 36! //
/**
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

   [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
   [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
   [] --> []
 * You can assume that all values are integers. Do not mutate the input array.
 */

// function invert(array) {
//   const invertArray = [];
//   for (const arr of array) {
//     let invert = arr * -1;
//     invertArray.push(invert);
//   }
//   return invertArray;
// }
// console.log(invert([-1, -2, -3, -4, -5]));

// !JavaScript Problem Solving - 37! //
/**
 * Given an array of integers.
 * Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
 * If the input is an empty array or is null, return an empty array.

 * Example
   For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) {
//     return [];
//   }

//   const sumOfArray = [];
//   let countOfPositive = 0;
//   let sumOfNegative = 0;

//   for (const number of input) {
//     if (number > 0) {
//       countOfPositive++;
//     } else {
//       sumOfNegative += number;
//     }
//   }
//   sumOfArray.push(countOfPositive);
//   sumOfArray.push(sumOfNegative);
//   return sumOfArray;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// console.log(countPositivesSumNegatives(numbers));

// !JavaScript Problem Solving - 38! //
/**
 * Sentence Smash
   Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

 * Example:
   ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
 */

// function smash(words) {
//   return words.join(" ");
// }
// console.log(smash(["hello", "world", "this", "is", "great"]));

// !JavaScript Problem Solving - 39! //
/**
 * Write a function which converts the input string to uppercase.
 */

// function makeUpperCase(str) {
//   return str.toUpperCase();
// }
// console.log(makeUpperCase("hello world!"));

// !JavaScript Problem Solving - 40! //
/**
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

 * Note: input will never be an empty string.
 */

// function fakeBin(x) {
//   let result = "";
//   for (const y of x) {
//     if (y < 5) {
//       result = result + "0";
//     } else {
//       result = result + "1";
//     }
//   }
//   return result;
// }
// console.log(fakeBin("352382637"));
