const { argv } = require("process");
const AsyncAwait = require("./Classes/asyncAwait.js");
const ApiExample = require("./Classes/apiCallExample.js");
const CallbackExample = require("./Classes/callback.js");
const CalculatorExample = require("./Classes/Calculator");

const argumentList = {
    "-asyncAwait": {
        "call": () => { new AsyncAwait() },
        "description": "Runs the async await examples"
    },
    "-apiExample": {
        "call": (input:string) => { new ApiExample(input) },
        "description": "args={-promise OR -async} - Runs the api examples using promise pattern"
    },
    "-callback": {
        "call": () => { new CallbackExample() },
        "description": "Runs the callback examples"
    },
    "-calculator": {
        "call": () => {new CalculatorExample()},
        "description": "Runs the calculator example using callbacks"
    }
}

if (argv.length === 2) {
    console.error("Must include at least one argument");
    console.error("-h for argument list");
} else if (argv[2] !== "-h") {
    argumentList[argv[2]].call(argv[3])
} else {
    for (let key of Object.keys(argumentList)) {
        console.log(key, "-", argumentList[key].description)
    }
}