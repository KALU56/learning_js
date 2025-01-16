//Q1Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
//Q2Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
const score = prompt('Enter your score');
if (score >= 80) {
  console.log('A');
} else if (score >= 70) {
  console.log('B');
} else if (score >= 60) {
  console.log('C');
} else if (score >= 50) {
  console.log('D');
} else {
  console.log('F');
}
let season = prompt('Enter the season');
let month = season.toLowerCase();
switch (month) {
  case 'september':
  case 'october':
  case 'november':
    console.log('Autumn');
    break;
  case 'december':
  case 'january':
  case 'february':
    console.log('Winter');
    break;
  case 'march':
  case 'april':
  case 'may':
    console.log('Spring');
    break;
  case 'june':
  case 'july':
  case 'august':
    console.log('Summer');
    break;
  default:
    console.log('Invalid season');
}
//Q3Check if a day is weekend day or a working day. Your script will take day as an input.
day1=prompt('Enter the day');
let days = day1.toLowerCase();
switch (days) {
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
  case 'friday':
    console.log('Working day');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Weekend');
    break;
  default:
    console.log('Invalid day');
}

