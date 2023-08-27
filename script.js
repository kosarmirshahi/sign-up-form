"use strict";

const buttonElement = document.querySelector(".subBtn");
const inputElement = document.querySelector(".emailInput");
const validationText = document.querySelector("#validationP");
const modal = document.querySelector(".box");
buttonElement.addEventListener("click", function () {
  const inputValue = inputElement.value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (inputValue === "") {
    inputElement.style.border = "hsl(4, 100%, 67%) solid 1px";
    inputElement.style.backgroundColor = "#FDAFAF";
    validationText.style.display = "block";
  } else {
    if (emailRegex.test(inputValue)) {
      window.location.href = "notification.html";

      console.log("yyy");
    } else {
      inputElement.style.border = "hsl(4, 100%, 67%) solid 1px";
      inputElement.style.backgroundColor = "#FDAFAF";
      validationText.style.display = "block";
    }
    // inputElement.style.border = "hsl(231, 7%, 60%) solid 1px";
    // inputElement.style.backgroundColor = "white";
    // validationText.style.display = "none";
    // validationText.textContent = "Email is valid.";
    // inputElement.style.border = "green solid 2px";
  }
});
