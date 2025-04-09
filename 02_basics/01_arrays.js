// arrays

const myArr = [0, 1, 2, 3, 4, 5, true, "Mayank"];
console.log(myArr[7]);
//array created shallow copies (copy mein change se, main array mein change aa jaega)

const myHeroes = ["shaktiman", "batman"];
const myArr2 = new Array(1, 2, 3, 5);
console.log(myArr[1]);

// Array Methods

myArr.push(6)
console.log(myArr)
myArr.pop() //last value ko remove kr deta hai.
console.log(myArr)

myArr.unshift(9) //will add 9 in the starting
console.log(myArr)
myArr.shift() //will add 9 in the starting
console.log(myArr)

console.log(myArr.includes(9));
console.log(myArr.indexOf(4)); //-1 aaega if something is not available in the array

const mayArray = myArr.join()
console.log(myArr);
console.log(typeof newArr);

// slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);

console.log(myn2);
