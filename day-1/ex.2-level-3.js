//Q1Write a program which tells the number of days in a month.
//Enter a month: January
//January has 31 days.
//Enter a month: JANUARY
//January has 31 day
//Enter a month: February 
//February has 28 days.
//Enter a month: FEbruary
//February has 28 days.
let month = prompt('Enter a month');
let months = month.toLowerCase();
switch (months) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log(`${months} has 31 days`);
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log(`${months} has 30 days`);
    break;
  case 'february':
    console.log(`${months} has 28 days`);
    break;
  default:
    console.log('Invalid month');
}
//Q2Write a program which tells the number of days in a month, now consider leap year.
//Enter a month: January
//January has 31 days.
//Enter a month: JANUARY
//January has 31 day
//Enter a month: February
//February has 29 days in a leap year and 28 days in non-leap year
//Enter a month: FEbruary
//February has 29 days in a leap year and 28 days in non-leap year
let month1 = prompt('Enter a month');
let months1 = month1.toLowerCase();
let year = prompt('Enter a year');
let leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0; 
switch (months1) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log(`${months1} has 31 days`);
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log(`${months1} has 30 days`);
    break;
  case 'february':
    console.log(leapYear ? `${months1} has 29 days` : `${months1} has 28 days`);
    break;
  default:
    console.log('Invalid month');
}
//Q3Write a program which tells the number of days in a month, now consider leap year.
//Enter a month: January
//Enter a year: 2020
//January has 31 days.
//Enter a month: JANUARY
//Enter a year: 2020
//January has 31 day
//Enter a month: February
//Enter a year: 2021
//February has 28 days in a non-leap year
//Enter a month: FEbruary
//Enter a year: 2021
//February has 28 days in a non-leap year
let month2 = prompt('Enter a month');
let months2 = month2.toLowerCase();
let year1 = prompt('Enter a year');
let leapYear1 = (year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 === 0;
switch (months2) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log(`${months2} has 31 days`);
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log(`${months2} has 30 days`);
    break;
  case 'february':
    console.log(leapYear1 ? `${months2} has 29 days` : `${months2} has 28 days`);
    break;
  default:
    console.log('Invalid month');
}


