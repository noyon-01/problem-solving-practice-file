// !JavaScript Problem Solving - 01! //
/**
 * Grasshopper - Summation
 * Summation
 * Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

 * For example (Input -> Output):
 * 2 -> 3 (1 + 2);
 * 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8);
 */

// function summation(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//     sum = sum + i;
//   }
//   return sum;
// }
// const result = summation(8);
// console.log(result);

// function summation(nums) {
//   let sum = 0;
//   for (let i = 0; i <= nums; i++) {
//     console.log(i);
//     sum = sum + i;
//   }
//   return sum;
// }
// const result = summation(2);
// console.log(result);

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
//   const century = Math.ceil(year / 100);
//   return century;
// }
// const result = century(1705);
// console.log(result);

// function century(year) {
//   return Math.ceil(year / 100);
// }
// const result = century(2020);
// console.log(result);

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

// function drinkWater(hours) {
//   const nathanDrinkWater = Math.floor(hours * 0.5);
//   return nathanDrinkWater;
// }
// const result = drinkWater(6.7);
// console.log(result);

// function litres(time) {
//   const hours = time * 0.5;
//   return Math.floor(hours);
// }
// const result = litres(3);
// console.log(result);

// !JavaScript Problem Solving - 04! //
/**
 * Convert number to reversed array of digits
 * Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

 * Example (Input => Output):
   35231 => [1,3,2,5,3]
 */

// function reverseNumber(numbers) {
//   const array = [];
//   const num = String(numbers).split("").reverse();

//   for(const rev_num of num){
//     array.push(parseInt(rev_num));
//   }
//   return array;
// }
// const result = reverseNumber(54321);
// console.log(result);

// !JavaScript Problem Solving - 05! //
/**
 * Opposites Attract
 * Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

 * Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
 */

// function loveFun(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }
// const result = loveFun(2, 4);
// console.log(result);

// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }
// const result = lovefunc(3, 4);
// console.log(result);
