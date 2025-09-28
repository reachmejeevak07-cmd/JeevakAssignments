// Task 1: Function Declaration
function userProfile(name) {
  console.log("Hello, " + name + "!");
}
userProfile("Jeevak"); // Example call

// Task 2: Arrow Function
const double = (num) => num * 2;
console.log(double(10)); // Example call -> 20

// Task 3: Anonymous Function with setTimeout
setTimeout(function () {
  console.log("This message is delayed by 2 seconds");
}, 2000);

// Task 4: Callback Function
function getUserData(callback) {
  setTimeout(() => {
    callback(); // calling the callback after 3 seconds
  }, 3000);
}

// Calling getUserData with a callback function
getUserData(function () {
  console.log("Call Back Function");
});
