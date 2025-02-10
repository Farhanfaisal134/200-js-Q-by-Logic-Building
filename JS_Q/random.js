// async function demo() {
//   await new Promise((res, rej) => setTimeout(res, 2000))
//   console.log("hallo");
// };

// demo();

// let obj = {
//   name: 'Farhan'
// };

// let obj2 = obj
// obj2.name = "Faisal"
// console.log(obj);
// console.log(obj2);

// Q
// async function example() {
//   return "Hello";  // Yeh value Promise ke andar wrap ho jayegi
// }

// console.log(example()); // Promise { 'Hello' }
// Q
// var a = 200
// {
//   var a = 400
// }

// let b = a;

// {
//   let b = -400
// }

// console.log(b);
// Q
// "use strict";

// let a = 100; // 'let', 'var', ya 'const' ka use zaroori hai
// console.log(a);

// let obj = { name: "Farhan" }
// Q
// Call Stack: Synchronous code execute karta hai.
// Web APIs: Asynchronous tasks background me handle karta hai.
// Callback Queue: Jab async task complete hota hai toh waha bheja jata hai.
// Event Loop: Ye ensure karta hai ke Call Stack me async callbacks tabhi aayein jab wo empty ho.

// Q
// console.log(false == ![]);
// console.log(false == []);
// let arr = [1, 2, 3]
// let str = "1,2,3,4"
// console.log(arr == str);
// Q
// let arr = [1, 2, 3]

// arr.length = 0
// console.log(arr);

// Q
// let arr = [[1, 2], [3, 4], [5, 6]];

// function margeArr(array) {
//   return array.reduce((prev, curn) => prev.concat(curn), [])
// }

// console.log(margeArr(arr));
// Q
// let arr = [1, 2, 3, 1, 2]

// function duplicate(array) {
//   let newArr = new Set();

//   const dup = array.filter((item) => {
//     if (newArr.has(item)) {
//       return true
//     } else {
//       newArr.add(item)
//       return false
//     }
//   });
//   return dup
// };

// console.log(duplicate(arr));
// Q
// let str = "MyNameIsFarhan";

// let result = "";
// for (let i = 0; i < str.length; i++) {
//   let char = str[i];

//   // Agar character uppercase hai (ASCII code 65-90)
//   if (i !== 0 && char === char.toUpperCase()) {
//     result += " "; // Space add karo
//   }

//   result += char; // Character ko result me add karo
// };

// console.log(result); // "My Name Is Farhan"
// Q
// let age = 0;
// console.log(age ?? 18); // 0 (kyunki 0 ek valid value hai)
// ?? sirf null ya undefined pe default value deta hai, 0, "", false ko consider nahi karta.
// Q
// let str = "Farhan"
// let str1 = "Far"
// let result = ""

// for (let i = 0; i < str1.length; i++) {
//   result += str[i] + str1[i]
// };

// result += str.slice(str1.length)
// console.log(result);
// Q

// let obj = { name: "Farhan" }
// delete obj.name
// console.log(obj.name);
// Q

// console.log("my marks is", marks);
// let marks = 400
// console.log("my marks is", marks);

// Q

// function demo(a = 10, b = 20) {
//   return a + b
// };

// console.log(demo(undefined, 20));
// ➡️ undefined hone par default value use hoti hai
// ➡️ null ek valid value hai, isliye default value replace nahi hoti
// function demo(a = 10, b = 20) {
//   return a + b
// };

// console.log(demo(null, 20));

// Q

// console.log(100 + undefined);
// Q
// if ([]) {
//   console.log("if");

// } else {
//   console.log("else");
// }

// console.log("" > -1);
// console.log("" == true);
// console.log("grater" > "elephant");
// console.log([] + []);

// Q
// let a = {}
// let b = { key: "b" }
// let c = { key: "b" }

// a[b] = 200;
// a[c] = 500;
// console.log(a);

// Q ^ Upper Q Solution
// let a = new Map();
// let b = { key: "b" };
// a.set(b, 200);
// console.log(a.get(b)); // Output: 200

// Q
// a = 10;
// let a;
// console.log(a);
// Q
// let arr = [1, 2, 3]

// const res = arr.reduce((prev, curn) => prev < curn ? prev : curn)
// console.log(res);
// Q
// console.log(true < 6);

