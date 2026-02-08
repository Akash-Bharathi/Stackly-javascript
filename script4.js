//INTERMEDIATE LEVEL - FUNCTIONS FULL ASSIGNMENt





// SECTION 1 – Real-Time Function Logic
// 1. Payroll System:
// Create calculateSalary(basicSalary, bonusPercentage)
// - Calculate bonus
// - Deduct 5% tax
// - Return final salary
// - Print full salary breakdown

    function calculateSalary(basicSalary, bonusPercentage) {
        let bonus = (bonusPercentage / 100) * basicSalary;
        let grossSalary = basicSalary + bonus;
        let tax = 0.05 * grossSalary;
        let finalSalary = grossSalary - tax;
        console.log(`Basic Salary: $${basicSalary}`);
        console.log(`Bonus (${bonusPercentage}%): $${bonus}`);
        console.log(`Gross Salary: $${grossSalary}`);
        console.log(`Tax (5%): $${tax}`);
        console.log(`Final Salary: $${finalSalary}`);
        return finalSalary;
    }
    calculateSalary(50000, 20);




// 2. Student Result System:
// Create generateResult(name, marksArray)
// - Calculate total
// - Calculate average
// - Decide Grade (A/B/C/Fail)
// - Return result object

    function generateResult(name, marksArray) { // marksArray is an array of marks for different subjects
        let total = 0;
        for (let mark of marksArray) {
            total += mark; // Add each mark to the total
        }
        let average = total / marksArray.length; // Calculate average by dividing total by the number of subjects (length of marksArray)
        let grade; 
        if (average >= 90) {
            grade = 'A';
        } else if (average >= 75) {
            grade = 'B';
        } else if (average >= 60) {
            grade = 'C';
        } else {
            grade = 'Fail';
        }
        return {
            name: name,
            total: total,
            average: average,
            grade: grade
        };
    }
    let result = generateResult("Alice", [85, 92, 78]);
    console.log(result);
    


// SECTION 2 – Scope & Hoisting (Debugging)
// 3. Debug This Code:
// function demo(){
// if(true){
// var a = 10;   // 'var' is function-scoped, so 'a' is accessible outside the block.

// let b = 20;   // 'let' is block-scoped, so 'b' is not accessible outside the block.
// }
// console.log(a);  // This will print 10, as 'a' is function-scoped.
// console.log(b);  // This will throw a ReferenceError, as 'b' is block-scoped and not accessible here.
// }
// Questions:- What will happen?
// - Why?- Fix it properly.
 
function demo() { // Define the function 'demo'
    let a, b;   // Declare 'a' and 'b' using 'let' to ensure they are block-scoped and can be accessed within the function
    if (true) {   // The condition is true, so the block will execute
        a = 10;
        b = 20;
    }
    console.log(a);  // This will print 10, as 'a' is now accessible within the function scope.
    console.log(b);   // This will print 20, as 'b' is now accessible within the function scope.
}
demo();  // Call the 'demo' function to execute the code and see the output in the console.



// 4. Hoisting Analysis:
// console.log(x);
// var x = 100;
// console.log(y);
// let y = 200;
// Predict output and explain.

//console.log(x);           // This will print 'undefined' because 'var' declarations are hoisted and initialized with 'undefined'.
//var x = 100;              // 'x' is declared and assigned the value 100 after the first console.log.
//console.log(y);           // This will throw a ReferenceError because 'let' declarations are hoisted but not initialized, and they are in a temporal dead zone until the declaration is reached.
//let y = 200;              // 'y' is declared and assigned the value 200 after the second console.log, but it cannot be accessed before this line due to the temporal dead zone.
// Output Explanation:
// The first console.log(x) will output 'undefined' because 'x' is hoisted and initialized with 'undefined' before the code runs.
// The second console.log(y) will throw a ReferenceError because 'y' is declared with 'let', which is hoisted but not initialized, and it cannot be accessed before its declaration due to the temporal dead zone.




// SECTION 3 – Callback & Higher Order (Industry Simulation)
// 5. Order Processing System:
// Create processOrder(orderId, callback)
// - Print "Order Processed"
// - Call generateInvoice(orderId)

