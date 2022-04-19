/** @format */

/**
 * name gets undefined because its hoisted inside a function due to variabe shadowing
 * but age can be accesed due to no varibale shadowing
 */
var name = "veekshith"; //global scope
var age = 20;
let person = "human";
function test() {
  // variable shadowing
  //  hoisting take place here
  // var name created here
  console.log(name);
  console.log(age);
  console.log(person);
  console.log(occupation);
  var age = 60; // local scope
  var name = "hello";
  let occupation = "business"; // block scope
}
test();

const value = ["hi", "bye"];
// but u can change the value
value[0] = "wow";
value.push("meow");
console.log(value);

// initializing and declaration should be in single line
// redeclartion and reasginment is not allowed
value = 2;
