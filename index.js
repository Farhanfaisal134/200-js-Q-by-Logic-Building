// Day=>1  file=>10:
// Q1. Find Two Numbers that Add Up to Target ?
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 26)); // Output: [2, 3]

// Q2. Check Even or Odd and Filter Even Numbers ?
function checkEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
};

console.log(checkEvenOrOdd(121)); // Output: Odd

// Q(b) Filter Even Numbers from an Array
let arr = [10, 15, 20, 25, 30, 35, 40];
function filterEvenNumber(arr) {
  return arr.filter(num => num % 2 === 0);
};

console.log(filterEvenNumber(arr)); // Output: [10, 20, 30, 40]

// Q3. Check Leap Year ?
let isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(2024)); // Output: true
// Q4. Calculate Factorial?
// (a) Iterative Solution:
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(5)); // Output: 120
// (b) Recursive Solution:
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5)); // Output: 120
// Q5.Object with a Method
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};

car.startEngine = function () {
  console.log(`${this.model} engine started.`);
};

car.startEngine(); // Output: Camry engine started.
// Q6. Find Second Largest of an Array imp?
let array = [1, 2, 10, 20, 10, 5, 16];
const sortedArr = [...new Set(arr)].sort((a, b) => b - a); // Remove duplicates and sort
console.log(sortedArr[1]); // Output: 16
// Q7. Remove Element from Array
function removeElementFromArray(arr, target) {
  return arr.filter(item => item !== target);
};

console.log(removeElementFromArray([10, 10, 20, 10, 30, 10, 40, 10], 10)); // Output: [20, 30, 40]
// Q8. Get Current Date and Time
function getCurrentDateAndTime() {
  let currentDate = new Date();
  return currentDate.toLocaleString();
};

console.log(getCurrentDateAndTime()); // Output: Depends on current date and time
// Q9. Calculate Fibonacci Number
const fibonacci = (num) => {
  let prev = 0, curr = 1;
  for (let i = 2; i <= num; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
};

console.log(fibonacci(3)); // Output: 2
// (b) Recursive Solution:
const fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(3)); // Output: 2
// Q10. Generate Fibonacci Sequence
function generateFibonacci(num) {
  let fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};

console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
// Day=>2 Next 10 Q file=>6:
// Q=> 1️1 Rotate an Array: Write a function to rotate an array by k steps.
// Ans:
function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;
  const rotated = [...arr.slice(-k), ...arr.slice(0, n - k)];
  return rotated;
};

// // Example usage:
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
// console.log(rotateArray([1, 2, 3, 4, 5], 7)); // Output: [4, 5, 1, 2, 3] (7%5 = 2)
// Q=> 1️2 Find Prime Numbers: Identify all prime numbers up to n.
// Ans:
function findPrimesUpToN(num) {
  function isPrime(no) {
    if (no < 2) return false;
    for (let i = 2; i <= Math.sqrt(no); i++) {
      if (no % i === 0) return false
    }
    return true
  };

  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) primes.push(i)
  };
  return primes;
};

// Example usage:
console.log(findPrimesUpToN(10)); // Output: [2, 3, 5, 7]
// console.log(findPrimesUpToN(20)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]
// Q=> 1️3 Count Words in a Sentence: Write a function to count the number of words in a sentence.
// Ans:
function convertWordsInSen(sent) {
  return sent.split(" ").length;
};
// Example usage:
console.log(convertWordsInSen("I am learning JavaScript")); // → Output: 4
// Q=> 1️4 Group by Property: Group an array of objects by a specified property.
// Ans:
function groupByProperty(arr, property) {
  let grouped = {};
  for (const ele of arr) {
    if (!grouped[ele[property]]) {
      grouped[ele[property]] = [];
    };
    grouped[ele[property]].push(ele);
  };
  return grouped;
};

// Example usage
const input = [{ age: 20 }, { age: 30 }, { age: 20 }];
console.log(groupByProperty(input, 'age'));
// Output: { 20: [{ age: 20 }, { age: 20 }], 30: [{ age: 30 }] }
// Q=> 1️5 Check String Start: Verify if a string starts with a given substring (case-insensitive).
// Ans:
function startsWith(str, subStr) {
  return str.toLowerCase().startsWith(subStr)
};

// Example usage:
console.log(startsWith("Hello world", "hello")); // Output: true
// console.log(startsWith("Hello world", "World")); // Output: false
// Q=> 1️6  Find Longest Common Prefix: Write a function to find the longest common prefix among an array of strings.
function findLongestCommonPrefix(strings) {
  if (strings.length === 0) return null;
  let prefix = strings[0];
  for (const ele of strings) {
    while (!ele.startsWith(prefix)) {
      prefix = prefix.slice(0, -1)
      if (prefix === "") return null;
    };
  };
  return prefix;
};

// Example Usage:
console.log(findLongestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(findLongestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
// Q=> 1️7  Remove Duplicate Characters: Remove duplicate characters from a string.
// Ans:
function remDupStr(str) {
  let newStr = '';
  for (const ele of str) {
    if (!newStr.includes(ele)) {
      newStr += ele
    };
  };
  return newStr;
};

// Example Usage:
console.log(remDupStr("hello")); // => Output: "helo"
// Q=> 1️8 Find Array Intersection: Write a function to find the intersection of two arrays.
// Ans:
function intersectionOfArray(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
};

// Example Usage:
console.log(intersectionOfArray([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
// Q=> 1️9 Repeat a String: Repeat a string n times using a function.
// Ans:
function repeatString(str, count) {
  // Built In Method;
  return count > 0 ? str.repeat(count) : str
  // use An Array
  // let newStr = ""
  // for (let i = 0; i < count; i++) {
  //   newStr += str
  // }
  // return newStr
};

// Example Usage:
console.log(repeatString("abc", 3));
// Q=> 20 Convert to CamelCase: Convert a words firstLater to a camelCase.
// Ans:
function toCamelCase(sent) {
  return sent.split(" ")
    .map((item) => item[0]
      .toUpperCase() + item.slice(1))
    .join(" ")
};

// Example Usage:
console.log(toCamelCase("hello")); // Output: Hello