// Q
// function demo(params) {
//   return function (params) {
//     console.log("Farhan");
//   };
// };

// // Function kuch return nahi karega to undefined milega.
// console.log(demo()());

// Q

// let arr = [1, 2, 3, 4]
// arr.splice(0, 4)
// console.log(arr);

// Q
// function abc() {
//   console.log(abc.xyz);
// };

// abc()
// abc.xyz = 400
// abc.xyz = 200
// abc()
// Functions in JavaScript are also objects, so you can dynamically add properties to them.
// Initially, abc.xyz is undefined because it hasn't been set yet.
// After assigning abc.xyz = 400 and then reassigning it to 200, the value changes as expected.

// Q
// const num = [1, 2, 3]
// num[100] = 100
// console.log(num);

// Q
// console.log(typeof typeof 100);
// Conclusion:
// typeof operator pehli baar "number" return karega, phir jab us value par typeof apply kiya jata hai,
// to wo "string" return karega, kyunki "number" ek string hai.

// Q
// console.log(parseInt("10+2"));
// console.log(parseInt("10FM"));
// console.log(parseInt("FM10"));

// Conclusion:
// parseInt sirf string ke starting mein jo number hota hai, usse hi convert karta hai.
// Agar string mein pehla part number na ho, to NaN return hota hai.

// Q
// console.log([1, 2].map((num) => {
//   if (num > 0) return;
//   return num * 2
// }));

// Iska output[undefined, undefined] hoga, kyunki dono elements positive hone ki wajah se map()
// function ke andar koi meaningful value return nahi hui.

// Q
// function abc(a, b) {
//   "use strict"
//   a = 100
//   b = 200
//   return arguments[0], arguments[1]
//   console.log(a + b);
// };

// console.log(abc(300, 400));

// ✅ Strict Mode ("use strict") arguments aur parameters ko separate kar deta hai.
// ✅ Comma Operator (return a, b) sirf last value return karta hai.
// ✅ arguments[0] aur arguments[1] original values (300, 400) hi return hote hain.
// ✅ Is wajah se output 400 aata hai. 🚀

// Q
// function greet(name) { // "name" is a parameter
//   console.log("Hello, " + name);
// };

// greet("Farhan"); // "Farhan" is an argument

// Q
// Mutable array methods woh hote hain jo original array ko modify karte hain.
// splice push pop shift unshift

// Q
// var a = 10
// console.log(a);

// function a() {
//   console.log(a);
// };

// console.log(a);
// Q
// console.log(Array(1, 2)); // OutPut [ 1, 2 ]
// console.log(Array(2)); // Output [ < 2 empty items > ]
// Q
// console.log(JSON.stringify(NaN) === JSON.stringify(NaN));

// JSON.stringify(NaN) always returns "null".
// Both values("null") are strictly equal, so the output is true.

// Q
// console.log(NaN == true);
// console.log(NaN == false);

// NaN ko kisi bhi value ke saath compare karte hain(chahe wo true, false, ya NaN itself ho), wo kabhi bhi equal nahi hota.

// Q falsy value in js

// false – Boolean false value.
// 0 – Zero ka numeric value.
// -0 – Negative zero ka numeric value.
// "" (empty string) – Khali string.
// null – Null value, jo kisi bhi cheez ki absence ko represent karta hai.
// undefined – Jab variable ko define nahi kiya gaya hota.
// NaN – "Not a Number" (NaN) ko represent karta hai, jo kisi invalid number operation ka result hota hai.

// Q
// function abc(a) {
//   return function (b) {
//     if (!b) {
//       return a
//     };
//     return abc(a + b);
//   };
// };

// console.log(abc(10)(20)());

// Q
// let arr = [1, 2, 3]
// console.log(arr.map((item) => item > 2)); // Output => [ false, false, true ]

// Q

// function sum(a = 100, b = 200) {
//   console.log(a + b);
// };

// function sum1(a = 300, b = 400) {
//   console.log(a + b);
// };

// sum(null, 100) // null ak value han isliya ya num ma convert ho ga aur 0 ho ga
// sum1(undefined, 200) //

// Q
// console.log(null + 2);
// console.log(undefined + 2);

// Q
// let arr = [1, 2, 3, 4, 5]
// arr.forEach(num => {
//   console.log(num);
//   if (num === 3) break
// });

