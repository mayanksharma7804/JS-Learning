let c = 300 //global scope
let a = 300
if (true) {
  let a = 10;
  const b = 20;
  c = 30; //local scope
  console.log("Inner a : ", a);
  
}

console.log("Outer a : ", a);
// console.log(b);
// console.log(c);
