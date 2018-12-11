function studentScore(points, totalPoints) {
  const percent = (points / totalPoints) * 100;
  let grade = '';

  if (percent > 90) {
    grade = 'A';
  }
  if (percent >= 80 && percent <= 89) {
    grade = 'B';
  }
  if (percent >= 70 && percent <= 79) {
    grade = 'C';
  }
  if (percent >= 60 && percent <= 69) {
    grade = 'D';
  }
  if (percent >= 0 && percent <= 59) {
    grade = 'F';
  }

  return `You got a ${grade}`;
}

console.log(studentScore(10, 100));
console.log(studentScore(100, 100));
