//Q-> 1
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 26));
//Q-> 2
// function checkEvenOrOdd(num){
//     if(num % 2 == 0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }

// console.log(checkEvenOrOdd(121))

// let arr = [10, 15, 20, 25, 30, 35, 40];

// function filterEvenNumber(arr) {
//   return arr.filter(num => num % 2 === 0);
// }

// console.log(filterEvenNumber(arr));
// console.log(arr)
//Q-> 3
// let isLeapYear = (year) => {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   }
//   else {
//     return false
//   }
// };

// console.log(isLeapYear(2024));
//Q-> 4
// function factorial(n) {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));
// Sul-> 2;
// By Recursion
// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1
//   }
//   return num * factorial(num - 1)
// }

// console.log(factorial(5));
//Q-> 5
// let car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2022
// }
// car.startEngine = function () {
//   console.log(`${this.modle}`)
// }

// car.startEngine();
//Q-> 6 find midlle largest lowest:
// let arr = [1, 2, 10, 20, 10, 5, 16];
// const sortedArr = [...new Set(arr)].sort((a, b) => b - a); // Set use karke duplicate values hata lete hain
// console.log(sortedArr);

// console.log(sortedArr[1]); // Output: 16 (second largest)
//Q-> 7
// function removeElementFromArray(arr, target) {
//   return arr.filter(item => item !== target);
// };

// console.log(removeElementFromArray([10, 10, 20, 10, 30, 10, 40, 10], 10));
//Q-> 8
// function getCurrentDateAndTime() {
//   let currentDate = new Date();
//   return currentDate.toLocaleString();
// }

// console.log(getCurrentDateAndTime());
//Q-> 9
// const fibonacci = (num) => {
//   let prev = 0, curn = 1
//   for (let i = 2; i <= num; i++) {
//     next = prev + curn;
//     prev = curn;
//     curn = next;
//   };

//   return curn;
// };

// console.log(fibonacci(3)); // Output: 2
// ____Recursive Solution_______
// const fib = function (n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// };
//Q-> 10 Generate Fibonacci Sequence:
// Write a function to generate the first n numbers of the Fibonacci sequence.
// Example: Input: 5 → Output: [0, 1, 1, 2, 3]

// function generateFibonacci(num) {
//   let fib = [0, 1]
//   for (let i = 2; i < num; i++) {
//     fib.push(fib[i - 1] + fib[i - 2])
//   };
//   return fib;
// };

// console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3];
//Completed
