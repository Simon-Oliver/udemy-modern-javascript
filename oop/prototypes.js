function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// get summary prototype ----> share methods across all instances of a function
Book.prototype.getSummary = function() {
  return `${this.title} was writen by ${this.author} in ${this.year}.`;
};

// get age prototype -----> share methods across all instances of a function
Book.prototype.getAge = function() {
  const date = new Date().getFullYear();
  return date - this.year;
};

// Revise --- Change year
Book.prototype.revise = function(revised) {
  this.year = revised;
  this.revised = true;
};

// Instatiate an Object
const book1 = new Book('Book1', 'Super Author', '2019');
const book2 = new Book('Book2', 'Amazing Author', '2010');

console.log(book2.getSummary());
console.log(book2.getAge());

book1.revise(1991);
console.log(book1);
