// +++++++++++++++ NUMBERS ++++++++++++++++
// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //no. of places after decimal output will be 100.00
// console.log(typeof balance);

// //toPrecision left side se dekhna chalu krega
// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3));

// const otherNumber2 = 123.8966;
// console.log(otherNumber2.toPrecision(3));

// const hundreds = 1000000 ;
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++ MATHS ++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //-ve values to +ve
console.log(Math.round(4.6)); //roundoff normal wall
console.log(Math.ceil(4.2)); //4 ke thoda bhi upar hua to 5 dega
console.log(Math.floor(4.9)); // kitna bhi upar ho, ans 4 he dega
console.log(Math.min(4, 5, 6, 7));
console.log(Math.max(4, 45, 64, 75));
console.log(Math.random()); // gives random values between 0 and 1
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 1);

//important concept below (used in dice game)
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //learn this formula, now this will give value in between 10 and 20 i.e. min and max
