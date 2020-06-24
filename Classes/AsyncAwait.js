"use-strict";
// Async await vs Promises

module.exports = class AsyncAwait {
    constructor() {
        // Regular slow function

        function slowFunction() {
            setTimeout(() => {
                console.log("Slow function finished")
            }, 1000);
            return "Slow function running";
        }

        console.log(slowFunction());

        // Using promises
        function slowPromiseFunction() {
            console.log("Slow promise function running");
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Slow promise function finished");
                }, 1500);
            })
        }

        slowPromiseFunction().then((outString) => {
            console.log(outString);
        })

        // Using Async/Await


        async function slowAsyncFunction() {
            console.log("Slow async function running")
            return await new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Slow async function finished");
                }, 2000);
            });
        }

        async function printAsyncFunction() {
            let asyncReturn = await slowAsyncFunction();
            console.log(asyncReturn);
        }

        printAsyncFunction();
    }
}