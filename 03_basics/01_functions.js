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

// console.log(loginUserMessage("Mayank"));
console.log(loginUserMessage(/*write username*/));

// username = "sam" makes sam the default value, so if a user does not pass any argument while calling the function, then Sam will be taken as username. And if a user passes a name, then that will be used.