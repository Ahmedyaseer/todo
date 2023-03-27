"use strict";

// add tasks to box 1
const start = () => {
  const items = JSON.parse(localStorage.getItem("tasks")) || [];
  for (let item of items) {
    allboxs[0].innerHTML += `<div class="packs">
    <p class="text" draggable="true"> ${item} </p>
    <button class="delete" type ="button" draggable="true" > X </button>
    </div>`;
  }
};
// start();

const getItemsFromStorage = () => {
  const items = [];
  const test = JSON.parse(localStorage.getItem("tasks"));

  for (let i = 0; i < test.length; i++) {
    items.push(test[i]);
  }

  console.log(items);
};
getItemsFromStorage();
