// Step 1: Declare a global variable
let browser = "Chrome";

// Step 2: Function that accepts a callback
function checkBrowserVersion(callback) {
  // simulate async operation with setTimeout
  setTimeout(function () {
    // Step 2b: invoke the callback and pass browser
    callback(browser);
  }, 2000); // 2 seconds delay
}

// Step 3: Define the callback function
function displayBrowserVersion(version) {
  console.log("Browser version using callback: " + version);
}

// Step 4: Call the function and pass the callback
checkBrowserVersion(displayBrowserVersion);
