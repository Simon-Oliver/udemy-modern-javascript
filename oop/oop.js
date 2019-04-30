function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.logInfo = function() {
    return `${this.title} was writen by ${this.author} in ${this.year}.`;
  };
}

// Instatiate an Object
const book1 = new Book('Book1', 'Super Author', '2019');
const book2 = new Book('Book2', 'Amazing Author', '2010');

book2.logInfo();
