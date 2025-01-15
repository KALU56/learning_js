//Q1
const kal=[

]
//Q2
const kal1=[6,7,8,9,10]
console.log(kal1)
//Q3
console.log(kal1.length)
//Q4
const first = kal1[0];  // First item
const last = kal1[arr.length - 1];  // Last item
const middle = kal1[Math.floor(arr.length / 2)];  // Middle item

console.log(first);  
console.log(middle); 
console.log(last);   
//Q5
const mixedDataTypes = [true, 'hello', 23, 'world', 12.78, false];
console.log(mixedDataTypes)
//Q6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies)
//Q8
console.log(itCompanies.length)
//Q9
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length - 1])
//Q10
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
//Q11
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
//Q12Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
const sentence = companies.slice(0, -1).join(", ") + " and " + companies[companies.length - 1] + " are big IT companies.";

console.log(sentence);
//Q13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const company = "Google";
if (itCompanies.includes(company)) {
  console.log(company);
} else {  
  console.log("Company is not found");
} 
//Q14 Filter out companies which have more than one 'o' without the filter method
const companiesWithMoreThanOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i].toLowerCase().split("o").length - 1 > 1) {
    companiesWithMoreThanOneO.push(itCompanies[i]);
  }
}
console.log(companiesWithMoreThanOneO);
//Q15 Sort the array using sort() method
console.log(itCompanies.sort());
//Q16 Reverse the array using reverse() method
console.log(itCompanies.reverse());
//Q17 Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
//Q18 Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));
//Q19 Slice out the middle IT company or companies from the array
const middleIndex1 = Math.floor(itCompanies.length / 2);
const count = itCompanies.length % 2 === 0 ? 2 : 1;
console.log(itCompanies.slice(middleIndex1, middleIndex1 + count));
//Q20 Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);
//Q21 Remove the middle IT company or companies from the array
const middleIndex = Math.floor(itCompanies.length / 2);
const count1 = itCompanies.length % 2 === 0 ? 2 : 1;
itCompanies.splice(middleIndex, count1);
console.log(itCompanies);
//Q22 Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);
//Q23 Remove all IT companies
itCompanies.splice(0);





