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

// console.log("Day 3 With Js condition");

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

// let FailStudent = [];

// array = []
// object = {}

// for (let i = 0; i <= students.length - 1; i++) {
//   let student = students[i];
//   if (student.marks < 40) {
//     FailStudent.push(student);
//   }
// }

// console.log(FailStudent);

// Task 3 (Filter Logic):

// "Shudhu Section A er student der khuje ber koro jara 80 er beshi peyeche."
// let consdition;
// if (false) {
//   consdition = "10%";
// } else {
//   consdition = "No discount";
// }

// The Conditional (Ternary) Operator

// const TotalBazar = 500.1;

// let discount = 500 < TotalBazar ? "10% Discount" : "No Discount";
// console.log(discount);

// const num1 = 0;

// let numberType =
//   num1 > 0 ? "Is Posative" : num1 === 0 ? "Is Zero Number" : "Is Navative";
// console.log(numberType);

// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// let result1 = 5 * 20; //50
// console.log(result1)

// let day;
// let date = new Date().getDay();

// switch (date) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

// let mark = 80;

// switch (mark) {
//   case 80:
//     console.log("A+");
//     break;
//   case "red":
//     console.log("STOP");
//     break;
//   case "yellow":
//     console.log("Wait");
// }

// console.log(new Date().getMonth());

// let day;
// let date = 5; //3;

// switch (date) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     day = "Friday";
//     console.log("This is Of day");
//     break;
//   case 6:
//     day = "Saturday";
//     console.log("This is Of day");
//     break;
//   default:
//     console.log("kono kisu mile nai");
// }

// for loop

// const FailStudent = [];

// for (let i = 0; i <= students.length; i++) {
//   const student = students[i];
//   if (student?.marks < 40) {
//     FailStudent.push(student);
//   }
// }

// const firstName = "Rahad";
// const lastName = "Mondal";

// console.log(10 - "10000");

// let i = 0;

// while (true) {
//   let text;
//   text = "The number is " + i;
//   console.log(text);
// }

// while (false) {
//   console.log("sorry");
// }

// do {
//   console.log("sorry");
// } while (false);

// for (let i = 0; i < 10; i++) {
//   let text;
//   if (i === 3) {
//     continue;
//   }
//   text = "The number is " + i;

//   console.log(text);
// }

// return = code ber hoye jai
// break = loop ber hoi
// contiune = runing akta loop skip korbe

// console.log("Number Method");

// const textLength = "ABCDEFGHI JKLMNOPQRS TUVWXYZ";

// console.log(textLength.length);

// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays

// console.log(textLength.charCodeAt(1));

// console.log(textLength[0]);

// const firstName = "Rahad";

// const lastName = "Mondal";

// const date = new Date();

// console.log(
//   `My name is ${firstName} ${lastName} date: ${date.toLocaleDateString()} time: ${date.toLocaleTimeString()} sum ${
//     20 + 20
//   }`
// );

// const name1 = "RAHAD MONDAL";

// console.log(name.slice(-6));

// console.log(name1.toUpperCase().trim());
// console.log(name1.toLowerCase().trim());
// console.log(name1.trim());
// console.log(name1.trimEnd());
// console.log(name1.trimStart());
// console.log(name1.repeat(3));

// let text = "Please visit Microsoft and Microsoft!";

// let text2 = text.replaceAll('Microsoft' , "Rahad-mondal.com")
// console.log(text2)

// let roll = "101|102|103|104|105|106|107";

// let rollArray = roll.split("|");
// console.log(rollArray);

// let fullName = "Md A Rahad Mondal Rahad";

// console.log(fullName.search("Rahad"));

// if (findIndex >= 0) {
//   console.log("khuje pawa gese");
// } else {
//   console.log("khuje pawa jai nai ");
// }

// console.log(fullName.startsWith("A",3));

// let match = fullName.matchAll("Rahad");

// console.log(Array.from(match));

// console.log(fullName.includes("A"));

// let fullName = "Md A Rahad Mondal Rahad Rahad";

// for (const char of fullName) {
//   console.log(char);
// }

// const students = [
//   { name: "Charlie", grade: "A" },
//   { name: "David", grade: "B" },
//   { name: "Eve", grade: "A" },
// ];

// for (let student of students){
//   console.log(student)
// }

// students.forEach((value) => {
//   console.log(value);
//   console.log(index);
//   console.log(arrary);
// });

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// console.log(person.age);
// console.log(person["age"]);

// for (let i in person) {
//   console.log(`${i} is : ${person[i]}`);
// }

// let x = 1010

// console.log(typeof x)
// let toStringX = x.toString()
// console.log(x)
// console.log(typeof toStringX)

// let x1 = new Number(951);

// const num1 = 500;

