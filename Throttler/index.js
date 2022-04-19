/** @format */

let count = 0;
const callApi = () => {
  console.log("API");
};

const throttler = (fun, wait) => {
  let flag = true;
  let timer = 0;
  return function () {
    console.log(count++);

    if (flag) {
      flag = false;
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        fun.apply(this, arguments);
        flag = true;
      }, wait);
    }
  };
};

const btn = document.getElementById("btn");
btn.addEventListener("click", throttler(callApi, 1000));
//making calls on every given interval of time and also check when was the last call made
