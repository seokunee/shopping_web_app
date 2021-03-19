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

  li.innerHTML = `<div class="list">
                        <span class="list__name">
                        ${input.value}
                        </span>
                        <button class="list__delete">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                    <div class="list__divider"></div>
                  `;

  return li;
}

function deletList(list) {
  list.remove();
}

addBtn.addEventListener("click", () => {
  appendList();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    appendList();
  }
});

lists.addEventListener("click", (event) => {
  if (event.target.className === "fas fa-trash-alt") {
    deletList(event.target.parentNode.parentNode.parentNode);
  }
});
