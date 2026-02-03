// 1. Welcome Program- Ask user name using prompt().- Show alert: Hi , Welcome to JavaScript Training.- Print the same message in console.

prompt("Enter username:");

alert("Hi , Welcome to JavaScript Training.");

console.log("Hi , Welcome to JavaScript Training.");

// 2. Console Methods Practice- Print 500 using console.log(), console.warn(), console.error().- Use console.clear().


console.log("500");
console.warn("500");
console.error("500");
console.clear();
// 3. Data Type Identification- Create string, number, boolean, undefined, and null variables.- Print value and type using typeof.

let str = "Hello";
let num = 42;
let bool = true;
let undef;
let nul = null;

console.log("String value:", str, "Type:", typeof str);
console.log("Number value:", num, "Type:", typeof num);
console.log("Boolean value:", bool, "Type:", typeof bool);
console.log("Undefined value:", undef, "Type:", typeof undef);
console.log("Null value:", nul, "Type:", typeof nul);

//  4. Arithmetic Operations- Use let a = 20 and let b = 5.- Perform +, -, *, /, %, ** and print results.

let a = 20;
let b = 5;
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));
console.log("Exponentiation: " + (a ** b));

// 5. Increment & Decrement- Demonstrate pre-increment, post-increment, pre-decrement, post-decrement.- Print variables clearly.

 let d = 5; 
    console.log("Initial value of d: " + d);
    console.log("Pre-increment: " + (++d)); // 6
    console.log("Post-increment: " + (d++)); // 6
    console.log("Value of d after post-increment: " + d); // 7
    console.log("Pre-decrement: " + (--d)); // 6
    console.log("Post-decrement: " + (d--)); // 6
    console.log("Value of d after post-decrement: " + d) // 5

// 6. Assignment Operators- Use let num = 10.- Perform +=, -=, *=, /=, %= and print results.

    let num1 = 10;
    console.log("Initial value: " + num1); // 10
    num1 += 5; // num = num + 5
    console.log("After += 5: " + num1); // 15
    num1 -= 3; // num = num - 3
    console.log("After -= 3: " + num1); // 12
    num1 *= 2; // num = num * 2
    console.log("After *= 2: " + num1); // 24
    num1 /= 4; // num = num / 4
    console.log("After /= 4: " + num1); // 6
    num1 %= 5; // num = num % 5
    console.log("After %= 5: " + num1); // 1

// 7. Array Access- Create array ['HTML','CSS','JavaScript','React'].- Print first element, second element, last element (using length), and total elements.

let technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    console.log("First element: " + technologies[0]); 
    console.log("Second element: " + technologies[1]); 
    console.log("Last element: " + technologies[technologies.length - 1]);
    console.log("Total elements: " + technologies.length); 

// 8. Modify Array- Add one element at end.- Remove last element.- Print updated array.

    //let technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    console.log("Original array: " + technologies);
    technologies.push('Node.js');
    console.log("After adding 'Node.js': " + technologies);
    technologies.pop();
    console.log("After removing last element: " + technologies);

// 9. Student Object- Create object with name, age, course, city.- Print values using dot notation.

const student = {
        name: "Akash Bharathi",
        age: 23,
        course: "Computer Science",
        city: "Theni"
    };
        
    console.log("Student Name: " + student.name);
    console.log("Student Age: " + student.age);
    console.log("Student Course: " + student.course);
    console.log("Student City: " + student.city);

// 10. Nested Object Practice- Create company object with nested trainer object.- Print company name, trainer name, trainer subject

const company = {
        name: "Stackly",
        location: "Salem",
        trainer: {
            name: "Akash Bharathi",
            subject: "JavaScript"
        }
    };
        
    console.log("Company Name: " + company.name);
    console.log("Trainer Name: " + company.trainer.name);
    console.log("Trainer Subject: " + company.trainer.subject);