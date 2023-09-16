// Data Type Conversion Number String Boolean

// string,boolean to => Number conversion
let id="123";
let num_Id=Number(id);
let id2="123as"
let num_Id2=Number(id2); //out put will be NaN Not a Number but type is number
let booleannum=true;
let boolean_Num=Number(booleannum) // out put will be true => 1 false => 0
console.table([typeof(id),typeof(num_Id),typeof(num_Id2),num_Id2,boolean_Num]) // out put string,number,number,NaN


// number,bollean to => String conversion

let number=3456
let number_String=String(number); // out put type String
let boolean=true;
let boolean_string=String(boolean)//out put type String
console.table([typeof(number),typeof(number_String),typeof(boolean),typeof(boolean_string)]) // number,string, boolean,string


// number,string to => Boolean conversion
// 1=>true 0=>false only 0 false all are true

let boolean_num=3456
let num_boolean=Boolean(boolean_num)

let boolean_str="" // output false type boolean
let str_boolean=Boolean(boolean_str);
let boolean_name="somu"
let name_boolean=Boolean(boolean_name); //out put will be true

console.table([typeof(num_boolean),(num_boolean),(str_boolean),(name_boolean)]) //boolean true
