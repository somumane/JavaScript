// Normal Comapre 

console.log(2>0) // true
console.log(2<0) // false
console.log(2==0) // false
console.log(2>=0) // true
console.log(2<=0) // false

console.log("string to num comaparision")
// it is also gives same because its not check data types 
console.log("2">0) // true
console.log("2"<0)// false
console.log("2"==0) // false
console.log("2">=0) // true
console.log("2"<=0) // false
console.log("2"==2) //true

// compare to null value
console.log("Null Compare ")
console.log(null>0) // false
console.log(null<0)// false
console.log(null==0) // false
console.log(null>=0) // true
console.log(null<=0) // true

console.log("Undefined Compare ")
console.log(undefined>0) // flse
console.log(undefined<0)// false
console.log(undefined==0) // false
console.log(undefined>=0) // false
console.log(undefined<=0) // false



//=== its gives strict compare its check also datatypes 
console.log("===")
console.log("2"===2) // false
console.log(undefined===0) // false
console.log(null===0) // false
console.log(2===2) //true
console.log('2'==='2') // true
