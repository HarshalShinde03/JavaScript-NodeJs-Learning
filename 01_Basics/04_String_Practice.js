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

/*
15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
Test Data :
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
"1st"
"8th"
"301st"
"402nd"
*/

const humanize_format = (input=1) =>{
  if(input % 10 === 2){
    return input + 'nd';
  }
  else if(input % 10 === 3){
    return input+'rd';
  }
  else if(input % 10 === 1){
    return input+'st';
  }
  else {
    return input+'th';
  }
} 
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(303));
console.log(humanize_format(402));
console.log("------------------------------------------------------------")

/*
16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
Test Data :
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
"We are doing JS string exercises."
"We are doing JS ..."
"We are doing !!"
*/

const text_truncate = (input, no_char=0, seqeunce='...') =>{
  if(input.length > no_char && no_char !== 0){
    return input.slice(0,no_char - seqeunce.length) + " " + seqeunce;
  }
  else {
    return input;
  }
}
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
console.log("------------------------------------------------------------")

/*
17. Write a JavaScript function to chop a string into chunks of a given length.
Test Data :
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]
*/

const string_chop = (input, chop_length = input.length) =>{
  if (chop_length <= 0 && chop_length === input.length) {
    return [input]
  } 
  let result = [];
  for(let i =0 ; i< input.length; i+=chop_length){
    result.push(input.slice(i,i+chop_length));
  }
  return result
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
console.log("------------------------------------------------------------")

/*
18. Write a JavaScript function to count substrings in a string.
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1
*/

const count = (input, match, caseSen = true) => {
  if(!caseSen){
    input = input.toLowerCase();
    match = match.toLowerCase();
  }

  let count = 0;
  let index = input.indexOf(match);
  // console.log(index);

  while(index !== -1){
    count++;
    // console.log(`count = ${count}`);
    index = input.indexOf(match,index+1); // here with every iteration match will searched from index+1. 
    console.log(`index is ${index}`);
  }
  return count;
}
console.log(count("The quick brown fox jumps over the lazy dog the frog is the", 'The'));
console.log("------------------------------------------------------------")

// let str = "ABCZ";
// console.log([...str].length);
// console.log(str.length);
// console.log(str);
// let abc = [...str];

// console.log(abc);
// abc[2] = 'H'
// console.log(abc);
// console.log("------------------------------------------------------------");

/*
21. Write a JavaScript function to repeat a string for a specified time.
Test Data :
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
Output :
"aaaa"
"Error in string or count."
*/

const repeat_string = (str, count=0) =>{
  let op = str;
  if(count<1){
    return "Error in string or count.";
  }
  for (let i = 1; i < count; i++) {
    op += str
  }
  return op
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));