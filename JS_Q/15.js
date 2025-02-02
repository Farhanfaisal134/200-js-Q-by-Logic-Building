//Stack LIFO
//Queue FIFO
//Q => 1
//Q => 2 geter&&seter
// class Course {
//   constructor(name) {
//     this._name = name
//   };

//   get() {
//     return this._name
//   };

//   set(i) {
//     return this._name = i
//   };
// };

// const course = new Course("Web Dev")
// // course._name = "Haloo"
// console.log(course.set("Frontend Dev"));
// console.log(course);
//Q => 3
// class Student {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   };
//   print() {
//     console.log(this);
//   };
// };

// class Teacher extends Student {
//   constructor(name, age, tName) {
//     super(name, age)
//     this.tName = tName
//   };
//   print() {
//     console.log("Teacher Class Fun");
//     super.print()
//   };
// };

// const result = new Teacher("Farhan", 25, "Imran")
// console.log(result instanceof Student);
//Q => 4
// const user = { name: "Farhan" }
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// Object.defineProperty(user, "name", {
//   writable: false,
//   enumerable: false,
//   configurable: false
// });
// console.log(Math.PI);
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// Object.keys(user).forEach((item) => console.log(item))
//Q => 5
// freeze?
// const obj = { name: "Farhan", age: 25 };
// Object.freeze(obj);
// obj.age = 30;    // Property update nahi hogi
// obj.city = "Lahore"; // New property add nahi hogi
// delete obj.name; // Delete bhi nahi hoga

// console.log(obj); // Output: { name: "Farhan", age: 25 }
// Seal?
// const obj = { name: "Farhan", age: 25 };
// Object.seal(obj);

// obj.age = 30;    // Property update ho sakti hai
// obj.city = "Lahore"; // New property add nahi hogi
// delete obj.name; // Delete nahi ho sakti

// console.log(obj); // Output: { name: "Farhan", age: 30 }
//Q => 6 arr updating
// const arr = [1, 2, 3]
// const result = arr.with(2, 4)
// console.log(result);
//Q => 7
// const arr = [1, 2, 3]
// const arr1 = [1, 2, 4]
// const result = arr.filter((item) => {
//   return !arr1.some((ele) => ele === item)
// })
// console.log(result);
//Q => 8

//Q => 9Prototype Inharitence
// Parent Object
// const animal = {
//   eat: function () {
//     console.log("This animal eats food.");
//   },
// };

// // Child Object (Inheritance using Object.create)
// const dog = Object.create(animal);

// // Dog specific property
// dog.bark = function () {
//   console.log("Dog barks!");
// };

// // Accessing methods
// dog.eat();   // Output: This animal eats food. (inherited from animal)
// dog.bark();  // Output: Dog barks! (specific to dog)
// Child object apne parent ka method overwrite kar sakta hai:
// dog.eat = function () {
//   console.log("Dog eats bones.");
// };

// dog.eat(); // Output: Dog eats bones. (overrides parent method)
//Q => 10
// Higher-order function
// function calculate(operation, a, b) {
//   return operation(a, b); // Function ko call kar raha hai
// }

// // Function as argument
// function add(x, y) {
//   return x + y;
// }

// // Using the higher-order function
// const result = calculate(add, 5, 3); // 'add' function ko pass kiya
// console.log(result); // Output: 8