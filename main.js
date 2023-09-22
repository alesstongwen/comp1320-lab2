var readline = require("readline-sync");
var getDayOfTheWeek = require("./lab2").getDayOfTheWeek; 
var makeCalendar = require("./lab2").makeCalendar;


// remember to make a function of getDayOfTheWeekForUserDate()

function getDayOfTheWeekForUserDate() {
    var year = readline.question("Enter a Year: "); 
    var month = readline.question("Enter a month: ");
    var day = readline.question("Enter a date: ");
    console.log(getDayOfTheWeek(parseInt(year), month, parseInt(day)));
};

getDayOfTheWeekForUserDate();
makeCalendar();