// JavaScript mein forEach loop ke andar break statement use nahi kiya ja sakta hai.
// Agar aap loop ko kisi specific condition par break karna chahte hain,
// to aapko for loop ya for...of loop use karna hoga.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (arr[i] === 3) {
//     break; // Loop ko yahan break karega
//   }
// }

// Bilkul! continue statement bhi JavaScript loops (for, for...of, aur while)
// mein use kiya ja sakta hai.
// continue ka use karke aap current iteration ko skip kar sakte hain aur loop ko agle iteration par le ja sakte hain.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 3) {
//     continue; // 3 ko skip karega
//   }
//   console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];

// for (let num of arr) {
//   if (num === 3) {
//     continue; // 3 ko skip karega
//   }
//   if (num === 4) {
//     break; // Loop ko yahan rok dega
//   }
//   console.log(num);
// }


// Q
// function demo(a, ...bc, c) {
//   console.log(...b);
// };

// demo(1, 2, 3, 3); // SyntaxError: Rest parameter must be last formal parameter
// Q
// console.log(+false); // 0
// console.log(!"Farhan"); // false

// Q
// let a = 10;
// let b = new Number(10)
// let c = 10

// console.log(a == b);
// console.log(a === b);

// Q
// "use strict"
// {
//   function demo(params) {
//     console.log("hi");
//   }
// }

// demo()
// Function hoisting ki wajah se demo() globally accessible hai, isliye undefined nahi aaya.
// Agar "use strict" mode enable hota to function {} block ke andar hi limited rehta aur ReferenceError aata.
// Agar aap {} ke andar let ya const ke saath function ko declare karte (const demo = function() {...}),
// to function block ke bahar accessible nahi hota.
// Agar aap chahte hain ke function block ke bahar accessible na ho, to "use strict"
// mode enable karein ya function ko const ya let ke saath declare karein.

// Q
// var a = 10
// let b = 20
// console.log(window.a, window.b);

// ✅ window.a = 10 because var attaches to window.
// ❌ window.b = undefined because let does not attach to window.

// Q
// const obj = {}
// const obj1 = { name: "Farhan" }
// const obj2 = { name: "Faisal" }

// obj[obj1] = {
//   name: "Faisal"
// };

// obj[obj2] = {
//   name: "Farree"
// };

// console.log(obj[obj1]);
// console.log(obj);

// Q
// let arr = [1, 2, 3][1, 2];
// console.log(arr);

// Comma Operator sirf last value return karta hai.
// [1, 2] ka output 2 hai, is wajah se[1, 2, 3][2] likha gaya.
// Index 2 par value 3 hai, isliye output 3 hai! 🚀

// Q
// const obj = {
//   1: "Farhan",
//   a: "Ayesha",
//   "2": "Nedab",
//   [a]: "Nakash", // Yahan [a] computed property hai.
//   [1]: "Faisal",
//   "b": "Fara"
// };

// console.log(obj);
// Choutha Key-Value Pair ([1]: "Faisal"):

// Yahan 1 ko string me convert kiya gaya hai aur yeh pehle wale key "1" ko overwrite kar deta hai.
// Toh yeh pair ho jata hai: "1": "Faisal"

// Q
// "use strict"
// let a = 10
// let b = 20
// c = 30
// console.log(a, b, c);

// Q

// function fn(params) {
//   return 100;
// }
// var fn; // Yeh kuch change nahi karta, kyunki `fn` already ek function hai
// console.log(fn); // Function print hoga

// Function declarations aur variable declarations dono hoisted hote hain.
// Function declarations ko variable declarations se zyada priority milti hai.
// Agar ek function aur variable ka naam same hai, to function declaration win karta hai.

// Q
// console.log(100 / 0); // Infinity

// Q
// console.log(true + true);   // 1 + 1 = 2
// console.log(true * false);  // 1 * 0 = 0
// console.log(false - true);  // 0 - 1 = -1
// console.log(true / false);  // 1 / 0 = Infinity
// Conclusion: JavaScript automatically boolean values ko numbers mai convert kar deta.
// hai jab koi mathematical operation hota hai! 😃

// Q
// console.log(true + "abc"); // Output "trueabc"
// Agar dono numbers ho, to mathematical operation hota hai.
// Agar koi ek operand string ho, to JavaScript concatenate kar deta hai.
// Mathematical operations(-, *, /) hamesha numbers ko convert karte hain. 🚀

