"use strict"
window.onload = init; 
Input = document.getElementById("date");
const clickButton = document.getElementById("clickBtn");
const messageParagraph = document.getElementById("message");

let onBtnClicked = document.getElementById("clickBtn")


function init(onBtnClicked) {
  const selectedDate = dateInput.value;
  const currentDate = new Date().toISOString().slice(0, 10);

  if (selectedDate === currentDate) {
      messageParagraph.textContent = "Selected date is today!";
  } else if (selectedDate > currentDate) {
      messageParagraph.textContent = "Selected date is in the future!";
  } else {
      messageParagraph.textContent = "Selected date is in the past!";}
    

}





