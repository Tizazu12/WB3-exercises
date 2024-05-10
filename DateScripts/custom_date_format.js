"use strict";
let currentDate = new Date();
let day = currentDate.getDate();
let month =currentDate.getMonth();
let year = currentDate.getFullYear();
let weekdays = currentDate.getDay();
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDayOfWeek = daysOfWeek[weekdays]; // Get the name of the current day of the week from the daysOfWeek array

console.log(currentDayOfWeek);
//console.log(weekdays.toString())
console.log(day + "-" + month +"-" + year +"- "+ currentDayOfWeek)