function processOrder(orderId, callback) {
    console.log(`Order ${orderId} Processed`);
    callback(orderId); // Call the callback function, passing the orderId as an argument
} // Example callback function to generate an invoice
function generateInvoice(orderId) {
    console.log(`Invoice generated for Order ${orderId}`);
}
// Example usage
processOrder(12345, generateInvoice); // This will process the order and then generate the invoice for that order.


// 6. Bank Transaction System:
// Create transaction(amount, type, callback)
// - If deposit → add- If withdraw → subtract- Call sendSMS()

function transaction(amount, type, callback) {
    let balance = 1000; // Initial balance for demonstration
    if (type === 'deposit') {
        balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${balance}`);
    }
    else if (type === 'withdraw') {
        if (amount > balance) {
            console.log('Insufficient funds for withdrawal.');
            return;
        }
        balance -= amount;
        console.log(`Withdrew: $${amount}. New Balance: $${balance}`);
    }
    else {
        console.log('Invalid transaction type. Please use "deposit" or "withdraw".');
        return;
    }       
    callback(type, amount, balance); // Call the callback function, passing the transaction details
} // Example callback function to send an SMS notification
function sendSMS(type, amount, balance) {
    console.log(`SMS: You have a ${type} of $${amount}. Your new balance is $${balance}.`);
}
// Example usage
transaction(200, 'deposit', sendSMS);
transaction(150, 'withdraw', sendSMS);
transaction(1200, 'withdraw', sendSMS);


// SECTION 4 – Currying (E-Commerce)



// 7. Dynamic Price Builder:
// Create priceBuilder(basePrice)(discount)(tax)
// Return final price
// Example: priceBuilder(2000)(15)(18)

function priceBuilder(basePrice) {
    return function(discount) {
        return function(tax) {
            let discountedPrice = basePrice - (basePrice * (discount / 100)); // Calculate the price after applying the discount
            let finalPrice = discountedPrice + (discountedPrice * (tax / 100)); // Calculate the final price after adding tax to the discounted price
            return finalPrice; // Return the final price
        }
    }
}
// Example usage
let finalPrice = priceBuilder(5000)(10)(12); // This will calculate the final price based on the base price, discount, and tax.
console.log(`Final Price: $${finalPrice.toFixed(2)}`); // Print the final price, formatted to 2 decimal places.



// SECTION 5 – IIFE (Security + Encapsulation)
// 8. Secure Company Module:
// - Store private variable companyCode
// - Expose getCompanyStatus()
// - companyCode should not be directly accessible
const CompanyModule = (function() {
    let companyCode = 'ABC123'; // Private variable that cannot be accessed directly from outside the module
    function getCompanyStatus() {
        return `Company Code: ${companyCode} - Status: Active`; // Function to get the company status, which can access the private variable
    }
    return {
        getCompanyStatus: getCompanyStatus // Expose the getCompanyStatus function to the outside world
    };
})();
// Example usage
console.log(CompanyModule.getCompanyStatus()); // This will print the company status, including the company code, without allowing direct access to the companyCode variable.   

// SECTION 6 – Generator (Advanced Logic)
// 9. Unique Order ID Generator:
// Generate ORD1001, ORD1002, ORD1003, etc.

function* orderIdGenerator() {
    let id = 1001;
    while (true) {
        yield `ORD${id++}`; // Yield the current order ID and then increment it for the next call
    }
}
// Example usage
const generateOrderId = orderIdGenerator(); // Creating an instance of the generator
console.log(generateOrderId.next().value); // This will print 'ORD1001'
console.log(generateOrderId.next().value); // This will print 'ORD1002'
console.log(generateOrderId.next().value); // This will print 'ORD1003'


// 10. Coupon Spin System:
// Yield:
// - 10% OFF
// - 20% OFF
// - 50% OFF
// - No Luck
// - Jackpot
// Simulate multiple spins.
function* couponSpin() {
    const coupons = ['10% OFF', '20% OFF', '50% OFF', 'No Luck', 'Jackpot'];
    while (true) {
        const randomIndex = Math.floor(Math.random() * coupons.length); // Generate a random index to select a coupon from the array
        yield coupons[randomIndex]; // Yield the randomly selected coupon
    }
}
// Example usage
const spin = couponSpin(); // Create an instance of the generator
console.log(spin.next().value); // Simulate a spin and print the result
console.log(spin.next().value); // Simulate another spin and print the result
console.log(spin.next().value); // Simulate another spin and print the result

// SECTION 7 – Mini Project (Integrated)
// Mini E-Commerce Flow:
// - addToCart(product, price)
// - calculateTotal()
// - applyDiscount() using currying
// - generateCoupon() using generator
// - processPayment() using callback
// - Hide config using IIFE

const ECommerce = (function () {

    let cart = [];
    let total = 0;

    function addToCart(product, price) {
        cart.push({ product, price });
        total += price;
    }

    function calculateTotal() {
        return total;
    }

    function applyDiscount(discount) {
        return function (tax) {
            let discounted = total - (total * discount / 100);
            return discounted + (discounted * tax / 100);
        };
    }

    function* generateCoupon() {
        const coupons = ["10% OFF", "20% OFF", "50% OFF", "No Luck", "Jackpot"];
        while (true) yield coupons[Math.floor(Math.random() * coupons.length)];
    }

    function processPayment(callback) {
        callback(total);
    }

    return {
        addToCart,
        calculateTotal,
        applyDiscount,
        generateCoupon,
        processPayment
    };

})();

ECommerce.addToCart("Laptop", 1200);
ECommerce.addToCart("Mouse", 200);

console.log(ECommerce.calculateTotal());
console.log(ECommerce.applyDiscount(10)(18));

const c = ECommerce.generateCoupon();
console.log(c.next().value);

ECommerce.processPayment((amount) => {
    console.log(`Payment done: ₹${amount}`);
});



// Concept Questions:

// 1. Difference between function declaration & expression?
      //  - Function Declaration: A function declaration defines a named function and is hoisted, meaning it can be called before it is defined in the code. Example:

   //     - Function Expression: A function expression defines a function as part of an expression and is not hoisted, meaning it cannot be called before it is defined. Example:



// 2. What is higher order function?
//A higher-order function is a function that can take another function as an argument or return a function as its result. Higher-order functions are a fundamental concept in functional programming and allow for more flexible and reusable code. Examples of higher-order functions include map, filter, and reduce in JavaScript, which operate on arrays and take callback functions to perform specific operations on each element of the array.


// 3. Real-time example of generator?
//A real-time example of a generator is an infinite sequence generator, such as a Fibonacci sequence generator. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, typically starting with 0 and 1. A generator can be used to create an infinite stream of Fibonacci numbers without consuming a lot of memory, as it generates each number on-the-fly when requested.
function* fibonacciGenerator() {
    let a = 0, b = 1; 
    while (true) {
        yield a; // Yield the current Fibonacci number
        [a, b] = [b, a + b]; // Update a and b to the next two Fibonacci numbers
    }   }

// 4. Why do we use IIFE?
//IIFE (Immediately Invoked Function Expression) is used to create a new scope and avoid polluting the global namespace. It allows you to execute a function immediately after defining it, which can be useful for encapsulating code and creating private variables that cannot be accessed from outside the function. This is particularly beneficial for preventing conflicts between different parts of code and maintaining a clean global scope, especially in larger applications or when using third-party libraries.   



// 5. Difference between var, let, const

//- var: 'var' is function-scoped, meaning it is accessible within the function it is declared in. It is also hoisted, which means it can be accessed before its declaration, but it will be initialized with 'undefined'. Example:
function example() {
    console.log(x); // Output: undefined
    var x = 10;
    console.log(x); // Output: 10
}  
//- let: 'let' is block-scoped, meaning it is only accessible within the block it is declared in (e.g., inside a loop or an if statement). It is also hoisted but not initialized, which means it cannot be accessed before its declaration and will throw a ReferenceError if you try to do so. Example:
function example() {
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 20;
    console.log(y); // Output: 20
}