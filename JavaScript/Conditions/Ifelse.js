//Coditions in JavaScript

let condition1=true
if(condition1){
console.log("This is Condition One"); // Only This Will Be Print
}

let condition2=false // If Condition is false Then its not gives any value
if(condition2){ 
console.log("This is Condition two");
}

// ===.<=,>=,<,> these using to checking  true or false values

//if else

if(2==='2'){  // in this condition === cheks also data type thats why this conditon is false 
    console.log("Condition is true");
}
else{
    console.log("Condition is not true");
}

let Score=1200

if (Score<=700){
    console.log("Score is Lessthan 700");
} 
else if(Score<=1000){
    console.log("Score is Lessthan 1000");
}
else if (Score<=1200){
    console.log("Score is Lessthan equl 1200"); //Only this will be print
}

// Multiple Conditions use && both two true || Only One Conditions is true 

if (condition1 && condition2){
    console.log("Both Conditions are true");
}
if (condition1 || condition2){
    console.log("Only One condition true");
}

// Nullish Coalescing Operatyor (??): null undefined
let val1;
val1=5??10 //5
val1=null??10 //10 null safty check
val1=undefined??15 //15 

//Terniary Operator its same as ifelse Statement
//condition ? true:false

const price=100
price<=80?console.log("less than 80"):console.log("greater then 80") //greater then 80