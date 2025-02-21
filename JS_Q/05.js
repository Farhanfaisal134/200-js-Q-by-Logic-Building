// Q => 1
// function countChar(str, char) {
//   let count = 0;
//   for (const ele of str) {
//     if (ele.toLowerCase().includes(char.toLowerCase())) {
//       count++;
//     }
//   };
//   return count;
// };

// console.log(countChar("MissIssippi", "I"));
//Q => 2
// function nonRepeatChar(str) {
//   const charCount = {};

//   for (const ele of str) {
//     charCount[ele] = (charCount[ele] || 0) + 1
//   }

//   for (const ele of str) {
//     if (charCount[ele] === 1) {
//       return ele
//     }
//   };
//   return null;
// };

// console.log(nonRepeatChar("swiss"));
//Q => 3
// function calculateAverage(arr) {
//   let total = arr.reduce((acu, cur) => acu + cur)
//   return total / arr.length
// }

// console.log(calculateAverage([5, 10, 2, 81])) // Output: 24.5 average
//Q => 4
// function arraysAreEqual(arr1, arr2) {
//   if (arr1 === arr2) return true;
//   if (arr1.length !== arr2.length) return false;
//   if (arr1 == null || arr2 == null) return false;

//   return arr1.every((item) => arr2.includes(item)) // unShorted
//   // return arr1.every((item, idx) => item === arr2[idx]) // onlyShorted
// };

// console.log(arraysAreEqual([1, 2, 31], [1, 31, 2])); //Output: true
// console.log(arraysAreEqual([1, 2, 31], [1, 2, 41])); //Output: false
// console.log(arraysAreEqual([], [])); // Outputa true
//Q => 5
// function compare(o1, o2) {
//   if (typeof o1 !== "object" || typeof o2 !== "object") return false;
//   const keys1 = Object.keys(o1);
//   const keys2 = Object.keys(o2);

//   if (keys1.length !== keys2.length) return false;

//   for (const k of keys1) {
//     if (!o2.hasOwnProperty(k)) return false;

//     const val1 = o1[k];
//     const val2 = o2[k];
//     if (val1 instanceof Date && val2 instanceof Date) {
//       if (val1.getTime() !== val2.getTime()) return false;
//     }

//     else if (typeof val1 === "object" && typeof val2 === "object") {
//       if (!compare(val1, val2)) return false;
//     }

//     else if (val1 !== val2) return false;
//   };
//   return true;
// };

// const obj1 = {
//   a: 1,
//   b: 2,
//   c: { d: 4 },
//   e: new Date("2021-03-25"),
//   f: [1, 2, 3, 4],
// };

// const obj2 = {
//   b: 2,
//   a: 1,
//   c: { d: 4 },
//   e: new Date("2021-03-25"),
//   f: [1, 2, 3, 4],
// };

// console.log(compare(obj1, obj2))
//Q => 6
// function sumOfDigits(num) {
//   return num.toString().split('').map(Number).reduce((prev, curn) => prev + curn)
// };

// console.log(sumOfDigits(1234)); // Output: 10 = 1+2-
// console.log(sumOfDigits(4321)); // Output: 10
// console.log(sumOfDigits(123456)); // Output: 21
// -> ¡¡;
// function sumOfDigits(num) {
//   let num1 = Array.from(String(num), Number)
//   let sum = num1.reduce((acu, cur) => acu + cur)
//   return sum
// }

// console.log(sumOfDigits(1234)); // Output: 10 = 1+2-
// console.log(sumOfDigits(4321)); // Output: 10
// console.log(sumOfDigits(123456)); // Output: 21
//Q => 7
// function isPowerOfTwo(num) {
//   if (num < 1) false;
//   let i = 1;
//   while (i <= num) {
//     if (i === num) {
//       return true
//     }
//     i *= 2
//   };
//   return false;
// }

// console.log(isPowerOfTwo(8));  // Output: true
// console.log(isPowerOfTwo(10)); // Output: false
//Q => 8
// function sumOfSquares(arr) {
//   return arr.map((item) => item *= item).reduce((prev, curn) => prev + curn);

//   return arr.reduce((sum, elem) => sum + elem * elem, 0);
// };
// console.log(sumOfSquares([1, 2, 3])); // Output: 14
//Q => 9
// function isUpperCase(char) {
//   return char === char.toUpperCase()
// };

// console.log(isUpperCase("s"));
//Q => 10
// class ArrayWrapper {
//   constructor(arr) {
//     this.arr = arr;
//   }

//   valueOf() {
//     return this.arr.reduce((sum, num) => sum + num, 0);
//   }

//   toString() {
//     return `[${this.arr.join(',')}]`;
//   }
// }

// const obj1 = new ArrayWrapper([1, 2, 3]);
// const obj2 = new ArrayWrapper([4, 5]);

// Dono objects ka sum
// console.log(obj1 + obj2);  // Output: 15

// String conversion
// console.log(String(obj1));  // Output: "[1,2,3]"
// 2nd Sol
// const obj = { arr: [1, 2, 3] }
// const obj1 = { arr: [1, 2, 3] }
// Object.prototype.valueOf = function (params) {
//   return this.arr.reduce((prev, curn) => prev + curn)
// }

// console.log(obj + obj1);
