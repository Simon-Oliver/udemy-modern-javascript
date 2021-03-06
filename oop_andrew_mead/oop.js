class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.fullName} is ${this.age}.`;
    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}.`;
    });
    return bio;
  }

  set fullName(fullName) {
    const nameArr = fullName.split(' ');
    this.firstName = nameArr[0];
    this.lastName = nameArr[1];
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
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

class Student extends Person {
  constructor(firstName, lastName, age, grades = 0, likes = []) {
    super(firstName, lastName, age, likes);
    this.grades = grades;
  }

  updatedGrades(newGrades) {
    this.grades += newGrades;
  }

  getBio() {
    const passing = this.grades > 70;

    return `${this.fullName} is ${passing ? '' : 'not '}passing.`;
  }
}

const max = new Student('Max', 'Muster', 17, 20, ['Sketching', 'Cooking']);
max.updatedGrades(-70);
console.log(max.getBio());
max.fullName = `William Turner`;
console.log(max.getBio());
console.log(max);
