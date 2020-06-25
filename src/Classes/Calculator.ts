module.exports = class Calculator {
    operations = {
        ADD: (input1:number, input2:number):number => {
            console.log("Adding:", input1, input2)
            return input1 + input2;
        },
        MULTIPLY: (input1:number, input2:number):number => {
            console.log("Multiplying:", input1, input2)
            return input1 * input2;
        }
    }
    constructor() {
        // Calculator Example
        console.log("\nCalculator Example:")
        
        function calculate(input1:number, input2:number, operation:(input1:number, input2:number)=>number) {
            console.log("Calulator output:", operation(input1, input2));
        }

        calculate(3, 5, this.operations.ADD);
        calculate(3, 5, this.operations.MULTIPLY);
    }
}