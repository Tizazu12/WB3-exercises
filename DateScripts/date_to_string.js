"use strict"; 

let currentDate = new Date(); // Creates a new Date object representing the current date and time
console.log(currentDate.toString()); // Outputs the date and time in a human-readable string format
console.log(currentDate.toDateString()); // Outputs the date portion of the current date object as a human-readable string
console.log(currentDate.toUTCString()); // Outputs the date and time in UTC format
console.log(currentDate.toLocaleString()); // Outputs the date and time in a localized format, based on the user's locale
