
/*
Square the value of every element in the array. Presume that you will only get numbers in the input array.

const input = [1, 2, 3, 4, 5];
[1, 4, 9, 16, 25];
*/

// const input = [1, 2, 3, 4, 5];

// const new_arr = input.map( (val)=> val*val)
// console.log(new_arr);

/*
If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const input = [1, -4, 12, 0, -3, 29, -150];
42;
*/

// const input = [1, -4, 12, 0, -3, 29, -150];
// const op = input
//                 .filter( (num)=> num>0 )
//                 .reduce( (accumlator, currentVal) => accumlator+currentVal, 0)
// console.log(op)

/*
The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
const input = "George Raymond Richard Martin";
"GRRM";
*/

// const input = "George Raymond Richard Martin";
// const op = input.split(' ').map( (val)=> val[0]).join('')
// console.log(op);


/*
Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

[13, 67, 54];
*/

const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
];

let op = input.map( (val)=>val.age ).sort((a,b) => a - b)

console.log(`[${op[0]},${op[op.length-1]},${op[op.length-1] - op[0]}]`);
