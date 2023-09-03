let name = "Garima"
let age = 18 
let islogged = true

//number 
//bigint
//string=>""
//boolean =>true / false
//null => standalone value (its an object)

// console.log(typeof null);

//undefined => type not defined (datatype)

// console.log(typeof undefined);

//symbol => unique values

//object


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


let number = 1123 ; //number
let floatNumber = 2.2; //number

let str = "apple" //string

let bool = true; //boolean

let novalue =null; //null

let newvar ;   //undefined

let unique = Symbol('123') //symbol
let unique1 = Symbol('123')
console.log(unique==unique1)

let bigNumber = 893744903493948n //bigint
console.log(typeof bigNumber)



let array = ["hi","helo","hola"]  //arrray

let myobj ={     //object
    id:253,
    name:"garima",
    dep: "cs"
}

let myfunc = function(){        //function
    console.log("hello world")
}

// Type and typeof return value
// number - number
// string -  String
// boolean - boolean
// symbol - symbol
// bigint - bigint
// undefined - undefined
// null - object
// array - object
// object - object
// function - function