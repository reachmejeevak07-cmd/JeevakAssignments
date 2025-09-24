//Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave 
// differently when printed. 

// using var 

const browserName = "Chrome";

function getBrowserName()
{
    if(browserName === "Chrome") {
        var browserName = "Edge";
        console.log("Inside if block:", browserName); 
    } else {
        console.log("Outside if block:", browserName);
    }
}
getBrowserName()

// using let

const browserName = "Chrome";

function getBrowserName()
{
    if(browserName === "Chrome") {
        let browserName = "Edge";
        console.log("Inside if block:", browserName); 
    } else {
        console.log("Outside if block:", browserName);
    }
}
getBrowserName()