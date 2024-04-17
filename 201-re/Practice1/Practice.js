const Heleelaeiouo = [
  { 'e': ['1', '3', '4', '7'] },
  { 'a': ['6'] },
  { 'i': ['8'] },
  { 'o': ['9', '11'] },
  { 'u': ['10'] }
];

// แสดงค่าที่เกี่ยวข้องกับแต่ละตัวอักษร
Heleelaeiouo.forEach(vowel_info => {
  for (const [vowel, values] of Object.entries(vowel_info)) {
    console.log(`${vowel}: ${values}`);
  }
});

//1.  Types, Values, and Variables/ Functions
//Instruction:
//- Write function findMin(arr) : Find min number in an array : Return min number
//Initiate code:
//let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7];
//console.log(findMin(arr));// 1
function findmin(arr) {
    let min = arr[0]
    for (let i = 1 ; i < arr.length; i++) {
        if (arr[i] < min ) {
            min = arr[i];
        }
    }
    return min;

}
let numbers = [34, 0, 58, 8, 21, 5, 13, 3, 89, 7];
console.log(findmin(numbers));


// 2.Types, Values, and Variables
// Instruction:
// - Convert numString to an integer and store it in a new variable num.
// Initiate code:
//  XXXXX is your code
// let numString = "1234";
// let num = XXXXX;
// console.log(typeof num); // Number
let numString = "1234";
let num = parseInt(numString); // converts the string "1234" to the number 1234
console.log(typeof num); // Number

//3. Types, Values, and Variables/ Arrays
//Instruction:
//- Write code to swap their values using array destructuring.
//Initiate code:
// XXXXX is your code
//let a = 5, b = 10;
//XXXXX = [a, b];
//console.log(a); // 10
//console.log(b); // 5
let a = 5, b = 10;
[a, b] = [b, a]; // assigns the value of b to a and the value of a to b
console.log(a); // 10
console.log(b); // 5

 // 4.Types, Values, and Variables/ Arrays
 // Instruction:
 // - Check if arrays are empty.
 // Initiate code:
 // let value1 = [1, 2, 3];
 // let value2 = [];
 // let value3;
// XXXXX is the code to check each variable
 // console.log(XXXXX); // value1 false
 // console.log(XXXXX); // value2 true
 // console.log(XXXXX); // value3 false
 let value1 = [1, 2, 3];
let value2 = [];
let value3;
// XXXXX is the code to check each variable
console.log(value1.length === 0); // value1 false
console.log(value2.length === 0); // value2 true
console.log(value3 === undefined || value3.length === 0); // value3 false

// 5. Types, Values, and Variables/ Arrays
// Instruction:
// - Write code to display only the object elements in the mixedArray.
// Initiate code:
// let mixedArray = [42, "hello", {name: “Joe”, surname: “Doe”}, true,56,false, {name:
// “John”, surname: “Smith”}, {name: “Joy”, surname: “Stein”}];
// Insert your code here
// Output:
// {name: "Joe ", surname: “Doe}
// {name: "John ", surname: “Smith”}
// {name: "Joy ", surname: “Stein”}
let mixedArray = [42, "hello", {name: "Joe", surname: "Doe"}, true, 56, false, {name:
    "John", surname: "Smith"}, {name: "Joy", surname: "Stein"}];
    // Insert your code here
    for (let element of mixedArray) { // loop through each element of the array
      if (typeof element === "object") { // check if the element is an object
        console.log(element); // display the object element
      }
    }

// 6.Types, Values, and Variables/ Expressions, Operators, and Control Structures
// Instruction:
// - No coding, What is result and type of result ?
// Initiate code:
// XXXXX : What is you think about result
// let x = 10;
// let y = "20";
// let result = x + y;
// console.log(result); // XXXXX
// console.log(typeof result); // XXXXX

let x = 10;
let y = "20";
let result = x + y; // string concatenation
console.log(result); // "1020"
console.log(typeof result); // String

