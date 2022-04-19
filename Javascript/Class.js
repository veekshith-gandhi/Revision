/** @format */

//Classes are a template for creating objects
//The constructor method is a special method for creating and initializing an object created with a class.
//A constructor can use the super keyword to call the constructor of the super class

class car {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  ages(year) {
    return year - 1996;
  }
}

const myCar = new car("veekshith", 30);
// console.log(myCar.ages(22));

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }

  // Method
  calcArea() {
    return this.height * this.width;
  }
}

// const square = new Rectangle(10, 10);

// console.log(square.area);
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// person[0];
// console.log(person.firstName);

class Person {
  //constructor is a spl method for constructing and intializing object
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    console.log(this.name, "is a person ");
  }
}

// u can extend class so it inherit the properties
class Address extends Person {
  height = 100;
  constructor(name, age, state) {
    super(name, age); // its a spl keyword used to call the super constructor || calling parent constructor
    this.state = state;
  }
  width = () => {
    console.log(this.height);
  };
  profile() {
    console.log(`${this.name}  state is ${this.state}`);
  }
}

const details = new Person("veekshith", 25);
const fulldetails = new Address("mahesh", 44, "CNS");
// fulldetails.profile();
fulldetails.width();

// console.log(fulldetails);
// console.log(details);
