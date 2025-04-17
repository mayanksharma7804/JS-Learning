// if 

// if (true) {
//     code will be executed if condition is true
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++

// const isUserLoggedin = true 
// if (isUserLoggedin) {
//     console.log(`yes the user is logged in!`);
    
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++

// if (2 == "2") {
//     console.log(`yes the user is logged in!`);
    
// }
//use === if you want to check if the both are of same type or not

// const temperature = 41
// if (temperature < 50) {
//     console.log("Less than 50.");
    
// }
// else {
//     console.log("Temperature is greater than 50!");
// }
// console.log("Execute!");

// <, >, <=, >=, ==, !=

// +++++++++++++++++++++++++++++++++++++++++++

// const score = 200 
// if (score > 100) {
//     var power = "fly" //scope of var is global, power variable's value can be accessed out of if too!
//     console.log(`User Power : ${power}`);
// }
// console.log(`User Power : ${power}`);

// +++++++++++++++++++++++++++++++++++++++++++

// shorthand notation

// const balance = 1000 
// if (balance > 500) console.log("test"); //implicit scope

// +++++++++++++++++++++++++++++++++++++++++++

// const balance = 200 
// if (balance < 300) console.log("test1"), console.log("test2"); //don't do like this!!, not a good practice

// +++++++++++++++++++++++++++++++++++++++++++

// const balance = 800
// if (balance < 500) {
//     console.log("Less than 500");
// }
// else if (balance < 750) {
//     console.log("Less than 750");
    
// }
// else if (balance < 900) {
//     console.log("Less than 900");
    
// }
// else {
//     console.log("less than 1200");
    
// }

// +++++++++++++++++++++++++++++++++++++++++++

const userLoggedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedin && debitCard) {
    console.log("User is allowed to buy course.");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User is logged in.");
}
