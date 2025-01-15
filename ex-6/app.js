// Variable Declaration (global scope)
let message = "Welcome to JavaScript Concepts Demo!";
document.getElementById('result').textContent = message;

// Function Declaration
function updateResult(newMessage) {
    document.getElementById('result').textContent = newMessage;
}

// Function with Closure Example
function createCounter() {
    let count = 0; // `count` is enclosed within the function, demonstrating closure.
    return function() {
        count++;
        return count;
    };
}

// Asynchronous Example using setTimeout (Simulates delay)
function simulateAsyncOperation() {
    setTimeout(() => {
        updateResult("Asynchronous Operation Completed!");
    }, 2000); // 2-second delay
}

// DOM Manipulation and Event Handling
document.getElementById('clickButton').addEventListener('click', () => {
    updateResult("Button Clicked! Processing...");
    simulateAsyncOperation();
});

document.getElementById('setButton').addEventListener('click', () => {
    const inputValue = document.getElementById('inputValue').value; // Getting value from input field
    updateResult(`You typed: ${inputValue}`);
});
