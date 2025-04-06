// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);
let myCreatedDate = new Date(2023, 0, 23); //yyyy, mm, dd
console.log(myCreatedDate.toDateString());

let newDate = new Date("2023-01-14") ;
console.log(newDate.toDateString());

let datee = new Date("08-07-2004") ; //mm-dd-yyyy
console.log(datee.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp) ; 
console.log(myCreatedDate.getTime()) ;