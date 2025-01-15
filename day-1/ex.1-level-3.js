//Q1The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
const min = ages[0];
const max = ages[ages.length - 1];
console.log(min, max);
let median;
if (ages.length % 2 === 0) {
  median = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
}
else {
  median = ages[Math.floor(ages.length / 2)];
}
console.log(median);
let sum = 0;
for (const age of ages) {
  sum += age;
}
const average = sum / ages.length;
console.log(average);
const range = max - min;
console.log(range);
const diff1 = Math.abs(min - average);
const diff2 = Math.abs(max - average);
console.log(diff1, diff2);

