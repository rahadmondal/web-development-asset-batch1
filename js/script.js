console.log("day one");

// dom opration
// const headingText = document.querySelector("h1"); // null
// headingText.innerHTML = "kew akjon khota rakheni";
// headingText.style.textTransform = "uppercase";

// variable

// Must start with: A letter (A-Z or a-z), an underscore (_), or a dollar sign ($).

// Cannot start with: A number (0-9).

// Subsequent characters: Can be letters, numbers, underscores, or dollar signs.

// No spaces: Spaces are not allowed within a variable name.

// No special characters: Most punctuation and symbols (like +, -, *, %, ., etc.) are prohibited.

// Case-sensitive: JavaScript is case-sensitive, so age and Age are two different variables.

// Cannot use reserved keywords: You cannot use words that have special meaning in JavaScript, such as function, if, else, return, let, const, var, class, etc., as variable names.

// variables type

// var name = "rahad";

// var Name = "rahad";

//  var , const , let

// var name = "rahad";
// console.log(name);
// var name = "korim";
// console.log(name);

// .......................................................................

// let firstName = "Rahim";
// console.log(firstName);

// firstName = "Rahima";
// console.log(firstName);

// firstName = "Jakir";
// console.log(firstName);

// const firstName = "Rahim";
// console.log(firstName);

// Operators and operand

// let sum = 1 + 2;

//  Assignment Operators

let firstName = "rahad";

// Arithmetic Operators
// +	Addition
// -	Subtraction
// *	Multiplication
// /	Division
// %	Remainder
// **	Exponentiation
// ++	Increment
// --	Decrement

// console.log(50 + 20); // 70
// console.log(50 - 20); // 30
// console.log(50 * 20); //1000
// console.log(50 / 20); // 2.5
// console.log(50 % 20); // 10
// console.log(2 ** 3); // 8

let count = 20;

// 20
// ++count = 21
//count = 21

// console.log(++count); // ++ = 21  count= 21
// console.log(count);

// ==	Equal to	Checks if values are equal (allows type coercion)	'5' == 5	true
// ===	Strict equal to	Checks if values AND types are equal	'5' === 5	false
// !=	Not equal to	Checks if values are not equal (allows type coercion)	'5' != 6	true
// !==	Strict not equal to	Checks if values AND types are not equal	'5' !== 5	true
// >	Greater than		5 > 2	true
// <	Less than		5 < 2	false
// >=	Greater than or equal to		5 >= 5	true
// <=	Less than or equal to		5 <= 4	false

const num1 = 20;
const num2 = 20;

console.log(num1 !== num2);

console.log(num1 > num2);
console.log(num1 < num2);

console.log(num1 >= num2);
console.log(num1 <= num2);
