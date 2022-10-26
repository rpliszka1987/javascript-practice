// Practice of JS arrays

// array holding names
let names = ["Robert", "Heidi", "Jorge", "Steve"];

// Calling .forEach() function on names array. This will not change the original array.
names.forEach((name) => console.log(`Hello ${name}!`));

names.forEach((name) => (name = "Hello " + name));

console.log(names);

// Calling map() function on names array. This will not change the original array.
names.map((name) => (name = "Hello " + name));

console.log(names);
