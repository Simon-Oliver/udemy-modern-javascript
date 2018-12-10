let name;

if (name === undefined) {
  console.log('Please provide a name');
} else {
  console.log(name);
}

const square = function(num) {
  console.log(num);
};

console.log(square(9)); // undefined as we didn't use return in square()
