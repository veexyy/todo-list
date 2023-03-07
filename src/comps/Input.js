import React from "react";

function Input() {
  const str = "Your Task";
  function inputClear() {
    const inp = document.getElementById("inp");
    inp.value = "";
  }
  return (
    <input
      type="text"
      name=""
      id="inp"
      placeholder={str}
      className=""
      onClick={inputClear}
    />
  );
}

export default Input;
