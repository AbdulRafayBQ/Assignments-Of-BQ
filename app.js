// JavaScript Advanced Assignment
// All 10 questions are solved in this single file.
// The results are printed in the browser console and on index.html.

const outputElement = typeof document !== "undefined"
  ? document.getElementById("output")
  : null;

function formatValue(value) {
  if (typeof value === "string") return value;
  if (value === undefined) return "undefined";
  return JSON.stringify(value, null, 2);
}

function showResult(title, value) {
  console.log(title, value);

  if (outputElement) {
    outputElement.textContent += `${title}\n${formatValue(value)}\n\n`;
  }
}

function showNote(note) {
  console.log(note);

  if (outputElement) {
    outputElement.textContent += `${note}\n\n`;
  }
}

// Clear the on-page output when the page is refreshed or the script is run again.
if (outputElement) {
  outputElement.textContent = "";
}

// Q1: Create a function that takes an array of numbers and returns a new array where each number is squared. Use map method.
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(array) {
  return array.map((number) => number ** 2);
}

const squaredNumbers = squareNumbers(numbers);
showResult("Q1 - Squared numbers:", squaredNumbers);

// Q2: Write a function that takes an array of objects with name and age properties. Filter out only the users whose age is greater than 18.
const users = [
  { name: "Ali", age: 17 },
  { name: "Sara", age: 22 },
  { name: "Ahmed", age: 19 },
  { name: "Zara", age: 16 }
];

function getAdultUsers(userArray) {
  return userArray.filter((user) => user.age > 18);
}

const adultUsers = getAdultUsers(users);
showResult("Q2 - Users older than 18:", adultUsers);

// Q3: Given an array of products with price, use reduce to calculate the total price of all products.
const products = [
  { name: "Keyboard", price: 2500 },
  { name: "Mouse", price: 1200 },
  { name: "Headphones", price: 3500 }
];

const totalPrice = products.reduce((total, product) => total + product.price, 0);
showResult("Q3 - Total price of products:", totalPrice);

// Q4: Create an array of students with marks. Sort the array in descending order based on marks.
const students = [
  { name: "Hamza", marks: 78 },
  { name: "Ayesha", marks: 92 },
  { name: "Bilal", marks: 85 },
  { name: "Noor", marks: 67 }
];

const studentsByMarks = [...students].sort((a, b) => b.marks - a.marks);
showResult("Q4 - Students sorted by marks (highest to lowest):", studentsByMarks);

// Q5: Write a function that takes an array of strings and finds the first string with length greater than 5 using find method.
const words = ["cat", "apple", "javascript", "school", "computer"];

function findLongString(stringArray) {
  return stringArray.find((word) => word.length > 5);
}

const firstLongString = findLongString(words);
showResult("Q5 - First string with length greater than 5:", firstLongString);

// Q6: Create an object named person with properties firstName, lastName and a method fullName that returns the full name using this keyword. Explain how this works in this context.
const person = {
  firstName: "Abdul",
  lastName: "Rafay",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};

showResult("Q6 - Person's full name:", person.fullName());
showNote(
  "Q6 Explanation: When person.fullName() is called as an object method, `this` refers to the person object. Therefore, this.firstName and this.lastName access that object's properties."
);

// Q7: Show the difference between a regular function and an arrow function when using this inside an object.
// The assignment refers to a code snippet, but no original snippet was included in the question.
// This example demonstrates the difference with a predictable output.
function createThisExample() {
  return {
    name: "Object name",
    regularFunction: function () {
      return this.name;
    },
    arrowFunction: () => this.name
  };
}

const outerContext = { name: "Outer context name" };
const thisExample = createThisExample.call(outerContext);

showResult("Q7 - Regular function result:", thisExample.regularFunction());
showResult("Q7 - Arrow function result:", thisExample.arrowFunction());
showNote(
  "Q7 Explanation: The regular function gets `this` from the object before the dot, so it returns `Object name`. The arrow function does not create its own `this`; it keeps the `this` value from createThisExample, so it returns `Outer context name`."
);

// Q8: Write a function that filters even numbers, doubles them using map, and returns their sum using reduce. Do it in a chain.
const values = [1, 2, 3, 4, 5, 6];

function sumOfDoubledEvens(array) {
  return array
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2)
    .reduce((sum, number) => sum + number, 0);
}

const doubledEvenSum = sumOfDoubledEvens(values);
showResult("Q8 - Sum of doubled even numbers:", doubledEvenSum);

// Q9: Create an array of employees with name, department and salary. (a) Find an employee in HR. (b) Sort employees by salary in ascending order.
const employees = [
  { name: "Usman", department: "IT", salary: 75000 },
  { name: "Hira", department: "HR", salary: 55000 },
  { name: "Danish", department: "Finance", salary: 68000 },
  { name: "Mariam", department: "Marketing", salary: 62000 }
];

// Q9(a): Find an employee who works in the HR department.
const hrEmployee = employees.find((employee) => employee.department === "HR");
showResult("Q9(a) - Employee in HR:", hrEmployee);

// Q9(b): Sort employees by salary in ascending order (lowest to highest).
const employeesBySalary = [...employees].sort((a, b) => a.salary - b.salary);
showResult("Q9(b) - Employees sorted by salary (lowest to highest):", employeesBySalary);

// Q10: Create a function that returns an array of an object's keys and values separately, then create a new object from an array of key-value pairs. Use Object.keys, Object.values, and Object.fromEntries.
const course = {
  title: "JavaScript",
  duration: "8 weeks",
  level: "Beginner"
};

function getKeysAndValues(object) {
  return {
    keys: Object.keys(object),
    values: Object.values(object)
  };
}

const courseDetails = getKeysAndValues(course);
showResult("Q10 - Object keys:", courseDetails.keys);
showResult("Q10 - Object values:", courseDetails.values);

const keyValuePairs = [
  ["name", "Abdul Rafay"],
  ["course", "JavaScript"],
  ["completed", true]
];

const newObject = Object.fromEntries(keyValuePairs);
showResult("Q10 - New object created with Object.fromEntries:", newObject);
