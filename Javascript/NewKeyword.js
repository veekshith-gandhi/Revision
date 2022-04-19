/** @format */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

//basicaly new created instance of the object and return it
const person = new Person("veekshith", 25);
console.log(person);

//like
function Person1(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}
const person1 = Person1("veekshith", 25);
console.log(person1);
