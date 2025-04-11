// IIFE - Immediately Invoked Function Expression : the function that will be immediately executed.
// WHY Used? - the pollution caused by global scope, so to remove those problems, we use IIFE.

//NAMED IIFE

(function chai() { 
  console.log(`DB CONNECTED`);
})(); //end mein semicolon is imp to tell the function to stop here! 
//line 3 to line 6 will print without even calling the function!

//  +++++++++++++++++++++++++++++++++++++++

((name) => {
  console.log(`DB CONNECTED TO ${name}`);
})(`Mayank`);
