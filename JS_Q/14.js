//Q-> 1
// function findMissingNumber(arr) {
//   const n = arr.length + 1
//   const numSet = new Set()

//   for (let i = 1; i <= n; i++) {
//     numSet.add(i)
//   }

//   for (const ele of arr) {
//     numSet.delete(ele)
//   };

//   return [...numSet][0];
// };

// console.log(findMissingNumber([1, 2, 4, 5]));
//Q-> 2
// JSON.stringify se arrays ka exact match check karna easy ho jata hai,
// kyunki arrays ka direct comparison(===) kaam nahi karta.
// function isSorted(arr) {
//   const sortedArr = [...arr].sort((a, b) => a - b);

//   return JSON.stringify(arr) === JSON.stringify(sortedArr);
// };

// console.log(isSorted([1, 2, 3, 4, 5]));
// console.log(isSorted([5, 3, 1]));
//Q-> 3 change key as value in object
// const obj = { name: "Farhan", age: 25 };

// function invert(obj) {
//   return Object.fromEntries(
//     Object.entries(obj).map(([key, value]) => [value, key])
//   );
// };

// console.log(invert(obj)); // Output: { Farhan: 'name', 25: 'age' }
// 2nd sul;
// const obj = { name: "Farhan", age: 25 }

// function invert(obj) {
//   let newObj = {};
//   for (const ele in obj) {
//     let value = obj[ele]
//     newObj[value] = ele
//   };
//   return newObj
// }

// console.log(invert(obj));
//Q-> 4 remove falsy value of an obj;
// const obj = { name: "Farhan", isLogedIn: false }

// function removeFalsyVal(o) {
//   return Object.fromEntries(Object.entries(o).filter(([key, value]) => value))
// };

// console.log(removeFalsyVal(obj));
// 2nd sul;
// const obj = { name: "Farhan", isLogedIn: false, lastName: undefined }

// function removeFalsyVal(o) {
//   let newObj = {};
//   for (const ele in o) {
//     if (o[ele]) {
//       newObj[ele] = o[ele]
//     };
//   };
//   return newObj
// };

// console.log(removeFalsyVal(obj));
//Q-> 5
// const obj = { a: 1, b: 2, c: 3 }

// function highValInObj(o) {
//   let maxKey = null; // Sabse badi value ka key yahan store hoga
//   let maxValue = -Infinity; // Initially smallest number, to ensure comparison works

//   for (const key in o) {
//     if (o[key] > maxValue) {
//       maxValue = o[key]; // Sabse badi value ko update karo
//       maxKey = key; // Uski corresponding key ko store karo
//     }
//   }

//   return { key: maxKey, value: maxValue }; // Output as object with key and value
//   return Math.max(...Object.values(o));
// };

// console.log(highValInObj(obj)); // Output: { key: "c", value: 3 }
//Q-> 6
// let arr = [
//   {
//     name: "Farhan",
//     age: 25
//   },
//   {
//     name: "Faisal",
//     age: 26
//   },
// ]

// const removeObjItem = arr.map(({ age, ...rest }) => rest)
// console.log(removeObjItem);
//Q-> 7
// const arr = [{ name: "farhan" }, { name: "abbas" }]

// arr.sort((a, b) => a.name > b.name ? 1 : -1) // -1 swap nhi karna 1 swap karna han
// console.log(arr);
//Q-> 8
// const arr = [
//   {
//     id: 1,
//     name: "Farhan",
//     children: [
//       { id: 2, age: 25, clr: "white" },
//       { id: 3, age: 26, clr: "black" },
//     ],
//   },
// ];

// const updatedArr = arr.map((item) => ({ ...item, children: [{ id: 4, age: 27, clr: "green" }, ...item.children] }))

// console.log(updatedArr);
//Q-> 9
// String.prototype.remove = function () {
//   return this.replaceAll("_", "-")
// };

// const str = "Hallo_World_I_Am_Here"
// console.log(str.remove());
//Q-> 10
// function Student(name) {
//   this.name = name;
//   this.print = function () {
//     return `${this.name}`
//   };
// };

// function Teacher(name, subject) {
//   Student.call(this, name)
//   this.subject = subject
// };

// const teacher1 = new Teacher("Imran", "science")
// console.log(teacher1);