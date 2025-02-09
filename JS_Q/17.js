// Q => 1
// function stringToObject(path, value) {
//   const keys = path.split('.'); // Split the path string into an array of keys
//   let obj = {}; // Create an empty object
//   let current = obj; // Keep track of the current level in the object

//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     if (i === keys.length - 1) { // If it's the last key, assign the value
//       current[key] = value;
//     } else {
//       current[key] = current[key] || {}; // Create a nested object if it doesn't exist
//       current = current[key]; // Move to the next level in the object
//     }
//   }

//   return obj;
// }

// // Example usage:
// console.log(stringToObject("a.b.c", "someValue")); // { a: { b: { c: 'someValue' } } }
// console.log(stringToObject("x.y.z.w", 123)); // { x: { y: { z: { w: 123 } } } }
// console.log(stringToObject("name", "John")); // { name: 'John' }
// console.log(stringToObject("address.street.number", "42")); // { address: { street: { number: '42' } } }