//Q-> 1
// function expect(val) {
//   return {
//     toBe(val1) {
//       return val === val1 ? true : "Not Equal"
//     },
//     notToBe(val1) {
//       return val !== val1 ? true : "Equal"
//     }
//   };
// };

// console.log(expect(5).toBe(5)) // true
// console.log(expect(5).notToBe(5)); // throws "Equal"
//Q-> 2
// function createCounter(init) {
//   const n = init

//   function increment() {
//     return init += 1
//   }
//   function decrement() {
//     return init -= 1
//   }
//   function reset() {
//     return init = n
//   }
//   return {
//     increment, decrement, reset
//   }
//   // return obj
// };
// const counter = createCounter(5)
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
//Q-> 3 fun right to left exuction
// function compose(functions) {
//   return (x) => {
//     for (let i = functions.length - 1; i >= 0; i--) {
//       x = functions[i](x)
//     };
//     return x
//   };
// };

// const fn = compose([x => x + 1, x => x * x, x => 2 * x])
// console.log(fn(4));// 65
//Q-> 4
// function demo(...args) {
//   return args.length;
// }

// console.log(demo(1, 2));
//Q-> 5 Alow one fun call
// function once(fn) {
//   let called = false;
//   return (...args) => {
//     if (!called) {
//       called = true
//       return fn(...args)
//     };
//   };
// };
// const onceFn = once((a, b, c) => a + b + c);
// console.log(onceFn(1, 2, 3));
//Q-> 6
// function memoizeSquare() {
//   let chache = {};
//   return (n) => {
//     if (n in chache) {
//       console.log("returned from cache")
//       return chache[n]
//     } else {
//       chache[n] = n + n
//       return chache[n]
//     }
//   };
// };

// const memoSquare = memoizeSquare()
// console.log(memoSquare(5)) // calculate
// console.log(memoSquare(5)) // returns from cache
//Q-> 7
// async function sleep(millis) {
//   await new Promise(resolve => setTimeout(resolve, millis));
// };

// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) // 100
//Q-> 8
// function cancellable(fn, args, t) {
//   function cancelFn() {
//     clearTimeout(timer)
//   };

//   const timer = setTimeout(() => {
//     const result = fn(...args);  // Yeh function ko args ke sath call kar raha hai
//     console.log('Result:', result);
//   }, t);

//   return cancelFn;
// };
// const cancel = cancellable((x) => x * 5, [2], 20); // Returns the cancel function

// setTimeout(() => {
//   cancel();  // After 50ms, cancel the original timer
//   console.log("Cancelled");
// }, 50);
//Q-> 9
// function cancellable(fn, args, t, cancelTimeMs) {
//   fn(...args);

//   const intervalId = setInterval(() => {
//     fn(...args);  // Har `t` milliseconds par function ko call karna
//   }, t);

//   const cancelFn = function () {
//     clearInterval(intervalId);  // Interval ko clear karna
//   };

//   setTimeout(cancelFn, cancelTimeMs);
//   return cancelFn;
// };

// // Example Usage
// const cancel = cancellable((x) => console.log(x * 5), [2], 1000, 5000);
// setTimeout(() => cancel(), 3000); // Manually stop after 3000ms
//Q-> 10 Is class ka kaam yeh hai ke key-value pairs ko save kare,lekin har key ke sath ek waqt ka limitation (duration) hota hai.
//Agar wo waqt guzr jata hai, to wo key access nahi ki ja sakti.
// class ExpiringKeyValueStore {
//   constructor() {
//     this.store = {};
//   };

//   set(key, value, duration) {
//     const currentTime = Date.now();
//     const expirationTime = currentTime + duration;
//     const isExisting = this.store[key] !== undefined;
//     this.store[key] = { value, expirationTime };
//     return isExisting
//   };

//   get(key) {
//     const entry = this.store[key];
//     if (entry && entry.expirationTime > Date.now()) {
//       return entry.value;
//     };
//     return -1;
//   };

//   count() {
//     let count = 0;
//     for (const key in this.store) {
//       if (this.store[key].expirationTime > Date.now()) {
//         count++;
//       };
//     };
//     return count;
//   };
// };

// Example usage
// const kvStore = new ExpiringKeyValueStore();

// Set keys with values and durations
// console.log(kvStore.set(1, 100, 3000)); // false (key did not exist before)
// console.log(kvStore.set(2, 200, 5000)); // false (key did not exist before)
// console.log(kvStore.set(1, 150, 3000)); // true (key 1 already existed, value and duration updated)
// console.log(kvStore);


// Get values
// console.log(kvStore.get(1)); // 150 (within 3 seconds)
// console.log(kvStore.get(2)); // 200 (within 5 seconds)

// Wait for 4 seconds
// setTimeout(() => {
//   console.log(kvStore.get(1)); // -1 (key 1 expired)
//   console.log(kvStore.get(2)); // 200 (key 2 still valid)
//   console.log(kvStore.count()); // 1 (only key 2 is un-expired)
// }, 4000);


