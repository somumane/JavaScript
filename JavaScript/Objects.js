// Object Creating 

const user={} // simple way its literal type
// const obj=Object.create// this is singleton create object using constructor

const sym=Symbol("key1")

const User1={
    name:"Somu",
    email:"somum794@gmail.com",
    [sym]:"mysym1", //this is symbol thats why you mention insaide []
    age:20,
    ifLogin:true,
    "fullname":"Somu Mane"
}

console.log(User1) // acces hole object 
// there are two type to acess value using key 
console.log(User1.name) 
console.log(User1["fullname"]) 
console.log(User1[sym]) // your geting symbol but data type is string nota symbol  


// Object Assign or Adding each other Using Assign Method 

const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    4:"a",
    5:"b",
    6:"c"
}
// const obj={obj1,obj2}
// console.log(obj) /* Out put {
//     obj1: { '1': 'a', '2': 'b', '3': 'c' },
//     obj2: { '1': 'a', '2': 'b', '3': 'c' }
//   } */
// // using Assigne Method

const obj=Object.assign({},obj1,obj2)
console.log(obj) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }

// Simply use Spread Operator is best
console.log({...obj1,...obj2}) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }


console.log(Object.keys(obj)) //[ '1', '2', '3', '4', '5', '6' ]
console.log(Object.values(obj)); //[ '1', '2', '3', '4', '5', '6' ]
console.log(Object.entries(obj)) 
// [
//     [ '1', 'a' ],
//     [ '2', 'b' ],
//     [ '3', 'c' ],
//     [ '4', 'a' ],
//     [ '5', 'b' ],
//     [ '6', 'c' ]
//   ]
console.log(obj.hasOwnProperty("2")); //true or flase its include 2 thats why its gives o/p true

// Json format Given below is all json format

[
    {},
    {},
    {},
]


// {
//     "results": [
//         {
//             "gender": "male",
//             "name": {
//                 "title": "Mr",
//                 "first": "Derek",
//                 "last": "Watts"
//             },
//             "location": {
//                 "street": {
//                     "number": 6028,
//                     "name": "Rookery Road"
//                 },
//                 "city": "Tipperary",
//                 "state": "Westmeath",
//                 "country": "Ireland",
//                 "postcode": 82012,
//                 "coordinates": {
//                     "latitude": "-2.6795",
//                     "longitude": "-147.1359"
//                 },
//                 "timezone": {
//                     "offset": "+11:00",
//                     "description": "Magadan, Solomon Islands, New Caledonia"
//                 }
//             },
//             "email": "derek.watts@example.com",
//             "login": {
//                 "uuid": "3ff9beec-e212-4688-a59c-df15f4e5341f",
//                 "username": "organicrabbit858",
//                 "password": "eternity",
//                 "salt": "5lhhzFG6",
//                 "md5": "3bce55420f15a86c2abb899572599b8c",
//                 "sha1": "7453afa017ad2d024e688969a39b8fcb13bace36",
//                 "sha256": "7c9baaffd3fc10647490ca99deb9ca4979ebff8e6bcb5581315b26e8aa590952"
//             },
//             "dob": {
//                 "date": "2000-09-17T07:01:18.161Z",
//                 "age": 23
//             },
//             "registered": {
//                 "date": "2003-08-27T19:04:47.275Z",
//                 "age": 20
//             },
//             "phone": "071-293-1209",
//             "cell": "081-813-4693",
//             "id": {
//                 "name": "PPS",
//                 "value": "2714474T"
//             },
//             "picture": {
//                 "large": "https://randomuser.me/api/portraits/men/36.jpg",
//                 "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
//                 "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
//             },
//             "nat": "IE"
//         }
//     ],
//     "info": {
//         "seed": "61eda00a7d45c3d1",
//         "results": 1,
//         "page": 1,
//         "version": "1.4"
//     }
// }