class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was writen by ${this.author} in ${this.year}.`;
  }
}

// Init Object
const book1 = new Book('Class Book', 'Max Muster', 1991);

// Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }

  getSummary() {
    return `${this.title} was writen by ${this.author} in ${this.year} of ${this.month}.`;
  }
}

// Init magazine
const mag1 = new Magazine('Class Mag', 'Super Author', 1991, 'Mai');

console.log(book1.getSummary());
console.log(mag1.getSummary());
