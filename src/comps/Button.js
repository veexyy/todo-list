import React from "react";
import logo from "./cross-circle-svgrepo-com.svg";

function ButtonAdd() {
  let counter = 0;
  function f() {
    // add elems
    const inp = document.getElementById("inp");
    const tasks = document.querySelector(".tasks");
    const title = document.querySelector(".title");
    const remove = document.querySelector("logo");
    // clear title
    title.innerHTML = "";
    // counter for lists
    let a = counter++ + 1;
    // variable for value from input
    let inpVal = inp.value;
    // if value in input == undefined
    if (inpVal === "") return "";
    tasks.innerHTML += `<div class='task'> ${a}. ${inpVal} <img class='logo' src=${logo}></div> `;
    console.log(inpVal);
  }
  return (
    <button id="b-1" onClick={f}>
      Add
    </button>
  );
}

export default ButtonAdd;
