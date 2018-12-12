const book = {
  title: '1980',
  author: 'George Orwell',
  pageCount: 255
};

console.log(`${book.title} by ${book.author}`);

const myPerson = {
  name: 'Max',
  age: 45,
  location: 'Berlin'
};

console.log(
  `${myPerson.name} lives in ${myPerson.location} and is ${
    myPerson.age
  } years old`
);
myPerson.age += 10;
console.log(
  `${myPerson.name} lives in ${myPerson.location} and is ${
    myPerson.age
  } years old`
);
