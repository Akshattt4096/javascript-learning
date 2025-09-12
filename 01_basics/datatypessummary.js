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
//myFunction();
   
// primitive datatypes = stack memory it creates a copy instead of referring to the original value

let myName = "Akshat Ghadigaonkar"
let anotherName = myName
anotherName = "Atharv Ghadigaonkar"
console.log(myName)
console.log(anotherName)

// Non primitive datatypes = Heap memory, it refers to the original value any changes made on other variables will affect and overlap the previous value

let user1 = {
    name: "Akshat",
    email: "ak12@gmail.com"
}

let user2 = user1

user2.email = "ath12@gmail.com"
console.log(user1.email)
console.log(user2.email)

