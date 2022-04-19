/** @format */

let count = 1;
const callApi = () => {
  console.log("API");
};

const debouncer = (fun, delay) => {
  let timer;

  return function () {
    console.log(count++);

    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      // console.log(this);
      // fun()
      fun.apply(this, arguments);
    }, delay);
  };
};

const btn = document.getElementById("btn");

//limiting the rate of function call
btn.addEventListener("click", debouncer(callApi, 2000));
