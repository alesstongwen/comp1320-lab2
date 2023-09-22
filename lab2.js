var monthCodeMap = {
    January: 1,
    February: 4,
    March: 4,
    April: 0,
    May: 2,
    June: 5,
    July: 0,
    August: 3,
    September: 6,
    October: 1,
    November: 4,
    December: 6,
};

var weekCodes = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function isLeapYear(year) {
    let isItALeapYear = 0;
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    isItALeapYear = 1;
        }
    else {
    isItALeapYear = 0;
    }
    return isItALeapYear;
}

function specialOffsets(year) { 
    let monthCode = 0;
    if (Math.floor(year / 100) == 16) {
    monthCode = 6;
    return monthCode;
} else if (Math.floor(year / 100) == 17){
    monthCode = 4; 
    return monthCode;
} else if (Math.floor(year / 100) == 18){
    monthCode = 2;
    return monthCode;
} else if (Math.floor(year / 100) == 20){
    monthCode = 6;
    return monthCode;
} else if (Math.floor(year / 100) == 21){
    monthCode = 4;
    return monthCode;
}
    return monthCode;
}

function getDayOfTheWeek(year, month, day) {
    let answer;
    let answerTo;
    var weekDay;
    let tempText = month;
    const specialYear = specialOffsets(year);
    const lastTwoChar = year % 100; 
    // step 1
    const divisionOfLastTwoChar = Math.floor(lastTwoChar / 12); 
    // step 2
    const remainder = Math.floor(lastTwoChar - (divisionOfLastTwoChar*12)); 
    // step 3
    const numOfFour = Math.floor(remainder / 4); 
    // step 5
    let monthCodeA = monthCodeMap[tempText]; 
    answer = Math.floor(divisionOfLastTwoChar + remainder + numOfFour + day + monthCodeA + specialYear) % 7; 
    if (isLeapYear(year) == 1) { 
        if (month === "January" || month === "February"){
        answerTo = answer - 1;
        weekDay = weekCodes[answerTo];
        return weekDay;
        }
        weekDay = weekCodes[answer];
        return weekDay;
    }
    else {
        weekDay = weekCodes[answer];
        return weekDay;
        }
}


function makeCalendar(){
january(2023);
february(2023);
march(2023);
april(2023);
may(2023);
june(2023);
july(2023);
august(2023);
september(2023);
october(2023);
november(2023);
december(2023);
}

function january(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, "January", day);
        console.log(`1-${day}-2023 is a ${date}`);  
    }
}
function february(year) {
    for (let day = 1; day <= 28; day++) {
        const date = getDayOfTheWeek(year, "February", day);
        console.log(`2-${day}-2023 is a ${date}`)
    }
}
function march(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, "March", day);
        console.log(`3-${day}-2023 is a ${date}`)
    }
}
function april(year) {
    for (let day = 1; day <= 30; day++) {
        const date = getDayOfTheWeek(year, "April", day);
        console.log(`4-${day}-2023 is a ${date}`)
    }
}
function may(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, "May", day);
        console.log(`5-${day}-2023 is a ${date}`)
    }
}
function june(year) {
    for (let day = 1; day <= 30; day++) {
        const date = getDayOfTheWeek(year, "June", day);
        console.log(`6-${day}-2023 is a ${date}`)
    }
}
function july(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, "July", day);
        console.log(`7-${day}-2023 is a ${date}`)
    }
}
function august(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, "August", day);
        console.log(`8-${day}-2023 is a ${date}`)
    }
}
function september(year) {
    for (let day = 1; day <= 30; day++) {
        const date = getDayOfTheWeek(year, "September", day);
        console.log(`9-${day}-2023 is a ${date}`)
    }
}
function october(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, "October", day);
        console.log(`10-${day}-2023 is a ${date}`)
    }
}
function november(year) {
    for (let day = 1; day <= 30; day++) {
        const date = getDayOfTheWeek(year, "November", day);
        console.log(`11-${day}-2023 is a ${date}`)
    }
}
function december(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, "December", day);
        console.log(`12-${day}-2023 is a ${date}`)
    }
}

module.exports = { getDayOfTheWeek, makeCalendar }
