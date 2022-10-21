//  JavaScript objects practice

// Create an object of students
let collegeStudents = {
  students: {
    studentOne: {
      name: "Robert",
      age: 21,
      degree: "Computer Science",
    },
    studentTwo: {
      name: "Heidi",
      age: 21,
      degree: "Nurse",
    },
    studentThree: {
      name: "John",
      age: 22,
      degree: "Political Science",
    },
  },
};

// Loop through the objects
for (let student in collegeStudents.students) {
  console.log(
    `${collegeStudents.students[student].name} is ${collegeStudents.students[student].age} years old and is studying ${collegeStudents.students[student].degree}.`
  );
}

// Lists students object
// console.log(collegeStudents.students)