// Q
// console.log(NaN == NaN);
// console.log(NaN === NaN);

// Kyun false aaya?
// JavaScript mai NaN (Not-a-Number) special case hai.
// NaN kabhi kisi bhi value, hatta ke apne aap (NaN) ke bhi equal nahi hota.
// Is wajah se NaN == NaN aur NaN === NaN dono false return karte hain.

// Q
// console.log(+null); // 0

// Q
// let count = 0;
// let arr = [0, 1, 2, 3]
// arr.forEach((num) => { // ✅ JavaScript mein if (num) ka mtlb hai ke num truthy hai ya falsy. 0=false
//   if (num) {
//     count += 1
//   }
// });

// console.log(count);

// Q
// let arr = [1, 2, 3]
// arr.splice(0, 1);
// arr.unshift(0);
// console.log(arr);

// Js Works sycronsly

// Q

// var a = 1 + abc;
// abc = 100;
// console.log(a);

// Q
// let obj = {
//   name: 'Farhan'
// };

// let arr = [1, 2, 3, 4]
// console.log(delete arr);

// console.log(delete obj);

// Variables (let, const, var) delete nahi hote, is liye delete arr aur delete obj false return karega.
// delete JavaScript Mein Kya Karta Hai ?
// delete objects ke properties ko remove karne ke liye hota hai, variables ya functions ko nahi delete kar sakta.
// Agar delete kisi variable ya array pe directly use karein, to wo false return karta hai.
// Ye sirf object properties ko remove karne ke liye kaam karta hai.

// Agar variable window ka property hota, tab delete ho sakta:

// Example
// window.x = 10;
// console.log(delete window.x); // ✅ Output: true

// Q
// let arr = [];
// let arr1 = [];

// console.log(arr == arr1);  // ❌ false
// console.log(arr === arr1); // ❌ false

// Arrays aur objects reference type hote hain, aur == aur === unka reference compare karte hain, values nahi.
// Har new [] ek naya memory reference hota hai, is liye arr !== arr1.
// Agar ek hi reference assign karein(let arr1 = arr;), tabhi true milega.

// let arr = [];
// let arr1 = arr; // ✅ Dono ka reference same hai

// console.log(arr == arr1);  // ✅ true
// console.log(arr === arr1); // ✅ true

// Q
// Symbol	Meaning	Example ("express": "4.17.1")
// ^ (caret)	Major version lock (minor updates allowed)	✅ 4.17.x (e.g., 4.18.0 allowed, but not 5.0.0)
// ~ (tilde)	Minor version lock (patch updates allowed)	✅ 4.17.x (e.g., 4.17.2 allowed, but not 4.18.0)

// Q
// const x = (1, 2, 3)
// console.log("x=", x);
// Comma operator always returns the value of the last expression in the sequence.

// Q
// function abc(params) { };

// var abc;
// console.log(abc); // function abc(params) { };

// Q
// let n = 10
// console.log(n.toString());
// console.log(typeof n);

// Summary:
// n.toString() number ko string mein convert karta hai, lekin n ki original value number hi rehti hai.
// Agar aapko typeof n ka result string chahiye, toh n ko string value ke saath reassign karna hoga.

// let n = 10;
// n = n.toString();  // n ko ab string banaya gaya hai
// console.log(typeof n);  // Ye "string" print karega

// Q
// let n = 10;
// console.log(n.toString(8));
// In JavaScript, using toString(base), we can convert numbers to any base (like binary, octal, hexadecimal, etc.).

// Q
// Decimal 15 ko binary, octal, aur hexadecimal mein convert karein.
// let n = 15;
// console.log(n.toString(2));  // Binary: "1111"
// console.log(n.toString(8));  // Octal: "17"
// console.log(n.toString(16)); // Hexadecimal: "f"

// Binary 1111 ko decimal mein convert karein.
// console.log(parseInt("1111", 2)); // Output: 15

// Q

// function demo() {
//   console.log("hi");
// }

// console.log(demo.name); // Output function name

// Q

// let a = 12
// var b = 12
// console.log(window.a);
// console.log(window.b);

// Q
// function demo(a, b) {
//   "use strict"
//   var a = 100
//   var b = 200
//   return arguments[0] + arguments[1]
//   // return arguments[0], arguments[1]
// };

