//Exercise 1
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

const emptyArr = [];
const  fiveElements = [1, 2, 3, 4, 5];

const myArr2 = fiveElements.length;
console.log("3", myArr2);

const firstAndLast = fiveElements.slice(0, 1).concat(fiveElements.slice(-1));
console.log("4", firstAndLast);

const mixedDataTypes = [1, "one", 2, "two", "can", "cat", 3, "ten"];
const mixedLength = mixedDataTypes.length;
console.log("5", mixedLength);

const itCompanies = ["Facebook", "google", "microsoft", "apple", "IBM", "oracle", "amazon"];
const itLength = itCompanies.length;

console.log("print array", itCompanies);
console.log("Number of:", itCompanies[0]);
console.log("First, mid, last", itCompanies[0], itCompanies[Math.floor(itLength/2)], itCompanies[itLength - 1]);

itCompanies.forEach(function (each) {
  console.log("Print each", each)
})