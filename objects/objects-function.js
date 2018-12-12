const book = {
  title: '1980',
  author: 'George Orwell',
  pageCount: 255
};

const book2 = {
  title: 'Fiction Book',
  author: 'Max Muster',
  pageCount: 120
};

function logBook(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSum: `${book.title} is ${book.pageCount} pages long`
  };
}

console.log(logBook(book).summary);
console.log(logBook(book2).pageCountSum);

// Challenge

const celcius = 10;

function convertCtoFandK(c) {
  return {
    kelvin: `${c + 273.15} °K`,
    fahrenheit: `${c * (9 / 5) + 32} F`,
    celcius: `${c}°C`
  };
}
console.log(convertCtoFandK(celcius).kelvin);
console.log(convertCtoFandK(celcius).fahrenheit);
console.log(convertCtoFandK(celcius).celcius);
