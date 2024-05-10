"use strict";

"use strict"; // Enables strict mode for better error handling

// Define the start date as July 11, 2022
let startDate = new Date("July 11, 2022");

// Define the end date as November 11, 2022
let endDate = new Date("November 11, 2022");

// Calculate the number of milliseconds in a day
let millisecondsPerDay = 1000 * 60 * 60 * 24;

// Calculate the difference in milliseconds between the end date and the start date
let time = endDate.getTime() - startDate.getTime();

// Calculate the difference in days by dividing the time difference by milliseconds per day
let dayDiff = time / millisecondsPerDay;

// Round the calculated day difference to the nearest whole number
let numDay = Math.round(dayDiff);

// Output the number of days between the dates
console.log("The number of days between the dates is " + numDay);
