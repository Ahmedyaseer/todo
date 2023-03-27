"use strict";

// Genral Definations

let input = document.getElementById("input");
let addBtn = document.querySelector(".btn");

let notStartBox = document.querySelectorAll(".box1");
const arrayNotStart = [];

let inProgressBox = document.querySelectorAll(".box2");
const arrayInProgress = [];

let completedBox = document.querySelectorAll(".box3");
const arrayCompleted = [];

let allboxs = document.querySelectorAll(".placeToadd");

let arr = [];
// Add function
const addFunction = function () {
  if (input.value !== " ") {
    notStartBox[0].innerHTML += `<div class="packs">
    <p class="text" draggable="true"> ${input.value} </p>
    <button class="delete" type ="button" draggable="true" > X </button>
    </div>`;
    arrayNotStart.push(input.value);
  }
  input.value = "";
  dragItem();
  let setLocal = JSON.stringify(arrayNotStart);
  localStorage.setItem("tasks", setLocal);
};

// // Add the input when you click Add btn

addBtn.addEventListener("click", addFunction);

// // Add the input when you Press Enter

document.addEventListener("keydown", function (enter) {
  if (enter.key === "Enter") {
    addFunction();
  }
});

// Drag  Functions

// 1. Drag Function on item

let drag = null;

function dragItem() {
  // |. Drag on item itself
  let divItemsPacks = document.querySelectorAll(".packs");
  for (let item of divItemsPacks) {
    //1. dragStart
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.25";
      // splice the item from notstarted array
      // arrayNotStart.splice(item);
    });

    //2. dragEnd
    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });

    // || Drag on Box
    for (let box of allboxs) {
      //3. dragOver
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.background = "#090";
        this.style.color = "#fff";
      });
      //4. dragLeave
      box.addEventListener("dragleave", function () {
        this.style.background = "#fff";
        this.style.color = "#000";
      });
      // ||| Drop box
      box.addEventListener("drop", function () {
        box.append(drag);
        this.style.background = "#fff";
        this.style.color = "#000";
        // arrayInProgress.push(item);
      });
    }
  }
}
