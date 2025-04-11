const user = {
  username: "Mayank",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website!`);
    // console.log(this);
  },
};
//this means to refer to current context, us context mein username tha Mayank, but then it changed to Sharma.
// user.welcomeMessage();
// user.username = "Sharma"
// user.welcomeMessage()

// ++++++++++++++++++++++++++++

// console.log(this);

// function chai () {
//     console.log(this.username);

// }
// chai ();

// +++++++++++++++++++++++++++

// const chai = function() {
//     let uername = "Mayank"
//     console.log(this.username);

// }
// chai ();

// +++++++++++++++++++++++++++

// const chai = () => {
//   let uername = "Mayank";
//   console.log(this.username);
// };

// chai();

//() => { is *same as* const chai = function() {

// ++++++++++++++++++++++++++++

// arrow function is as below

// const addtwo = (n1, n2) => {
//     return n1 + n2
// }
// console.log(addtwo(2,4));

// implicit return arrow function is below, here curly braces are not used (curly braces use hua to return keyword use krna he hoga)

// const addtwo = (n1, n2) => n1 + n2
// OR
const addtwo = (n1, n2) => ({ username: "Mayank" });
//parenthesis lagane he pdenge, agar return nahi likhna to
console.log(addtwo(2, 4));

// ++++++++++++++++++++++++++++++++++++++++

const myArray = [2, 5, 7, 8, 4, 6];

myArray.forEach(function () {});
myArray.forEach(() => {});
// myArray.forEach(() => ());
//all three above are correct syntax used.