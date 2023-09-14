/*
1. Write a JavaScript function to check whether an `input` is an array or not.
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
*/

const is_array = (input) => {
    return Array.isArray(input);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log("----------------------------------------------------------");

/*
2. Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/

const array_Clone = (input) => {
    return input.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
console.log("----------------------------------------------------------");

/*
3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/

const first = (array, n=1) => {
    if(n< 0){
        return []
    }
    else if (n === 1){
        return array[0];
    }
    else
        return array.slice(0,n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log("----------------------------------------------------------");

/*
4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
*/

const last = (array, n=1) => {
    if(n< 0){
        return []
    }
    else if (n === 1){
        return array[array.length - 1];
    }
    else
        return array.slice(-n);
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
console.log("----------------------------------------------------------");

/*
5. Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

const joinArray = (input, seperator) => {
    return input.join(seperator);
}

myColor = ["Red", "Green", "White", "Black"];
console.log(joinArray(myColor,'+'));
console.log(joinArray(myColor,','));
console.log("----------------------------------------------------------");

/*
6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
*/

const insertDashesBetweenEvens = (inputString) => {
    
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        result += inputString[i];

        if(parseInt(inputString[i]) % 2 === 0 && parseInt(inputString[i+1]) % 2 == 0){
            result += '-';
        }
    }
    return result;
}

const inputNumber = '025468';
const result = insertDashesBetweenEvens(inputNumber);
console.log(result);
console.log("----------------------------------------------------------");

/*
7. Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

console.log(arr1.sort( (a,b)=> a-b).join());
console.log("----------------------------------------------------------");

/*
8. Write a JavaScript program to find the most frequent item in an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/

const findFrequency = (array) => {
    if(array.length === 0){
        return null;
    }

    let mostFrequentItem;
    let maxFrequency = 0;

    for (let i = 0; i < array.length; i++) {
        let currentItem = array[i];
        let frequency = 0;

        let index = array.indexOf(currentItem);
        while(index !== -1){
            frequency++;
            index = array.indexOf(currentItem, index+1);
        }
        if(frequency > maxFrequency){
            mostFrequentItem = currentItem;
            maxFrequency = frequency;
        }
    }
    return `${mostFrequentItem} = ${maxFrequency} times`
}

// const array1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const array1 = [1,2,'h',4,'h',6, 'h',78,'h',1,22,'h','h']
const mostFrequent = findFrequency(array1);
console.log(mostFrequent);
console.log("----------------------------------------------------------");

/*
9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/

const swapCase = (str) => {
    let strArray = str.split("");

    let opArray = strArray.map( (val)=>{
        if(val.toLowerCase() === val){
            return val.toUpperCase();
        }
        else{
            return val.toLowerCase();
        }
    } )
    return opArray.join("");
}

console.log(swapCase('The Quick Brown Fox'));
console.log("----------------------------------------------------------");

/*
10. Write a JavaScript program that prints the elements of the following array.
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------
*/
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(var i in a){
    console.log(`Row ${i}`);

    for(var j in a[i]){
        console.log(`${a[i][j]}`);
    }
}
console.log("----------------------------------------------------------");

/*
Write a JavaScript program to find the leap years in a given range of years.
*/

const findLeapYears = (r1,r2) => {
    let leapYearArray = [];
    for (let i = r1; i < r2; i++) {
       if((i % 400 === 0 && i % 100 === 0) || (i % 4 === 0 && i % 100 !== 0)){
        leapYearArray.push(i);
       }
    }
    return leapYearArray;
}

console.log(findLeapYears(1100,1121));
console.log("----------------------------------------------------------");


/*
Write a JavaScript program to perform a binary search.
Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
Sample array :
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4
*/

const binary_Search = (arr, no) => {
    let s = 0
    let l = arr.length
    
    while(s <= l){
        let mid = Math.floor((s+l)/2)
        // console.log(`arr = [${arr.slice(s,l+1)}]`);
        // console.log(`mid = ${mid} and arr[mid] = ${arr[mid]}`);
        // console.log(`s = ${s} ...... l = ${l}`);
        if(arr[mid] > no){
            l = mid - 1;
            // console.log(`l = ${l}`);
        }
        else if(arr[mid] < no){
            s = mid + 1;
            // console.log(`s = ${s}`);
        }
        else 
            return mid;
    }
    return Number.MIN_VALUE

}

// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
var items = [39,4874,24,2858,298,21, 9, 283, 824]
items.sort( (a,b) => a-b)
console.log(items);
console.log(binary_Search(items, 21)); //0
console.log(binary_Search(items, 2858)); //4
console.log(binary_Search(items, 288)); //4
console.log("----------------------------------------------------------");


let a1 = [10,20,30,50,40];
for(let i in a1){
    console.log(i);          //0 1 2 3 4
    console.log(a[i]);      //10 20 30 50 40 
}

for (const iterator of a1) {
    console.log(iterator );     //10 20 30 50 40 
    
}