// 7.Objects
// Instruction:
// - Create an object person with properties: name (a string), age (a number), and
// isStudent (a boolean).
// 7.1 Add a new property hobbies, an array of strings, to the person object.
// 7.2 Change the age property to a new value.
// 7.3 Delete the isStudent property.
// Initiate code:
const person = {name: 'John', age: 18, isStudent: true}
person.hobbies = ['Play game', 'Sport']
person.age = 20
delete person.isStudent
console.log(person)

 // 8.Expressions, Operators, and Control Structures
 // Instruction:
 // - No coding, What is the result of the code below, and why is it displayed?
 // Initiate code:
 // // XXXXX : What is you think about result
 // if(1){
 // console.log(1); // XXXXX
 // }
 // if([]){
 // console.log([]);// XXXXX
 // }
 // if(""){
 // console.log("");// XXXXX
 // }
 // if(null){
 // console.log(null); // XXXXX
 // }
 // if(undefined){
 // console.log(undefined); // XXXXX
 // }
 if (1) {
    console.log(1); // XXXXX
  }
  // This will run because 1 is a truthy value. It will print 1 to the console.
  
  if ([]) {
    console.log([]); // XXXXX
  }
  // This will run because [] (an empty array) is a truthy value. It will print [] to the console.
  
  if ("") {
    console.log(""); // XXXXX
  }
  // This will not run because "" (an empty string) is a falsy value. It will not print anything to the console.
  
  if (null) {
    console.log(null); // XXXXX
  }
  // This will not run because null is a falsy value. It will not print anything to the console.
  
  if (undefined) {
    console.log(undefined); // XXXXX
  }
  // This will not run because undefined is a falsy value. It will not print anything to the console.

  // 9.Expressions, Operators, and Control Structures / Objects
// Instruction:
// - Compare three objects with name properties (case-insensitive).
// Initiate code:
// XXXXX is your code
// let peopleObj1 = { name: "John", surname: "Doe" },
// let peopleObj2 = { name: "Sarah", surname: "Wilson" },
// let peopleObj3 = { name: "David", surname: "Brown" },
// if(XXXXX){
//  console.log("These two objects have the same name.");
// }
// XXXXX is your code
// XXXXX is your code
// XXXXX is your code
let peopleObj1 = { name: "John", surname: "Doe" };
let peopleObj2 = { name: "Sarah", surname: "Wilson" };
let peopleObj3 = { name: "David", surname: "Brown" };

if (
  peopleObj1.name.toLowerCase() === peopleObj2.name.toLowerCase() ||
  peopleObj1.name.toLowerCase() === peopleObj3.name.toLowerCase() ||
  peopleObj2.name.toLowerCase() === peopleObj3.name.toLowerCase()
) {
  console.log("These two objects have the same name.");
}

// 10.Arrays / Arrays Functions / Objects
// Instruction:
// - Display all the names of people objects (case-insensitive) that have the same name;
// return an array of strings with the names that are the same.
// Initiate code:
// XXXXX is your code
// let people = [
// { name: "John", surname: "Doe" },
//  { name: "olivia", surname: "Smith" },
//  { name: "john", surname: "Johnson" },
//  { name: "Sarah", surname: "Wilson" },
//  { name: "David", surname: "Brown" },
//  { name: "Emily", surname: "Davis" },
//  { name: "David", surname: "Miller" },
//  { name: "Olivia", surname: "Taylor" },
//  { name: "david", surname: "Anderson" },
//  { name: "Sophia", surname: "Clark" }
// ];
// let result2 = XXXXX
// console.log(result); // ["john", "olivia", "david"]
// XXXXX is your code
let people = [
    { name: "John", surname: "Doe" },
    { name: "olivia", surname: "Smith" },
    { name: "john", surname: "Johnson" },
    { name: "Sarah", surname: "Wilson" },
    { name: "David", surname: "Brown" },
    { name: "Emily", surname: "Davis" },
    { name: "David", surname: "Miller" },
    { name: "Olivia", surname: "Taylor" },
    { name: "david", surname: "Anderson" },
    { name: "Sophia", surname: "Clark" }
   ];
   // create an empty array to store the result
   let result2 = [];
   // create an object to store the name frequencies
   let nameFreq = {};
   // loop through the people array
   for (let person of people) {
    // convert the name to lowercase
    let name = person.name.toLowerCase();
    // if the name is already in the object, increment its frequency
    if (name in nameFreq) {
     nameFreq[name]++;
    } else {
     // otherwise, initialize its frequency to 1
     nameFreq[name] = 1;
    }
   }
   // loop through the name frequencies object
   for (let name in nameFreq) {
    // if the frequency is more than 1, it means the name is repeated
    if (nameFreq[name] > 1) {
     // push the name to the result array
     result2.push(name);
    }
   }
   // display the result array
   console.log(result2); // ["john", "olivia", "david"]

