// constructor function
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// get summary prototype ----> share methods across all instances of a function
Book.prototype.getSummary = function() {
  return `${this.title} was writen by ${this.author} in ${this.year}.`;
};

// Magazine Constructor ---> create magazine object that inherits book properties
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Use Magazine constructor for method
Magazine.prototype.constructor = Magazine;
Magazine.prototype.getSummary = function() {
  return `${this.title} was writen by ${this.author}. This is the ${this.month} issue of ${
    this.year
  }.`;
};

// Init Magazine Object
const mag1 = new Magazine('Awsome Mag', 'Martin Muster', 2019, 'Mar');
const book1 = new Book('Book2', 'Amazing Author', '2010');
console.log(mag1.getSummary());
console.log(book1.getSummary());
