// ? Destructing objects and arrays
// Sept 2024

const person = {
    name: 'John',
    age: 25,
    hobbies: ['reading', 'cooking'],
    greet: function() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

// ? When to use destructuring?
/* Destructuring is useful when you only nneed a specific property of an object. */

// regular function
// regular passing of object
// even though we are passing the whole object. we are only using the name property
// const printName = (personData) => {
//    console.log(personData.name);
// }

// ! DESTRUCTING THE OBJECT
// If we are only interested in the name property of the object, we can use destructuring
const printName = ({ name }) => {
    console.log(name);
}

// We pass the object as an argument to the function
printName(person);

// ! WITHOUT FUNCTION DESTRUCTURING
const { name, age} = person;
console.log(name,age);

// DESTRUCTURING ARRAYS
const hobbies = ['reading', 'cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

/* Reminder when using destructuring:
- The propert name must math the object property name.
- The property name must be enclosed in curly braces.
- The poropert name must be followed by color. */

// STRING CONCATENATION
console.log("My name is " + name + " and I am " + age + " years old.");

// Output: My name is Max and I am 29years old. // `${name}` this is a example of string interpolation
console.log(`My name is ${name} and I am ${age} years old`);