// 11.Types, Values, and Variables
// Instruction:
// - No coding, What is the result of the code below, and why is it displayed?
// Initiate code:
// XXXXX : What is you think about result
// const arr = [1, 2, 3];
// arr.push(4); // XXXXX
// arr = [1, 2, 3, 4]; // XXXXX
// const obj = { name: 'Alice' };
// obj.age = 30; // XXXXX
// obj = { name: 'Alice', age: 30 }; // XXXXX
const arr = [1, 2, 3];
arr.push(4); // XXXXX
// arr = [1, 2, 3, 4]; // XXXXX - This line will result in an error. You cannot reassign a constant variable.

const obj = { name: 'Alice' };
obj.age = 30; // XXXXX
// obj = { name: 'Alice', age: 30 }; // XXXXX - This line will result in an error. You cannot reassign a constant variable.

// 12.Functions / Arrays / Arrays Functions
// Instruction:
// - Write a function uniqueElements(arrayValue) to return array of the unique elements
// from an array.
// Initiate code:
// let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
// Insert your code here
// array numbers after use function uniqueElements will be [1, 3, 8, 21, 13, 7]
// Insert your code here
// declare a function named uniqueElements that takes an array as a parameter
function uniqueElements(arrayValue) {
    // create an empty array to store the unique elements
    let uniqueArray = [];
    // loop through the arrayValue
    for (let element of arrayValue) {
     // check if the element is already in the uniqueArray using the includes method
     if (!uniqueArray.includes(element)) {
      // if not, push it to the uniqueArray
      uniqueArray.push(element);
     }
    }
    // return the uniqueArray
    return uniqueArray;
   }
   
   let numbers2 = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
   // call the function with the numbers array and assign the result to a variable
   let uniqueNumbers = uniqueElements(numbers2);
   // display the uniqueNumbers array
   console.log(uniqueNumbers); // [1, 3, 8, 21, 13, 7]

// 13.Functions / Arrays / Arrays Functions
// Instruction:
// - Write a function reverseArray(arrayValue) to reverse an array.
// Initiate code:
// let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
// Insert your code here
// return value will be [7, 8, 3, 13, 8, 21, 8, 3, 1, 1]

// Insert your code here
// declare a function named reverseArray that takes an array as a parameter
function reverseArray(arrayValue) {
    // create an empty array to store the reversed elements
    let reversedArray = [];
    // loop through the arrayValue from the end to the beginning using a decrementing index
    for (let i = arrayValue.length - 1; i >= 0; i--) {
     // push the element at the current index to the reversedArray
     reversedArray.push(arrayValue[i]);
    }
    // return the reversedArray
    return reversedArray;
   }
   
   let numbers3 = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
   // call the function with the numbers array and assign the result to a variable
   let reversedNumbers = reverseArray(numbers3);
   // display the reversedNumbers array
   console.log(reversedNumbers); // [7, 8, 3, 13, 8, 21, 8, 3, 1, 1]
   
// 14.Expressions, Operators, and Control Structures / Arrays / Arrays Functions
// Instruction:
// - Given an array of objects, use destructuring to extract and display all properties from
// each object.
// Initiate code:
// XXXXX is your code
// const users = [
//  { id: 1, name: 'John', age: 28 },
//  { id: 2, name: 'Jane', age: 32 },
//  { id: 3, name: 'Dave', age: 24 }
// ];
// users.forEach(XXXXX);
// XXXXX is your code
const users = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 32 },
    { id: 3, name: 'Dave', age: 24 }
   ];
   // use the forEach method to loop through the users array
   users.forEach(user => {
    // use object destructuring to assign the properties of each user to variables
    let { id, name, age } = user;
    // display the variables using template literals
    console.log(`User ${id}: Name: ${name}, Age: ${age}`);
   });

