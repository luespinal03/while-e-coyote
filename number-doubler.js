const prompt = require('prompt-sync')({
    sigint: true
});

let varOne = true;
let numOne = 0;
numOne = Number(prompt("Enter number: "));

while (varOne = true) {

    numOne = numOne * 2;
    if (numOne <= 100) {
        console.log(numOne)
    }
    
    if (numOne >= 100) {
        varOne = false
    }
} 