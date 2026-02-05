// Part 1 – Logical & Ternary Operator
// Q1: Check whether a number is between 10 and 50 using logical AND.
// Input: let num = 25
// Output: "Valid Number" or "Invalid Number"

let num = 25; //intializing the variable num with the value 25
if (num > 10 && num < 50) {  //checking the condition if num is greater than 10 and less than 50 using logical AND operator
    console.log("Valid Number");
} else { //if the condition is not satisfied then it will execute the else block
    console.log("Invalid Number");
}


// Q2: Check if a user is eligible to log in.
// Condition:
// username must be "admin"
// password must be "1234"
// Use logical AND.

let username = "admin"; //initializing the variable username with the string value "admin"
let password = "1234"; //initializing the variable password with the string value "1234"
if (username === "admin" && password === "1234") { //checking the condition if username is "admin" and password is "1234" using logical AND operator and strict equality operator to compare both value and type
    console.log("Login Success");
} else { //if the condition is not satisfied then it will execute the else block
    console.log("Invalid Credentials");
}

// Q3: Using ternary operator:
// Check if a number is even or odd.

let number = 7; //initializing the variable number with the value 7
let result = (number % 2 === 0) ? "Even" : "Odd"; //using ternary operator to check if the number is even or odd
console.log(result); //printing the result

// Q4: What is the output?
// console.log((10 === "10") || (5 > 2) && !(3 < 1));
// Explain step by step.

console.log((10 === "10") || (5 > 2) && !(3 < 1));
// Step 1:  (10 === "10") => false (strict equality checks both value and type)
// Step 2: Evaluate (5 > 2) => true
// Step 3: Evaluate !(3 < 1) => true (3 < 1 is false, so !false is true)
// Step 4: Now we have false || true && true
// Step 5: Finally, false || true => true
// Final Output: true


// Part 2 – Type Conversion
// Q5: Find the output and explain:
// console.log("5" + 2);
// console.log("5" - 2);
// console.log("5" * 2);
// console.log("5" / 2);

console.log("5" + 2); // Output: "52" (String concatenation, number 2 is converted to string because of the presence of string "5" and + operator is used for concatenation when one of the operands is a string)
console.log("5" - 2); // Output: 3 (String "5" is converted to number because - operator is used for subtraction and it expects both operands to be numbers)
console.log("5" * 2); // Output: 10 (String "5" is converted to number because * operator is used for multiplication and it expects both operands to be numbers)
console.log("5" / 2); // Output: 2.5 (String "5" is converted to number because / operator is used for division and it expects both operands to be numbers)



// Q6: Convert the following using explicit conversion:
// let value = "100";
// - Convert to Number
// - Convert to Boolean

let value = "100"; //initializing the variable value with the string "100"
let numValue = Number(value); //converting the string to number using Number() function
console.log(numValue); //printing the number value  


// Q7: What will be the output?
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean(0));
// console.log(Boolean([]));
// Explain why.
console.log(Boolean("")); // Output: false (empty string is considered null)
console.log(Boolean(" ")); // Output: true (string with space is considered not null)
console.log(Boolean(0)); // Output: false (0 is null)
console.log(Boolean([])); // Output: true (empty array is considered as a value that is not null)

// Part 3 – Conditional Statements
// Q8: Write a program:
// If marks >= 90 → Grade A
// If marks >= 75 → Grade B
// If marks >= 50 → Grade C
// Else → Fail
// Use if else if.

let marks = 85; //initializing the variable marks with the value 85
if (marks >= 90) { //checking if marks is greater than or equal to 90
    console.log("Grade A");
} else if (marks >= 75) { //checking if marks is greater than or equal to 75
    console.log("Grade B");
} else if (marks >= 50) { //checking if marks is greater than or equal to 50
    console.log("Grade C");
} else { //if none of the above conditions are satisfied then it will execute the else block    
    console.log("Fail");
}   


// Q9: Traffic Signal Program using switch case:
// "red" → Stop
// "yellow" → Ready
// "green" → Go
// Default → Invalid Signal

let signal = "green"; //initializing the variable signal with the value "green"
switch (signal) { //using switch case to check the value of signal
    case "red": //if signal is "red"    
        console.log("Stop");
        break;
    case "yellow": //if signal is "yellow"
        console.log("Ready");
        break;
    case "green": //if signal is "green"
        console.log("Go");
        break;
    default: //if signal is not any of the above
        console.log("Invalid Signal");
}

// Q10 (Nested If): Check eligibility:
// Age >= 18
// Height >= 160
// Weight >= 50
// If all true → "Selected"
// Else → show which condition failed.

let age = 20; //initializing the variable age with the value 20
let height = 170; //initializing the variable height with the value 170
let weight = 55; //initializing the variable weight with the value 55
if (age >= 18) { //checking if age is greater than or equal to 18
    if (height >= 160) { //checking if height is greater than or equal to 160
        if (weight >= 50) { //checking if weight is greater than or equal to 50       
            console.log("Selected");
        } else {
            console.log("Weight condition failed");
        }
    } else {
        console.log("Height condition failed");
    }
} else {
    console.log("Age condition failed");
}

