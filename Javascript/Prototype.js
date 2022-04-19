/** @format */

function Person1(name, age) {
  this.name = name;
  this.age = age;
  this.display = function () {
    console.log(this.name);
  };
}
const person1 = new Person1("veekshith", 25);
console.log(person1);

function Person(name, age) {
  this.name = name;
  this.age = age;
}
// All JS object inherit properties from prototype
//prototype is an object associate with evry function and object
// and also additional properties is attached to the object

// we use prtype chain in order to avoid rededency and also cleaner code

Person.prototype.display = function () {
  console.log(this.name);
};
const person = new Person("veekshith", 25);
person.display();

// every object has a property wch holds link to another object called protoype.
// so every prototype holds a link to its

//higher order function
const radius = [2, 3, 4, 5, 6];

const area = (radius) => {
  return Math.floor(Math.PI) * radius * radius;
};

const calculate = (radius, logic) => {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
