"use strict";
// Tests for equality and inequality with strings
let testString = "HelloWorld";
console.log("Equality Test (True):", testString === "HelloWorld"); // Should be true
console.log("Equality Test (False):", testString === "helloWorld"); // Should be false
console.log("Inequality Test (True):", testString !== "hello"); // Should be true
console.log("Inequality Test (False):", testString !== "HelloWorld"); // Should be false
// Tests using the lower case function
let lowerCaseString = "TestString";
console.log("Lower Case Test (True):", lowerCaseString.toLowerCase() === "teststring"); // Should be true
console.log("Lower Case Test (False):", lowerCaseString.toLowerCase() === "TestString"); // Should be false
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let numberTest = 10;
console.log("Equality Test (True):", numberTest === 10); // Should be true
console.log("Equality Test (False):", numberTest === 15); // Should be false
console.log("Greater Than Test (True):", numberTest > 5); // Should be true
console.log("Less Than Test (False):", numberTest < 5); // Should be false
console.log("Greater Than or Equal Test (True):", numberTest >= 10); // Should be true
console.log("Less Than or Equal Test (False):", numberTest <= 5); // Should be false
// Tests using "and" and "or" operators
console.log("AND Operator Test (True):", numberTest > 5 && numberTest < 15); // Should be true
console.log("OR Operator Test (True):", numberTest < 5 || numberTest === 10); // Should be true
// Test whether an item is in an array
let arrayTest = [1, 2, 3, 4, 5];
console.log("Item in Array Test (True):", arrayTest.includes(3)); // Should be true
console.log("Item in Array Test (False):", arrayTest.includes(6)); // Should be false
// Test whether an item is not in an array
console.log("Item Not in Array Test (True):", !arrayTest.includes(6)); // Should be true
console.log("Item Not in Array Test (False):", !arrayTest.includes(3)); // Should be false
