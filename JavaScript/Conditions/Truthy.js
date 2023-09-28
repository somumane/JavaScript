// there are two values truthy falsy
if([]){
    console.log("Condition is true");
}

if(''){
    console.log("Condition is false")
}

//falsy values= false,0,-0,BigInt 0n,"",null,undefined,NaN
//truthy values= "0",'false'," ",[],{},function(){}