// console.log(parseFloat(num1))

// const jogfol = sum(10, 30);

// console.log(total);
// console.log(jogfol);

// function Total() {
//   let sum = 120;
// }

// Total();

// if (true) {
//   let sum = 120;
// }

// console.log(sum)

// const array = [10, 20, 30, 40, 50, 60, 70];

// const array2 = [...array]; //[10, 20, 30, 40, 50, 60, 70]; + 80
// array2.push(90);

// console.log(array2);
// console.log(array);

// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) {
//     sum = sum + arg;
//   }
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// console.log(x);1

// let sum = function (a, b) {
//   console.log("fuc call");
//   return a + b;
// };

// sum(5, 5);

// let sum = (a, b) =>(a + b) ;

// const jogfol = sum(10, 20);

// console.log(jogfol);

// console.log(person);

// const person2 = {};

// person2.name = "X";
// person2.age = 30;
// person2.id = 102;

// function func() {}

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather);

// const person = {
//   firstName: "Rahad",
//   lastName: "Mondal",
//   age: 22,
//   id: 101,
//   address: {
//     House: "#05",
//     Road: "#10",
//     Block: "C",
//     PostCode: 1810,
//     thana: "Mirpur",
//     Distric: "Dhaka",
//   },
//   BloodGroup: "O+",
//   fullname: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// delete person.id;

// console.log(person.address.House);

// const cars = ["Saab", "Volvo", "BMW"];

// // console.log(cars.length);
// // console.log(cars[cars.length - 1]);

// const points = new Array(40);

// console.log(points)

// cars.push("Opel");

// console.log(cars);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const newJoin = fruits.join(" ");

// fruits.pop();
// fruits.pop();
// fruits.shift();
// fruits.unshift("Lemon");

// fruits.delete(1)

// let position = fruits.indexOf("Banana")

// console.log(position);

const studentData = [
  {
    id: 101,
    name: "Arafat Rahman",
    age: 20,
    department: "CSE",
    cgpa: 3.5,
    city: "Dhaka",
  },
  {
    id: 102,
    name: "Sumaiya Akter",
    age: 19,
    department: "English",
    cgpa: 3.75,
    city: "Chittagong",
  },
  {
    id: 103,
    name: "Rahim Uddin",
    age: 21,
    department: "BBA",
    cgpa: 2.9,
    city: "Sylhet",
  },
  {
    id: 104,
    name: "Tania Sultana",
    age: 20,
    department: "Physics",
    cgpa: 3.25,
    city: "Rajshahi",
  },
  {
    id: 105,
    name: "Karim Hossain",
    age: 22,
    department: "EEE",
    cgpa: 3.8,
    city: "Dhaka",
  },
  {
    id: 106,
    name: "Nusrat Jahan",
    age: 19,
    department: "Economics",
    cgpa: 3.6,
    city: "Khulna",
  },
  {
    id: 107,
    name: "Fahim Ahmed",
    age: 21,
    department: "CSE",
    cgpa: 3.1,
    city: "Comilla",
  },
  {
    id: 108,
    name: "Sadia Islam",
    age: 20,
    department: "Botany",
    cgpa: 3.45,
    city: "Barisal",
  },
  {
    id: 109,
    name: "Hasan Mahmud",
    age: 22,
    department: "Mathematics",
    cgpa: 2.85,
    city: "Dhaka",
  },
  {
    id: 110,
    name: "Farhana Yeasmin",
    age: 21,
    department: "BBA",
    cgpa: 3.9,
    city: "Chittagong",
  },
  {
    id: 111,
    name: "Shakil Khan",
    age: 20,
    department: "Marketing",
    cgpa: 3.0,
    city: "Rangpur",
  },
  {
    id: 112,
    name: "Meher Afroz",
    age: 19,
    department: "Law",
    cgpa: 3.55,
    city: "Dhaka",
  },
  {
    id: 113,
    name: "Rakib Hasan",
    age: 23,
    department: "Civil Eng.",
    cgpa: 3.3,
    city: "Bogra",
  },
  {
    id: 114,
    name: "Moushumi Roy",
    age: 20,
    department: "Chemistry",
    cgpa: 3.7,
    city: "Sylhet",
  },
  {
    id: 115,
    name: "Imran Nazir",
    age: 21,
    department: "History",
    cgpa: 2.75,
    city: "Mymensingh",
  },
  {
    id: 116,
    name: "Nafisa Maliha",
    age: 20,
    department: "CSE",
    cgpa: 3.95,
    city: "Dhaka",
  },
  {
    id: 117,
    name: "Sohel Rana",
    age: 22,
    department: "Sociology",
    cgpa: 3.15,
    city: "Jessore",
  },
  {
    id: 118,
    name: "Rabeya Bosri",
    age: 21,
    department: "English",
    cgpa: 3.4,
    city: "Dhaka",
  },
  {
    id: 119,
    name: "Tarek Aziz",
    age: 23,
    department: "Political Sci",
    cgpa: 3.05,
    city: "Rajshahi",
  },
  {
    id: 120,
    name: "Ishrat Jahan",
    age: 20,
    department: "Accounting",
    cgpa: 3.65,
    city: "Chittagong",
  },
  {
    id: 121,
    name: "Aminul Islam",
    age: 22,
    department: "EEE",
    cgpa: 3.2,
    city: "Gazipur",
  },
  {
    id: 122,
    name: "Sharmin Sultana",
    age: 19,
    department: "Physics",
    cgpa: 3.85,
    city: "Dhaka",
  },
  {
    id: 123,
    name: "Jahidul Islam",
    age: 21,
    department: "CSE",
    cgpa: 2.95,
    city: "Comilla",
  },
  {
    id: 124,
    name: "Fatema Begum",
    age: 20,
    department: "Botany",
    cgpa: 3.5,
    city: "Khulna",
  },
  {
    id: 125,
    name: "Mahfuzur Rahman",
    age: 22,
    department: "BBA",
    cgpa: 3.1,
    city: "Dhaka",
  },
  {
    id: 126,
    name: "Samira Khan",
    age: 21,
    department: "Economics",
    cgpa: 3.78,
    city: "Sylhet",
  },
  {
    id: 127,
    name: "Al-Amin",
    age: 23,
    department: "Mathematics",
    cgpa: 2.8,
    city: "Barisal",
  },
  {
    id: 128,
    name: "Tasnim Jarine",
    age: 20,
    department: "Law",
    cgpa: 3.6,
    city: "Dhaka",
  },
  {
    id: 129,
    name: "Rashedul Karim",
    age: 21,
    department: "Marketing",
    cgpa: 3.35,
    city: "Chittagong",
  },
  {
    id: 130,
    name: "Nusrat Faria",
    age: 19,
    department: "CSE",
    cgpa: 3.92,
    city: "Rajshahi",
  },
];