// console.log(demo(300, 400));

// Summary:
// Strict mode mein variables ko re-declare karna galat hai, magar is case mein aapka function valid hai.
// arguments[0] aur arguments[1] ko use karte hue actual function parameters ko access kiya gaya hai, jinka result 700 hai.

// Q

// "use strict"

// {
//   function abc(params) {
//     console.log("hi");
//   }
// }

// abc();

// With "use strict": Function abc() ko block ke bahar call karne pe ReferenceError aata hai,
// kyunki strict mode mein block scope mein declare kiya gaya function hoisted nahi hota.
// Without "use strict": Function abc() ko block ke bahar call karne par function hoisted ho jaata hai, aur "hi" print hota hai.

// Q

// function abc() {
//   a = 10
//   console.log(a);
// };

// abc();
// var a; // Why undefined doesn't show:
// Because a = 10; inside the function makes the global a equal to 10, and it is logged as 10 instead of undefined.
// let a; // ReferenceError: Cannot access 'a' before initialization

// Key Points in "use strict":
// Implicit Variable Declaration:
// Agar aap variable ko without let, const, or var declare karte hain, toh strict mode mein aapko error milega.
// Aapne function abc() ke andar a = 10; likha hai, lekin a ko declare nahi kiya (let a, var a, ya const a use nahi kiya).
// Strict mode mein yeh allowed nahi hai, kyunki a ka declaration missing hai. Isliye ReferenceError milega.

// Q
// new xyz();

// function abc(params) {
//   console.log("hi");
// };

// class xyz { };

// Output ReferenceError: Cannot access 'xyz' before initialization

// const result = 10 + isNaN(2) ? 100 : 200
// console.log(result);

// Q
// console.log(10 + isNaN(2));
// console.log(10 == 10 == 10);
// console.log(10 == 10 == 10 == 0);

// Q
// console.log(parseInt("")); // NaN
// console.log(Number(""));

// parseInt("") returns NaN because the empty string cannot be parsed into a number.
// Number("") returns 0 because an empty string is treated as a valid "empty" value, which converts to 0 in JavaScript.


// console.log(Number(true)); 1
// console.log(parseInt(true)); // NaN
// console.log([] == ""); // true

// Q
// function abc(a, b, c = 0, d) { }

// console.log(abc.length); // Output 2 q kah default sa phla wala params count ho ga
// JavaScript mein function.length ka matlab hai function ke required parameters ki count, jo default value nahi rakhte.

// function abc(a, b, ...c) { }

// console.log(abc.length); // Output 2
// Q
// function demo(data) {
//   if (data === { age: 18 }) {
//     console.log("A");
//   } else if (data == { age: 18 }) {
//     console.log("B");
//   } else {
//     console.log("c");
//   };
// };

// console.log(demo({ age: 18 }));

// Why Condition 1 (===) is False?
// { age: 18 } ek object hai.
// JavaScript me objects ka comparison reference - based hota hai, value - based nahi.
// { age: 18 } ek naya object hai, aur data bhi ek naya object hai.
// Dono ka memory reference different hai, is wajah se false return hoga.

// Why Condition 2 (==) is False?
// Loose equality (==) bhi objects ke liye reference hi check karta hai.
// Sirf primitive values (number, string, boolean) ke liye type conversion hota hai.
// Objects me == aur === ka behavior same hota hai.

// Q

// function abc() {
//   console.log(abc.timeout);
// };

// abc()
// abc.timeout = 200

// abc.timeout = 300
// abc();

// Summary
// Pehli dafa abc.timeout exist nahi karta, is wajah se undefined aata hai.
// Baad me abc.timeout = 300 set hota hai, is wajah se doosri dafa 300 print hota hai.

// Q
// console.log(typeof NaN); // number

// Q
// console.log("4" + 3 * 2); // Output 46

// Multiplication (3 * 2)
// JavaScript operator precedence follow karta hai.
// * (multiplication) ki precedence + (string concatenation) se zyada hoti hai.
// Isliye 3 * 2 pehle evaluate hoga, jo 6 dega

// Q
// console.log(a);
// console.log(b);

// var b = a = 10

// Conclusion
// Hoisting ki wajah se b pehle declare ho jata hai(undefined se).
// a bina var, let, const ke likha hai, to wo directly global variable banne ki koshish karta hai,
// lekin pehle access karne par ReferenceError aata hai.

