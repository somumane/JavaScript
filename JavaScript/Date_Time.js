// Date and Times in JavaScript

let mydate=new Date()

console.log(mydate)//2023-09-18T07:57:00.491Z
console.log(mydate.toDateString()) //Mon Sep 18 2023

console.log(mydate.toString())

//Time in miliseconds you convert into seconds /1000
const time=Date.now()
console.log(time)

// getDate getTime

const date=new Date('01-14-2023')
console.log(date.toDateString())