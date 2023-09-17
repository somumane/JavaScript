//  Strings Methods or functions

// four ways to define string "", '', ``,newString('')
let name1="somu"
let name2='somu'
let name3=`Somu ${name1} ${name2}` // dont use string concat use this best way to inject strings

let name4=new String("Somu Mane"); // it convert object

console.table([name1,name2,name3,name4])
console.log(typeof(name4))


//  Methods Of Strings
/*  
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf() */

// Only Main Types 

// Length
const str= "Hello, World!";
const length = str.length; // 13

// concat
const str1 = "Hello";
const str2 = "World";
const combined = str1.concat(", ", str2); // "Hello, World"

// Upper Lower Case
const upper = str.toUpperCase(); // "HELLO, WORLD!"
const lower = str.toLowerCase(); // "hello, world!"

// trim remove White space ex str="     Hello,World!  "
const trimmed = str.trim(); // "Hello, World!"

// substring,slice,substr all is same but insaide slice give negitive value also
const sub1 = str.substring(0, 5); // "Hello"
const sub2 = str.slice(0, 5); // "Hello"
const sub3 = str.substr(0, 5); // "Hello"


// charAt and charCodeAt: Returns the character at a specific position and its Unicode 
const char = str.charAt(0); // "H"
const charCode = str.charCodeAt(0); // 72 (Unicode value of "H")

// split using any" " or , [,( anything  its convert arrays
const str4= "apple,banana,cherry";
const fruits = str4.split(","); // ["apple", "banana", "cherry"]

// indexOf and lastIndexOf: Returns the index of the first/last occurrence of a substring 
const firstIndex = str.indexOf("World"); // 7
const lastIndex = str.lastIndexOf("o"); // 8

// replace: Replaces a substring with another substring
const newStr = str.replace("World", "Universe"); // "Hello, Universe!"

// startsWith and endsWith: Checks if a string starts or ends with a specified substring
const startsWithHello = str.startsWith("Hello"); // true
const endsWithWorld = str.endsWith("World"); // true

// includes: Checks if a string contains a specified substring
const containsWorld = str.includes("World"); // true

// match: Searches a string using a regular expression and returns an array of matches
const matches = str.match(/[aeiou]/g); // ["e", "u", "i", "o", "o"]