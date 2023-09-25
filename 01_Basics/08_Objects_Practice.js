/*
1. Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/

let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
}
console.log(Object.keys(student));
console.log('------------------------------------------------------------------------');

/*
2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/
console.log(student);
delete student.rollno;
console.log(student);
console.log('------------------------------------------------------------------------');

/*
3. Write a JavaScript program to get the length of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/
console.log(`Length = ${Object.keys(student).length}`);
console.log('------------------------------------------------------------------------');

/*
4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

Already read 'Bill Gates' by The Road Ahead.
Already read 'Steve Jobs' by Walter Isaacson.
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
*/

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
];

//Using for of loop
for(let obj of library){
    // console.log(obj);
    if(!obj.readingStatus){
        console.log(`You still need to read '${obj['title']}' by ${obj['author']}`);
    }
    else{
        console.log(`Already read '${obj['title']}' by ${obj['author']}`);
    }
}

console.log('------------------------------------------------------------------------');

//Using for in loop
for(let i in library){
    if(!library[i].readingStatus){
        console.log(`You still need to read '${library[i]['title']}' by ${library[i]['author']}`);
    }
    else{
        console.log(`Already read '${library[i]['title']}' by ${library[i]['author']}`);
    }
}
console.log('------------------------------------------------------------------------');