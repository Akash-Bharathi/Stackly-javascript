// JavaScript Array & String Methods – Complete
// Professional Task Sheet

// SECTION 1 – Array Higher Order Methods Tasks
// Task 1 – forEach() Practice
// let subjects = ["Maths", "Science", "English", "History"]
// Requirements:
// • Use forEach()
// • Print Subject 1: Maths ... Subject 4: History
// • Store result in a variable
// • Question: Why does forEach() return undefined?

let subjects = ["Maths", "Science", "English", "History"];
subjects.forEach((subject, index) => {
  console.log(`Subject ${index + 1}: ${subject}`);
});

// forEach() is used for iterating over an array and performing a function on each element. 
// It does not return a new array or any value, which is why it returns undefined. 
// Its primary purpose is to execute a provided function once for each array element, rather than to produce a new array or value.

// Task 2 – map() Practice
// let prices = [100, 200, 300, 400]
// Requirements:
// • Use map()
// • Add 10% GST
// • Return new array
// • Expected Output: [110, 220, 330, 440]

let prices = [100, 200, 300, 400];
let pricesWithGST = prices.map(price => price * 1.10);
console.log(pricesWithGST); // Output: [110, 220, 330, 440]


// Task 3 – filter() Practice
// let students = [
//  { name: "A", marks: 45 },
//  { name: "B", marks: 75 },
//  { name: "C", marks: 35 },
//  { name: "D", marks: 85 }
// ]
// Requirements:
// • Use filter()
// • Get students scoring above 50
// • Print filtered array

let students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
    { name: "C", marks: 35 },
    { name: "D", marks: 85 }
];
let passedStudents = students.filter(student => student.marks > 50);
console.log(passedStudents); // Output: [{ name: "B", marks: 75 }, { name: "D", marks: 85 }]





// Task 4 – find() Practice
// Use same students array
// Requirements:
// • Use find()
// • Find first student scoring above 50
// • Print that object
// • Question: Difference between filter() and find()?

let firstPassedStudent = students.find(student => student.marks > 50);
console.log(firstPassedStudent); // Output: { name: "B", marks: 75 }
// The difference between filter() and find() is that filter() returns an array of all elements that satisfy the condition, 
// while find() returns only the first element that satisfies the condition.





// Task 5 – reduce() Practice
// let cart = [
//  { item: "Shirt", price: 1000 },
//  { item: "Shoes", price: 2000 },
//  { item: "Watch", price: 3000 }
// ]
// Requirements:
// • Use reduce()
// • Calculate total price
// • Bonus: Add 5% tax inside reduce()

let cart = [
  { item: "Shirt", price: 1000 },
  { item: "Shoes", price: 2000 },
    { item: "Watch", price: 3000 }
];
let totalPrice = cart.reduce((total, product) => total + product.price * 1.05, 0);
console.log(totalPrice); // Output: 6300 (1000*1.05 + 2000*1.05 + 3000*1.05)


// Task 6 – some() Practice
// let numbers = [1, 3, 5, 7, 8]
// Requirement:
// • Check if at least one number is even
// • Output: true

let numbers = [1, 3, 5, 7, 8];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true


// Task 7 – every() Practice
// let ages = [22, 25, 19, 30]
// Requirement:
// • Check if all ages are above 18

let ages = [22, 25, 19, 30];
let allAdults = ages.every(age => age > 18);
console.log(allAdults); // Output: true



// Task 8 – sort() Practice
// let salaries = [50000, 10000, 70000, 30000]
// Requirements:
// • Sort ascending
// • Sort descending
// • Explain why normal sort() fails for numbers

let salaries = [50000, 10000, 70000, 30000];
let ascendingSalaries = salaries.slice().sort((a, b) => a - b);
let descendingSalaries = salaries.slice().sort((a, b) => b - a);
console.log(ascendingSalaries); // Output: [10000, 30000, 50000, 70000]
console.log(descendingSalaries); // Output: [70000, 50000, 30000, 10000]
// The normal sort() method converts numbers to strings and sorts them lexicographically, which can lead to incorrect ordering for numbers. 
// For example, without a compare function, 10000 would come before 50000 because "1" comes before "5" in string comparison. 
// Using a compare function (a - b for ascending and b - a for descending) ensures that the numbers are sorted based on their actual values.




// Task 9 – Array Conversion Methods

// let arr = [10, 20, 30, 40]
// Requirements:
// • Convert using toString()
// • Convert using join("-")
// • Expected Output: 10-20-30-40


let arr = [10, 20, 30, 40]
let arrToString = arr.toString();
let arrJoined = arr.join("-");
console.log(arrToString); // Output: "10,20,30,40"
console.log(arrJoined); // Output: "10-20-30-40"





