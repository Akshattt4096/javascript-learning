// primitive datatypes

// Number, String, Boolean, BigInt, null, undefined, symbol

const num = 100
const name = "Akshat"
const  isLoggedIn = true
const outsideTemp = null
let address;

const email = Symbol ("abc@gmail.com")
const emailId = Symbol ("abc@gmail.com")

console.log(email === emailId)



// Non primitve datatypes 
//arrays, objects, functions

let gotCharacters = ["jon snow", "tyrion lanister", "robb stark", "Khalessi"]
//console.log(gotCharacters)

 let myobj = {
    name:"Akshat",
    age:18,
    email:"abcd@gmail.com"
}
//console.log(myobj)

let myFunction = function (){
   console.log("Hello world") 
}
myFunction();
   

