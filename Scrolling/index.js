/** @format */

const container = document.querySelector(".container");

var number = 1;
function loadlist() {
  for (let i = 0; i < 25; i++) {
    const li = document.createElement("li");
    li.className = "list";
    li.innerHTML = `item ${number++}`;
    container.appendChild(li);
  }
}

container.onscroll = () => {
  if (container.scrollTop + container.clientHeight == container.scrollHeight) {
    loadlist();
  }
};

window.onload = () => {
  loadlist();
};