// 15.Expressions, Operators, and Control Structures / Arrays
// Instruction:
// - Destructure the first two elements and the last element of an array into new variables.
// Initiate code:
// const numbers = [1, 2, 3, 4, 5];
// Insert your code here
const numbers1 = [1, 2, 3, 4, 5];
// Insert your code here
// use array destructuring to assign the first two elements to variables a and b
// use the rest operator (...) to collect the remaining elements in an array
// use array destructuring again to assign the last element to a variable c
let [q, w, ...rest] = numbers;
let [e] = rest.reverse();
// display the variables
console.log(q, w, e); // 1 2 5

/* 16. // Expressions, Operators, and Control Structures
Instruction:
- Create a function named multiplicationTable(number) that generates a multiplication
table based on the provided number. The function should return the results as an array
of strings.
Initiate code:
multiplicationTable(number){
// Insert your code here
}
console.log(multiplicationTable(2));
output
[
"2 x 1 = 2",
"2 x 2 = 4",
"2 x 3 = 6",
"2 x 4 = 8",
"2 x 5 = 10",
"2 x 6 = 12",
"2 x 7 = 14",
"2 x 8 = 16",
"2 x 9 = 18",
"2 x 10 = 20",
"2 x 11 = 22",
"2 x 12 = 24",
]*/ 
// declare a function named multiplicationTable that takes a number as a parameter
function multiplicationTable(number) {
    // create an empty array to store the results
    let results = [];
    // use a for loop to iterate from 1 to 12
    for (let i = 1; i <= 12; i++) {
     // use template literals to create a string that represents the multiplication
     let multiplication = `${number} x ${i} = ${number * i}`;
     // push the string to the results array
     results.push(multiplication);
    }
    // return the results array
    return results;
   }
   
   // call the function with the number 2 and assign the output to a variable
   let table = multiplicationTable(2);
   // display the table array
   console.log(table);

