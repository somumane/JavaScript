// Number in JavaScript

let num1=567;
let num2=new Number(56);
console.log(num1,num2); // 567 Number:56 

// Number Methods

/* constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()*/

// convert number to string
const num3 = 42;
const str = num3.toString(); // "42"

// toFixed 
const num = 3.14159;
const str1 = num.toFixed(2); // "3.14"

// toPrecision
const str2= num.toPrecision(3); // "3.14"

// parseInt and parseFloat: Parses a string and returns an integer or floating-point number.
const strInt = "42";
const strFloat = "3.14";
const parsedInt = parseInt(strInt); // 42
const parsedFloat = parseFloat(strFloat); // 3.14

// isNaN: Checks if a value is NaN (Not-a-Number).
isNaN(NaN); // true
isNaN("Hello"); // true
isNaN(42); // false

// isFinite: Checks if a value is a finite number.
isFinite(42); // true
isFinite(Infinity); // false

// parseFloat and parseInt: Parse a string and return a floating-point or integer value
parseFloat("3.14"); // 3.14
parseInt("42"); // 42

// toExponential: Converts a number to its exponential notation as a string.
const num5= 12345;
const str4 = num5.toExponential(); // "1.2345e+4"
// to Fixed
const str5 = num5.toFixed(2); // "12345.00"



//  Math in JavaScript

console.log([Math.abs(-4), //4 its convert negitive to positive only
Math.round(4.69), // 5 roundof
Math.ceil(4.2) , // its take above value 5
Math.floor(4.9), //its gives lower value 4
Math.min(10,9,4,3,5,1), // gives minvalue 1
Math.max(10,9,4,3,5,1), // gives max value 10
Math.random() // 0 to 1 center values
] )

let min=10;
let max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min) // its gives 10 to 20 center values