// !JavaScript Problem Solving - 21! //
/**
 * Multiply
 * This code does not execute properly. Try to figure out why.
 */

// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(5, 6));

// !JavaScript Problem Solving - 22! //
/**
 * Return Negative
 * In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

 * Examples
   makeNegative(1);    // return -1
   makeNegative(-5);   // return -5
   makeNegative(0);    // return 0
   makeNegative(0.12); // return -0.12

 * Notes
   The number can be negative already, in which case no change is required.
   Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 * 
 */

// function makeNegative(num) {
//   if (num < 0) {
//     return num;
//   } else {
//     return num * -1;
//   }
// }
// console.log(makeNegative(5));

// !JavaScript Problem Solving - 23! //
/**
 *  Make a simple function called greet that returns the most-famous "hello world!".
 */

// function greet() {
//   return "hello world!";
// }
// console.log(greet());

// !JavaScript Problem Solving - 24! //
/**
 * Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".
 */

// function greet(name) {
//   return `Hello, ${name} how are you doing today?`;
// }
// console.log(greet("Hablu"));

// !JavaScript Problem Solving - 25! //
/**
 * Can you find the needle in the haystack?
 * Write a function findNeedle() that takes an array full of junk but containing one "needle"
 * After your function finds the needle it should return a message (as a string) that says:
 * "found the needle at position " plus the index it found the needle, so:
 *
 * Example(Input --> Output)
 * ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
 * Note: In COBOL, it should return "found the needle at position 6"
 */

// function findNeedle(haystack) {
//   const position = haystack.indexOf("needle");
//   return "found the needle at position " + position;
// }
// const junk = ["hay", "junk", "hay", "hay", "needle", "moreJunk", "randomJunk"];
// const result = findNeedle(junk);
// console.log(result);
