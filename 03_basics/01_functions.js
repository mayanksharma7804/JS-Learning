// function sayMyName() {
//   console.log("M");
//   console.log("A");
//   console.log("Y");
//   console.log("A");
//   console.log("N");
//   console.log("K");
// }
// sayMyName();

// ++++++++++++++++++++++++++++++++++++++++++++++++

// function addition(n1, n2) {
//   console.log(n1 + n2);
// }
// addition(2, 5);

// const result = addition(4, 5);
// console.log("Result : ", result);

// ++++++++++++++++
function addition(n1, n2) {
  // let result = n1 + n2 ;
  // return result ;
  return n1 + n2;
}

const result = addition(5, 6);
// console.log("Result : ", result);

// +++++++++++++++++++++++++++++++++++++++++++++++++

function loginUserMessage(username = "sam") {
  if (username === undefined) {
    console.log("Please enter a username!");
    return;
  }
  return `${username} just logged in.`;
}

// console.log(loginUserMessage(/*write username*/));

// username = "sam" makes sam the default value, so if a user does not pass any argument while calling the function, then Sam will be taken as username. And if a user passes a name, then that will be used.

// +++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 2000)); //no matter how many arguments we pass now, as we have used the rest operator i.e. ...num1
//
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

// +++++++++++++++++++++++++++++++++++++++++++++++++

const user = {
  username: "Mayank",
  price: "999",
};
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and the price is ${anyobject.price}`
  );
}
// handleObject(user); //or
// handleObject ({
//     username : "Mayank",
//     price : "998"
// })

// ++++++++++++++++++++++++++++++++++++++++++++++++

const myNewArray = [200, 400, 600, 100];
function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
