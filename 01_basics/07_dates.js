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

// different date formats :
let myCreatedDate = new Date(2023, 0, 23); //yyyy, mm, dd
console.log(myCreatedDate.toDateString());

let newDate = new Date("2023-01-14");
console.log(newDate.toDateString());

let datee = new Date("08-07-2004"); //mm-dd-yyyy
console.log(datee.toDateString());

//TimeStamp
let myTimeStamp = Date.now();
console.log(myTimeStamp); //miliseconds from January 1, 1970
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000)); //to convert ms in seconds

let hahaDate = new Date();
console.log(hahaDate);
console.log(hahaDate.getMonth()); // January is 0
console.log(hahaDate.getDay()); // Sunday is 0

console.log(`${hahaDate.getDay()} and the time.`); //different syntax

console.log(hahaDate.toLocaleString('default', {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}));

