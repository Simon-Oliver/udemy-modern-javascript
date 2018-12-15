const num = 123.9432;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

const min = 10;
const max = 20;

const randomNum = Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomNum);

function guessNum(guess) {
  const min = 5;
  const max = 10;
  const randomNum = Math.floor(Math.random() * (max - min) + 1) + min;
  console.log(randomNum);
  return guess === randomNum;
}
console.log(5, guessNum(5));
console.log(6, guessNum(6));
console.log(7, guessNum(7));
console.log(8, guessNum(8));
console.log(9, guessNum(9));
console.log(10, guessNum(10));
