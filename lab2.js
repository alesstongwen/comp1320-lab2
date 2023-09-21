const monthCodeMap = {
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
const weekCodes = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 == 0 && year % 100 == 0) {
        return(-1);
        }
    else if (year % 4 == 0 && year % 100 != 0) {
        return(-1);
    }
    else {
        return(0);
    }
}

function sum (divisonOfLastTwoChar, remainder, numOfFour, dayOfMonth, monthCode) {
    return (
        (divisonOfLastTwoChar + 
            remainder + 
            numOfFour + 
            dayOfMonth + 
            monthCode) % 7
            ); 
        }

function getDayOfTheWeek(year, month, day) {
    const lastTwoChar = year % 100; 
    // step 1
    const divisonOfLastTwoChar = Math.floor(lastTwoChar / 12); 
    // step 2
    const remainder = lastTwoChar % 12; 
    // step 3
    const numOfFour = Math.floor(divisonOfLastTwoChar / 4); 
    // step 4
    const dayOfMonth = day; 
    // step 5
    let monthCode = monthCodeMap[month]; 
    const weekNum = sum(divisonOfLastTwoChar, remainder, numOfFour, dayOfMonth, monthCode);
    monthCode = isLeapYear(year);
    const specialYear = specialOffsets(year);
    
    return weekCodes[weekNum];
}

function specialOffsets(year) { 
    if (Math.floor(year / 100) == 16) {
    monthCode += 6;
} else if (Math.floor(year / 100 == 17)){
    monthCode += 4; 
} else if (Math.floor(year / 100 == 18)){
    monthCode += 2;
} else if (Math.floor(year / 100 == 20)){
    monthCode += 6;
} else if (Math.floor(year / 100 == 21)){
    monthCode += 4;
}
    return monthCode;
}

function makeCalendar(){
console.log(january(2023));
console.log(february(2023));
console.log(march(2023));
console.log(april(2023));
console.log(may(2023));
console.log(june(2023));
console.log(july(2023));
console.log(august(2023));
console.log(september(2023));
console.log(october(2023));
console.log(november(2023));
console.log(december(2023));
}

function january(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, 'january', day);
    console.log(`1-${day}-2023 is a ${date}`);
    }
}
function february(year) {
    for (let day = 1; day <= 28; day++) {
        const date = getDayOfTheWeek(year, 'february', day);
        console.log(`2-${day}-2023 is a ${date}`)
    }
}
function march(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, 'march', day);
        console.log(`3-${day}-2023 is a ${date}`)
    }
}
function april(year) {
    for (let day = 1; day <= 30; day++) {
        const date = getDayOfTheWeek(year, 'april', day);
        console.log(`4-${day}-2023 is a ${date}`)
    }
}
function may(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, 'may', day);
        console.log(`5-${day}-2023 is a ${date}`)
    }
}
function june(year) {
    for (let day = 1; day <= 30; day++) {
        const date = getDayOfTheWeek(year, 'june', day);
        console.log(`6-${day}-2023 is a ${date}`)
    }
}
function july(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, 'july', day);
        console.log(`7-${day}-2023 is a ${date}`)
    }
}
function august(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, 'august', day);
        console.log(`8-${day}-2023 is a ${date}`)
    }
}
function september(year) {
    for (let day = 1; day <= 30; day++) {
        const date = getDayOfTheWeek(year, 'september', day);
        console.log(`9-${day}-2023 is a ${date}`)
    }
}
function october(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, 'october', day);
        console.log(`10-${day}-2023 is a ${date}`)
    }
}
function november(year) {
    for (let day = 1; day <= 30; day++) {
        const date = getDayOfTheWeek(year, 'november', day);
        console.log(`11-${day}-2023 is a ${date}`)
    }
}
function december(year) {
    for (let day = 1; day <= 31; day++) {
        const date = getDayOfTheWeek(year, 'december', day);
        console.log(`12-${day}-2023 is a ${date}`)
    }
}
        
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

        module.exports = { getDayOfTheWeek, makeCalendar }
