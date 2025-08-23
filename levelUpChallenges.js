// 47. Ten loop challenges to learn all kind of loops in javascript


//levelUpChallenges

//node jsfoundation/part4/levelUpChallenges.js
//const b = Animation
// let a = "aman"
// console.log(a); haa  haa

// qtn1 

// let teas =["greem", "blacktea" ,"oolong tea","lemon", "chai"]

// let selectedTeas = []
//   for (let i = 0  ; i < teas.length; i++) {
//     if(teas[i] === "chai"){
//       break;
//     }
//     selectedTeas.push(teas[i]) 
// }
// console.log(selectedTeas);


// qtn 2 =================================================================================================


// let cities = ["london", "paris", "berlin","tokyo"]
// let visitedcity = []

// for (let i = 0; i < cities.length; i++) {
//   if (cities[i]=== "paris") {
//     continue //means pass this city 
//   }
//   visitedcity.push(cities[i])
  
// }
// console.log(visitedcity);
 


// qtn 3============================================================================
// let arr =[1,2,3,4,5,6]
// smallnumbers =[]
// for (let i = 0;  i<arr.length; i++) {
// if (i===4) {
//   break
// }
// smallnumbers.push(arr[i])
// }
// console.log(smallnumbers);

// qtn 3 with the help of forof loop =============================================================================

let numbers = [1,2,3,4,5,6,7,8]
let smallNumbers = []

for (const num of numbers) {
  if (num=== 7) {
    break 
  }
  smallNumbers.push(num)
  
}
 //console.log(smallNumbers);


 /// =---------9999999999999999======================000000000000000000000000000000000000000000

 let  teatypes = ["green" , "lemon", "black", "oolong" ,"herbaltea"]
 let preferredteas =[]

 for (const tea  of teatypes) { // chaii is just a variable where we are going to store this 
  if (tea === "oolong") {
    continue
  }
  preferredteas.push(tea)
 }
console.log(preferredteas);


// 🔹 Example 1 – Pass or Fail
// let marks = [90, 35, 75, 20, 88];

// for (let mark of marks) {
//   if (mark >= 40) {
//     console.log(mark, "→ Pass");
//   } else {
//     console.log(mark, "→ Fail");
//   }
// }


// ✅ Output:

// 90 → Pass
// 35 → Fail
// 75 → Pass
// 20 → Fail
// 88 → Pass

// 🔹 Example 2 – Find Even & Odd Numbers
// let numbers = [1, 2, 3, 4, 5, 6];

// for (let num of numbers) {
//   if (num % 2 === 0) {
//     console.log(num, "is Even");
//   } else {
//     console.log(num, "is Odd");
//   }
// }


// ✅ Output:

// 1 is Odd
// 2 is Even
// 3 is Odd
// 4 is Even
// 5 is Odd
// 6 is Even

// 🔹 Example 3 – Find Expensive Items in Cart
// let prices = [120, 50, 300, 80, 150];

// for (let price of prices) {
//   if (price > 100) {
//     console.log("Expensive item:", price);
//   }
// }


// ✅ Output:

// Expensive item: 120
// Expensive item: 300
// Expensive item: 150

// 🔹 Example 4 – Print Only Long Words
// let words = ["pen", "notebook", "car", "computer", "book"];

// for (let word of words) {
//   if (word.length > 5) {
//     console.log("Long word:", word);
//   }
// }


// ✅ Output:

// Long word: notebook
// Long word: computer

// 🔹 Example 5 – Check Attendance
// let students = ["Aman", "Ravi", "Neha", "Rohit"];

// for (let student of students) {
//   if (student === "Neha") {
//     console.log(student, "is Present ✅");
//   } else {
//     console.log(student, "is Absent ❌");
//   }
// }


// ✅ Output:

// Aman is Absent ❌
// Ravi is Absent ❌
// Neha is Present ✅
// Rohit is Absent ❌


// qtn 5======================================-o-i0uu9y8y8y0y ====== forin------------------

