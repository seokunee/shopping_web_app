"use strict";

const addBtn = document.querySelector(".footer__addBtn");
const lists = document.querySelector(".lists");
const input = document.querySelector(".input");

function appendList() {
  const input = document.querySelector(".input");
  if (input.value === "") {
    input.focus();
    return;
  }

  const list__row = creatList(input);

  lists.appendChild(list__row);
  list__row.scrollIntoView();
  input.value = "";
  input.focus();
}
function creatList(input) {
  const li = document.createElement("li");
  li.setAttribute("class", "list__row");

  const div = document.createElement("div");
  div.setAttribute("class", "list");

  const span = document.createElement("span");
  span.setAttribute("class", "list__name");
  span.innerText = `${input.value}`;

  const button = document.createElement("button");
  button.setAttribute("class", "list__delete");
  button.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  button.addEventListener("click", () => {
    deletList(li);
  });

  const divider = document.createElement("div");
  divider.setAttribute("class", "list__divider");

  div.appendChild(span);
  div.appendChild(button);
  li.appendChild(div);
  li.appendChild(divider);

  return li;
}

function deletList(list) {
  lists.removeChild(list);
}

addBtn.addEventListener("click", () => {
  appendList();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    appendList();
  }
});
