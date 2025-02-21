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
  
//   for (let item of arr1) {
//     result[item.id] = { ...item };  // Copy karna zaroori hai
//   }
  
//   for (let item of arr2) {
//     if (result[item.id]) {
//       for (let key in item) {
//         result[item.id][key] = item[key];  // Correct key access
//       }
//     } else {
//       result[item.id] = { ...item };  // Copy karna zaroori hai
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
//     ]
//   )
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