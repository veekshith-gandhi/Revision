/** @format */

/**
 * call apply bind is used to set this key word independent of a how function is called
 * bind method creates a copy of the function and st this keyword
 * call apply methods set this keyword and call function immdediatly
 */

let person = {
  firstname: "veekshith",
  lastname: "gandhi",
};

function print(town, city) {
  console.log(`${this.firstname} -- ${this.lastname} ${town} - ${city}`);
}

//first argu is this instence of a person object
// it can be used to invoke a function by passing object as an argu
print.call(person, "CKM", "KR");

//oly difference in apply is how we pass the argument we pass it in 2nd argu as an array
print.apply(person, ["MH", "TM"]);

//what bind method does is , it binds and keeps the copy of the method and use when ever its required by invoking
let copy = print.bind(person, "RCB", "CSK");
copy();
