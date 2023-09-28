// Using Default Function 
hello = function (){
    console.log("Helloooooo...");
}

// Using Arrow Functions
hello = () => {
    console.log("Helloooooo....");
}


/*
1. Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223
*/

const reverseNumber = (num) =>{
    return Number.parseInt(num.toString().split("").reverse().join(""))
}

let a = reverseNumber(1212)
console.log(a);
console.log(typeof a);

console.log("----------------------------------------------------------------------------------------------------------");

/*
2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

const checkPalindrom = (str) => {
    let copy = str;
    copy = copy.split('').reverse().join('')
    return copy === str
}

console.log(checkPalindrom('harah'));
console.log("----------------------------------------------------------------------------------------------------------");


const factorial = (y) =>{
    let fact = 1;
    while(y > 1){
      fact *= y;
      y--;
    }
    return fact
}  
console.log(factorial(number))
console.log("----------------------------------------------------------------------------------------------------------");


const check_prime = (n) => {
    for(let i = 2; i<n; i++){
      if (n%i == 0){
        return "not prime"
      }
    }
    return "prime"
}
  
console.log(check_prime(2))
console.log("----------------------------------------------------------------------------------------------------------");



console.log("----------------------------------------------------------------------------------------------------------");
  
  
  
  
console.log("----------------------------------------------------------------------------------------------------------");