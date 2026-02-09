// !JavaScript Problem Solving - 16! //
/**
 * Convert a String to a Number! 
 * Description
 * We need a function that can transform a string into a number. What ways of achieving this do you know?

 * Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

 * Examples
   "1234" --> 1234
   "605"  --> 605
   "1405" --> 1405
   "-7" --> -7
 */

// const stringToNumber = function (str) {
//   let number = +str;
//   return number;
// };

// !JavaScript Problem Solving - 17! //
/**
 * Remove String Spaces
 * Write a function that removes the spaces from the string, then return the resultant string.

 * Examples (Input -> Output):
   "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
   "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
   "8aaaaa dddd r     " -> "8aaaaaddddr"
 */

// function noSpace(x) {
//   let noSpace = x.split(" ").join("");
//   return noSpace;
// }

// !JavaScript Problem Solving - 18! //
/** 
 * Remove First and Last Character
 * Task
 * Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

 * Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

 * Examples
   'eloquent' --> 'loquen'
   'country'  --> 'ountr' 
   'person'   --> 'erso'
   'ab'       --> '' (empty string)
   'xyz'      --> 'y'

 * Requirements
   The input string will always have at least 2 characters
   For strings with exactly 2 characters, return an empty string
   For strings with 3 or more characters, remove the first and last character
   The function should handle strings containing letters, numbers, and special characters.

 * Test Cases
 * Your solution will be tested against:

 * Basic functionality with common words
   Edge cases with 2-character and 3-character strings
   Strings containing numbers and special characters
   Random test cases of varying lengths
 */

// function removeChar(str) {
//   return str.slice(1, -1);
// }

// !JavaScript Problem Solving - 19! //
/**
 * Reversed Strings
 * Complete the solution so that it reverses the string passed into it.
   'world'  =>  'dlrow'
   'word'   =>  'drow'
 */

// function solution(str) {
//   return str.split("").reverse().join("");
// }

// !JavaScript Problem Solving - 20! //
/**
 * Convert a Number to a String!
 * We need a function that can transform a number (integer) into a string.

 * What ways of achieving this do you know?

 * Examples (input --> output):
   123  --> "123"
   999  --> "999"
   -100 --> "-100"
 */

// function numberToString(num) {
//   return num.toString();
// }