// Q
// console.log(abc); // ❌ ReferenceError: abc is not defined
// abc = "hello"

// Conclusion
// 👉 Agar console.log(abc); pehle likh diya aur var, let, ya const use nahi kiya, to hoisting nahi hogi aur error aa jayega.
// ✔ Agar var use karo, to hoisting ho gi, lekin value undefined milegi.
// ✔ Agar let ya const use karo, to Temporal Dead Zone ki wajah se error ayega.

// Agar koi aur confusion hai to batao! 🚀

// Q
// let arr = [3, 20, 1]

// arr.sort()
// console.log(arr);

// sort() default me elements ko strings me convert karta hai aur fir unko ASCII character ke basis pe compare karta hai:

// Q i ka bad space love ka bad space
// let sent="ilovejs"

// let sent = "ilovejs";
// let modifiedSent = sent.replace("i", "i ").replace("love", "love ");
// console.log(modifiedSent);

// Q
// let arr = [1, 2]
// console.log([].push(...arr));
// [].push(...arr) ka return value push hone ke baad array.length return karta hai, na ke naye array.

// Q
// const obj = {
//   name: "Farhan",
//   age: 25
// };

// Object.defineProperty(obj, "name", {
//   writable: false, // Property Not Update
//   enumerable, // Property Not Itarate
//   configurable // Property Not Del
// });

// Q
// let a = 20
// let b = ++a
// console.log(a + b); // 42

// Q
// let a = "a" + 1 // a1
// let b = "abc" / 2 // Nan
// console.log(a == b) // false

// Q
// function abc(obj) {
//   if (obj == { age: 28 }) {
//     console.log("hi")
//   } else {
//     console.log("by")
//   }
// }

// abc({ age: 28 }); // O/p / "by"
// JavaScript mein jab aap do objects ({} ya []) ko == (ya ===) se compare karte hain,
// toh woh reference compare karta hai, value compare nahi karta.

// Q
// var a={};
// var b={key: 'b'};
// var c={key: 'c'};
// a[b]=600;
// b[c]=700;
// console. log(a[c]); // 600
// console. log(a[b]); // 600
// console. log(b[b]); // 700
// console. log(b[c]); // 700

// Q
// let str = "Farhan";
// let num = 123;

// let newStr = "";

// const numStr = String(num); // num ko string mein convert karen

// for (let i = 0; i < numStr.length; i++) { // numStr.length tak loop chalaen, <= nahi
//   newStr += str[i] + numStr[i]; // numStr[i] use karen
// }

// newStr += str.slice(numStr.length); // numStr.length use karen, -1 nahi

// console.log(newStr); // Output: Fa1r2h3an

// Q
// console.log(22 > '9') // true
// JavaScript comparison operators (>, <, >=, <=) type coercion apply karte hain.
// Q
// console.log(2 > 'abc') // O/p false
// Analysis:
// 'abc' ek string hai, jo number me convert hone ki koshish karega.
// Number('abc') NaN (Not a Number) return karega.
// Jab koi bhi number NaN se compare hota hai, hamesha false hota hai.

// Q
// console.log(55 && 3) // O/p 3
// Logical AND (&&) first falsy value return karta hai. Agar sab values truthy hon, to last value return hoti hai.
// Q
// console.log(4||3) // o/p 4
// Logical OR (||) pehli truthy value return karta hai.

// Q
// console.log([] + {});// O/p [object,object]
// Step-by-Step Execution:
// [] (empty array) ko string mein convert karega → "" (empty string).
// {} (empty object) ko string mein convert karega → "[object Object]".
// "" + "[object Object]" string concatenation karega.

// Q
// console.log(('b' + 'a' + +'a' + 'a').toLowerCase()); // 'banana'
// +'a'
// The unary plus (+) tries to convert 'a' into a number. Since 'a'
// cannot be converted to a valid number, it becomes NaN (Not-a-Number).

// 'ba' + NaN
// When you concatenate a string ('ba') with NaN, it results in the string 'baNaN'.

// Q
// console.log([1, 2] + [3, 4]); // '1,23,4'

// Q
// {
//   if (-1) {
//     console.log("Hallo");
//   } else {
//     console.log("else");
//   }
//   console.log("cal");
// }

// Q
// JavaScript dynamically typed language hai.

