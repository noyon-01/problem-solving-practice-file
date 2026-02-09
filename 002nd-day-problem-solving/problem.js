// !JavaScript Problem Solving - 06! //
/**
 * Abbreviate a Two Word Name
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

 * The output should be two capital letters with a dot separating them.
 * It should look like this:
 * Sam Harris => S.H
 * patrick feeney => P.F
 */

// function abbrevName(name) {
//   const word = name.split(" ");
//   const firstLetter = word[0][0].toUpperCase();
//   const lastLetter = word[1][0].toUpperCase();
//   const abbrevName = firstLetter + "." + lastLetter;
//   return abbrevName;
// }
// console.log(abbrevName("Sam Harris"));
// console.log(abbrevName("patrick feeney"));

// function abbrevName(name) {
//   let word = name.split(" ");
//   let firstWord = word[0][0].toUpperCase();
//   let lastWord = word[1][0].toUpperCase();
//   let fullWord = firstWord + "." + lastWord;
//   return fullWord;
// }
// abbrevName("Sam Harris");
// abbrevName("patrick feeney");

// !JavaScript Problem Solving - 07! //
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
// console.log(opposite(1));
// console.log(opposite(14));
// console.log(opposite(-34));

// !JavaScript Problem Solving - 08! //
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
// console.log(basicOp("+", 8, 4));
// console.log(basicOp("-", 8, 4));
// console.log(basicOp("*", 8, 4));
// console.log(basicOp("/", 8, 4));

// !JavaScript Problem Solving - 09! //
/**
 * Counting sheep...
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

 * For example,
   [true, true, true, false, true, false, true, true,
    true, true, true, false, true, false, true, true,
    true, true, true, false, true, false, true, true];
 
 * The correct answer would be 18.
 * Hint: Don't forget to check for bad values like null/undefined
 */

// const sheeps = [true, true, true, false, true, false, true, true,
//                true, true, true, false, true, false, true, true,
//                true, true, true, false, true, false, true, true];

// function numberOfSheep(sheeps) {
//   const totalSheep = [];
//   for (const sheep of sheeps) {
//     if (sheep === true) {
//       totalSheep.push(sheep);
//     }
//   }
//   return totalSheep.length;
// }
// console.log(numberOfSheep(sheeps));

// function countSheeps(sheeps) {
//   let count = 0;
//   for (const sheep of sheeps) {
//     if (sheep === true) {
//       count = count + 1;
//     }
//   }
//   return count;
// }
// console.log(countSheeps(sheeps));

// !JavaScript Problem Solving - 10! //
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
// console.log(repeatStr(6, "I"));
