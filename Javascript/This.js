/** @format */

// This referce to the object executing the current function

const car = {
  width: 100,
  drive() {
    // Consider a function inside a object that is method which always points to the current object
    console.log(this);
    function speed(params) {
      // this is a normal function so its pointing to window object
      console.log(this);
    }
    speed();
  },
};
car.stop = function () {
  console.log(this);
};

car.drive();

function video() {
  console.log(this);
}
//regular function it points to global scope or in browser window object
// video();

function apple(title) {
  this.title = title;
  console.log(this);
}
// instead of window object you get apple object because we use new keyword it create instance of the object
console.log(new apple("helo"));

const game = {
  title: "android",
  tags: [1, 2, 3],
  display() {
    // regular function points to window so we modified by senfing 2parameter inside forach
    this.tags.forEach(function (i) {
      console.log(this.title, i);
    }, this);
  },
};
game.display();
