
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

// const input = [
//     {
//       name: "John",
//       age: 13,
//     },
//     {
//       name: "Mark",
//       age: 56,
//     },
//     {
//       name: "Rachel",
//       age: 45,
//     },
//     {
//       name: "Nate",
//       age: 67,
//     },
//     {
//       name: "Jennifer",
//       age: 65,
//     },
// ];

// let op = input.map( (val)=>val.age ).sort((a,b) => a - b)

// console.log(`[${op[0]},${op[op.length-1]},${op[op.length-1] - op[0]}]`);


/*
Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

const input = "Every developer likes to mix kubernetes and javascript";
"E3y d7r l3s to mix k8s and j8t";
*/

// const input = "Every developer likes to mix kubernetes and javascript";

// let op = input.split(' ').map( (val) =>{
//   if(val.length >3){

//     // return val[0]+val.length-2 +val[val.length-1] 
//     /*here code is attempting to add numeric values to characters without converting them to strings, leading to unexpected results.
//     Result - NaNy NaNr NaNs to mix NaNs and NaNt */
//     // we can use this instead
//     return val[0]+(val.length-2).toString() +val[val.length-1] 
//   }
//   else{
//     return val
//   }
// } ).join(' ')

// console.log(op);


/*
Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.

const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

{
    "a":1,"b":1,"c":2,"d":2,"f":2,"g":1
}
*/

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];

// const op = input.flat().reduce( (accumlator,currentVal)=>{
//   if(accumlator[currentVal]){
//     accumlator[currentVal] +=1;
//   }
//   else{
//     accumlator[currentVal] = 1;
//   }
//   return accumlator
// },{} )

// console.log(op)



/*
You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] }
];
[ 
  { name: 'David', average: 100 }
]
*/

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] }
];


let marks_arr = students.map( (student)=> {
  const sum = student.scores.reduce( (accumlator,currentVal)=> accumlator += currentVal )
  return {name : student.name, mark : sum/student.scores.length}
} )
console.log(marks_arr);

let op = marks_arr.filter( (marks)=> marks.mark > 90)
console.log(op);