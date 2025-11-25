// console.log("day one");

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

// let count = 20;

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

console.log("Day 3 With Js condition");

// js condition

// let age = 16;

// if (age >= 18) {
//   console.log(" Vai tumi vote dite parba");
// }

// if (age < 18) {
//   console.log("vai tomar akhon o boyos hoi nai aro boro how");
// }

// if (age >= 18) {
//   console.log(" Vai tumi vote dite parba");
// } else {
//   console.log("vai tomar akhon o boyos hoi nai aro boro how");
// }

// let mark = 50;

// if (mark >= 80) {
//   console.log("vai tumi A+ misty khawa");
// } else if (mark >= 70) {
//   console.log("Vai tumi A paico Aro valo koro poro");
// } else if (mark >= 60) {
//   console.log("a-");
// } else if (mark >= 50) {
//   console.log("b");
// }else{
//     console.log(" Vai tumi Fail korco Tarati biyer Dawat daw");
// }

// if (mark >= 80) {
//   console.log("vai tumi A+ misty khawa");
//   return;
// }

// if (mark >= 70) {
//   console.log("Vai tumi A paico Aro valo koro poro");
//   return;
// }

// if (mark < 33) {
//   console.log(" Vai tumi Fail korco Tarati biyer Dawat daw");
//   return;
// }

// // if (condition){
// //   code block
// }

// let a = 70;
// let b = 50;
// let c = 30;

// if (a > b && a > c) {
//   console.log("a boro");
// } else if (b > a && b > c) {
//   console.log("b boro");
// } else {
//   console.log("c boro");
// }

// jodi apni 500 takar opre bazar koren 10% calculate total pay
// jodi 300 takar opre koren 5% calculate total pay
// 300 takar kome jodi kore tumi gorib print koren calculate total pay

// let TotalBazar = 500;
// let totalPay;
// let totalDiscount;

// if (TotalBazar >= 500) {
//   // 10% discount
//   totalDiscount = (TotalBazar * 10) / 100;
//   totalPay = TotalBazar - totalDiscount;
// } else if (TotalBazar >= 300) {
//   // 5% discount
//   totalDiscount = (TotalBazar * 5) / 100;
//   totalPay = TotalBazar - totalDiscount;
// } else {
//   //  no discount
//   totalPay = TotalBazar;
// }
// console.log("Your Payable discount :", totalDiscount);
// console.log("Your Payable ammount :", totalPay);

// Problem 1: Positive or Negative?
// Task: Create a variable called number. Check if the number is positive or negative.

// Problem 2: Odd or Even? ( জোড় না বিজোড় )
// Task: Check if a number is Even (divisible by 2) or Odd. Teaching Tip: Explain that % gives the remainder.

// Problem 3: The Traffic Light

// let Light = "yellblueow";
// if (Light === "green") {
//   console.log("G0!");
// } else if (Light === "red") {
//   console.log("Stop");
// } else if (Light === "yellow") {
//   console.log("Wait");
// } else {
//   console.log("Input Error");
// }

// Loop Ki? (What is a Loop?)
// Loop mane holo "Eki kaj bar bar kora". Jokhon amra chai computer eki kaj 10 bar, 100 bar, ba condition puron na howa porjonto koruk, tokhon amra Loop use kori.

// for (let i = 1; i <= 1000; i++) {
//   console.log("Sorry");
// }

const students = [
  { id: 1, name: "Rahim Uddin", age: 15, class: 10, marks: 85, section: "A" },
  { id: 2, name: "Karim Ahmed", age: 16, class: 10, marks: 72, section: "B" },
  { id: 3, name: "Sadia Islam", age: 15, class: 10, marks: 92, section: "A" },
  { id: 4, name: "Farhana Akter", age: 16, class: 10, marks: 65, section: "B" },
  { id: 5, name: "Tanvir Hasan", age: 15, class: 10, marks: 45, section: "A" },
  { id: 6, name: "Nusrat Jahan", age: 16, class: 10, marks: 88, section: "B" },
  { id: 7, name: "Mehedi Hasan", age: 15, class: 10, marks: 78, section: "A" },
  { id: 8, name: "Sumaya Khan", age: 16, class: 10, marks: 95, section: "B" },
  { id: 9, name: "Rafiqul Islam", age: 15, class: 10, marks: 33, section: "A" },
  {
    id: 10,
    name: "Jannatul Ferdous",
    age: 16,
    class: 10,
    marks: 60,
    section: "B",
  },
  {
    id: 11,
    name: "Abdullah Al Mamun",
    age: 15,
    class: 10,
    marks: 81,
    section: "A",
  },
  {
    id: 12,
    name: "Sharmin Sultana",
    age: 16,
    class: 10,
    marks: 55,
    section: "B",
  },
  { id: 13, name: "Ariful Islam", age: 15, class: 10, marks: 40, section: "A" },
  { id: 14, name: "Tasnim Jahan", age: 16, class: 10, marks: 90, section: "B" },
  { id: 15, name: "Nazmul Huda", age: 15, class: 10, marks: 76, section: "A" },
  { id: 16, name: "Riya Moni", age: 16, class: 10, marks: 82, section: "B" },
  {
    id: 17,
    name: "Shahidul Alam",
    age: 15,
    class: 10,
    marks: 29,
    section: "A",
  },
  {
    id: 18,
    name: "Ayesha Siddika",
    age: 16,
    class: 10,
    marks: 68,
    section: "B",
  },
  {
    id: 19,
    name: "Imran Hossain",
    age: 15,
    class: 10,
    marks: 87,
    section: "A",
  },
  { id: 20, name: "Fatema Begum", age: 16, class: 10, marks: 91, section: "B" },
  { id: 21, name: "Rubel Mia", age: 15, class: 10, marks: 48, section: "A" },
  {
    id: 22,
    name: "Mahmudul Hasan",
    age: 16,
    class: 10,
    marks: 74,
    section: "B",
  },
  { id: 23, name: "Israt Jahan", age: 15, class: 10, marks: 96, section: "A" },
  { id: 24, name: "Al Amin", age: 16, class: 10, marks: 50, section: "B" },
  {
    id: 25,
    name: "Sabina Yasmin",
    age: 15,
    class: 10,
    marks: 38,
    section: "A",
  },
  {
    id: 26,
    name: "Hasanur Rahman",
    age: 16,
    class: 10,
    marks: 84,
    section: "B",
  },
  {
    id: 27,
    name: "Moushumi Akter",
    age: 15,
    class: 10,
    marks: 62,
    section: "A",
  },
  { id: 28, name: "Sujon Ahmed", age: 16, class: 10, marks: 79, section: "B" },
  { id: 29, name: "Fahim Ahmed", age: 15, class: 10, marks: 93, section: "A" },
  { id: 30, name: "Kulsum Bibi", age: 16, class: 10, marks: 58, section: "B" },
];

let FailStudent = []; 

// array = []
// object = {}

for (let i = 0; i <= students.length - 1; i++) {
  let student = students[i];
  if (student.marks < 40) {
    FailStudent.push(student);
  }
}

// console.log(FailStudent);

// Task 3 (Filter Logic):

// "Shudhu Section A er student der khuje ber koro jara 80 er beshi peyeche."
