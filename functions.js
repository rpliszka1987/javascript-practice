// Practicing JavaScript functions

// Function says hello with default value Unknown if no name provided.
let sayHello = (name = "Unknown") => {
  console.log(`Hello ${name}`);
};

// Calling sayHello() without a parameter
sayHello();

// Calling function with a parameter
sayHello("Robert");

// Function addNumbers() adds the two values passed as parameter
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Console log the value of 2 numbers
console.log(addNumbers(3, 4));

// Function checks the age and puts output depending on where the age falls.
function ageCheck(age) {
  if (age < 18 && age > 0) {
    console.log(`Im sorry you are too young!`);
  } else if (age > 18 && age < 55) {
    console.log(`You are an adult!`);
  } else if (age <= 0) {
    console.log(`Please enter a valid age!`);
  } else {
    console.log(`You are pass the age limit!`);
  }
}

ageCheck(-10);
