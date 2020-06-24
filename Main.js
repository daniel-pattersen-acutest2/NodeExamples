"use-strict"
const { argv } = require("process");
"use-strict";
const AsyncAwait = require("./asyncAwait.js");
const ApiExample = require("./apiCallExample.js");
const CallbackExample = require("./callback.js");
const CalculatorExample = require("./Calculator");

const argumentList = {
    "-asyncAwait": {
        "call": () => { new AsyncAwait() },
        "description": "Runs the async await examples"
    },
    "-apiExample": {
        "call": (input) => { new ApiExample(input) },
        "description": "Runs the api examples using promise pattern, args={-promise OR -async}"
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
        console.log(key, ",", argumentList[key].description)
    }
}