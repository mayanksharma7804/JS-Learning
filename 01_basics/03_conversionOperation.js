// let score = true;

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); //type no. dikha rha tha, but actually tha nahi vo kyuki 33abc tha
// console.log(valueInNumber); //jab print krvaya to NaN aa gya, that's how we know

// // "33" => 33
// // "33abc" => Nan (not a number)
// // true => 1; false => 0

// let isLoggedIn = "g";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// // 1 => True
// // 0 => False
// // "" => False
// // "Mayank" => True

// let someNumber = 33;

// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ****************** Operations *************** //comment out all the above if want to see below code only


let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(4 / 2);
console.log(2 % 2);

let str1 = "Hello";
let str2 = " Mayank";
let str3 = str1 + str2;
console.log(str3);
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + "2");
console.log("1" + 2 + 2); //ese confusing codes nahi likhne hote industries mein, they won't accept your push request lmao.
console.log(1 + 2 + "2");

console.log(3 + ((4 * 5) % 3));
console.log(+true);

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; //ese nahi likhne, READABILITY is FOCUSED!!!!!

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
