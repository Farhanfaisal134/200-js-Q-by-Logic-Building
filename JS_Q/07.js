// const p1 = new Promise((resolve) => setTimeout(resolve, 500, "P1 Done"));
// const p2 = new Promise((resolve) => setTimeout(resolve, 100, "P2 Done"));
//Q-> 1 Promise All PollyFill;
// Promise.myAll = function (listOfPromise) {
//   return new Promise((res, rej) => {
//     let result = [];
//     let c = 0;
//     for (let i = 0; i < listOfPromise.length; i++) {
//       Promise.resolve(listOfPromise[i]).then(data => {
//         result[i] = data;
//         c++;
//         if (c === listOfPromise.length) {
//           res(result)
//         }
//       }).catch(error => rej(error))
//     };
//   });
// };

// Promise.myAll([p1, p2])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
//Q-> 2 Promise race PollyFill;
// Matlab: Jaise hi koi promise pehle complete ho jaye (chahe wo resolve ho ya reject), Promise.race uska result ya error return kar deta hai.
// Promise.myRace = function (listOfPromise) {
//   return new Promise((res, rej) => {
//     for (let i = 0; i < listOfPromise.length; i++) {
//       Promise.resolve(listOfPromise[i]).then(data => {
//         res(data)
//       }).catch(error => rej(error))
//     }
//   })
// };

// Promise.myRace([p1, p2])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
//Q-> 3 Promise.any-> Matlab: Jaise hi koi promise pehle resolve hota hai, Promise.any uspe resolve ho jata hai.
//      Agar sabhi reject ho jaayein, to ek AggregateError throw hota hai.
// const p1 = new Promise((resolve, reject) => setTimeout(reject, 500, "P1 Done"));
// const p2 = new Promise((resolve, reject) => setTimeout(reject, 100, "P2 Done"));

// Promise.myAny = function (listOfPromises) {
//   return new Promise((res, rej) => {
//     let result = [];
//     let count = 0;

//     function handleError(index, status, value) {
//       result[index] = { status, value };
//       count++;
//       if (count === listOfPromises.length) {
//         rej(new AggregateError(result)); // Correct rejection with AggregateError
//       }
//     }

//     for (let i = 0; i < listOfPromises.length; i++) {
//       Promise.resolve(listOfPromises[i]) // Fixed index
//         .then((data) => res(data))
//         .catch((error) => handleError(i, "rejected", error));
//     }
//   });
// };

// Promise.myAny([p1, p2])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
//Q-> 4 Promise.allSettled:Yeh har promise ka status(resolved ya rejected) aur result ek array mein deta hai,
//    chahe promise resolve ho ya reject.Koi bhi promise fail ho jaye to bhi ye overall resolve hota hai, unlike Promise.all.

// Promise.myAllSettled = function (listOfPromise) {
//   return new Promise((res) => {
//     const result = [];
//     let c = 0;

//     const commonHandler = (index, status, value) => {
//       result[index] =
//         status === "fulfilled"
//           ? { status, value }
//           : { status, reason: value };

//       c++;
//       if (c === listOfPromise.length) {
//         res(result);
//       }
//     };

//     for (let i = 0; i < listOfPromise.length; i++) {
//       Promise.resolve(listOfPromise[i])
//         .then((data) => {
//           commonHandler(i, "fulfilled", data);
//         })
//         .catch((err) => {
//           commonHandler(i, "rejected", `Error: ${err} | Custom Message: P1 Rejected`);
//         });
//     }
//   });
// };

// Promise.allSettled([p1, p2])
//   .then((results) => console.log(results));

//output
// [
//   { status: "fulfilled", value: "P1 Done" },
//   { status: "rejected", reason: "P2 Failed" }
// ]
//Q-> 5
// function debounce(func, dealay) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...args)
//     }, dealay);
//   };
// };

// const log = debounce(console.log, 1000);
// log('Hello'); // cancelled - 10ms
//Q-> 6
// function throttle(func, dealay) {
//   let isThrottling = false;
//   return (...args) => {
//     if (!isThrottling) {
//       func(...args)
//       isThrottling = true;
//       setTimeout(() => {
//         isThrottling = false;
//       }, limit);
//     };
//   }
// };

// function shoot() {
//   console.log("Function called");
// };

// const throttledFunction = throttle(shoot, 1000);
// // Example usage
// throttledFunction();
//Q-> 7 var variables aur function declarations hoist hote hain...
// let, const, aur function expressions hoist nahi hote in the same way
// unhein initialization se pehle access nahi kiya ja sakta...

// sayHi(); //Error: sayHi is not a function
// var sayHi = function () {
//   console.log('Hi!');
// };

// var x = 10
// function testvalue() {
//   console.log(x);
//   var x = 20;
// };
// testvalue();

// var pname = 'name 1'
// function print() {
//   pname = 'name 2'
//   if (1 == 2) {
//     var pname = "name 3"
//   };
// };
// print();
// console.log(pname);
//Q-> 8
// function fetchData() {
//   fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
//     return response.json()
//   }).then(data => console.log(data))
//     .catch(err => console.log(err))
// };

// fetchData();
//Q-> 9
// WeakMap key - value pairs ko store karta hai(jahaan key sirf object ho sakta hai).
// WeakSet sirf objects ko set ki tarah store karta hai(values only, no key - value pairs).
// let weakMap = new WeakMap();
// let obj = { name: "Farhan" };

// weakMap.set(obj, "Developer");

// console.log(weakMap.get(obj)); // Output: Developer

// Agar 'obj' ko null ya undefined kar do
// obj = null;
// WeakMap se 'obj' garbage collect ho jayega, kyunki ab koi reference nahi bacha us object ka.

// let weakSet = new WeakSet();
// let obj1 = { animal: "Horse" };
// let obj2 = { animal: "Dog" };

// weakSet.add(obj1);
// weakSet.add(obj2);

// console.log(weakSet.has(obj1)); // Output: true

// Agar 'obj1' ko null ya undefined kar do
// obj1 = null;
// WeakSet se 'obj1' garbage collect ho jayega, kyunki ab koi reference nahi bacha us object ka.
//Q-> 10
// const salary = Symbol('sl');

// const user = {
//   name: 'Suman',
//   age: 500,
//   email: 'suman@gmail.com',
//   [salary]: 984734838
// }

// console.log(user[salary])
// console.log(Object.keys(user))
