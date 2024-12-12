// Day=>1  file=>10:
// Q=> 1. Find Two Numbers that Add Up to Target ?
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 26)); // Output: [2, 3]

// Q=> 2. Check Even or Odd and Filter Even Numbers ?
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

// Q=> 3. Check Leap Year ?
let isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(2024)); // Output: true
// Q=> 4. Calculate Factorial?
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
// Q=> 5.Object with a Method
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};

car.startEngine = function () {
  console.log(`${this.model} engine started.`);
};

car.startEngine(); // Output: Camry engine started.
// Q=> 6. Find Second Largest of an Array imp?
let array = [1, 2, 10, 20, 10, 5, 16];
const sortedArr = [...new Set(arr)].sort((a, b) => b - a); // Remove duplicates and sort
console.log(sortedArr[1]); // Output: 16
// Q=> 7. Remove Element from Array
function removeElementFromArray(arr, target) {
  return arr.filter(item => item !== target);
};

console.log(removeElementFromArray([10, 10, 20, 10, 30, 10, 40, 10], 10)); // Output: [20, 30, 40]
// Q=> 8. Get Current Date and Time
function getCurrentDateAndTime() {
  let currentDate = new Date();
  return currentDate.toLocaleString();
};

console.log(getCurrentDateAndTime()); // Output: Depends on current date and time
// Q=> 9. Calculate Fibonacci Number
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
// Q=> 10. Generate Fibonacci Sequence
function generateFibonacci(num) {
  let fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};

console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
// Day=> 2 Next 10 Q file=>6:
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
// Day=> 3 Next 10 Q file => 7:
// Q=> 21 Create a Simple Promise: Write a function that returns a promise which resolves after 2 seconds with a success message.
// Ans:
function simplePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success! Promise resolved after 2 seconds");
    }, 2000);
  });
};

//Example Usage:
simplePromise().then((message) => console.log(message));
// Q=> 22 Create a Simple Promise Polyfill:
// Ans:
class MyPromise {
  constructor(executor) {
    this.onSuccess = null;
    this.onFailed = null;
    this.isFullfilled = false;
    this.isRejected = false;
    this.isCalled = false;
    this.value;
    executor(this.resolve.bind(this), this.reject.bind(this));
  };
  static resolve(value) {
    return new MyPromise((res, rej) => res(value))
  };

  static reject(value) {
    return new MyPromise((res, rej) => rej(value))
  };

  then(cb) {
    this.onSuccess = cb;
    if (this.isFullfilled && !this.isCalled) {
      this.isCalled = true;
      this.onSuccess(value);
    };
    return this;
  };

  catch(cb) {
    this.onFailed = cb;
    if (this.isRejected && !this.isCalled) {
      this.isCalled = true;
      this.onFailed(this.value);
    };
    return this;
  };

  resolve(successData) {
    this.isFullfilled = true;
    this.value = successData;
    if (typeof this.onSuccess === "function") {
      this.onSuccess(this.value)
      this.isCalled = true;
    }
  };

  reject(errorMessage) {
    this.isRejected = true;
    this.value = errorMessage;
    if (typeof this.onFailed === "function") {
      this.onFailed(errorMessage);
      this.isCalled = false;
    };
  };
};

// Example Usage
const myPromise = new MyPromise((res, rej) => {
  setTimeout(() => {
    res("Good data");
  }, 1000);
}).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log("error", err);
});
// Q=> 23 Promise with then and catch: Use a promise to simulate an API call. Handle success with .then() and failure with .catch().
// Ans:
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => response.json()
  )
    .then(data => console.log(data))
    .catch(err => console.log(err))
};

fetchData();
// Q=> 24 Polyfill for Promise.all: Write a custom implementation of Promise.all that takes an array of promises and resolves
// when all promises resolve.
// Ans:
const p1 = new Promise((resolve) => setTimeout(resolve, 500, "P1 Done"));
const p2 = new Promise((resolve) => setTimeout(resolve, 100, "P2 Done"));

