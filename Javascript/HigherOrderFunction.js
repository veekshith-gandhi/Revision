/** @format */

//higher order function

function x() {
  // call back function
  return true;
}
function y(x) {
  // which takes function x as an argument is called higher order function
  x();
}

const radius = [2, 3, 4, 5, 6];

const area = (radius) => {
  return Math.floor(Math.PI) * radius * radius;
};
const circumfurence = (radius) => {
  return radius * 2;
};

const calculate = (radius, logic) => {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
// generic
Array.prototype.myMap = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(calculate(radius, area));

console.log(radius.myMap(circumfurence));
//can write your own logic after attaching
console.log(radius.myMap((i) => i + 7));
