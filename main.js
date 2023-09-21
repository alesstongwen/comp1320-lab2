var readline = require("readline-sync");
var getDayOfTheWeek = require("./lab2").getDayOfTheWeek; 
var makeCalendar = require("./lab2").makeCalendar;

var year = readline.question("Enter a Year: "); 
var month = readline.question("Enter a month: ");
var day = readline.question("Enter a date: ");

const dayOfWeek = getDayOfTheWeek(year, month, day);
console.log(dayOfWeek);

console.log(makeCalendar());
