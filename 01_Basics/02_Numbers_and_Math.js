const num = 400
// console.log(num);

console.log(num.toString()); //Converts the number into string

console.log(num.toFixed(2)); //Gives the value upto 2 decimal

const percentage = 92.8274;

console.log(percentage.toPrecision(3)); //Gives precise value upto given digits
console.log(percentage.toPrecision(2))

const net_worth = 1000000
console.log(net_worth.toLocaleString('en-IN')); //converts the value into region-vise hundreds


let a = [12,4,56765,21,10]
console.log(Math.min(...a));  // returns lowest value in the array
console.log(Math.max(...a));  // returns highest value in the array

let max = 30;
let min = 50;
let random_num = Math.floor((Math.random() * (max - min + 1))) + min
console.log(random_num);

