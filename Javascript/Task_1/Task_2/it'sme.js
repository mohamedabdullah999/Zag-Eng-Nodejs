const students = [
  { name: "Mohamed", grades: [80, 90, 100], passed: false },
  { name: "Ali", grades: [60, 70, 65], passed: false },
  { name: "Salah", grades: [85, 95, 100], passed: false },
];

function calculateAverage(grades) {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return (sum / grades.length).toFixed(2);
}

students.forEach((student) => {
  student.average = parseFloat(calculateAverage(student.grades));
  student.passed = student.average >= 70;
});

students.sort((a, b) => b.average - a.average);

students.forEach((student) => {
  console.log(
    `${student.name}: Average = ${student.average}, Passed = ${student.passed}`
  );
});

const passedStudents = students
  .filter((student) => student.passed)
  .map((student) => student.name);
console.log("\nPassed Students:", JSON.stringify(passedStudents));
