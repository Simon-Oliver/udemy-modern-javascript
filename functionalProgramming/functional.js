function add(a) {
  return function addingB(b) {
    return a + b;
  };
}

const add10 = add(10);

console.log(add(10)(10));
console.log(add10(20));
