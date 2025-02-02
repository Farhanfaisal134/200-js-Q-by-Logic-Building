//Q-> 1
// function findSubsetsIterative(arr) {
//   let subsets = [[]]; // Initially, empty subset

//   for (const num of arr) {
//     subsets = [...subsets, ...subsets.map((set) => [...set, num])];
//   };
//   return subsets;
// };

// console.log(findSubsetsIterative([1, 2])); // Output: [[], [1], [2], [1, 2]]
//Q-> 2 MaxProfit
// function maxProfit(arr) {
//   let totalProfit = 0
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let profit = arr[j] - arr[i]
//       if (profit > totalProfit) {
//         totalProfit = profit
//       }
//     }
//   }
//   return totalProfit
// }

// const prices = [7, 1, 5, 3, 6, 4];
// const profit = maxProfit(prices);
// console.log(profit);

// MaxLoss
// function maxLoss(arr) {
//   let loss = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let everyLoss = arr[i] - arr[j];  // Subtract buying price from selling price
//       if (everyLoss > loss) {
//         return loss = everyLoss;
//       }
//     }
//   }
//   return loss;
// }

// console.log(maxLoss([7, 6, 4, 3, 1])); // Output: 6
//Q-> 3
// pyramid
//    #
//   ###
//  #####
// #######
//#########

// let n = 5
// for (let i = 1; i <= n; i++) {
//   console.log(' '.repeat(n - i) + '#'.repeat(i * 2 - 1) + ' '.repeat(n - i))
// };

//Q-> 4
// #
// ##
// ###
// ####
// #####
// ######

// let n = 5;  // Number of steps
// for (let i = 1; i <= n; i++) {
//   console.log('#'.repeat(i));
// };
//Q-> 5
// for(var i = 1; i <= 3; i++){
//   setTimeout(()=>{
//        console.log(i);
//   }, 1200);
// };

// for (var i = 1; i <= 3; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);  // Correct value of 'i' will be printed for each iteration
//     }, 1200);
//   })(i);
// };

// &

// for(let i = 1; i <= 3; i++){
//   setTimeout(()=>{
//        console.log(i);
//   }, 1200);
// };

// Output is
// 1
// 2
// 3
//Q-> 6
// function maxChar(str) {
//   const usedChars = {};
//   for (const char of str) {
//     usedChars[char] = usedChars[char] ? usedChars[char] + 1 : 1;
//   }
//   // console.log(usedChars);//{F: 1, a: 2, r: 1, h: 1, n: 1}

//   return Object.keys(usedChars).sort((a, b) => usedChars[b] - usedChars[a])[0];
// }

// console.log(maxChar("Farhan"));
//Q-> 7
// function countDigits(num) {
//   // Number ko string mein convert karo, phir uski length return karo
//   return Math.abs(num).toString().length;
// }

// console.log(countDigits(121));
//Q-> 8
// function sumOfDigits(num) {
//   return num
//     .toString()
//     .split('')
//     .map(Number)
//     .reduce((sum, digit) => sum + digit, 0);
// }

// console.log(sumOfDigits(1287));
//Q-> 9
// Function.prototype.myCall = function (obj, ...args) {
//   const key = Symbol();
//   obj[key] = this;
//   return obj[key](...args);
//   delete obj[key];
// };

// Function.prototype.myApply = function (obj, args) {
//   const key = Symbol();
//   obj[key] = this;
//   obj[key](...args);
//   delete obj[key];
// };

// Function.prototype.myBind = function (obj, ...args) {
//   const key = Symbol();
//   obj[key] = this;
//   return function (...params) {
//     obj[key](...args, ...params);
//     delete obj[key];
//   };
// };
//Q-> 10
// const arr = [{ name: "Farhan", age: 25 }, { name: "Faisal", age: 30 }];
// const updatedArr = arr.map((item) =>
//   item.name === "Faisal" ? { ...item, name: "Updated Name" } : item
// );
// console.log(updatedArr);
// bina Spread Opr Ka;

// const updatedArr = arr.map((item) => {
//   if (item.name === "Faisal") {
//     return { name: "Updated Name", age: item.age }; // Manual copy aur update
//   } else {
//     return { name: item.name, age: item.age }; // Manual copy
//   }
// });

// console.log(updatedArr);