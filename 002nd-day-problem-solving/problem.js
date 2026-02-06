// !JavaScript Problem Solving - 01! //
/**
 * Abbreviate a Two Word Name
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

 * The output should be two capital letters with a dot separating them.
 * It should look like this:
 * Sam Harris => S.H
 * patrick feeney => P.F
 */

// function abbrevName(name) {
//   let word = name.split(" ");
//   let firstWord = word[0][0].toUpperCase();
//   let lastWord = word[1][0].toUpperCase();
//   let fullWord = firstWord + "." + lastWord;
//   return fullWord;
// }
// abbrevName("Sam Harris");
// abbrevName("patrick feeney");

// !JavaScript Problem Solving - 02! //
/**
 * Opposite number
 * Very simple, given a number, find its opposite (additive inverse).

 * Examples:
   1: -1
   14: -14
   -34: 34
 */

// function opposite(number) {
//   return number * -1;
// }
// opposite(1, 14, -34);

// !JavaScript Problem Solving - 03! //
/**
 * Basic Mathematical Operations
 * Your task is to create a function that does four basic mathematical operations.

 * The function should take three arguments - operation(string/char), value1(number), value2(number).
 * The function should return result of numbers after applying the chosen operation.

 * Examples(Operator, value1, value2) --> output
   ('+', 4, 7) --> 11
   ('-', 15, 18) --> -3
   ('*', 5, 5) --> 25
   ('/', 49, 7) --> 7
 */

// function basicOp(operation, value1, value2) {
//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   } else if (operation === "/") {
//     return value1 / value2;
//   }
// }
// basicOp("/", 4, 7);

// !JavaScript Problem Solving - 04! //
/**
 * Counting sheep...
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

 * For example,
  [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
 
 * The correct answer would be 17.
 * Hint: Don't forget to check for bad values like null/undefined
 */

// function countSheeps(sheeps) {
//   let count = 0;
//   for (const sheep of sheeps) {
//     if (sheep === true) {
//       count = count + 1;
//     }
//   }
//   return count;
// }
// const sheep = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];
// countSheeps(sheep);

// !JavaScript Problem Solving - 05! //
/**
 * String repeat
 * Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

 * Examples (input -> output)
   6, "I"     -> "IIIIII"
   5, "Hello" -> "HelloHelloHelloHelloHello"
 */

// function repeatStr(n, s) {
//   let string = "";
//   for (let i = 0; i < n; i++) {
//     string = string + s;
//   }
//   return string;
// }
// repeatStr(6, "I");
