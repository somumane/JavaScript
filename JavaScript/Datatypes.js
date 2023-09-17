/* Data Types are two Types Premitive NonPremitive */

// Primitive Data Types

let string="Somu"  //String " ", '' 
let number=82  //number range 2 power 53 also bigint is there for bigervalues
let boolean=true //boolean true/false
let Null=null // its refers empty value store
let Undefine=undefined // value assigned not define

// symbol is also there but its only using unique

//Non Primitive

const obj={} //Objects
const arr=[] // Arrays
const functions=function name(params) {
    // this is function 
}
// reference is also data type
console.table([typeof(string),typeof(number),typeof(boolean),typeof(Null),typeof(Undefine),typeof(obj),typeof(arr)])

/* Memory Types   */

//  There are two types of memory allocations 
//  all primitive type stored in Stack 
// Non primitive type stored in Heap