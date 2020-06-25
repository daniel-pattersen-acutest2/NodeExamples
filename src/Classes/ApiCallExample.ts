module.exports = class ApiCallExample {
    private fetch = require('node-fetch').default;
    private url:string = "http://dummy.restapiexample.com/api/v1/employees";
    private header:object = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    constructor(input:string) { 
        if (input === "-promise") {
            console.log("Fetching data from api with promise pattern\n")
            this.performAPICallWithPromise(this.url);

        } else if (input === "-async") {
            console.log("Fetching data from api with async/await pattern\n");
            this.performAPICallWithAsyncAwait(this.url);
        }
    }

    performAPICallWithPromise(url:string) {
        this.fetch(url, this.header)
        .then((response) => {
            console.log("Status code:", response.status);
            response.json()
            .then((data) => {
                console.log(data);
            })
        });
    }

    async performAPICallWithAsyncAwait(url:string) {
        let response = await fetch(url, this.header);
        console.log("Status code:", response.status);
        let jsonData = await response.json();
        console.log(jsonData);
    }
}