Promise.myAll = function (listOfPromise) {
  return new Promise((res, rej) => {
    let result = [];
    let count = 0;
    for (let i = 0; i < listOfPromise.length; i++) {
      Promise.resolve(listOfPromise[i]).then(data => {
        result[i] = data;
        count++;
        if (count === listOfPromise.length) {
          res(result)
        }
      }).catch((error) => {
        rej(error)
      })
    };
  });
};

// Example Usage
Promise.myAll([p1, p2]).then((data) => console.log(data)).catch((error) => console.log(error));
// Q=> 25 Polyfill for Promise.race: Write a custom implementation of Promise.race that resolves or rejects as soon as one
// of the promises in the array settles.
// Ans:
const r1 = new Promise((resolve) => setTimeout(resolve, 500, "P1 Done"));
const r2 = new Promise((resolve, reject) => setTimeout(reject, 100, "Error"));

Promise.myRace = function (listOfPromise) {
  return new Promise((res, rej) => {
    for (let i = 0; i < listOfPromise.length; i++) {
      Promise.resolve(listOfPromise[i]).then(data => {
        res(data)
      }).catch(error => rej(error));
    };
  });
};

Promise.myRace([r1, r2])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// Q=> 26 Polyfill for Promise.any: Implement Promise.any which resolves as soon as the first promise resolves and
// rejects if all promises fail.
// Ans:
function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let pending = promises.length;

    promises.forEach((p, i) => {
      Promise.resolve(p).then(resolve).catch(err => {
        errors[i] = err;
        pending--;
        if (pending === 0) reject(errors);
      });
    });
  });
};

promiseAny([Promise.reject('A'), Promise.resolve('B')]).then(console.log);
// Q=> 27 Polyfill for Promise.allSettled: Implement Promise.allSettled which resolves when all promises settle,
// providing an array of their results and statuses.
// Ans:
const s1 = new Promise((resolve) => setTimeout(resolve, 500, "P1 Done"));
const s2 = new Promise((resolve, reject) => setTimeout(reject, 100, "P2 Failed"));
Promise.myAllSettled = function (listOfPromise) {
  return new Promise((res) => {
    const result = [];
    let c = 0;

    const commonHandler = (index, status, value) => {
      result[index] =
        status === "fulfilled"
          ? { status, value }
          : { status, reason: value };

      c++;
      if (c === listOfPromise.length) {
        res(result);
      }
    };
    for (let i = 0; i < listOfPromise.length; i++) {
      Promise.resolve(listOfPromise[i])
        .then((data) => {
          commonHandler(i, "fulfilled", data);
        })
        .catch((err) => {
          commonHandler(i, "rejected", `Error: ${err} | Custom Message: P1 Rejected`);
        });
    }
  });
};

Promise.allSettled([s1, s2])
  .then((results) => console.log(results));
//output
// [
//   { status: "fulfilled", value: "P1 Done" },
//   { status: "rejected", reason: "P2 Failed" }
// ]
// Q=> 28 Chained Promises: Create a promise chain that performs multiple asynchronous operations sequentially.
// Ans:
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 complete"), 1000); // 1 second delay
  });
}

function step2(prevResult) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${prevResult}, Step 2 complete`), 1000); // 1 second delay
  });
}

function step3(prevResult) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${prevResult}, Step 3 complete`), 1000); // 1 second delay
  });
}

// Chain the promises
step1()
  .then((result1) => step2(result1)) // Step 1 ke result ko Step 2 mein bheja
  .then((result2) => step3(result2)) // Step 2 ke result ko Step 3 mein bheja
  .then((finalResult) => console.log(finalResult)) // Final result print kiya
  .catch((error) => console.error(error)); // Agar koi error ho to usko handle kiya
// Q=> 29 Promise with finally: Simulate an operation with a promise and use .finally() to log a cleanup message regardless of the outcome.
// Ans:
function simulateOperation(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Operation Successful");
      } else {
        reject("Operation Failed");
      }
    }, 2000); // 2-second delay
  });
};

simulateOperation(true) // Try with 'true' or 'false'
  .then((message) => console.log(message)) // Agar resolve ho, ye chalega
  .catch((error) => console.error(error)) // Agar reject ho, ye chalega
  .finally(() => console.log("Cleanup: Operation Complete")); // Hamesha chalega
