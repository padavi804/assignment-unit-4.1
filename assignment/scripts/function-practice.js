console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'


function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Pat'));

// 3. Function to add two numbers together & return the result
function addNumbers(x, y) {
  // return firstNumber + secondNumber;
  return x + y;
}
let result = addNumbers(3, 5);
console.log('Result:', result);

// 4. Function to multiply three numbers & return the result
function multiplyThree(a, b, c) {
  return a * b * c
}
let secondResult = multiplyThree(2, 4, 6);
console.log(secondResult);

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('The number is positive:', isPositive(3));
console.log('The number is positie:', isPositive(-4));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let positions = [3, 6, 7, 16]
let not = []

function getLast(array) {
  for (let item of array){
    return array.pop();
  }
if (array < 1){
  return 'undefined';
}
}
console.log(getLast(positions));
console.log(getLast(not));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let oceans = ['Pacific', 'Atlantic', 'Indian']


function find(value, array){
  for (let item of array){
    if (item === value){
      return true;
    }
  }
  return false;
}

console.log('Includes Pacific:', find('Pacific', oceans));
console.log('Includes Antarctic:', find('Antarctic', oceans));
console.log('Includes Atlantic:', find('Atlantic', oceans));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if (string.charAt(0) === letter){
    return true;
  }
  return false;
}
console.log('Apple starts with a', isFirstLetter('a', 'apple'));
console.log('Giraffe starts with j', isFirstLetter('j','giraffe'));

// reference: https://www.w3schools.com/jsref/jsref_charat.asp


// 9. Function to return the sum of all numbers in an array

let array = [3, 8, 5, 2, 9, 11]

function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
for (let i of array){
  sum += i;
}
  // TODO: return the sum
  console.log('Sum is: ' + sum);
}
// console.log(sumAll(array));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


function allPositive(arrayInput) {
  // declare in the function to start with an empty array every time.
  let positiveNumbers = [];
  for (let num of arrayInput) {
    // console.log('num', num);
    if (num > 0){
      positiveNumbers.push(num);
    }
  }
  return positiveNumbers;
}
let tenNumbers = [-3, -1, 2, 4, 6, 8];
let resultNumbers = allPositive(tenNumbers);
console.log('resultNumbers,', resultNumbers)

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
