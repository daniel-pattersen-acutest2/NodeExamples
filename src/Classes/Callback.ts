module.exports = class CallbackExample {
    constructor() {
        const newMessage:string = "Hello";

        function print(message:string, callback:(outMessage:string)=>void) {
            console.log(message);
            callback("Message has been printed");
        }

        // Callback using regular function call
        console.log("Regular function call");

        const callbackFunction = function (outMessage:string):void {
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