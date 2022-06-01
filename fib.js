// I did not do this 

const prompt = require('prompt-sync')({
    sigint: true
});

let n = prompt("Enter a value for 'n': ");

let prevNum = 0; // 
let currentNum = 1; //
let total = 0; // prevNum + currentNum; 

console.log(prevNum); // accounts for the first 0 in the sequence
let count = 1; // start at 1 to account for the first 0 in the sequence


while (count < n) { // loop runs n times

    console.log(currentNum)
    total = prevNum + currentNum;
    prevNum = currentNum;
    currentNum = total;
    count++
}