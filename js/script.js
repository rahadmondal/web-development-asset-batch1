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

// let firstName = "rahad";

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

// =	Equal to	Checks if values are equal (allows type coercion)	'5' == 5	true
// ===	Strict equal to	Checks if values AND types are equal	'5' === 5	false
// !=	Not equal to	Checks if values are not equal (allows type coercion)	'5' != 6	true
// !==	Strict not equal to	Checks if values AND types are not equal	'5' !== 5	true
// >	Greater than		5 > 2	true
// <	Less than		5 < 2	false
// >=	Greater than or equal to		5 >= 5	true
// <=	Less than or equal to		5 <= 4	false

// const num1 = 20;
// const num2 = 20;

// console.log(num1 !== num2);

// console.log(num1 > num2);
// console.log(num1 < num2);

// console.log(num1 >= num2);
// console.log(num1 <= num2);

// undefined vs null

// let num = 10;

// let num;
// // console.log(num);
// num = 10;
// // console.log(num)

// += (Add and assign)
// -= (Subtract and assign)
// *= (Multiply and assign)
// /= (Divide and assign)
// %= (Modulus and assign)
// **= (Exponentiation and assign)

// let sum = 40;
// let num1 = 20;

// sum += num1; // sum = sum + num1
// console.log(sum);
// sum = 60
// sum -= num1; // sum = sum - num1
// console.log(sum);

// sum *= num1
// console.log(sum)

// Logical Operators: Combine or manipulate boolean expressions.
// && (Logical AND - returns true if both operands are true)
// || (Logical OR - returns true if at least one operand is true)
// ! (Logical NOT - inverts the boolean value of an operand)

// const FirstC = 50 > 20; // true

// const SecondC = 30 < 20; // false

// // console.log(FirstC && SecondC);
// console.log(true && false); // false
// console.log(true && true); // true
// console.log(false && true); // false
// console.log(false && false); // false

//if 1st return value is true then output 2nd return value
//if 1st return value is false then output false

// console.log( null && "Are You Ass");

// console.log(true || false); // true
// console.log(true || true); // true
// console.log(false || true); // true
// console.log(false || false); // false

//if 1st return value is true then output 1st
//if 1st return value is false then output 2nd return value

// console.log(!true); // false

// data type : Primitive , Non-Primitive

// Primitive
// String: Represents textual data, enclosed in single or double quotes.

// Number: Represents both integers and floating-point numbers.

// BigInt: Represents integers with arbitrary precision, used for numbers larger than Number.MAX_SAFE_INTEGER.

// BigInt: Represents integers with arbitrary precision, used for numbers larger than Number.MAX_SAFE_INTEGER.

// Undefined: Represents a variable that has been declared but not yet assigned a value.

// Null: Represents the intentional absence of any object value. It is a primitive value, but typeof null returns "object" due to a historical quirk.

// Non-Primitive (Reference) Data Type:

// arrary , object

// const firstName = "rahad";

// console.log(20);
// console.log(20.1);
// console.log(true);

// const a = null;
// const b = undefined;

// total student  24

// const student1 = 101
// const student2 = 101
// const student3 = 101

// const studentId = [101, 102, 103, 104, 105];

// const studentDetails = [
//   {
//     name: "Rahad",
//     roll: 616060,
//     reg: 1502175596,
//     dept: "Computer Science",
//     semester: "8th",
//   },
//   {
//     name: "Rahad1",
//     roll: 6160601,
//     reg: 15021755961,
//     dept: "Computer Science",
//     semester: "8th",
//   },
// ];

// console.log(studentDetails);
// console.log(studentDetails[0].semester);
