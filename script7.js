// JavaScript Practice Tasks

// SECTION 1 – Date Object Tasks

// TASK 1 – Custom Digital Clock
// Create a live digital clock using:- new Date()- getHours()- getMinutes()- getSeconds()- setInterval()
// Format:
// Current Time: 14 : 05 : 09
// (Add leading zero if value < 10)


function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    console.log(`Current Time: ${hours} : ${minutes} : ${seconds}`);
}
setInterval(updateClock, 1000);





// TASK 2 – Find Current Day Name
// Use getDay()
// Array:
// ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// Print:
// Today is Friday
 let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 let currentDay = new Date().getDay();
 console.log("Today is " + days[currentDay]);
    



// TASK 3 – Age Calculator (Basic)
// let birthYear = 2003
// Use getFullYear()
// Print:
// Your age is 23

let birthYear = 2003;
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log("Your age is " + age);




// TASK 4 – Create Specific Date
// Create:
// 15 August 2020
// 10:30:45 AM
// Using:- new Date()- setFullYear()- setMonth()- setDate()- setHours()- setMinutes()- setSeconds()
// Print using:
// toLocaleString()

let specificDate = new Date();
specificDate.setFullYear(2020);
specificDate.setMonth(7);
specificDate.setDate(15);
specificDate.setHours(10);
specificDate.setMinutes(30);
specificDate.setSeconds(45);
console.log(specificDate.toLocaleString());




// SECTION 2 – setTimeout & setInterval
// TASK 5 – Delayed Message
// Use setTimeout()
// After 3 seconds print:
// Welcome Naveen 
// TASK 6 – Stop Interval After 5 Seconds
// Output:
// 1
// 2
// 3
// 4
// 5
// Stopped
// Use:- setInterval()- clearInterval()

let count = 1;
let intervalId = setInterval(() => {
  console.log(count);
    count++;
    if (count > 5) {
        clearInterval(intervalId);
        console.log("Stopped");
    }
}, 1000);





// SECTION 3 – Promise Practice
// TASK 7 – Simple Promise
// If number > 10 → resolve("Valid number")
// Else → reject("Invalid number")
// Handle using:
// .then()
// .catch()
// .finally()

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve("Valid number");
        } else {
            reject("Invalid number");
        }
    });
}

checkNumber(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Check completed"));






// SECTION 4 – Fetch API Task
// TASK 8 – Fetch Product Prices
// API:
// https://fakestoreapi.com/products
// Print only:
// Product: <title>
// Price: <price>----------------

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: ${product.price}`);
            console.log('----------------');
        });
    })
    .catch(error => console.log('Error fetching products:', error));



// SECTION 5 – Execution Order Task
// function one(){
//   console.log("one");
// }
// function two(){
//   console.log("two");
// }
// function three(){
//   console.log("three");
// }
// one()
// setTimeout(two,0)
// three()
// Predict Output and Explain Why.


function one(){
    console.log("one");
}
function two(){
    console.log("two");
}   
function three(){
    console.log("three");
}
one();
setTimeout(two, 0);
three();
// Output:
// one
// three
// two  
// Explanation:
// The output is "one", "three", and then "two". 
// This is because JavaScript executes code synchronously, meaning it runs one line at a time. 
// When the setTimeout function is called with a delay of 0 milliseconds, it doesn't execute immediately. 
// Instead, it schedules the "two" function to run after the current call stack is cleared. Therefore, "one" is printed first, followed by "three", and finally "two" is executed after the synchronous code has finished running. 