// Part 4 – Loops
// Q11: Print numbers from 1 to 20 using for loop.

for (let i = 1; i <= 20; i++) { //using for loop to print numbers from 1 to 20
    console.log(i);
}



// Q12: Print only odd numbers from 1 to 20.

for (let i = 1; i <= 20; i++) { //using for loop to iterate from 1 to 20
    if (i % 2 !== 0) { //checking if the number is odd with modulus operator of 2 and strictly not equal to 0
        console.log(i); //printing the odd number
    }
}
// Q13: Using while loop:
// Print numbers from 10 to 1.

let j = 10; //initializing the variable j with the value 10
while (j >= 1) { //using while loop to print numbers from 10 to 1
    console.log(j); //printing the value of j
    j--; //post decrementing the value of j by 1
}

// Q14: Using do-while loop:
// Print numbers from 1 to 5.

let k = 1; //initializing the variable k with the value 1
do { //using do-while loop to print numbers from 1 to 5
    console.log(k); //printing the value of k
    k++; //incrementing the value of k by 1
} while (k <= 5); //checking the condition if k is less than or equal to 5, if true then it will execute the loop again otherwise it will exit the loop

// Q15: Using for-of loop:
// Print each character from:
// let word = "STACKLY"

let word = "STACKLY"; //initializing the variable word with the string "STACKLY"
for (let char of word) { //using for-of loop to iterate through each character of the string
    console.log(char); //printing each character
}


// Q16: Using for-in loop:
// Print both key and value from:
// let student = {
// name: "Arun",
// course: "MERN",
// duration: "6 months"
// }

let student = { //initializing the object student with key-value pairs
    name: "Arun",
    course: "MERN",
    duration: "6 months"
};
for (let key in student) { //using for-in loop to iterate through each key in the object
    console.log(key + ": " + student[key]); //printing the key and its corresponding value
}


// Real-Time Questions
// RT-1: Login System
// If username = "admin" AND password = "1234" → "Login Success"
// Else → "Invalid Credentials"
// Use logical operator + ternary.

let user = "admin"; //initializing the variable user with the value "admin"
let pass = "1234"; //initializing the variable pass with the value "1234"
let loginResult = (user === "admin" && pass === "1234") ? "Login Success" : "Invalid Credentials"; //using logical operator and ternary operator to check login credentials
console.log(loginResult); //printing the login result




// RT-2: Salary Bonus System
// If employee salary > 50000 AND experience > 3 years
// → Eligible for bonus
// Else → Not eligible

let salary = 60000; //initializing the variable salary with the value 60000
let experience = 4; //initializing the variable experience with the value 4
if (salary > 50000 && experience > 3) { //checking if salary is greater than 50000 and experience is greater than 3
    console.log("Eligible for bonus");
} else { //if the condition is not satisfied then it will execute the else block
    console.log("Not eligible");
}





// RT-3: Shopping Discount
// If cart amount:
// >= 5000 → 20% discount
// >= 2000 → 10% discount
// < 2000 → No discount
// Use if-else if.

let cartAmount = 3500; //initializing the variable cartAmount with the value 3500
if (cartAmount >= 5000) { //checking if cartAmount is greater than or equal to 5000
    console.log("20% discount");
} else if (cartAmount >= 2000) { //checking if cartAmount is greater than or equal to 2000
    console.log("10% discount");
} else { //if none of the above conditions are satisfied then it will execute the else block
    console.log("No discount");
}   




// RT-4: Even/Odd Counter
// Count how many even numbers between 1 to 50.

let evenCount = 0; //initializing the variable evenCount with the value 0
for (let i = 1; i <= 50; i++) { //using for loop to iterate from 1 to 50
    if (i % 2 === 0) { //checking if the number is even with modulus operator of 2 equal to 0
        evenCount++; //incrementing the evenCount by 1
    }
}
console.log("Total even numbers between 1 to 50: " + evenCount); //printing the total count of even numbers



// RT-5: Dynamic Greeting System
// If hour between:
// 1–6 → Good Morning
// 7–12 → Morning
// 13–16 → Good Afternoon
// 17–19 → Good Evening
// Else → Good Night

let hour = 14; //initializing the variable hour with the value 14
if (hour >= 1 && hour <= 6) { //checking if hour is between 1 and 6
    console.log("Good Morning");
} else if (hour >= 7 && hour <= 12) { //checking if hour is between 7 and 12
    console.log("Morning");
} else if (hour >= 13 && hour <= 16) { //checking if hour is between 13 and 16
    console.log("Good Afternoon");
} else if (hour >= 17 && hour <= 19) { //checking if hour is between 17 and 19
    console.log("Good Evening");
} else { //if none of the above conditions are satisfied then it will execute the else block
    console.log("Good Night");
}
