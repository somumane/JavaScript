// refers to curect context  using this keyword

const user={
    username:"somu",
    price:198,
   welcome: function(){
     console.log(`Welcome to home ${this.username}`) // this keyword is referce for user 
     console.log(this) // out put is full object
    }

}

user.welcome()
user.username="Raju"
user.welcome()
console.log(this) // its gives empty object

// Arrow fun vs fun

function name(){
  console.log("Somu")
  console.log(this) //it gives hole this key word
}

()=>{
  console.log(this) // its gives output object
}
