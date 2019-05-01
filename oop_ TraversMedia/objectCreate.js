// Object Of Protos
const bookProtos = {
  getSummary() {
    return `${this.title} was writen by ${this.author} in ${this.year}.`;
  },
  getAge() {
    const date = new Date().getFullYear();
    return date - this.year;
  }
};

// Create Object

const book1 = Object.create(bookProtos, {
  title: {
    writable: true,
    configurable: true,
    value: 'Book One',
    enumerable: true // if set to false it wont show in Node.js
  },
  author: { value: 'Max Muster' },
  year: { value: '2017' }
});

console.log(book1);
