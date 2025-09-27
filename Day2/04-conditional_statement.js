function getBrowser() {
    if (browserName=="chrome") {
        console.log("supported browser is Chrome");
        
    } else if (browserName=="edge") {
        console.log("Supported browser is edge");
        } else {
            console.log("not supported browser");
            
        }  
}
let browserName="edge"
getBrowser()

function numbertype(number) {
    if (number>0)
    {
        console.log("its a positive value"); // if condition checks each and every conditions in the statements
        
    }
    else if(number===0)
    {
        console.log("its a neutral value");
    }
    else if(number<0)
    {
        console.log("its a negative value");
    }
        
    else
    {
        console.log("check your input");
        
    }
}
numbertype(4)

// get a browser version using swtich case

let browser="chrome";
function getVersion(){
    switch (browser) {
        case "chrome":
        console.log("140");
            break;
        case "firefox":
            console.log("141");
            break;
        case "edge":
            console.log("142");
            break;
        default:
            console.log("invalid browser");
            break;
    }
}
getVersion()
