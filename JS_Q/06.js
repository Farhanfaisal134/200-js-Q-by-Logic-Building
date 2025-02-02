//Q => 1
// function rotateArray(arr, k) {
//   const n = arr.length;
//   k = k % n;

//   const rotated = [...arr.slice(-k), ...arr.slice(0, n - k)];
//   return rotated;
// };
// Example usage:
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
// console.log(rotateArray([1, 2, 3, 4, 5], 7)); // Output: [4, 5, 1, 2, 3] (7%5 = 2)

//Q => 2
// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false
//   }
//   return true;
// };

// function findPrimesUpToN(n) {
//   const primes = [];
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) primes.push(i); // Agar prime hai, to list mein add karo
//   }
//   return primes;
// };

// Example usage:
// console.log(findPrimesUpToN(10)); // Output: [2, 3, 5, 7]
// console.log(findPrimesUpToN(20)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]

//Q => 3
// function convertWordsInSen(sent) {
//   return sent.split(" ").length;
// }

// console.log(convertWordsInSen("I am learning JavaScript")); // → Output: 4

//Q => 4
// function groupByProperty(arr, property) {
//   let grouped = {};

//   for (const item of arr) {
//     if (!grouped[item[property]]) {
//       grouped[item[property]] = [];
//     }
//     grouped[item[property]].push(item);
//   };
//   return grouped;
// };

// Example usage
// const input = [{ age: 20 }, { age: 30 }, { age: 20 }];
// console.log(groupByProperty(input, 'age'));
// Output: { 20: [{ age: 20 }, { age: 20 }], 30: [{ age: 30 }] }

// Q => 5
// function startsWith(str, substr) {
//   return str.toLowerCase().slice(0, substr.length) === substr.toLowerCase();
// };

// // Example usage:
// console.log(startsWith("Hello world", "hello")); // Output: true
// console.log(startsWith("Hello world", "World")); // Output: false

// Q => 6
// function findLongestCommonPrefix(strings) {
//   if (strings.length === 0) return "";
//   let prefix = strings[0];
//   for (const ele of strings) {
//     while (!ele.startsWith(prefix)) {
//       prefix = prefix.slice(0, -1)
//       if (prefix === "") return "";
//     };
//   };
//   return prefix;
// };
// // Example Usage:
// console.log(findLongestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(findLongestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""

//Q => 7
// function remDupStr(str) {
//   let newStr = '';
//   for (const ele of str) {
//     if (!newStr.includes(ele)) {
//       newStr += ele
//     }
//   };
//   return newStr;
// };
// console.log(remDupStr("hello")); // → Output: "helo"

//Q => 8
// function intersectionOfArray(arr1, arr2) {
//   return arr1.filter((item) => arr2.includes(item))
// }
// console.log(intersectionOfArray([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
//Q => 9

// function repeatString(str, count) {
//   return count > 0 ? str.repeat(count) : str
// }

// console.log(repeatString("abc", 3));
//Q => 10

// function toCamelCase(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((item, idx) => idx === 0 ? item : `${item[0].toUpperCase()}${item.slice(1)}`)
//     .join("");
// };

// console.log(toCamelCase("hello world thApa")); // Output: helloWorldThapa
//Completed