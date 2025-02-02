//Q-> 1
// function createCounter() {
//   let count = 0;
//   return function () {
//     Increment: count++ ka matlab hai ki pehle count ki current value return hoti hai,
//     aur uske baad count ki value increment hoti hai.

//     return count++;
//     Increment: ++count ka matlab hai ki pehle count ki value ko increment karna hai,
//     aur phir uski nayi value return karna hai.

//     return ++count;
//   }
// };

// let counter = createCounter();

// console.log(counter());
// console.log(counter());
//Q-> 2
// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//   }

//   return {
//     incrementCounter: function () {
//       return increment();
//     },

//     getCount: function () {
//       return count;
//     }
//   }
// }

// const counter = createCounter();
// counter.incrementCounter();
// counter.incrementCounter();

// console.log(counter.getCount());
//Q-> 3
// function Product(name, price, quantity) {
//   this.name = name;
//   this.price = price;
//   this.quantity = quantity;
// }

// Product.prototype.calculateTotalValue = function () {
//   return this.price * this.quantity
// }

// const product1 = new Product("Widget", 10, 5);
// const totalValue1 = product1.calculateTotalValue();
// console.log(totalValue1);
//Q-> 4
// function createMultidimensionalArray(rows, columns) {
//   let arr = [];
//   for (let i = 0; i < rows; i++) {
//     let row = [];
//     for (let j = 0; j < columns; j++) {
//       row.push(i + j);
//     }
//     arr.push(row);
//   };
//   return arr;
// };

// function display(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].join(" "));
//   }
// };

// function reverseDisplay(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i].reverse().join(" "));
//   }
// };

// const multiArray = createMultidimensionalArray(3, 4);
// console.log(multiArray); // [ [ 0, 1, 2, 3 ], [ 1, 2, 3, 4 ], [ 2, 3, 4, 5 ] ]
// display(multiArray);

// reverseDisplay(multiArray);
//Q-> 5
// const person = {
//   fName: 'John',
//   lName: 'Doe',
//   age: 20,
//   city: 'New York'
// }

// const { fName, lName, ...left } = person;

// console.log(fName)
// console.log(lName);
// console.log(left)
//Q-> 6
// Encapsulation: Object ke andar data ko protect karna aur sirf zaroori cheezain access karne dena.
// Abstraction: Sirf important details show karna aur unnecessary complexity ko hide karna.
// Inheritance: Ek class doosri class se properties aur methods ko inherit karti hai.
// Polymorphism: Ek function ko alag alag forms mein use karna, jahan har form ka alag behavior hota hai.
//Q-> 7
// const person = {
//   name: "Zayn",
//   age: 20,

//   introduce: function () {
//     return `Hi my name is ${this.name} and i m ${this.age} year old`
//   }
// };

// const student = Object.create(person);
// student.studentId = '12345';

// console.log(student.name);
// console.log(student.studentId);
// console.log(student.introduce());
//Q-> 8
// function oddishOrEvenish(num) {
//   const digits = num.toString().split('').map(Number);
//   const sum = digits.reduce((acc, digit) => acc + digit, 0);

//   return sum % 2 === 0 ? "Evenish" : "Oddish";
// }

// console.log(oddishOrEvenish(121));
//Q-> 9
// function reverseOdd(str) {
//   function reverseString(str) {
//     return str.split('').reverse().join('');
//   };

//   const words = str.split(' ');
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length % 2 !== 0) {
//       words[i] = reverseString(words[i]);
//     };
//   };

//   return words.join(' ');
// };
// console.log(reverseOdd("One Two Four"));

//Q-> 10 count volwels
// function countVowels(sent) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   for (const ele of sent) {
//     if (vowels.includes(ele)) {
//       count++
//     };
//   };
//   return count;
// };

// const result = countVowels("farhan")
// console.log(result);