/** @format */

//closure is a function binds together to its lexical environment
// currying is a functon which accepts multiple arguent

function outer() {
  var a = 10;
  return function inner(b) {
    console.log(a + b);
  };
}

// outer()(2);
// memoization is possible because of closure

function calculator(init = 0) {
  let value = init;
  function add(num) {
    value = value + num;
    return value;
  }
  return { add };
}

const addition = calculator(4);
// console.log(addition.add(5));
// console.log(addition.add(5));

// debouncing
// debouncing means limiting the rate of function call
//debouncer1 accepts the function and accepts the delay u want

let count = 0;
const apiCall = () => {
  console.log("api call");
};

const debouncer1 = (fun, delay) => {
  let debouncing;
  return function () {
    console.log(count++);

    debouncing && clearTimeout(debouncing);
    debouncing = setTimeout(() => {
      console.log(this, arguments);
      return fun.apply(this, arguments);
    }, delay);
  };
};

window.onload = () => {
  const click = document.getElementById("click");
  click.addEventListener("click", debouncer1(apiCall, 1000));
};

// throttler which means gurainty the call for every given interva of time , like when was the last call was made
//example

const apiCall = () => {
  console.log("api call");
};
let i = 0;

const throttler = (fun, wait) => {
  console.log(i++);
  let lastCall = 0;
  return function () {
    console.log(i++);
    if (Date.now() - lastCall > wait) {
      lastCall = Date.now();
      fun.apply(this, arguments);
    }
  };
};

window.onload = () => {
  const click = document.getElementById("click");
  click.addEventListener("click", throttler(apiCall, 2000));
};

//toggle example
function toggle() {
  let arg = arguments;
  let index = -1;
  return function () {
    index = index + 1;
    if (index >= arg.length) {
      index = 0;
    }
    return arg[index];
  };
}

// const res = toggle(1, 2, 3);
// const res = toggle("on", "off");

// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());
