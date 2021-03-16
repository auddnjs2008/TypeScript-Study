/**
 * Let's make a calculator 🧮
 */


type Command = "add" | "substract" | "multiply" | "divide" | "remainder";


function calculate(operator:Command,one:number,two:number):number{
    switch(operator){
        case "add":
            return one+two;
        case "substract":
            return one-two;
        case "multiply":
            return one*two;
        case "divide":
            return (one/two);
        case "remainder":
            return one % two;
        default:
            throw new Error('unknown command');
    }
}


console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
