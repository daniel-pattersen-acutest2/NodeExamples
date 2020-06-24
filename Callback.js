"use-strict"
module.exports = class CallbackExample {
    constructor() {
        const newMessage = "Hello";

        function print(message, callback) {
            console.log(message);
            callback("Message has been printed");
        }

        // Callback using regular function call
        console.log("Regular function call");

        const callbackFunction = function (outMessage) {
            console.log(outMessage);
        }

        print(newMessage, callbackFunction);

        // Callback using anonymous function
        console.log("\nAnonymous function:");

        print(newMessage, (outMessage) => {
            console.log(outMessage);
        });
    }
}