const temp = 29;

if (temp > 42 || temp <= -10) {
  console.log('Extreme Temperature');
} else if (temp >= 14 && temp <= 28) {
  console.log('It is perfect outside');
} else if (temp >= 29) {
  console.log('It is a bit warm outside');
} else if (temp <= 13 && temp >= 5) {
  console.log('It is a bit cold outsied');
}

const isGuestOneVegan = false;
const isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only Vegan');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Here are some Vegand options');
} else {
  console.log('Have anything');
}
