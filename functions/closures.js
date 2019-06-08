const myFunc = () => {
  const message = 'this is my message';
  const print = otherWord => {
    console.log(`${message} ${otherWord}`);
  };
  return print;
};

const myMessage = myFunc();
myMessage('TEST TEST');

const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// Adder

const adder = a => {
  return number => {
    return a + number;
  };
};

const add10 = adder(10);

console.log(add10(30));

// Tipper
const createTipper = tipp => {
  return amount => {
    return amount * tipp;
  };
};

const tipp10 = createTipper(0.15);
console.log(tipp10(100));
