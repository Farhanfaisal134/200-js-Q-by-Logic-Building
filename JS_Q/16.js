// Q => 1
const arr = [1, 2, 3, 4, 5, 6]
let newArr = [1, 2];
arr.forEach((item, idx) => {
  setTimeout(() => {
    const timeNow = new Date();
    console.log(`Item: ${item}, Time: ${timeNow.toLocaleTimeString()}`);

  }, 1000 * (idx + 1));
  newArr = [];
});

console.log(newArr);
// Q => 2
