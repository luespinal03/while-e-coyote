const prompt = require('prompt-sync')({
    sigint: true
});

let varOne = Number(prompt("Enter x: "));
let varTwo = Number(prompt("Enter y: "));

while (varOne % varTwo !== 0) {
    console.log(varOne + " is not divisable by " + varTwo)
    varOne++
}

console.log("Your " + varOne + " is divisible by " + varTwo)