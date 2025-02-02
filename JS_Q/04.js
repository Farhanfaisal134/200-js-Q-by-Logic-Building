//Q => 1 find lowest weight of ball by frontend master
// const balls = [
//   { id: "1", weight: 100, weightUnit: "KG" },
//   { id: "2", weight: 100, weightUnit: "KG" },
//   { id: "3", weight: 100, weightUnit: "KG" },
//   { id: "4", weight: 100, weightUnit: "KG" },
//   { id: "5", weight: 100, weightUnit: "KG" },
//   { id: "6", weight: 100, weightUnit: "KG" },
//   { id: "7", weight: 100, weightUnit: "KG" },
//   { id: "8", weight: 99, weightUnit: "KG" }
// ];

// while (balls?.length) {
//   const ball1 = balls?.shift();
//   const ball2 = balls?.shift();

//   const result = tarajaoo(ball1?.weight, ball2?.weight);
//   if (!result.isSame) {
//     if (result.isALess) {
//       console.log("Small Ball Found:", ball1);
//     } else {
//       console.log("Small Ball Found:", ball2);
//     };
//     break;
//   };
// };

// function tarajaoo(a, b) {
//   return { isALess: a < b, isBLess: b < a, isSame: a == b };
// };
// 2nd Sul
// const result = balls.reduce((prev, curn) => {
//   return prev = prev.weightUnit < curn.weightUnit ? prev : curn
// })

// console.log(result);
//Q => 2 Name first letter convert to upperCase
// let students = [
//   { name: "Piyush", rollNumber: 31, marks: 80 },
//   { name: "Jenny", rollNumber: 15, marks: 69 },
//   { name: "Kaushal", rollNumber: 16, marks: 35 },
//   { name: "Dilpreet", rollNumber: 7, marks: 55 }
// ];

// const res = students.map((item) => {
//   return {
//     ...item,
//     name: `${item.name[0].toUpperCase()}${item.name.slice(1)}`
//   }
// })
// console.log(res);
//Q => 3 Marks more than 60 and rol no more than 15
// const res = students.filter((item) => {
//   if (item.marks > 60 && item.rollNumber > 15) {
//     return item
//   };
// });
// console.log(res);
//Q => 4 Sum of all marks of students
// const res = students.reduce((acc, cur) => acc += cur.marks, 0)
// console.log(res);
//Q => 5 Return total marks for students with marks greater than 60
//after 20 marks have been added to those who scored less than 60;
// const res = students.map((item) => {
//   return item.marks < 60 ? { ...item, marks: item.marks + 20 } : item;
// }).filter((item) => item.marks > 60).reduce((prev, curn) => prev + curn.marks, 0)
// console.log(res);
//Q => 6 Convert arr to obj
// const arr = [1, 2, 3];
// console.log(new Map(Object.entries(arr)));
// console.log(Object.fromEntries(Object.entries(arr)));
//Q => 7 Convert obj to arr
// const obj = {
//   name: "Alice",
//   age: 25,
//   city: "New York"
// };
// const entries = Object.entries(obj);
// console.log(entries);
//Q => 8
// const findLongestWord = (str) => {
//   if (str.trim().length === 0) {
//     return false;
//   }

//   const words = str.split(" ");
//   const result = words.sort((a, b) => b.length - a.length)
//   return result[0]
// }

// console.log(
//   findLongestWord(
//     "i am a programmer"
//   )
// );
//Q => 9 Hash Tag Generator
// const generateHash = (str) => {
//   const result = str.split(" ").map((item) => item[0].toUpperCase() + item.slice(1)).join('')
//   return `#${result}`
// };

// console.log(generateHash("my name is thapa technical"));
//"#MyNameIsThapaTechnical"
//Q => 10
// const checkTriangleType = (a, b, c) => {
//   if (a === b && b === c) return "equilateral";
//   if (a === b || b === c || a === c) return "isosceles";
//   return "scalene";
// };

// console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
// console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
// console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"

