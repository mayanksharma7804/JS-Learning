//singleton

// object literals

const mySym = Symbol("key1");

Object.create; //this method this also used to define an object
const JsUser = {
  name: "Mayank", //in objects, there are key value pairs
  "full name": "Mayank Sharma",
  mySym: "mykey1", //this is not possible
  age: 20,
  location: "New Delhi",
  email: "mayank@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);
console.log(JsUser[mySym]);

JsUser.email = "mayanksharma@google.com"; //to change value of something
console.log(JsUser.email);

// Object.freeze(JsUser);
JsUser.email = "mayanksharma@microsoft.com";
console.log(JsUser); //value of email did not change now, because now JsUser has been freezed.

JsUser.greeting = function () {
  console.log("Hello JS User!");
};

console.log(JsUser.greeting);

JsUser.greetingtwo = function(){
    console.log(`Hyyyyyy JS User! ${this.name}`);
    
}

console.log(JsUser.greeting());

console.log(JsUser.greetingtwo());
