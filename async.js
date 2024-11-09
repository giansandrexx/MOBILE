console.log("Ordering your pizza...");

// Creating a promise
const pizzaPromise = () => {
    return new Promise((resolve, reject) => {
        let order = true;

        if (order) {
            setTimeout(() => { // setTimeout is used to simulate a delay
                resolve("After 5 seconds, Pizza delivered!");
            }, 5000);
        } else {
            setTimeout(() => { // setTimeout is used to simulate a delay
                reject("After 5 seconds, Pizza not delivered!");
            }, 5000);
        }
    });
};

// Calling the function with a promise
// Use .then() to handle the resolved promise
// Use .catch() to handle the rejected promise
// Created by Gian

pizzaPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("Waiting for your pizza...");

// Terminology
// Promise: An object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// Resolve: A callback function that is used when the promise is fulfilled
// Reject: A callback function that is used when the promise is rejected
// .then(): A method that is used to handle the resolved promise
// .catch(): A method that is used to handle the rejected promise
