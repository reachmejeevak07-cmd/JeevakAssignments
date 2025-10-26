//Heterogenous enum 


enum Environment {
LOCAL=1,
DEVELOPMENT,
STAGING="mapping",
PRODUCTION=3
}


function runTests(envstatus:Environment){
console.log(`the environment is ${envstatus}`);
}


runTests(Environment.STAGING) // mapping
runTests(Environment.DEVELOPMENT) //2