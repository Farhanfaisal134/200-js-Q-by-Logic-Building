//Q => 1
// const input = "This Is My Home";
// function demo(sent) {
//   let obj = {}
//   for (const ele of sent) {
//     obj[ele] = ele.length
//   }
//   return obj
// };

// console.log(demo(input.split(" ")));
//Output => { This: 4, Is: 2, My: 2, Home: 4 };

//Q => 2
// const arr = [1, 2, 3, 4, 5];

// const result = arr.sort(() => Math.random() - 0.5);
// console.log(result);

//Q => 3
// let a = "mmn"
// let b = "mnm"
// function equal(x, y) {
//   let count = 0;
//   for (const ele of x) {
//     if (y.includes(ele)) {
//       count++
//     }
//   }
//   return count;
// }
// const res = equal(a.split(""), b.split(""))
// console.log(res); // Output -> 3

//Q => 4
// arr descracring
// let [a, b, c] = ["Male", "Female", "Other"];
// [c, a, b] = [c, b, a];
// console.log([c, a, b]); // Output -> ['Other', 'Female', 'Male']

//Q => 5
// const arr = [1, 2, [3, 4], [6, 7]];
// let newArr = [];

// function flatArr(arr) {
//   arr.map((item) => {
//     if (Array.isArray(item)) {
//       flatArr(item);
//     } else {
//       newArr.push(item);
//     }
//   })
//   return newArr;
// };

// console.log(flatArr(arr)); // Output -> [1, 2, 3, 4, 6, 7]

//Q => 6
// function flat (array, n){
//   if(n === 0) return array;

//   let flatarr = [];
//   for(const ele of array){
//       if(Array.isArray(ele)){
//           const nestead = flat(ele, n - 1);
//           flatarr.push(...nestead)
//       } else {
//           flatarr.push(ele);
//     };
//   };
//   return flatarr;
// };

// console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, [10, 11]], 12],
// [13, 14, 15]], 3));

//Q => 7
// const obj = {
//   name: "Farhan",
//   address: { city: "sahiwal" },
//   hobbies: { game: "vollyball" },
// };

// function flatObj(data) {
//   let newObj = {};
//   for (const ele in data) {
//     if (typeof data[ele] == "object") {
//       newObj = { ...newObj, ...flatObj(data[ele]) }
//     } else {
//       newObj[ele] = data[ele]
//     }
//   }
//   return newObj
// };

// console.log(flatObj(obj));

//Q => 8
// const obj = [{ name: "Farhan" }, { name: "Farhan" }, { name: "Faisal" }]

// const uniq = [];

// obj.forEach((item) => {
//   if (uniq.some((obj) => obj.name === item.name) === false) {
//     uniq.push(item);
//   };
// });

// console.log(uniq);

//Q => 9
// const arr = [
//   { apple: 2, orange: 1, banana: 3, grapes: 1 },
//   { apple: 2, orange: 1, banana: 3 },
//   { apple: 2, orange: 1, banana: 3, grapes: 2 },
// ];

// let countObj = {};

// const result = arr.forEach((item) => {
//   Object.keys(item).forEach((ele) => {
//     countObj[ele] ? countObj[ele] += item[ele] : countObj[ele] = item[ele]
//   })
// })

// console.log(countObj);

//Q => 10
// const arr = [
//   { apple: 2, orange: 1, banana: 3, grapes: 1 },
//   { apple: 2, orange: 1, banana: 3 },
//   { apple: 2, orange: 1, banana: 3, grapes: 2 },
// ];

// let countObj = {};

// const result = arr.forEach((item) => {
//   Object.keys(item).forEach((ele) => {
//     countObj[ele] ? countObj[ele] += item[ele] : countObj[ele] = item[ele]
//   })
// });

// console.log(countObj);

// console.log(countObj);
// Output => { apple: 6, orange: 3, banana: 9, grapes: 3 };

