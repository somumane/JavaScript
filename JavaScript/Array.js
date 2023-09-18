// declearing array
let myarr=[1,2,3,4,5,6,7]
console.log(myarr[1]) //access element using index

const myarr2=new Array(1,2,3,4,5,6)

console.log(myarr2)
console.log(typeof(myarr2)) // Object

// Methods in Array Only Imp Methods are written here
myarr2.push(9) //adding last inedx [1,2,3,4,5,6,9]
myarr2.pop()  // remove last index element [1,2,3,4,5,6]
myarr2.unshift(9) // adding first index [9,1,2,3,4,5,6]
myarr2.shift() //remove first index element
myarr2.includes(2) //its gives true and false value its datatype is boolean
myarr2.indexOf(3) // its gives 3 number index
myarr2.join() //its convert data type Object to String

// Difference between  slice and splice its imp to interveiw
console.log(myarr2.slice(1,3)) //slice is not includes last digit also main array cant change simply its copy of arry elements
console.log("slice: ",myarr2)
console.log(myarr2.splice(1,3)) // splice is includes last disgit index value but its change the original array value somply its cut  
console.log("splice: ",myarr2)


//Two arrays adding and make it single array

let arr1=[1,2,3,4]
let arr2=[5,6,7,8]
// console.log(arr1.push(arr2)); //[1,2,3,4,[5,6,7,8]] 

// console.log(arr1.concat(arr2)) // [1,2,3,4,5,6,7,8] its gives output is coreect but its not proper way

// Use Spred Operator (...)
console.log(...arr1,...arr2) // its simple and give multiple array to this [1,2,3,4,5,6,7,8]

//convert deep arrays to single array using flat
let arr=[1,2,3,[4,5],[6,7,8,[9,10,[11,12]]]]
console.log(arr.flat(Infinity)) // also give how deep value 4 [1,2,3,4,5,6,7,8,9,10,11,12]

console.log(Array.from("Somu")) // simple its convert String to  array ["s","o","m","u"]

console.log(Array.of("Somu") ) // its gives['Somu']

