// ++++++++++++++++++++++++++++++++++++++++++++
// memory 2 types = stack and heap
// stack = 1) used in primitive types. 2) jo bhi variable declare kra hai uska ek copy milta hai
// heap = 1) used in non primitive types. 2) from heap we get reference of the original value, if we change anything then the original value is changed.

// example :

let myYoutubeName = "mayanksharma";

let anotherName = myYoutubeName; //another name mein youtubename ka ek copy gya, original cheez kabhi change nahi hogi. That's why uk youtubename remains as it is.

anotherName = "bwahahhahahahha";

console.log(anotherName);
console.log(myYoutubeName);

//NOW HEAP EXAMPLE

let user1 = {
  email: "mayank@google.com",
  upi: "user@ybl",
};

let user2 = user1; //user1 ka he reference milega user2 ko

user2.email = "sharma@google.com";

console.log(user1.email);
console.log(user2.email);
// change user2 mein kra tha email ko, but user1 mein bhi ho gya.
