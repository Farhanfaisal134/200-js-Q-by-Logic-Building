// Difference Between Arraow Fun And Fun Declaration JS Ma?
Call Stack Ma Jab Axicution Phase Banta han To Tamam Var ko Null Assign Hut Han Start ma Is Ka Bad Func Ki Bari Atti Han Memory MA Add Huna Ki Jo Func Declation Huti Han Iun Ko Direct Body Mill Jati Han Func Ki Pr Arraow Func Func Axpration Ko NUll Asign Huta Han Jis Ki Waja Sa Func DecLaration Hosted Huti Han Ab Atti Han Exution Ki Bari JO Func Axicute Huta Han WO VAl return Kr Ka Stack Sa bhr Push Hu Jata Han:
// Agar aap profit ya loss nikaalna chahte ho, to basic formula yeh hota hai:
Profit = Selling Price - Buying Price
Loss = Buying Price - Selling Price
// Object.defineProperty(user, "name", {
writable: false, Agr ya false han to ap object ki pro ko update nhi kr sagta
enumerable: false, agr ya false han to ap object ki pro ko Object.keys(user) lopp lagana sa ap key ko access nhi kr sagta
configurable: false ab koi bhi is ki pro ko del nhi kr sagta matlab koi nhi char sagta
});
// Object.freeze?
Iska use object ko bilkul immutable (badalne na dena) banane ke liye hota hai.
Properties na add ho sakti hain, na delete ho sakti hain, aur na update.
// Object.seal?
Iska use object ko partially mutable banane ke liye hota hai.
New properties add nahi ho sakti, par existing properties update ho sakti hain. Delete nahi ho sakti.
// clone Of an Object?
Object.assign({}, obj) only single aply not update nested obj value agr karo ga to oringnal ma bhi chnages ho gi but func spport
{...obj } agr nested obj ma changes karo ga to orignal ma changes ho gi
JSON.parse(JSON.stringify()) nested updated allow but not copy func
//Math.sqrt(9)?
Ab na 9 sa Aga spose 10 han ab sa 10 o 9 sa divide kara ga 10 ka aga jitna no han jab tk isa pair mean 16 4x4 nhi mill jata ya 10
sa aga sb no ko 3 sa divide kara ga
//divide "/" mutiplay "\*"
//Math.round(4.5)=>5//Math.ceil(4.1)=>5//Math.floor(4.9)=>4
