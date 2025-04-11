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

console.log(this);