// SECTION 2 – String Methods Tasks
// Task 10 – charAt() & charCodeAt()
// let word = "Developer"
// Requirements:
// • Get character at index 4
// • Get ASCII value of character at index 4

let word = "Developer";
let charAtIndex4 = word.charAt(4);
let charCodeAtIndex4 = word.charCodeAt(4);
console.log(charAtIndex4); // Output: "l"
console.log(charCodeAtIndex4); // Output: 108 (ASCII value of 'l')  




// Task 11 – slice()
// let company = "StacklyCompany"
// Extract: Company

let company = "StacklyCompany";
let extracted = company.slice(6);
console.log(extracted); // Output: "Company"





// Task 12 – Case Conversion
// let userInput = "javaScript"
// • Convert to uppercase
// • Convert to lowercase

let userInput = "javaScript";
let upperCaseInput = userInput.toUpperCase();
let lowerCaseInput = userInput.toLowerCase();
console.log(upperCaseInput); // Output: "JAVASCRIPT"
console.log(lowerCaseInput); // Output: "javascript"



// Task 13 – trim()
// let email = "   naveen@gmail.com   "
// Remove unwanted spaces

let email = "   naveen@gmail.com   ";
let trimmedEmail = email.trim();
console.log(trimmedEmail); // Output: "naveen@gmail.com"




// Task 14 – includes()
// let message = "Welcome to JavaScript Training"
// Check if "JavaScript" exists

let message = "Welcome to JavaScript Training";
let hasJavaScript = message.includes("JavaScript");
console.log(hasJavaScript); // Output: true   



// Task 15 – split()
// let movie = "spider-man-no-way-home"
// Convert into array

let movie = "spider-man-no-way-home";
let movieArray = movie.split("-");
console.log(movieArray); // Output: ["spider", "man", "no", "way", "home"]


// Task 16 – indexOf() & lastIndexOf()
// let text = "programming"
// • Find first index of 'm'
// • Find last index of 'm'

let text = "programming";
let firstIndexOfM = text.indexOf('m');
let lastIndexOfM = text.lastIndexOf('m');
console.log(firstIndexOfM); // Output: 6
console.log(lastIndexOfM); // Output: 8





// Task 17 – replace()
// let tech = "I love python"
// Replace python with javascript

let tech = "I love python";
let updatedTech = tech.replace("python", "javascript");
console.log(updatedTech); // Output: "I love javascript"





// Task 18 – startsWith() & endsWith()
// let filename = "report.pdf"
// • Check if starts with "report"
// • Check if ends with ".pdf"

let filename = "report.pdf";
let startsWithReport = filename.startsWith("report");
let endsWithPdf = filename.endsWith(".pdf");
console.log(startsWithReport); // Output: true
console.log(endsWithPdf); // Output: true




// Task 19 – repeat()
// let star = "*"
// Print 10 stars using repeat()

let star = "*";
let stars = star.repeat(10);
console.log(stars); // Output: "**********"

// FINAL TEAM CHALLENGE – Employee Report System
// let employees = [
//  { name: "Naveen", salary: 50000 },
//  { name: "Arun", salary: 30000 },
//  { name: "Kiran", salary: 70000 }
// ]
// Requirements:
// • Convert names to uppercase using map()
// • Filter salary > 40000
// • Find first salary > 60000
// • Calculate total salary using reduce()
// • Sort salaries descending

let employees = [
  { name: "Naveen", salary: 50000 },
  { name: "Arun", salary: 30000 },
  { name: "Kiran", salary: 70000 }
];
let upperCaseNames = employees.map(employee => ({ ...employee, name: employee.name.toUpperCase() }));
let highEarners = upperCaseNames.filter(employee => employee.salary > 40000);
let firstHighEarner = highEarners.find(employee => employee.salary > 60000);
let totalSalary = highEarners.reduce((total, employee) => total + employee.salary, 0);
let sortedSalaries = highEarners.slice().sort((a, b) => b.salary - a.salary);
console.log(upperCaseNames); // Output: [{ name: "NAVEEN", salary: 50000 }, { name: "ARUN", salary: 30000 }, { name: "KIRAN", salary: 70000 }]
console.log(highEarners); // Output: [{ name: "NAVEEN", salary: 50000 }, { name: "KIRAN", salary: 70000 }]
console.log(firstHighEarner); // Output: { name: "KIRAN", salary: 70000 }
console.log(totalSalary); // Output: 120000
console.log(sortedSalaries); // Output: [{ name: "KIRAN", salary: 70000 }, { name: "NAVEEN", salary: 50000 }]
  

