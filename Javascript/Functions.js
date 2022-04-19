/** @format */

//this keyword
let object = {
  name: "veekshith",
  test: function () {
    // points to the instance of the object only when it is wrapped inside function
    const arrowFunction = () => {
      console.log(this);
    };
    arrowFunction();
  },
  // points to the instance of the object
  regularFunction: function () {
    console.log(this);
  },
  //do not have their own this
  arrowFunction: () => {
    console.log(this);
  },
};
// object.test();
// object.regularFunction();
// object.arrowFunction();

//new keyword
const NewPerson1 = (name, age) => {
  this.name = name;
  this.age = age;
};

function NewPerson(name, age) {
  this.name = name;
  this.age = age;
}

// console.log(new NewPerson1("veek", 23)); // its not a constructor cannot use new keyword
// console.log(new NewPerson("veek", 23)); // can invoke using new , its callable and constructable

//return statement

const aplle = (i) => i * 2;
function pineapple(i) {
  return i * 2;
}

// arguments

function car() {
  console.log(arguments);
}

const bike = (...arguments) => {
  console.log(arguments); // its not defined inside here
};
car(1, 2, 3, 4);
bike(1, 2, 3, 4);
