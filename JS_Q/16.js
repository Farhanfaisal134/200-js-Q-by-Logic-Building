// Q => 1 i ka bad space love ka bad space
// let sent="ilovejs"

// let sent = "ilovejs";
// let modifiedSent = sent.replace("i", "i ").replace("love", "love ");
// console.log(modifiedSent);

// Q => 2
// let arr = [
//   { id: 1, value: 20 },
//   { id: 2, value: 25 },
//   { id: 3, value: 2 },
//   { id: 1, value: 4 },
//   { id: 2, value: 6 }
// ];

// let result = arr.reduce((acc, { id, value }) => {
//   acc[id] = acc[id] || { id, value: 0 };
//   acc[id].value += value;
//   return acc;
// }, {});


// console.log(Object.values(result));

// Conclusion
// Tumhara original code sum kar raha hai, overwrite nahi kar raha.
// Overwrite tab hoga jab acc[id] pe direct { id, value } assign kar diya jaye.
// acc[id] = acc[id] || { id, value: 0 }; is wajah se purana value save ho raha hai.

// Q => 3
// Anagrams wo words hote hain jo same letters ko different order me rakhte hain.
// Is problem me hume anagrams ko ek group me collect karna hai.

// function groupAnagrams(words) {
//   let map = {};

//   for (let word of words) {
//     let sorted = word.split('').sort().join(''); // Sort word
//     map[sorted] = map[sorted] || []; // If not exist, create array
//     map[sorted].push(word); // Push word in group
//   };

//   return Object.values(map); // Return grouped values
//   return map
// };

// let words = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(groupAnagrams(words));

// Q => 4
// function flattenObject(obj, prefix = "") {
//   let result = {};

//   for (let [key, value] of Object.entries(obj)) {
//     let newKey = prefix ? `${prefix}.${key}` : key;

//     if (typeof value === "object" && value !== null) {
//       Object.assign(result, flattenObject(value, newKey));
//     } else {
//       result[newKey] = value;
//     };
//   };

//   return result;
// };

// let obj = {
//   name: "lavi",
//   id: 12,
//   address: {
//     city: "Delhi",
//     location: { pin: 123, street: "mayurvihar" },
//   },
// };

// console.log(flattenObject(obj));
// O/P {
//   name: "lavi",
//   id: 12,
//   "address.city": "Delhi",
//   "address.location.pin": 123,
//   "address.location.street": "mayurvihar"
// }

// Q => 5
// function flatArr(array) {
//   let newArr = [];
//   for (const ele of array) {
//     if (Array.isArray(ele)) {
//       newArr = newArr.concat(flatArr(ele));  // ✅ Correct way
//     } else {
//       newArr.push(ele);
//     }
//   }
//   return newArr;
// };

// console.log(flatArr([[1, 2], [3, 4, [5, 6]], [7, [8, 9]]]));

// Q => 6 Str Are Uniq Or Not
// let str = "abcd"
// let seen = new Set();
// let uniq = true;
// for (const ele of str) {
//   if (seen.has(ele)) {
//     uniq = false;
//     break
//   };
//   seen.add(ele)
// };

// console.log(uniq);

// Q => 8 find Uniq obj
// let arr = [
//   { name: "sai" },
//   { name: "Nang" },
//   { name: "sai" },
//   { name: "Nang" },
//   { name: "111111" }
// ];

// function getUniqueObjects(arr) {
//   let uniqueSet = new Set();
//   let uniqueArr = [];

//   arr.forEach(obj => {
//     if (!uniqueSet.has(obj.name)) { // Agar name pehle nahi aya
//       uniqueSet.add(obj.name); // Set me add karo
//       uniqueArr.push(obj); // Unique array me bhi add karo
//     }
//   });

//   return uniqueArr;
// };

// console.log(getUniqueObjects(arr));

// Q => 9 Find the max count of consecutive 1’s in an array ?
// let arr = [1, 2, 3, 1, 2, 1, 1, 1]; // Example with multiple sequences of 1s

// function maxOneCount(array) {
//     let maxCount = 0;
//     let currentCount = 0;

//     for (let num of array) {
//         if (num === 1) {
//             currentCount++;
//         } else {
//             maxCount = Math.max(maxCount, currentCount); // Update maxCount *before* resetting
//             currentCount = 0;
//         }
//     }

//     maxCount = Math.max(maxCount, currentCount); // Check one last time after the loop (in case the last sequence is all 1s)
//     return maxCount;
// };

// console.log(maxOneCount(arr)); // Output: 3 (Correct)

// Q => 10 Create a function which will accepts two arrays arr1 and arr2.
// The function should return true if every value in arr1 has its corresponding value squared in array2.
// The frequency of values must be same.

// function compareArrays(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false; // If lengths are different, can't be the same
//   }

//   const squaredArr1 = arr1.map(num => num * num).sort(); // Square arr1 elements and sort
//   const sortedArr2 = arr2.sort(); // Sort arr2

//   for (let i = 0; i < arr1.length; i++) {
//     if (squaredArr1[i] !== sortedArr2[i]) {
//       return false; // If any values don't match, return false
//     }
//   }

//   return true; // If all values match, return true
// };

// // Example usage:
// console.log(compareArrays([1, 2, 3], [1, 4, 9])); // true