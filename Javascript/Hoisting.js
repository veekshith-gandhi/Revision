/** @format */

console.log(x);
// it gets hoisted and print undefined
var x = 10;
getname();
// function defined keyword gets hoisted and can acces before declaratin
function getname() {
  console.log("name is veekshith");
}
// api();
// cannot acces api methode before intilizing drawback in arrow function
const api = () => {
  console.log("call api");
};
vechile();
// before intializing if you try to acces it throw error saying its not a function becz it acts as an variable
var vechile = function () {
  console.log("car");
};
