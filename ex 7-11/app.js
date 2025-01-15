// Object: Defining a user object
const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  address: {
      city: "New York",
      country: "USA"
  },
  greet: function() {
      return `Hello, my name is ${this.name}.`;
  }
};

// Array: Array of tasks
const tasks = ["Learn JavaScript", "Build a website", "Read a book"];

// Error Handling: Throwing and catching custom errors
function performAction(action) {
  if (action === "fail") {
      throw new Error("Action failed. Please try again.");
  }
  return "Action performed successfully!";
}

// JSON: Working with JSON
const jsonString = '{"name": "Jane", "age": 25, "city": "London"}';
const userFromJson = JSON.parse(jsonString); // Parsing JSON string into an object

// DOM Manipulation: Updating the result section
function updateResult(message) {
  document.getElementById('result').textContent = message;
}

// Event Handling: Fetch user data on button click
document.getElementById('fetchButton').addEventListener('click', () => {
  try {
      updateResult(user.greet()); // Using the `greet` method from the user object
      setTimeout(() => {
          updateResult(`User email: ${user.email}`); // Display user email after 1 second
      }, 1000);
      
      // Simulate fetching tasks and display them
      setTimeout(() => {
          const taskList = tasks.map(task => `<li>${task}</li>`).join('');
          updateResult(`Tasks:<ul>${taskList}</ul>`);
      }, 2000);
      
  } catch (error) {
      updateResult(`Error: ${error.message}`);
  }
});

// Event Handling: Set input value to the result
document.getElementById('setButton').addEventListener('click', () => {
  const inputValue = document.getElementById('inputValue').value;
  if (inputValue === "") {
      try {
          throw new Error("Input cannot be empty!");
      } catch (error) {
          updateResult(`Error: ${error.message}`);
      }
  } else {
      updateResult(`You typed: ${inputValue}`);
  }
});
