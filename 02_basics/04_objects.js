// // const tinderUser = new Object(); //singleton object
// // or
const tinderUser = {}; //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Mayank"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

// +++++++++++++++++++++++++++++++++++++++++++

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        Userfullname : {
            firstname : "Mayank",
            lastname : "Sharma"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.Userfullname.lastname);

// +++++++++++++++++++++++++++++++++++++++++++++++

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4) //union of all the passed parametres will go to the first one i.e. {} in this case, and it is good to write {} 

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

// ++++++++++++++++++++++++++++++++++++++++++++++

const users = [
    {
        id : 1,
        email : "h@gmail.com",
        name : "mayank"
    }
]
// users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
