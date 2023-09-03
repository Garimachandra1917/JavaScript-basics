// Stack (Premitive data types are stored) (copy is made)

let number = 123
let number2 = number

number2=456 

console.log(number)
console.log(number2)


// Heap (Non-Premitive data types are stored) (References are passed)


let myobj ={     //object
    id:253,
    name:"garima",
    dep: "cs"
}

let obj2 = myobj

obj2.id =456

console.log(myobj.id)