//practice problem


//Q1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Enter your age: 30, you are old enough to drive
// Enter your age:15, you will be allowed to drive after 3 years.
let age = prompt('Enter your age');
let ages=18-age
if (ages>18){
  console.log('You are old enough to drive');
}
else{
  console.log(`You will be allowed to drive after ${ages} years`);
}

//Q2 Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 21;
let yourAge = prompt('Enter your age');
if (myAge>yourAge){
  console.log('I am older than you');
} else{
  console.log('You are older than me');
}
//Q3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4;
let b = 3;

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);
//or
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}
//Q4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2, 2 is an even number
// Enter a number: 9, 9 is is an odd number.
let number = prompt('Enter a number');
if (number % 2 === 0) {
  console.log(`${number} is an even number`);
}
else {
  console.log(`${number} is an odd number`);
}




