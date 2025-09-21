// Function 1: launchBrowser using if-else

function launchbrowser(browserName)
{
    if(browserName=="Chrome")
    {
        console.log("launched chrome browser");
        
} else{
    console.log("launched  " + browserName +"  browser  ");
}
}

launchbrowser("firefox");


// Function 2: runTests using switch-case

function runTests(testType)
{
    switch (testType) {
        case "smoke":
            console.log("working on smoke testing");
            break;
        case "sanity":
            console.log("working on sanity testing");
            break;
        case "regression":
            console.log(("working on regression testing"));
            break;
        default:
            console.log("user input invalid by default working on smoke testing");
            break;
    }
}
runTests("sanity");