// const numbers = [4, 9, 16, 25, 29];

// const findItem = numbers.find((value, index, arrary) => value > 18);

// // function myFunction(value) {
// //   return value > 18;
// // }

// console.log(findItem);

// const findStudent = studentData.find((item, index) => item.id === 215);

// const filterStudent = studentData.filter(
//   (item, index) => item.department.toLowerCase() === "cse".toLowerCase()
// );

// console.log(filterStudent);

// studentData.forEach((item, index) => console.log(item));

// const numbers1 = [45, 4, 9, 16, 25];

// const dobuleNumber1 = numbers1.map((item) => item * 2);

// console.log(dobuleNumber1)

/*hjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjl;
jhskdfhhfdjklghljkhgjffffhgfdgl */

// console.log(num1);

// let num1 = 10; // un / death

// console.log(age);  //unde
//  // লাইন ১
// var age = 20; // লাইন ২
// greet(); // লাইন ৩

// function greet() {
//   console.log("Hello!");
// }

// // age = u/20
// // greet = fuc copy

// //

// var a = 10;

// function first() {
//   var wifeName = "Rahima";
//   console.log("First ফাংশনে:", myName); // এখানে myName খুঁজবে
//   second();

// }

// function second() {
//   var age = 25; // লোকাল ভেরিয়েবল
//   console.log("Second ফাংশনে:", myName); // 🔍 এখানেও myName খুঁজবে
// }

// first();

// const points = [40, 100, 1, 5, 25, 10];

// console.log(points);

// a = 40 , b = 100 // - 60
// a = 100 , b= 1 // 99
// [40 , 1 , 100]
// a = 1 , 100 // -99

// points.sort((a, b) => {
//   return b - a;
// });

// console.log(points);

// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];

// cars.sort((a, b) => a.year - b.year);

// console.log(cars)

// for (let num of numbers) {
//   sumOfNumbers = sumOfNumbers + num;
// }
// const numbers = [45, 4, 9, 16, 25];
// const sumOfNumbers = numbers.reduce((total, value, index, arr) => {
//   return total + value; //49 +9 +16 +25
// }, 0);

// console.log(sumOfNumbers);

// let text = "ABCDEFG";
// console.log(Array.from(text));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// for (let key of keys) {
//   console.log(key);
// }

// const reg = 1001;
// const { id, name, age, department, cgpa, city } = {
//   id: 130,
//   name: "Nusrat Faria",
//   age: 19,
//   department: "CSE",
//   cgpa: 3.92,
//   city: "Rajshahi",
//   reg,
// };

// console.log(id, name);
