
// Q1: Create a function that takes an array of numbers and returns a new array where each number is squared using map method.

console.log("========== Q1: SQUARE NUMBERS ==========");

function squareNumbers(numbers) {
    return numbers.map(num => num * num);
}

const numbers = [1, 2, 3, 4, 5];
console.log("Original Array:", numbers);
console.log("Squared Array:", squareNumbers(numbers));


// Q2: Filter out only the users whose age is greater than 18.

console.log("\n========== Q2: FILTER USERS ==========");

const users = [
    { name: "Ali", age: 22 },
    { name: "Ahmed", age: 16 },
    { name: "Sara", age: 25 },
    { name: "Usman", age: 17 },
    { name: "Ayesha", age: 20 }
];

const adults = users.filter(user => user.age > 18);

console.log("Users above 18:", adults);


// Q3: Given an array of products with price, use reduce to calculate the total price of all products.

console.log("\n========== Q3: TOTAL PRICE ==========");

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 30000 },
    { name: "Headphones", price: 5000 },
    { name: "Keyboard", price: 2000 }
];

const totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log("Total Price:", totalPrice);


// Q4: Create an array of students with marks. Sort the array in descending order based on marks.

console.log("\n========== Q4: SORT STUDENTS ==========");

const students = [
    { name: "Ali", marks: 75 },
    { name: "Ahmed", marks: 90 },
    { name: "Sara", marks: 85 },
    { name: "Usman", marks: 60 },
    { name: "Ayesha", marks: 95 }
];

const sortedStudents = [...students].sort((a, b) => b.marks - a.marks);

console.log("Students sorted by marks (Highest to Lowest):");
console.log(sortedStudents);


// Q5: Write a function that takes an array of strings and finds the first string with length greater than 5 using find method.

console.log("\n========== Q5: FIND STRING ==========");

function findString(words) {
    return words.find(word => word.length > 5);
}

const words = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log("First string with length greater than 5:");
console.log(findString(words));


// Q6: Create an object named person with firstName, lastName and a method fullName that returns the full name using this keyword.

console.log("\n========== Q6: OBJECT AND THIS ==========");

const person = {
    firstName: "Abdul",
    lastName: "Rafay",

    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Full Name:", person.fullName());

console.log("Explanation: The this keyword refers to the person object here. It accesses firstName and lastName properties of that object.");


// Q7: Show the difference between regular function and arrow function when using this inside an object.

console.log("\n========== Q7: REGULAR VS ARROW FUNCTION ==========");

const outerObject = {
    name: "Outer Object",

    createMember: function() {

        return {
            name: "Inner Object",

            regularFunction: function() {
                return this.name;
            },

            arrowFunction: () => {
                return this.name;
            }
        };
    }
};

const member = outerObject.createMember();

console.log("Regular Function:", member.regularFunction());
console.log("Arrow Function:", member.arrowFunction());

console.log("Explanation: A regular function gets its own this based on how it is called. An arrow function does not have its own this; it uses this from its surrounding scope.");


// Q8: Filter even numbers, double them using map, and return the sum using reduce in a chain.

console.log("\n========== Q8: METHOD CHAINING ==========");

function calculateSum(numbers) {
    return numbers
        .filter(num => num % 2 === 0)
        .map(num => num * 2)
        .reduce((sum, num) => sum + num, 0);
}

const numberList = [1, 2, 3, 4, 5, 6];

console.log("Original Numbers:", numberList);
console.log("Sum of doubled even numbers:", calculateSum(numberList));


// Q9: Create an array of employees. Find an employee in HR department and sort employees by salary in ascending order.

console.log("\n========== Q9: EMPLOYEES ==========");

const employees = [
    { name: "Ali", department: "IT", salary: 50000 },
    { name: "Sara", department: "HR", salary: 35000 },
    { name: "Ahmed", department: "Finance", salary: 45000 },
    { name: "Ayesha", department: "IT", salary: 60000 },
    { name: "Usman", department: "HR", salary: 40000 }
];

// a) Find an employee who works in HR department

const hrEmployee = employees.find(employee => employee.department === "HR");

console.log("Employee in HR Department:");
console.log(hrEmployee);

// b) Sort employees by salary in ascending order

const sortedEmployees = [...employees].sort((a, b) => a.salary - b.salary);

console.log("Employees Sorted by Salary (Lowest to Highest):");
console.log(sortedEmployees);


// Q10: Return an array of object keys and values separately using Object.keys and Object.values. Create a new object using Object.fromEntries.

console.log("\n========== Q10: OBJECT METHODS ==========");

function objectOperations(obj) {

    const keys = Object.keys(obj);

    const values = Object.values(obj);

    return {
        keys: keys,
        values: values
    };
}

const myObject = {
    name: "Rafay",
    age: 20,
    city: "Karachi"
};

const result = objectOperations(myObject);

console.log("Object Keys:", result.keys);
console.log("Object Values:", result.values);

// Create a new object from an array of key-value pairs

const entries = [
    ["name", "Ahmed"],
    ["age", 22],
    ["city", "Lahore"]
];

const newObject = Object.fromEntries(entries);

console.log("New Object:", newObject);


console.log("\n========== ALL 10 QUESTIONS COMPLETED ==========");
