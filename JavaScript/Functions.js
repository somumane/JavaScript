// Functions in JavaScript Normal Function You call the funx=ction where you want
function Username(){
    console.log("Somu")
}

Username // this reference of function not execution
Username() //this is execution

function addNumber(num1,num2){ //passing arguments
    return num1+num2
}
addNumber(7,9) //passing parameters also its only returns value not print 

console.log(addNumber(8,9)) //17 is out put

// Insaide Objects
const user={
 name:"Somu",
 age:22
}

function passingObjects(anyobject){
  console.log(`User Name is ${anyobject.name}  also Age is ${anyobject.age}`)
}

passingObjects(user)

// also pass object insaide arguments
  
function argumentObject(user={name:"Raju",age:45})
{
    console.log(`User Name is ${user.name}  also Age is ${user.age}`)
}
argumentObject()

// Passing Array
const arr=[1,2,3,4,5]
function passingArray(myarr){
console.log(myarr.slice(1,4))
}

passingArray(arr) // [2,3,4]

// insaide argument
 function argumentArray(arr=[1,2,3,4,5]) {
    console.log(arr.splice(1,4))
 }
 argumentArray() //[2,3,4,5]

//  console.log(AddtwoNumber(5,6)) ReferenceError: Cannot access 'AddtwoNumber' before initialization you get error
 //Arrow function is there Same As Function but small difference

 const AddtwoNumber=(n1,n2)=>{
    return n1+n2
 }
 console.log(AddtwoNumber(5,6)) // Almost your using This function but this is have one disadvantage You call function only below declear 
  