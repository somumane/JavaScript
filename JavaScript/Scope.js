// {} this is scope but there are two types global and block
 

 var a=25
 let b=50
 const c=100

 if(true){
    // console.log(a,b,c) // this is block scope insaide block scope you can acess global op=25,50,100
    //  scope values but insaide global scop you cant access block scope values here is example
    var a=100
    let b=150
    const c=200 
    console.log(a,b,c) // out put will be  //100,150,200
}

console.log(a,b,c) // this is the disadvantage of var thats why cant use var check out put
//exepted is 25,50,100 but o/p is 100,50,100 because insaide block you declear var a =100 thats why its modify this reason var is not used