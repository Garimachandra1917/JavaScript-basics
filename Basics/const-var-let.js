const classId = 20

// classId = 40 //not possible since, value is constant

console.log(classId)

var className = "Garima"  //var do not follow scoping rules (block scope or functional scope) 
                          //hence , not used 
                          // prefer using let instead of var 

console.log(className);

let classEmail = "garima@gmail.com"

console.log(classEmail)

classSection = 'A'        //variables can also be declared without using any keywords   

console.log(classSection);

console.log(typeof classSection);


//for printing all the values in form of table

console.table([classId, classSection ,className , classEmail ])
