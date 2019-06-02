class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;
    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}.`;
    });
    return bio;
  }

  setName(fullName) {
    const nameArr = fullName.split(' ');
    this.firstName = nameArr[0];
    this.lastName = nameArr[1];
  }
}

const myPerson = new Person('Urs', 'Fischer', 30);
console.log(myPerson.getBio());

// const Person = function(firstName, lastName, age, likes = []) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.likes = likes;
// };

// Person.prototype.getBio = function() {
//   let bio = `${this.firstName} is ${this.age}.`;
//   this.likes.forEach(like => {
//     bio += ` ${this.firstName} likes ${like}.`;
//   });
//   return bio;
// };

// Person.prototype.setName = function(fullName) {
//   const nameArr = fullName.split(' ');
//   this.firstName = nameArr[0];
//   this.lastName = nameArr[1];
// };

const person1 = new Person('Horton', 'test', 68, ['drawing', 'math']);
const person2 = new Person('Urs', 'test', 32);

person1.setName('Max Muster');
person2.setName('Willy Wonka');

console.log(person1.getBio());
console.log(person2.getBio());

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes = []) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }

  getBio() {
    return `${this.firstName} is a ${this.position}.`;
  }

  getYearsLeft() {
    return 65 - this.age;
  }
}

const emp1 = new Employee('Max', 'Mustermann', 58, 'Chef', ['Reading', 'Cooking']);
console.log(emp1.getBio());
console.log(emp1.getYearsLeft());
