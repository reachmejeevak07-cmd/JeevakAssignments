//Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave 
// differently when printed. 

// using var 

const browserName1 = "Chrome";

function getBrowserName1()
{
    if(browserName1 === "Chrome") {
        var browserName1 = "Edge";
        console.log("Inside if block:", browserName1); 
    } else {
        console.log("Outside if block:", browserName1);
    }
}
getBrowserName1()

// using let

const browserName2 = "Chrome";

function getBrowserName2()
{
    if(browserName2 === "Chrome") {
        let browserName2 = "firefox";
        console.log("Inside if block:", browserName2); 
    } else {
        console.log("Outside if block:", browserName2);
    }
}
getBrowserName2()