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
console.log(gameName.indexOf('h'));
