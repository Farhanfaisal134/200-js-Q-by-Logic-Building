// Q => 1
// function taleCase(str) {
//   return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
// };

// console.log(taleCase("hello world"));
// Q => 2
// function secondLargetFind(arr) {
//   arr.sort((a, b) => b - a)
//   return arr[1]
// }

// console.log(secondLargetFind([10, 5, 8, 20]));
// Q => 3
// console.log([1, 3, 5].concat([2, 4, 6]));
// Q => 4
// function commonEle(arr1, arr2) {
//   return arr1.filter((item) => arr2.includes(item))
// };

// console.log(commonEle([1, 2, 3], [2, 3, 4]));// OutPut=>[2,3]
// Q => 5
// function eleAppearsInArrayCount(arr) {
//   let obj = {}

//   for (const ele of arr) {
//     if (obj[ele]) {
//       obj[ele] += 1
//     } else {
//       obj[ele] = (obj[ele] || 0) + 1
//     }
//   }
//   return obj
// };

// console.log(eleAppearsInArrayCount([1, 2, 2, 3, 3, 3])); // Output: {1: 1, 2: 2, 3: 3}
// Q => 6
// function findLongestWordInStr(words) {
//   let result = words.split(" ").sort((a, b) => b.length - a.length)
//   return result[0]
// }
// console.log(findLongestWordInStr("I love programming"));
// Q => 7
// function isValidParentheses(str) {
//   const stack = [];
//   const pairs = {
//     "(": ")",
//     "{": "}",
//     "[": "]"
//   };

//   for (const ele of str) {
//     if (pairs[ele]) {
//       stack.push(ele)
//     } else if (pairs[stack.pop()] !== ele) {
//       return false
//     }
//   };
//   return stack.length === 0;
// };

// console.log(isValidParentheses("()"));
// console.log(isValidParentheses("(}"));
// Q => 8
// function generateFibonacci(num) {
//   const fib = [0, 1]
//   for (let i = 2; i < num; i++) {
//     fib.push(fib[i - 1] + fib[i - 2])
//   };
//   return fib
// }

// // Example usage:
// console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
// console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// Q => 9
// function arrayToObject(arr, keyProperty) {
//   return arr.reduce((obj, item) => {
//     obj[item[keyProperty]] = item
//     return obj
//   }, {})
// }

// // Example usage:
// const arr = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ];

// const result = arrayToObject(arr, "id");
// console.log(result);
// Output = {
//   '1': { id: 1, name: 'Alice' },
//   '2': { id: 2, name: 'Bob' },
//   '3': { id: 3, name: 'Charlie' }
// }
// Q => 10
// function findFirstDup(arr) {
//   const seen = new Set()
//   for (const item of arr) {
//     if (seen.has(item)) {
//       return item;
//     }
//     seen.add(item)
//   }

//   return -1
// }

// console.log(findFirstDup([1, 2, 3, 4, 2, 5]));