//Q-> 1
// Write a function that takes an object as argument
// In some cases the object contains other objects with some deeply nested properties
// Return the property 'b' of object 'a' inside the original object if it exists
// If not, return undefined;

// function myFunction(obj) {
//   return obj?.a?.b;
// }

// // Example usage:
// console.log(myFunction({ a: { b: 42 } })); // 42
//Q-> 2
// function getTotalPrice(groceries) {
//   let total = 0;

//   for (const item of groceries) {
//     const itemPrice = item.quantity * item.price;
//     total += itemPrice;
//   }
//   return total;
// };

// console.log(getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]));
//Q-> 3
// function sevenBoom(arr) {
//   for (const element of arr) {
//     if (element.toString().includes("5")) {
//       return "Boom!";
//     };
//   };
// };

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 0]));
//Q-> 4
// function textToNumberBinary(str) {
//   const words = str
//     .split(" ")
//     .filter(
//       (item) => item.toLowerCase() === "zero" || item.toLowerCase() === "one"
//     );
//   let binaryString = words
//     .map((word) => (word.toLowerCase() === "one" ? "1" : "0"))
//     .join("");1

//   if (binaryString.length % 8 !== 0) {
//     binaryString = binaryString.slice(0, 0);
//   }
//   return binaryString;
// }

// console.log(textToNumberBinary("Zero one zero ONE zero one zero one"));
//Q-> 5
// function stringCode(sentence) {
//   function isConsonant(char) {
//     const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
//     return consonants.includes(char);
//   };

//   function countConsonantsAndVowels(word) {
//     let consonants = 0;
//     let vowels = 0;

//     for (const char of word) {
//       if (isConsonant(char)) {
//         consonants++;
//       } else if ("aeiouAEIOU".includes(char)) {
//         vowels++;
//       };
//     };
//     return `${consonants} ${vowels}`
//   };

//   const words = sentence.split(' ');
//   const consonantCount = words.map(word => countConsonantsAndVowels(word));
//   return consonantCount;
// };

// console.log(stringCode("Happy Birthday To Me")); // ['4 1', '6 2', '1 1', '1 1']
//Q-> 6
// function findLongWord(params) {
//   const words = sentence.split(" ")
//   let longestWord = '';

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     };
//   };
//   return longestWord;
// };

// console.log(findLongWord("i Love Coding In JavaScript"));
//Q-> 7
// function palidrome(word) {
//   const reverseStr = word.split("").reverse().join("") === word
//   return reverseStr
// }

// console.log(palidrome("racecar"));
//Q-> 8
// function anagrams(par1, par2) {
//   return par1.split("").sort().join("") === par2.split("").sort().join("")
// }

// console.log(anagrams("listen", "slient"));
//Q-> 9 Chek No palidrom Or Not;
// var isPalindrome = function (x) {
//   return x < 0 ? false : x === +x.toString().split("").reverse().join("");
// };

// const res = isPalindrome(10);
// console.log(res);
// 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121"
//Q-> 10
// function removeDuplicateEle(arr) {
//   let uniEle = []
//   for (const item of arr) {
//     if (uniEle.indexOf(item) === -1) {
//       uniEle.push(item)
//     };
//   };
//   return uniEle;
// }

// console.log(removeDuplicateEle([1, 2, 2, 3, 4, 4]));
