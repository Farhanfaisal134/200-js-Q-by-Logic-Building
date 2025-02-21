//Q=> 1
// const input = "This Is My Home";
// function demo(sent) {
//   let obj = {}
//   for (const ele of sent) {
//     obj[ele] = ele.length
//   }
//   return obj
// };

// console.log(demo(input.split(" "))); //Output -> { This: 4, Is: 2, My: 2, Home: 4 };
//Q=> 2
// const arr = [1, 2, 3, 4, 5];

// const result = arr.sort(() => Math.random() - 0.5);
// console.log(result);
//Q=> 3
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
//Q=> 4
// arr descracring
// let [a, b, c] = ["Male", "Female", "Other"];
// [c, a, b] = [c, b, a];
// console.log([c, a, b]); // Output -> ['Other', 'Female', 'Male']
//Q=> 5
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
//Q=> 6
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
//Q=> 7
// obj flat
// const obj = {
//   name: "Farhan",
//   address: { city: "sahiwal" },
//   hobbies: { game: "vollyball" },
// };

// const newObj = {};

// function flatObj(data) {
//   for (const key in data) {
//     if (typeof data[key] == "object") {
//       flatObj(data[key]);
//     } else {
//       newObj[key] = data[key];
//     }
//   }
// }

// flatObj(obj);
// console.log(newObj);
//Q=> 8
// obj
// const obj = [{ name: "Farhan" }, { name: "Farhan" }, { name: "Faisal" }]

// const uniq = [];

// obj.forEach((item) => {
//   if (uniq.some((obj) => obj.name === item.name) === false) {
//     uniq.push(item);
//   };
// });

// console.log(uniq);
//Q=> 9
// let obj = [
//   { Sno: 1, score: 30 },
//   { Sno: 2, score: 30 },
//   { Sno: 1, score: 50 }
// ];

// let newArr = [];

// obj.forEach((item) => {
//   let newObj = newArr.find((ele) => ele.Sno === item.Sno)
//   if (newObj) {
//     newObj = newObj.score += item.score
//   } else {
//     newArr.push(item)
//   }
//   return newArr
// });

// console.log(newArr);
//Q=> 10
// const arr = [
//   { apple: 2, orange: 1, banana: 3, grapes: 1 },
//   { apple: 2, orange: 1, banana: 3 },
//   { apple: 2, orange: 1, banana: 3, grapes: 2 },
// ];

// let countObj = {};

// arr.map((item) => {
//   Object.keys(item).forEach((obj) => {
//     if (countObj[obj]) {
//       countObj[obj] += item[obj]
//     } else {
//       countObj[obj] = item[obj]
//     }
//   });
//   return countObj;
// })
// console.log(countObj); // Output -> { apple: 6, orange: 3, banana: 9, grapes: 3 }

