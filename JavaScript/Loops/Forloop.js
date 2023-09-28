//For loop in javascript

for (let index = 0; index <=10; index++) {
    const element = index;
    console.log(`${element}`)
}

// inner loop
 for(let i=0;i<=10;i++){
    for(let j=0;j<=10;j++){
        console.log(`inner Loop = ${j} Outer Loop = ${i}`)
    }
 }


 // multiplications

 for(let i=1;i<=10;i++){
    for(let j=0;j<=10;j++){
        console.log(`${i} X ${j} =${i*j}`)
    }
 }

 //For Of

 const array=[1,2,3,4,5,6] // its iterate each item or elements
 for (const i of array) {
 console.log(i)    
 }

 //for in its depend on objects
//  for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
//  }

 // for each
 array.forEach( (i)=>{console.log(i)} ) // its using functions 