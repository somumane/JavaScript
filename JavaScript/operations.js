// operations in JavaScript

let addition=2+2; //out put 4
let substraction=2-2; // out put 0
let multiplication=2*2; // out put 4
let Powerof=2**2;// out put 4
let division=2/2;// out put 1
let modules_or_remainder=2%2;//out put 0


console.table([addition,substraction,multiplication,Powerof,division,modules_or_remainder])

//string concatination
let stringadd="Hlo"+"Somu" //HloSomu this is called String Concatination
let stringsub="Hlo"-"Somu" //NaN
let stringmul="Hlo"*"Somu" //NaN
let stringpow="Hlo"**"Somu" //NaN
let stringdiv="Hlo"/"Somu" //NaN
let stringmodule="Hlo"%"Somu" //NaN

console.table([stringadd,stringsub,stringmul,stringdiv,stringpow,stringmodule])

// Order wise
let num1="1"+2 //12
let num2=1+"2" //12
let num3="1"+2+2; //122
let num4=1+2+"2"; // 32 its takes fist letter data type 
let num5=1+2+"2"+"3"// 323 when you get string its make as string concatination 

let num6=1+2*5/2  // its gives fist preority to * 2*5=10 after division 10/2=5 after addition 5+1=6 output willbe 6 
// but ont use this type Preority level **,*,/,%,+,- this is important for only interview puropose

let num7=1+2-5*2/2%2**2; //fist 2**2=4 5*2=10 10/2=5 5%4=1  1+2=3  3-1=2  out put will be 2
console.table([num1,num2,num3,num4,num5,num6,num7])

// boolean addition 
let boolean=+true // 1
let string=+""   //0

//Prefix Postfix

let counter=100;
counter++; // here counter++ => 101 but counter is 100
++counter; // here both ++counter => 101 counter is also 101

//Example
let x1 = 3;
const y1 = x1++;
// x 1 is 4; y1 is 3

let x = 3;
const y = ++x;
// x is 4; y is 4
