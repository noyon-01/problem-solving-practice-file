// !JavaScript Problem Solving - 01! //
/**
 * Grasshopper - Summation
 * Summation
 * Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

 * For example (Input -> Output):
 * 2 -> 3 (1 + 2);
 * 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8);
 */

// function summation(nums) {
//     let sum = 0;
//     for (let i = 0; i <= nums; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// summation(2);

// !JavaScript Problem Solving - 02! //
/**
 * Century From Year
 * Introduction
 * The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

 * Task
 * Given a year, return the century it is in.

 * Examples
   1705 --> 18
   1900 --> 19
   1601 --> 17
   2000 --> 20
   2742 --> 28
 */

// function century(year) {
//     return Math.ceil(year / 100);
// }
// century(2020);

// !JavaScript Problem Solving - 03! //
/**
 * Keep Hydrated!
 * Nathan loves cycling.
 * 
 * Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
 * You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

  * For example:
    time = 3 ----> litres = 1
    time = 6.7---> litres = 3
    time = 11.8--> litres = 5
 */

// function litres(time) {
//     const hours = time * 0.5;
//     return Math.floor(hours);
// }
// litres(3);

// !JavaScript Problem Solving - 04! //
/**
 * Convert number to reversed array of digits
 * Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

 * Example (Input => Output):
   35231 => [1,3,2,5,3]
 */

// function digitize(n) {
//     return String(n).split("").reverse().map(Number);
// }
// digitize(5, 4, 3, 2, 1);

// !JavaScript Problem Solving - 05! //
/**
 * Opposites Attract
 * function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
   }
   lovefunc(1, 4);
 */

// function lovefunc(flower1, flower2) {
//     return flower1 % 2 !== flower2 % 2;
// }
// lovefunc(1, 4);
