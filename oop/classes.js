class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was writen by ${this.author} in ${this.year}.`;
  }

  getAge() {
    const date = new Date().getFullYear();
    return date - this.year;
  }

  revise(revised) {
    this.year = revised;
    this.revised = true;
  }
}

// Init Object
const book1 = new Book('Class Book', 'Max Muster', 1991);

console.log(book1);
