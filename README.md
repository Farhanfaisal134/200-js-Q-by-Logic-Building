Q=>1 How does JavaScript handle type coercion?
Ans=>JavaScript type coercion ka matlab hai ek data type ko automatically doosre data type me convert karna. Yeh do tarah se hota hai:

1=> Implicit Coercion (Automatically)=>console.log("5" - 1); // 4 (String "5" ko Number me convert kiya);
2=> Explicit Coercion (Manually)=>console.log(Number("5")); // 5 (String to Number)
Q=>2 Explain the event loop and how JavaScript handles asynchronous operations?
Ans=>
Call Stack:
Synchronous code yaha execute hota hai, ek-ek karke.
Web APIs:
Asynchronous tasks (jaise setTimeout, fetch) yaha execute hote hain.
Task Queue (Callback Queue):
Jab async task complete hota hai, uska callback yaha queue hota hai.
Event Loop:
Event loop continuously check karta hai agar call stack khali hai, toh task queue se ek task utha ke execute karta hai.
Event loop ensure karta hai ki asynchronous code tabhi execute ho jab synchronous code complete ho jaye.
Q=>3 What are promises, and how do they differ from async/await?
Ans=>Promises || Async/Await
.then() aur .catch() se handle hota hai.|| try/catch block use karta hai.
Callback chaining ka use karta hai.|| Code ko clean aur readable banata hai.
Older syntax hai.|| Newer syntax hai (ES8).
Q=>4What is prototypal inheritance in JavaScript? How does it work?
Ans=>Prototypal inheritance ek object ko dusre object ke sath link karta hai. Ye code reusability aur extensibility ke liye powerful feature hai.
Q=>5 What is the difference between null and undefined?
Ans=>Key Difference:
null || undefined
Manually assign kiya jata hai.|| JavaScript automatically deta hai.
"Intentionally empty" ko dikhata hai.|| "Value not assigned" ko dikhata hai.
Type: Object || Type: Undefined
