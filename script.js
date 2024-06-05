// Q1 :
//  Write a JavaScript function that reverses a number.

const reverse = num => {
  let sum = "";
  for (let i = String(num).length - 1; i >= 0; i--) {
    sum += String(num)[i];
  }
  return sum;
};

console.log(reverse(12345));

// Q2 :
//   Use a loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the console .
const displayOddAndEvenNumbers = () => {
  for (let i = 0; i < 16; i++) {
    i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
  }
};
displayOddAndEvenNumbers();
// Q3 :
// Write a function that returns a string that has letters in alphabetical order.
// Example string : 'Orange'
// Expected Output : 'aegnor'
// Assume punctuation and numbers symbols are not included in the passed string.

const reverseString = s => {
  s = s.split("").sort().join("");
  return s;
};
console.log(reverseString("orange"));
// Q4 :
//  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

const insertDashesBetweenTwoEvenNumbers = num => {
  let numWithDashes = "";
  for (let i = 0; i < num.length - 1; i++) {
    Number(num[i]) % 2 === 0 && Number(num[i + 1]) % 2 === 0
      ? (numWithDashes += num[i] + "-" + num[i + 1])
      : (numWithDashes += num[i]);
  }
  return numWithDashes;
};
console.log(insertDashesBetweenTwoEvenNumbers("246812346"));
// // Q5:
// Write a function (Agechecker) that checks age of the user if the age is larger than or equal 18, the output will be ( The user is Adult ) else ( The user is Minor)
// Use ternary operator

const Agechecker = age =>
  age >= 18 ? "The user is Adult" : "The user is Minor";

console.log(Agechecker(18));