// Q=> 30 Compare Promise Methods: Use examples to demonstrate the differences between Promise.all,
// Promise.race, Promise.any, and Promise.allSettled.
// Ans:
// Promise.all: Jab Sara Promise Resolve Ho Agr 1 Bhi reject ho gya to ya kux Bhi return nhi kara ga.
// Promise.race: Jaise hi koi promise pehle complete ho jaye (chahe wo resolve ho ya reject), Promise.race uska result
// ya error return kar deta hai.
// Promise.any: Jaise hi koi promise pehle resolve hota hai, Promise.any uspe resolve ho jata hai,
// Agar sabhi reject ho jaayein, to ek AggregateError throw hota hai.
// Promise.allSettled: Yeh har promise ka status(resolved ya rejected) aur result ek array mein deta hai,
// chahe promise resolve ho ya reject.Koi bhi promise fail ho jaye to bhi ye overall resolve hota hai, unlike Promise.all.
// Day 4 => Next 10 Q
// Q=> 31 Implement Debounce;
// Ans:
function debounce(func, dealay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args)
    }, dealay);
  };
};

const log = debounce(console.log, 1000);
log('Hello'); // cancelled - 10ms

// Q=> 32 Implement Throttle;
// Ans:
function throttle(func, dealay) {
  let isThrottling = false;
  return (...args) => {
    if (!isThrottling) {
      func(...args)
      isThrottling = true;
      setTimeout(() => {
        isThrottling = false;
      }, limit);
    };
  }
};

function shoot() {
  console.log("Function called");
};

const throttledFunction = throttle(shoot, 1000);
// Example usage
throttledFunction();

// Q=> 33: Function Expressions and Hoisting;
// Ans:
sayHi(); //Error: sayHi is not a function beacuse func expression host nhi huta
var sayHi = function () {
  console.log('Hi!');
};

// Q=> 34: Variable Hoisting Inside Functions;
// Ans:
var x = 10
function testvalue() {
  console.log(x);
  var x = 20;
};
testvalue();

// Q=> 35: Shadowing and Hoisting in Conditional Statements
// Why does the global variable pname remain unchanged in the following code ?
// Ans:
var pname = 'name 1';
function print() {
  pname = 'name 2';
  if (1 == 2) {
    var pname = 'name 3';
  };
};
print();
console.log(pname); // Output?

// Q=> 36: WeakMap
// Ans: key - value pairs ko store karta hai(jahaan key sirf object ho sakta hai).
let weakMap = new WeakMap();
let obj = { name: "Farhan" };
weakMap.set(obj, "Developer");

console.log(weakMap.get(obj)); // Output: Developer
// Agar 'obj' ko null ya undefined kar do
obj = null;
// WeakMap se 'obj' garbage collect ho jayega, kyunki ab koi reference nahi bacha us object ka.

// Q=> 37: WeakMap
// Ans:WeakSet sirf objects ko set ki tarah store karta hai(values only, no key - value pairs).
let weakSet = new WeakSet();
let obj1 = { animal: "Horse" };
let obj2 = { animal: "Dog" };

weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1)); // Output: true
// Agar 'obj1' ko null ya undefined kar do
obj1 = null;
// WeakSet se 'obj1' garbage collect ho jayega, kyunki ab koi reference nahi bacha us object ka.

// Q=> 38: Symbal?
// Ans:
const salary = Symbol('sl');

const user = {
  name: 'Suman',
  age: 500,
  email: 'suman@gmail.com',
  [salary]: 984734838
};

console.log(user[salary]) // Output=> 984734838
console.log(Object.keys(user));// Output? [ 'name', 'age', 'email' ] Symbal key lopp ka through access nhi kr sagta;

// Q=> 39: How to genrate randomHexColor;
// Ans:
const randomHexColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;

console.log(randomHexColor()); // Output=> #d7beab

// Q=> 40: How to genrate 1 to 5 no using while loop;
// Ans:
function numberRange(start, end) {
  while (start < end) {
    console.log(a);
    a++
  };
};

console.log(numberRange(0, 5));



