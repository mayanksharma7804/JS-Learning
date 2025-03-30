const accountId = 144553;
let accoundEmail = "mayank@google.com";
var accoundPassword = "12345";
accountCity = "Delhi"; //this is also a variable, although do not do this, always use let
let accountState;

/*never use var, only use let to declare variables*/

// accountId = 2; //not allowed //const already declared hai upar, ab vo locked hai

accoundEmail = "sharma@google.com";
accoundPassword = "324234";
accountCity = "Jaipur";

console.log(accountId);

console.table([
  accountId,
  accoundEmail,
  accoundPassword,
  accountCity,
  accountState,
]);
