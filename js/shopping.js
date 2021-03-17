"use strict";

const plusBtn = document.querySelector(".plus");
const lists = document.querySelector(".lists");
const form = document.querySelector("form");

function appendList() {
  const list = document.querySelector(".typing");
  if (list === "") {
    return;
  }
  const li = document.createElement("li");
  li.getAttribute("class", "list");
  li.innerHTML = `${list.value}
    <i class="fas fa-trash-alt trash"></i>`;
  lists.appendChild(li);
  list.value = "";
}
function deletList(target) {
  lists.removeChild(target.parentNode);
}

plusBtn.addEventListener("click", () => {
  appendList();
});

lists.addEventListener("click", (event) => {
  if (event.target.className === "fas fa-trash-alt trash") {
    deletList(event.target);
  }
});

form.addEventListener("submit", () => {
  appendList();
});
