const name = "Garima"
const marks = 90

//writing using concatination
//console.log(name +"'s marks are " +marks);

//better way 
//using BackTicks // string interpolation
console.log(`${name}'s marks are ${marks}`);


//making string using new keyword - creates object 
let lastName = new String ('Chandra');
//this makes string with key : values pairs
//hence, providing alot of  methods
console.log(lastName);

//prototype
console.log(lastName[0]);
console.log(lastName.__proto__); 


console.log(lastName.toUpperCase());//original string not changed since, primitive 
console.log(lastName.charAt(4));
console.log(lastName.indexOf('n'));

//creating substring
let newString = lastName.substring(0,4)//(inclusive,exclusive)
console.log(newString);

//slice()
let string = lastName.slice(0,5)
console.log(string);
let string1 = lastName.slice(-7,4) //slice() also accepts negative indexes
console.log(string1);

//trim()
let data = "     hello  "
console.log(data)
console.log(data.trim())

//replace()
const url = "https://garima.com/garima%18ch"
console.log(url.replace('%18','-'));

//includes()
console.log(url.includes('ch'));

//slit()
console.log(url.split("/"))






