// function stringToObject(path, value) {
//   const keys = path.split('.');
//   let obj = {};
//   let current = obj;

//   keys.forEach((key, index) => {
//     current[key] = index === keys.length - 1 ? value : (current[key] || {});
//     current = current[key];
//   });

//   return obj;
// };

// console.log(stringToObject("a.b.c", "someValue"));

// Q arr aur arr1 ko alternate order me merge
// const arr = [1, 3, 5, 6, 7];
// const arr1 = [2, 4];

// const newArr = [];

// let i = 0, j = 0;

// // Jab tak dono arrays me elements hain
// while (i < arr.length || j < arr1.length) {
//   if (i < arr.length) newArr.push(arr[i++]); // Pehle arr ka element
//   if (j < arr1.length) newArr.push(arr1[j++]); // Phir arr1 ka element
// }

// console.log(newArr);