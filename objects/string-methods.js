const nameFirst = 'Max Muster';
console.log(nameFirst.toUpperCase());

const password = 'abc123password0987';

console.log(password.includes('password'));

const whitespace = '         James     ';
console.log(whitespace.trim());

function isValidPw(pwString) {
  return pwString.length > 8 && !pwString.includes('password');
}

console.log(isValidPw('hffh'));
