const accountId = "12345"
let accountEmail = "akshat@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accoutntPhoneno;
//accountId = "2345" // not possible since already Account id is constant

accountEmail = "ak@ak.com"
accountPassword = "234"
accountCity = "Delhi"

console.log(accountId)

//console.log([accountId,accountEmail,accountPassword,accountPassword]);

console.table([accountId,accountEmail,accountPassword,accountCity,accoutntPhoneno])

console.log("const keyword keeps the value same, which means you cannot change that shit, let keyword assign memory for new variables in the system, Only use const and let instead of Var Cause it can change the value if same variable name is assigned and some action performed on it.");


/*
Never use var keyword ever in javascript
because of issue in block scope and functional scope 
*/
