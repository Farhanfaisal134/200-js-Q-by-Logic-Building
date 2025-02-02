//Q =>1
// let arr = [20, 80, 90, 30, 100, 2, 9, 54, 10]
// const longest = arr.reduce((prev, curn) => {
//   return prev > curn ? prev : curn
// });

// console.log(longest);
//Q =>2
// find str ma 1 latter kitni bar han
// let str = "Seema Vishwakarma";
// let obj = {};

// for (const ele of str) {
//   if (obj[ele]) {
//     obj[ele] = (obj[ele] || 0) + 1
//   } else {
//     obj[ele] = 1
//   }
// };

// console.log(obj);
//Q =>3
// function curryings(a) {
//   return function (b) {
//     if (b) {
//       return curryings(a + b)
//     } else {
//       return a
//     }
//   }
// };

// console.log(curryings(2)(2)());
//Q =>4
// method chaining;
// class Calculator {
//   constructor() {
//     this.value = 0
//   }
//   add(no) {
//     this.value = this.value + no
//     return this
//   }
//   multiply(no) {
//     this.value = this.value * no
//     return this
//   }
//   subtraction(no) {
//     this.value = this.value - no
//     return this
//   }
//   getValue() {
//     return this.value
//   }
// }

// const calculate = new Calculator()
// const result = calculate.add(4).multiply(10).subtraction(5).getValue()
// console.log(result)
//Q =>5
// const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Array.prototype.myForEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this)
//   };
// };
// arrData.myForEach((item) => console.log(item));
//Q =>6
// Array.prototype.myMap = function (callback) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callback(this[i], i, this))
//   }
//   return newArr
// }

// const arr = arrData.myMap(item => item);
// console.log(arr);
//Q =>7
// Array.prototype.myFilter = function (callback) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       newArr.push(this[i])
//     }
//   }
//   return newArr
// };

// const res = arrData.myFilter((element) => element > 4)
// console.log(res);
//Q =>8
// Array.prototype.myReduce = function (cb, initValue) {
//   let accumulator = initValue !== undefined ? initValue : this[0]; // Initial value
//   let startIndex = initValue !== undefined ? 0 : 1; // Loop start index

//   for (let i = startIndex; i < this.length; i++) {
//     accumulator = cb(accumulator, this[i], i, this); // Callback function call
//   }

//   return accumulator; // Final result
// };

// const result = arrData.myReduce((prev, curn) => prev + curn)
// console.log(result);
//Q =>9
// Array.prototype.myFind = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return this[i]
//     }
//   }
// }

// const res = arrData.myFind((item) => item > 2)
// console.log(res);
//Q =>10
// Array.prototype.mySome = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return true
//     }
//   }
//   return false
// };

// const res = arrData.mySome((item) => item > 5);
// console.log(res);
//Q =>11
// Array.prototype.myEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i])) {
//       return false
//     };
//   };
//   return true
// }

// const res = arrData.myEvery((item) => item > 5)
// console.log(res);
//Q =>12
// Array.prototype.last = function () {
//   if (this.length == 0) {
//     return -1;
//   }
//   return this[this.length - 1]
// };

// const arr = [1, 2, 3];
// console.log(arr.last());



