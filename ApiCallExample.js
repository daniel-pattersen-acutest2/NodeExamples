"use-strict"
const fetch = require('node-fetch').default;
const url = "http://dummy.restapiexample.com/api/v1/employees";

module.exports = class ApiCallExample {
    header = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    constructor(input) { 
        if (input === "-promise") {
            console.log("Fetching data from api with promise pattern\n")
            this.performAPICallWithPromise(url);

        } else if (input === "-async") {
            console.log("Fetching data from api with async/await pattern\n");
            this.performAPICallWithAsyncAwait(url);
        }
    }

    performAPICallWithPromise(url) {
        fetch(url, this.header)
        .then((response) => {
            console.log("Status code:", response.status);
            response.json()
            .then((data) => {
                console.log(data);
            })
        });
    }

    async performAPICallWithAsyncAwait(url) {
        let response = await fetch(url, this.header);
        console.log("Status code:", response.status);
        let jsonData = await response.json();
        console.log(jsonData);
    }
}