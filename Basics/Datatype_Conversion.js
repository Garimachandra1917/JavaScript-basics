let id = 123

console.log(typeof(id))

id = "123"   //string

console.log(typeof(id))

let numberId = Number(id) //conversion of string into number 
console.log(typeof numberId)


let score = "33abc" //string

let numberscore = Number(score) //cant be converted into number as contain letters
console.log(typeof(numberscore)) //number
console.log(numberscore) // but value = NaN

let value = undefined 
valueNumber = Number(value) //cant be converted into number
console.log(typeof valueNumber) //number
console.log(valueNumber) //value = NaN

let islogged = true 
let isnumber = Number(islogged) 
console.log(typeof isnumber)
console.log(isnumber) 


// "33" => number
// "33abc" =>NaN
// undefined => NaN
// boolean , true => 1 ; false =>0



let num = 1
let numbool = Boolean(num)
console.log(typeof numbool)
console.log(numbool)

let num2 = 0
let numbool2 = Boolean(num2)
console.log(typeof numbool2)
console.log(numbool2)

let num3 = ""
let numbool3 = Boolean(num3)
console.log(typeof numbool3)
console.log(numbool3)

let num4 = "garima"
let numbool4 = Boolean(num4)
console.log(typeof numbool4)
console.log(numbool4)


// 1=>true
// 0 =>false 
// ""=>false
// "garima"=>true


let str = 19

let strNum = String(str)
console.log(typeof strNum)
console.log( strNum)