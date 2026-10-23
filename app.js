// Q1: Check if a number is positive, negative, or zero

let num = 5;

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// Q2: Check whether a number is even or odd

let numb = 7;

if (numb % 2 == 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// Q3: Find the larger of two numbers

let a = 10;
let b = 20;

if (a > b) {
    console.log(a + " is larger");
} else if (b > a) {
    console.log(b + " is larger");
} else {
    console.log("Both numbers are equal");
}

// Q4: Assign grade according to percentage

let marks = 85;

if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 50) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

// Q5: Check whether a year is a leap year

let year = 2024;

if (year % 400 == 0 ||
    (year % 4 == 0 && year % 100 != 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

// Q6: Print the day name using switch-case

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Q7: Calculator using switch-case

let c = 10;
let d = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log(c + d);
        break;
    case "-":
        console.log(c - d);
        break;
    case "*":
        console.log(c * d);
        break;
    case "/":
        if (b != 0) {
            console.log(c / d);
        } else {
            console.log("Cannot divide by zero");
        }
        break;
    default:
        console.log("Invalid operator");
}


// Q8: Check whether a character is a vowel or consonant

let ch = "a";

switch (ch.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}

// Q9: Traffic light instructions using switch-case

let color = "Red";

switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}

// Q10: Menu-driven program using switch-case

let choice = 2;
let balance = 1000;
let amount = 200;

switch (choice) {
    case 1:
        console.log("Balance: " + balance);
        break;
    case 2:
        balance = balance + amount;
        console.log("Deposited: " + amount);
        console.log("New balance: " + balance);
        break;
    case 3:
        if (amount <= balance) {
            balance = balance - amount;
            console.log("Withdrawn: " + amount);
            console.log("New balance: " + balance);
        } else {
            console.log("Insufficient balance");
        }
        break;
    case 4:
        console.log("Exit");
        break;
    default:
        console.log("Invalid choice");
}

// Loop Practice Questions

// Loop Q1: Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Loop Q2: Find the sum of first N natural numbers

let n = 5;
let i = 1;
let sum = 0;

while (i <= n) {
    sum = sum + i;
    i++;
}

console.log("Sum = " + sum);

// Loop Q3: Print multiplication table of a number

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// Loop Q4: Find factorial using while loop

let nu = 5;
let factorial = 1;

while (n > 1) {
    factorial = factorial * n;
    n--;
}

console.log("Factorial = " + factorial);

// Loop Q5: Print numbers from 10 down to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Loop Q6: Print even numbers up to N using do-while

// Loop Q6: Print even numbers up to N using do-while

let g = 10;
let h = 2;

if (g >= 2) {
    do {
        console.log(h);
        h = h + 2;
    } while (h <= g);
}

// Loop Q7: Find the sum of digits of a number

let eg = 1234;
let plus = 0;

while (eg > 0) {
    let digit = eg % 10;
    plus = plus + digit;
    eg = Math.floor(eg / 10);
}

console.log("Sum of digits = " + plus);

// Loop Q8: Print first 10 terms of Fibonacci series

let x = 0;
let y = 1;

for (let i = 1; i <= 10; i++) {
    console.log(x);

    let next = x + y;
    x = y;
    y = next;
}

// Loop Q9: Keep guessing until the correct number is entered

let correctNumber = 7;
let guess;

do {
    guess = Number(prompt("Guess a number between 1 and 10"));

    if (guess === correctNumber) {
        console.log("Correct guess!");
    } else {
        console.log("Wrong guess, try again!");
    }

} while (guess !== correctNumber);

// Q10: Check prime number

let q = 7;
let prime = true;

for (let i = 2; i < q; i++) {
    if (q % i == 0) {
        prime = false;
        break;
    }
}

if (q > 1 && prime == true) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}