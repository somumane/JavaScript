const userId=123
// Best use is only let and const
let userName="Somu Mane"
//inside scope{ } var will be modify thats why var is not proper to use
var userPassword="Somu@2001"
// You cant use this type of varibles
userPlace="Belagavi"
//undifine 
let userState;

// userId=4567    its gives Error because const canot be modify 
userName="Harish" 
userPassword="Hari@2001"
userPlace="Mudhol"

console.table([userId,userName,userPassword,userPlace,userState])