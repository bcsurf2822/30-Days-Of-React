//Exercise Level 1
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

const itCompanies = ["facebook", "google", "microsoft", "apple", "ibm", "oracle", "amazon"];
const itLength = itCompanies.length;

console.log("print array", itCompanies);
console.log("Number of:", itCompanies[0]);
console.log("First, mid, last", itCompanies[0], itCompanies[Math.floor(itLength/2)], itCompanies[itLength - 1]);

itCompanies.forEach(function (each) {
   console.log(each)
});

let emptySent = "All To Upper";
 itCompanies.forEach(function (each) {
  let newSent = each.toUpperCase();
  console.log(newSent)

})

const bigCompanies = itCompanies.slice(0, -1).join(", ") + ", and " + itCompanies.slice(-1) + " are big it companies";
console.log("Big Companies:" , bigCompanies);

//13
if (itCompanies.includes("Facebook")) {
  console.log("Company FB exist");
} else {
  console.log("Company Not found");
}

//14
const filteredComp = []
for (let i = 0; i < itCompanies.length; i++) {
  let letter = 0;
  for (let j = 0; j < itCompanies[i].length; j++) {
    if (itCompanies[i][j].toLowerCase() === "o") {
      letter++;
    }
  }
  if (letter <= 1) {
    filteredComp.push(itCompanies[i]);
  }
}
console.log("More than one O:", filteredComp);

//15

const sortedIt = itCompanies.sort();
console.log("sorted:", sortedIt);

//16
const itReverse = itCompanies.reverse();

console.log("Reverse", itReverse);

//17
console.log("first3 sliced:", itCompanies.slice(0, 3))

//18
const lastThree = itCompanies.slice(-3)
console.log("Slice last 3:", lastThree);

//19
const middleItem = itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1);
console.log("Slice Mid", middleItem);

//20
const removeFirst = itCompanies.shift();
console.log("Shift First:", removeFirst);
console.log("first out", itCompanies);

//21
const middleIndex = Math.floor(itCompanies.lenth / 2);
itCompanies.splice(middleIndex, 1);
// console.log("Middle Removed", removeMiddle)
console.log("Removed Mid:" , itCompanies);

//22
itCompanies.pop();
console.log("Popped Last:", itCompanies);

//23
itCompanies.length = 0;
console.log("all removed:", itCompanies)

