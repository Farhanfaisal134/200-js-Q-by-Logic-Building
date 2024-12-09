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
}
console.log(checkEvenOrOdd(121)); // Output: Odd

// Q(b) Filter Even Numbers from an Array
let arr = [10, 15, 20, 25, 30, 35, 40];
function filterEvenNumber(arr) {
  return arr.filter(num => num % 2 === 0);
}
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
}

console.log(factorial(5)); // Output: 120
// (b) Recursive Solution:
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

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
}

console.log(removeElementFromArray([10, 10, 20, 10, 30, 10, 40, 10], 10)); // Output: [20, 30, 40]
// Q8. Get Current Date and Time
function getCurrentDateAndTime() {
  let currentDate = new Date();
  return currentDate.toLocaleString();
}

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
}

console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]







