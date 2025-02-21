// Q => 1
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

// Q => 2 Arr aur arr1 ko alternate order me merge
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

// Q => 3 whic ele multi time apperence
// let str = "apple banana apple banana banana apple apple cherry";
// let newObj = {};

// const result = str.split(" ").forEach((item)=>{
//    if(!newObj[item]){
//        newObj[item] = (newObj[item] || 0) + 1
//    }else {
//        newObj[item] += 1
//    };
// });

// console.log(Object.keys(newObj).sort((a,b) => newObj[b] - newObj[a])[0]) // O/P apple

// Q => 4 find biggest name on an array of Object
// let arr = [
//   {id: 1, name: "Mahesh", department: "HR" },
//   {id: 2, name: "Radha Krishna", department: "IT" },
//   {id: 3, name: "Maruthi", department: "Sales" }
//   ];
  
//   let initialName = arr[0];
//   let result = arr.find((item) => {
//       if(item.name.length > initialName.name.length){
//           return item
//       };
//   });
  
//   console.log(result); // O/P { id: 2, name: 'Radha Krishna', department: 'IT' };

// Q => 5
// const arr = [1, 2, 3];
// arr[5] = 6;
// console. log(arr); // O/P => 6

// Q => 6 Manually remove special characters (without .replace()).
// Manually reverse the string (without .reverse()).
// Proper case conversion (without .toLowerCase() directly on array).
// function isPalindrome(str) {
//   let cleanedStr = "";
  
//   // 1. Convert to lowercase & Remove non-alphanumeric manually
//   for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (
//           (char >= 'a' && char <= 'z') || // Small letters
//           (char >= 'A' && char <= 'Z') || // Capital letters
//           (char >= '0' && char <= '9')    // Numbers
//       ) {
//           cleanedStr += char.toLowerCase(); 
//       }
//   }

//   // 2. Reverse manually
//   let reversedStr = "";
//   for (let i = cleanedStr.length - 1; i >= 0; i--) {
//       reversedStr += cleanedStr[i];
//   }

//   // 3. Compare original vs reversed
//   return cleanedStr === reversedStr;
// }

// console.log(isPalindrome("A man, a plan, a canal, Panama!")); // ✅ true
// console.log(isPalindrome("Hello World!")); // ❌ false

// Q => 7
// function pairsFind(array) {
//   let newArr = [];
  
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === 0) { 
//         newArr.push([array[i], array[j]]);
//       }
//     }
//   }
  
//   return newArr;
// }

// let arr = [4, -3, 2, -4, 3, 1, 2, 5, -4]; 
// console.log(pairsFind(arr)); 
// Output: [[4, -4], [3, -3]]

// Q => 8
// function findLongestUniqueWord(str) {
//   // Step 1: Split string into words
//   const words = str.split(" ");
//   // Step 2: Function to check if word has unique characters
//   function isUnique(word) {
//       let seen = new Set();
//       for (const char of word) {
//           if (seen.has(char)) {
//               // Duplicate found, return false
//               return false;
//           }
//           seen.add(char);
//       }
//       return true; // All characters are unique
//   }
//   // Step 3: Find longest word with unique characters
//   let longestWord = "";
//   for (let word of words) {
//       if (isUnique(word) && word.length > longestWord.length) {
//           longestWord = word;
//       }
//   }
//   return longestWord;
// }

// // Test the function
// console.log(findLongestUniqueWord("abd addsa as fas jdle as"));  
// Q => 9
// Q => 10