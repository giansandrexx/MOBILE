// New Variable Declarations.
let username = "Alex"; // Changing 'name' to 'username' and value to "Alex"
let userAge = 22; // Changing 'age' to 'userAge' and value to 22
let likesCoding = false; // New variable indicating if the user likes coding

const country = "Canada"; // A constant representing a country

// Conditional Statements
if (!likesCoding) {
  // Checks if 'likesCoding' is false
  console.log("I do not like coding.");
}

if (userAge >= 18) {
  // Check if 'userAge' is 18 or older
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

switch (username) {
  case "Alex":
    console.log("Hello, Alex!");
    break;
  default:
    console.log("Hello, Stranger!");
}

// New Array Declaration
let favoriteFoods = ["Pizza", "Sushi", "Ice Cream"];
console.log(favoriteFoods); // Output: ["Pizza", "Sushi", "Ice Cream"]

// New Object Declaration
let student = {
  name: "Alex",
  age: 22,
  enrolled: true,
  introduce() {
    console.log(
      "Hi, my name is " + this.name + " and I am " + this.age + " years old."
    );
  },
};

// Accessing new object properties
console.log(student.name); // Output: Alex
console.log(student.age); // Output: 22
console.log(student.enrolled); // Output: true

// New Function Declarations
function sayGoodbye() {
  console.log("Goodbye!");
}

// Calling the new function
sayGoodbye(); // Output: Goodbye

const calculateSum = (num1, num2) => {
  return num1 + num2; // Returns the sum of two numbers
};

// Calling the new arrow function
console.log(calculateSum(5, 7)); // Output: 12

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
}

// Calling the function to check even or odd
checkEvenOdd(userAge); // Output based on 'userAge' value

// Adding a new element to an array
favoriteFoods.push("Chocolate");
console.log(favoriteFoods); // Output: ["Pizza", "Sushi", "Ice Cream", "Chocolate"]

// Mapping the array to create a new list of favorite foods with comments
favoriteFoods = favoriteFoods.map((food) => {
  return food + " is delicious";
});
console.log(favoriteFoods); // Output: ["Pizza is delicious", "Sushi is delicious", "Ice Cream is delicious", "Chocolate is delicious"]

// Using an object method
student.introduce(); // Output: Hi, my name is Alex and I am 22 years old.
