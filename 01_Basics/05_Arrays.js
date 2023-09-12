// let num = [1,2,3,4,5,6]
// let num2 = [...num]
// num2[2] = 99
// console.log(num);
// console.log(num2);

let myArr = [10,20,30,'Harshal', true];

console.log(myArr);
console.log(myArr.length); // gives the length of the array

// Array METHODS

myArr.push(1000); // adds the given element to array

myArr.pop(); // removes the last element of the array

myArr.unshift(100);
console.log(`After using unshift() myArr = [${myArr}]`);

myArr.shift();
myArr.shift();
console.log(`After using shift() two times = [${myArr}]`);



// Differnce between splice() and slice()

let marksArray = [40,50,60,70,80,90]
let slicedArray = marksArray.slice(1,3) //it will create new array by extracting a portion from original array

console.log(slicedArray);    //  [ 50, 60 ]
console.log(marksArray);    //   [ 40, 50, 60, 70, 80, 90 ]


let splicedArray = marksArray.splice(1,3) // it will modify original array by removing or adding the elements from it

console.log(splicedArray);  //   [ 50, 60, 70]
console.log(marksArray);   //    [ 40, 80, 90 ]

marksArray.splice(1,1,100,101,102) // splice[index, no_of_elements_to_delete, insert_elements_at_same_position ]
console.log(marksArray);   //    [ 40, 100, 101, 102, 90 ]

// array.sort()
console.log(marksArray.sort( (a,b) => a-b));

let names = ['harshal', 'vardhan', 'prathamesh', 'rohit', 'virat', 'dhoni']
names.sort()
console.log(names);

// array.indexOf()
console.log(names.indexOf('vardhan'));

// array.keys()
console.log([...names.keys()]);