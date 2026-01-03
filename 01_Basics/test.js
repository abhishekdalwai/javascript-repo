console.log("Hello World")

const accountId = "12345"  // contsant value does not chabng ethrought the code
let accountemail = "abhishekfdalwai98@gmail.com" 
var accountPassword = "12345" // this creates a problem as it is nor aware of scope meaning curly braces so let came into picture
accountcity = "pune"
let accountstate  //this is undefined variable and can be defined at any other place


let name = "abhi" //if in double quotes then treats string
let number= 10 // range is upto 2 to t hte power 53 if more that then bigint data type to use
let bol = false
let state = null  // standard empty value remmember is is different then undefined , undefined means never value set
console.log(accountcity)

console.log(typeof(bol))
console.log(typeof(null)) // its of object type
console.log(typeof(undefined)) // its of undefined datatype

let stringDigit = "45"
let stringtonumber = Number(stringDigit) // datatype conversion string to number and if incase the string was not integer then the value will be Nan(not a number) and if bolean tile true or flalse then 1 or 0 will store resp as its conversion is possible
let stringtonumber2 = Number(name)
console.log(typeof(stringtonumber))
console.log((stringtonumber2))
console.log(typeof(stringtonumber2))

// to bolean cvonversion
// 1 => true; 0 => false
// "" => false
// "hitesh" => true



