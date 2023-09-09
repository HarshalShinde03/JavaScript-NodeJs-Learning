/*
11. Write a JavaScript function to convert a string into camel case.
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"
*/

const camelize = (input) =>{
    let words = input.split(' ')
    console.log(words);
    let camalWords = words.map((char,index) => {
      if(index === 0){
        return char;
      }
      else{
        return char.charAt(0).toUpperCase() + char.slice(1);
      }
    });
    return camalWords.join('');
  }
  console.log(camelize("JavaScript Exercises"));
  console.log(camelize("JavaScript exercises"));
  console.log("------------------------------------------------------------") 
  /*
  12. Write a JavaScript function to uncommelize a string.
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world"
*/

const uncamelize = (input, str=" ") =>{
  // let arr = input.split("");
    let get_index = input.indexOf(input.match(/[A-Z]/))
    // console.log(arr);
    // console.log(get_index);
    return input.slice(0,get_index) + str +input.charAt(get_index).toLowerCase() + input.slice(get_index+1);
  }
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
console.log("------------------------------------------------------------")

/*
13. Write a JavaScript function to concatenate a given string n times (default is 1).
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
*/

const repeat = (input, n = 1) =>{
  let val = input;
  if(n < 2){
    return val;
  } 
  else{
    for (let index = 1; index < n; index++){
      val = val.concat(input);
    }
    return val;
  }
}

console.log(repeat("Harshal...",3));
console.log(repeat("Harshal..."));
console.log(repeat("Harshal...",6));
console.log(repeat("Hello!",3));
console.log("------------------------------------------------------------")

/*
14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
Test Data :
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."
*/

const insert = (input, add_str="", position = 0) =>{
  if(position === 0){
    return add_str + input;
  }
  else
  {
    let get_char = input.charAt(position);
    return input.slice(0,position) + add_str + input.slice(position);
  }
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
console.log("------------------------------------------------------------")