/*17. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions /
   Functions
   Instruction:
   - Create a function calculateGrade(scores) that takes an array of numerical scores and
   returns the corresponding letter grade (A, B, C, D, or F) based on the average score.
   17.1 Calculate the average score.
   17.2 Based on the average score, determine the letter grade:
   • 90-100: A
   • 80-89: B
   • 70-79: C
   • 60-69: D
   • Below 60: F
   Return the letter grade.
   Initiate code:
   function calculateGrade(scores) {
   // Insert your code here
   }
   console.log(calculateGrade([80, 95, 90, 70, 100]));
   output
   B*/ 
   function calculateGrade(scores) {
    // Calculate the average score by adding up all the scores and dividing by the length of the array
    let sum = 0;
    for (let score of scores) {
      sum += score;
    }
    let average = sum / scores.length;
  
    // Based on the average score, determine the letter grade using if-else statements
    let grade;
    if (average >= 90) {
      grade = "A";
    } else if (average >= 80) {
      grade = "B";
    } else if (average >= 70) {
      grade = "C";
    } else if (average >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    // Return the letter grade
    return grade;
  }
  
  // Test the function with an example array of scores
  console.log(calculateGrade([80, 95, 90, 70, 100])); // B

/*18. // Expressions, Operators, and Control Structures / Functions
  Instruction:
  - Write a JavaScript function convertTemperature that converts a temperature from
  Fahrenheit to Celsius, or from Celsius to Fahrenheit, based on a mode parameter.
  18.1 The function should accept two arguments: temperature (a number) and mode (a
  string). The mode argument can be either 'FtoC' for Fahrenheit to Celsius conversion or
  'CtoF' for Celsius to Fahrenheit conversion.
  18.2 Implement the conversion logic:
  • Fahrenheit to Celsius: (temperature - 32) * 5/9
  • Celsius to Fahrenheit: (temperature * 9/5) + 32
  18.3 Return the converted temperature as a number If the mode is neither 'FtoC' nor
  'CtoF', return a message 'Invalid mode. Please use "FtoC" or "CtoF"'.
  Initiate code:
  // Insert your code here
  console.log(convertTemperature(68, 'FtoC'));
  console.log(convertTemperature(20, 'CtoF'));
  console.log(convertTemperature(100, 'Unknown'));
  output
  20
  68
  Invalid mode. Please use "FtoC" or "CtoF*/ 
// Define the function convertTemperature with two parameters: temperature and mode
function convertTemperature(temperature, mode) {
    // Declare a variable to store the converted temperature
    let converted;
  
    // Check the mode argument and apply the conversion logic accordingly
    if (mode === 'FtoC') {
      // Fahrenheit to Celsius: (temperature - 32) * 5/9
      converted = (temperature - 32) * 5/9;
    } else if (mode === 'CtoF') {
      // Celsius to Fahrenheit: (temperature * 9/5) + 32
      converted = (temperature * 9/5) + 32;
    } else {
      // Invalid mode: return a message
      return 'Invalid mode. Please use "FtoC" or "CtoF"';
    }
  
    // Return the converted temperature as a number
    return converted;
  }
  
  // Test the function with some example inputs
  console.log(convertTemperature(68, 'FtoC')); // 20
  console.log(convertTemperature(20, 'CtoF')); // 68
  console.log(convertTemperature(100, 'Unknown')); // Invalid mode. Please use "FtoC" or "CtoF"
  
  /*19. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions /
  Functions
  Instruction:
  - Write a JavaScript function, sumPositiveNumbers(numbers), that calculates the sum
  of all positive numbers in an array. The function should return the sum of positive
  numbers. If the array is empty or contains no positive numbers, the function should
  return 0.
  Initiate code:
  // Insert your code here
  console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150]));
  console.log(sumPositiveNumbers([-1, -2, -3]));
  console.log(sumPositiveNumbers([]));
  output
  42
  0
  0*/ 
// Define the function sumPositiveNumbers with one parameter: numbers
function sumPositiveNumbers(numbers) {
    // Declare a variable to store the sum of positive numbers
    let sum = 0;
  
    // Loop through the array and add only the positive numbers to the sum
    for (let number of numbers) {
      if (number > 0) {
        sum += number;
      }
    }
  
    // Return the sum of positive numbers
    return sum;
  }
  
  // Test the function with some example arrays
  console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150])); // 42
  console.log(sumPositiveNumbers([-1, -2, -3])); // 0
  console.log(sumPositiveNumbers([])); // 0
  
 /*20. // Expressions, Operators, and Control Structures / Arrays / Arrays Functions /
  Functions
  Instruction:
  - Write a JavaScript function sameNumbers(numArray1, numArray2) to receive two
  arrays of numbers and return an array that contains the numbers from both arrays
  without repeating numbers.
  Initiate code:
  // Insert your code here
  console.log(sameNumbers([1,2,3,4,5,2,1,4,1,5,2,5,8],[1,2,5,8,4,1,5,1,47,2,3,56,5,8]));
  output
  [
   1, 2, 3, 4,
   5, 8, 47, 56
  ]  */ 
// Define the function sameNumbers with two parameters: numArray1 and numArray2
function sameNumbers(numArray1, numArray2) {
    // Declare an empty array to store the common numbers
    let common = [];
  
    // Loop through the first array and check if each number is also in the second array
    for (let num of numArray1) {
      // If the number is in the second array and not already in the common array, push it to the common array
      if (numArray2.includes(num) && !common.includes(num)) {
        common.push(num);
      }
    }
  
    // Return the common array
    return common;
  }
  
  // Test the function with some example arrays
  console.log(sameNumbers([1,2,3,4,5,2,1,4,1,5,2,5,8],[1,2,5,8,4,1,5,1,47,2,3,56,5,8])); // [1, 2, 3



  

