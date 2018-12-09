const isAccountLocked = false;
const userRole = 'admin';

if (isAccountLocked) {
  console.log('Account is locked');
} else if (userRole === 'admin') {
  console.log('Welcom Admin');
} else {
  console.log('Welcome');
}

const temp = 100;

if (temp < 5) {
  console.log('It is freezing outside');
} else if (temp > 32) {
  console.log('It is pretty hot outside');
} else {
  console.log('Go for it. It is pretty nice');
}
