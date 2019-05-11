const Person = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

Person.prototype.getBio = function() {
  return `${this.firstName} is ${this.age}`;
};

Person.prototype.setName = function(fullName) {
  const nameArr = fullName.split(' ');
  this.firstName = nameArr[0];
  this.lastName = nameArr[1];
};

const person1 = new Person('Horton', 'test', 68);
const person2 = new Person('Urs', 'test', 32);

person1.setName('Max Muster');
person2.setName('Willy Wonka');

console.log(person1.getBio());
console.log(person2.getBio());
