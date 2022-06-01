const prompt = require('prompt-sync')({
    sigint: true
});

let sumOne = 0;
let guessTwo = true; // only controls if th while loop is running or not

while (guessTwo) {
    let guessThree = (prompt("Enter some numbers (type 'done' when complete): "));
    if (guessThree === "done") {
        guessTwo = false;
    } else {
        sumOne = sumOne + Number(guessThree);
    }
}

console.log("Those numbers sum to: " + sumOne);