//// 48. Function, arrow function, THIS and context in javascript



// ⚡ Functions in JavaScript

// A function is a block of code designed to perform a specific task.
// You can define it once and reuse it as many times as you want.

// 🔹 1. Defining a Function
// function greet() {
//   console.log("Hello, World!");
// }


// function → keyword to declare a function

// greet → function name

// () → parameter list (empty here)

// { ... } → block of code that runs when function is called

// 🔹 2. Calling a Function
// greet();   // Output: Hello, World!


// The function doesn’t run until you call (invoke) it with ().

// 🔹 3. Functions with Parameters (Inputs)
// function greetUser(name) {
//   console.log("Hello, " + name + "!");
// }

// greetUser("Aman");   // Output: Hello, Aman!
// greetUser("Riya");   // Output: Hello, Riya!


// 👉 Here, name is a parameter (placeholder).
// 👉 "Aman" and "Riya" are arguments (actual values passed in).

// 🔹 4. Functions with Return Values
// function add(a, b) {
//   return a + b;
// }

// let result = add(5, 7);
// console.log(result);   // Output: 12


// return → sends the result back to the caller.

// Without return, a function always returns undefined.

// 🔹 5. Function Expressions

// You can store a function in a variable:

// let multiply = function(x, y) {
//   return x * y;
// };

// console.log(multiply(4, 3));  // Output: 12

// 🔹 6. Arrow Functions (Shorter Syntax)
// let divide = (a, b) => a / b;
// console.log(divide(10, 2));  // Output: 5

// 🔹 7. Default Parameters
// function greet(name = "Guest") {
//   console.log("Welcome, " + name);
// }

// greet();        // Output: Welcome, Guest
// greet("Aman");  // Output: Welcome, Aman

// 📊 Flow of a Function (Step-by-Step)

// Function is defined.

// Function is called with arguments.

// Arguments are passed into parameters.

// Code inside {} runs.

// If there’s a return, result is sent back.

// ✅ In short:

// Function = reusable code block.

// Can take inputs (parameters).

// Can give output (return).

// function greet(name) {
//   console.log(`hello ${name}`);

// }

// greet("aman")

// function makeTea(typeofTea){
//   return `Making ${typeofTea}`
//   console.log(test);
  
// }
// let teaOrder = makeTea("lemon tea");
// //console.log(teaOrder)

function orderTea(teaTypes){
  function confirmOrder(){
    return`Order confermed for chai`;
  }
  return confirmOrder()
}

let OrderConformation = orderTea("chai")
//console.log(OrderConformation);



const calculateTotal = (price,quantity) =>  price * quantity


let totalCost = calculateTotal(499*100)

// Got it ✅ Let’s go step by step with easy JavaScript function examples.
// I’ll give different types of functions with proper comments so you can understand clearly.

// 1. Basic Function (No Parameters, No Return)
// // A simple function that just prints a message
// function greet() {
//   console.log("Hello, Welcome to JavaScript Functions!");
// }

// // Function call
// greet(); // Output: Hello, Welcome to JavaScript Functions!

// 2. Function with Parameters
// // Function that accepts a name and greets the user
// function greetUser(name) {
//   console.log("Hello " + name + "! Have a great day 😊");
// }

// // Function calls with arguments
// greetUser("Aman");   // Output: Hello Aman! Have a great day 😊
// greetUser("Neha");   // Output: Hello Neha! Have a great day 😊

// 3. Function with Return Value
// // Function that adds two numbers and returns the result
// function add(a, b) {
//   return a + b;
// }

// // Using the return value
// let sum = add(10, 20);
// console.log("The sum is: " + sum); // Output: The sum is: 30

// 4. Function with Default Parameters
// // Function with default parameter (if value is not passed)
// function multiply(a, b = 2) {
//   return a * b;
// }

// console.log(multiply(5, 3)); // Output: 15
// console.log(multiply(5));    // Output: 10 (because b=2 by default)

// 5. Arrow Function (Short Syntax)
// // Arrow function to find square of a number
// const square = (n) => {
//   return n * n;
// };

// console.log(square(4)); // Output: 16
// console.log(square(7)); // Output: 49

// 6. Function in Loop Example
// // Function to print all city names from an array
// function printCities(cities) {
//   for (let i = 0; i < cities.length; i++) {
//     console.log("City:", cities[i]);
//   }
// }

// // Calling the function with an array
// let myCities = ["Paris", "Tokyo", "London", "New York"];
// printCities(myCities);

// /*
// Output:
// City: Paris
// City: Tokyo
// City: London
// City: New York
// */


// ⚡ Summary of Understanding Functions

// Definition: Write once using function keyword.

// Call: Use function name with ().

// Parameters: Input values inside function.

// Return: Output back to the caller.


// function printMe(){
// //  console.log('printing...');
  
// }
// printMe()


// function printThis(param){
//   console.log(param);
  
// }

// const printMee = (function){
//   console.log("print");

//function definition
// function SayMyName(){
//   console.log("love babber");
// }

// //function use - function call
// SayMyName();

//function print counting

// function printCounting(){
//   for(let i=0; i<=116; i++){
//     console.log(i)
//   }
// }

// printCounting();// this is called function calling


// function printing number

// function PrintNumber(num){
//   console.log("Printing Number",num);
  
// }
// PrintNumber(5);

// // getting average
// function getAverage(num1, num2){
//   let avg = (num1+num2)/2;
//   console.log("average", avg); ///great great examle
// }

// getAverage(15,25);// calling function

// return functions
// function getSum(a,b,c){
//   let sum = a+b+c;
//   return sum;
// }

// let ans = getSum(1,2,3) // for this we have to store in aparticular variable
// console.log("printing sum", ans) ;

//========================================================================
// function getmyname(firstname, lastname){
//   let fullname = firstname + " " + lastname
//   return fullname;
// }
// let fullname = getmyname("aman", "kumar")
// console.log("my name is  " , fullname);


//==============================================