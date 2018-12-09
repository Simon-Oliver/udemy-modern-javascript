const temp = 35;
const isFreezing = temp < 10;

if (isFreezing) {
  console.log("It's freezing outside");
}

const age = 6;

const isChild = age <= 7;
const isSenior = age >= 65;

if (isChild) {
  console.log("You're a child");
} else if (isSenior) {
  console.log("You're a senior");
} else {
  console.log('You pay normal rates');
}
