function compactObject(obj) {
  if (obj === null) return obj; // null return karega agar input null ho
  if (typeof obj !== "object") return obj; // Non-object values ko as it is return karega

  if (Array.isArray(obj)) {
    // Array ke liye falsy values filter aur nested arrays ko recursively process karega
    return obj.filter(Boolean).map(compactObject);
  }

  // Object ke liye keys filter karega aur nested values ko recursively process karega
  return Object.keys(obj).reduce((acc, key) => {
    const value = compactObject(obj[key]); // Recursive call
    if (Boolean(value)) acc[key] = value; // Falsy values ko skip karega
    return acc;
  }, {});
};

console.log(compactObject([null, 0, 5, [0], [false, 16]]));
console.log(compactObject({ a: null, b: 0, c: { d: false, e: 10 } }));
//Q => 2
// function numberRange(start, end) {
//   while (start < end) {
//     console.log(a);
//     a++
//   };
// }
// console.log(numberRange(0, 5));
//Q => 3
// function join(arr1, arr2) {
//   const result = {};
//   for (let i = 0; i < arr1.length; i++) {
//     result[arr1[i].id] = arr1[i]
//   };

//   for (let i = 0; i < arr2.length; i++) {
//     if (result[arr2[i].id]) {
//       for (const key in arr2[i]) {
//         result[arr2[i].id][key] = arr2[i][key];
//       };
//     } else {
//       result[arr2[i].id] = arr2[i];
//     }
//   };
//   return Object.values(result);
// };

// console.log(
//   join(
//     [
//       { "id": 1, "x": 2, "y": 3 },
//       { "id": 2, "x": 3, "y": 6 }
//     ],
//     [
//       { "id": 2, "x": 10, "y": 20 },
//       { "id": 3, "x": 0, "y": 0 }
//     ])
// );
//Q => 4
// const randomHexColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;

// console.log(randomHexColor());
//Q => 5
// function chunk(arr, size) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size))
//   };
//   return result;
// }
// console.log(chunk([1, 2, 3, 4, 5], 3));
//Q => 6
// function isEmptyObject(obj) {
//   return Object.keys(obj).length === 0 ? "empty" : "Not Empty";
// };

// console.log(isEmptyObject({ name: "vinod" })); // Output: "it's not empty"
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
//Q => 7 Deep Cloning;
// const obj = {
//   a: 1,
//   b: 2,
//   c: {
//     d: 5
//   },
//   e: new Date(),
//   f: undefined
// };

// function createDeepClone(params) {
//   let copyObj = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     const value = obj[key]
//     if (value instanceof Date) {
//       copyObj[key] = new Date(value.getTime())
//     }
//     else if (typeof value !== "object") {
//       copyObj[key] = value
//     } else {
//       copyObj[key] = createDeepClone(value)
//     };
//   };
//   return copyObj;
// };

// const obj1 = createDeepClone(obj)
// console.log(obj);
// const obj2 = structuredClone(obj);
// const obj3 = JSON.parse(JSON.stringify(obj));
//Q => 8
// const fizzbuzz = (sNum, eNum) => {
//   let arr = [];
//   for (let i = sNum; i <= eNum; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("fizzbuzz");
//     } else if (i % 3 === 0) {
//       arr.push("fizz");
//     } else if (i % 5 === 0) {
//       arr.push("buzz");
//     } else {
//       arr.push(i);
//     }
//   }
//   return arr;
// };

// console.log(fizzbuzz(1, 15));
// Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
//Q => 9
// [...Array(5 * 5).keys()].map((item) => console.log(item))

// Array.from({ length: 5 * 5 }, (_, index) => {
//   console.log(index);
// });
//Q => 10
// Only setTimeOut Work;
// class MyPromise {
//   constructor(executor) {
//     this.onSuccess = null
//     this.onFailed = null
//     this.isFullfilled = false
//     this.isRejected = false
//     this.isCalled = false
//     this.value
//     executor(this.resolve.bind(this), this.reject.bind(this))
//   }

//   then(cb) {
//     this.onSuccess = cb
//     return this
//   }

//   catch(cb) {
//     this.onFailed = cb
//     return this
//   }

//   resolve(successData) {
//     this.onSuccess(successData)
//   }

//   reject(errorMessage) {
//     this.onFailed(errorMessage)
//   }
// };

// class MyPromise {
//   constructor(executor) {
//     this.onSuccess = null;
//     this.onFailed = null;
//     this.isFullfilled = false;
//     this.isRejected = false;
//     this.isCalled = false;
//     this.value;
//     executor(this.resolve.bind(this), this.reject.bind(this));
//   };


//   static resolve(value) {
//     return new MyPromise((res, rej) => {
//       res(value);
//     });
//   };

//   static reject(value) {
//     return new MyPromise((res, rej) => {
//       rej(value);
//     });
//   };

//   then(cb) {
//     this.onSuccess = cb;
//     if (this.isFullfilled && !this.isCalled) {
//       this.isCalled = true;
//       this.onSuccess(this.value);
//     };
//     return this;
//   };

//   catch(cb) {
//     this.onFailed = cb;
//     if (this.isRejected && !this.isCalled) {
//       this.isCalled = true;
//       this.onFailed(this.value);
//     };
//     return this;
//   };

//   resolve(successData) {
//     this.isFullfilled = true;
//     this.value = successData;
//     if (typeof this.onSuccess === "function") {
//       this.onSuccess(successData);
//       this.isCalled = true;
//     };
//   };

//   reject(errorMessage) {
//     this.isRejected = true;
//     this.value = errorMessage;
//     if (typeof this.onFailed === "function") {
//       this.onFailed(errorMessage);
//       this.isCalled = false;
//     };
//   };
// };

// const myPromise = new MyPromise((res, rej) => {
//   setTimeout(() => {
//     res("Good data");
//   }, 1000);
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });