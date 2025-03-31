const name = "Mayank"; //way 1 of declaring string
const repoCount = 50;
// console.log(name + repoCount + "Value"); //outdated syntax this is, do not use this.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // this is called string interpolation using ``

const gameName = new String("MayankSh");
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__); //object empty milta hai

console.log(gameName.length); // output : 8
console.log(gameName.toUpperCase()); //original string not changed, copy uppercase mein change hui hai

console.log(gameName.charAt(5));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0, 4); //0 index se leke 3 tak ka aa jaega newString mein. //-ve value can't be given in substring 
console.log(newString);

const anotherString = gameName.slice(-8, 4); //slice mein we can use -ve values also.
console.log(anotherString);

const new1 = "    Mayank    "
console.log(new1);
console.log(new1.trim()) //trim extra spaces ko remove kr deta hai
const new2 = "    My name is Mayank.    "
console.log(new2);
console.log(new2.trim());

const url = "https://google.com/mayank%20sharma" //url encoding transforms spaces into %20
console.log(url.replace('%20', '-'))

console.log(url.includes('mayank')) //is mayank keyword available in the url or not.

const learn = "mayank-sharma-is-good"
console.log(learn.split('-'));

/********** HOMEWORK ***********/