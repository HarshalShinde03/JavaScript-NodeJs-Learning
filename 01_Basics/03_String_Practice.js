/*
1 . Write a JavaScript function to check whether an 'input' is a string or not.
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
*/
const is_string = (abc) => {
  if (typeof abc === 'string')
    return true
  else 
    return false
}

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

console.log("------------------------------------------------------------")

/*
2. Write a JavaScript function to check whether a string is blank or not.
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
*/

const is_Blank = (input) =>{
  if (typeof input != 'string'){
    console.error("Given input is not string")
    return false
  }
  else if (input.length < 1){
    return true
  }
  return false
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));

console.log("------------------------------------------------------------")

/*
3. Write a JavaScript function to split a string and convert it into an array of words.
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
*/

const string_to_array = (input) =>{
  return input.trim().split(" ")
}
console.log(string_to_array("Robin Singh"));
console.log("------------------------------------------------------------")

/*
4. Write a JavaScript function to extract a specified number of characters from a string.
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/

const truncate_string = (input, no) => {
  return input.substring(0,no)
}
console.log(truncate_string("Robin Singh",4));
console.log(truncate_string("Harshal Shinde",5));
console.log("------------------------------------------------------------")

/*
5. Write a JavaScript function to convert a string into abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/

const abbrev_name = (input) => {
  let str = input.trim().split(" ");
  if(str.length > 1){
    return (str[0] + " "+str[1] + ".");
  }
  return str[0];
}

console.log(abbrev_name("Robin Singh"));
console.log(abbrev_name("Harshal"));
console.log("------------------------------------------------------------")

/*
6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/

const protect_email = (input) =>{
  let splited = input.split("@")
  let part1 = splited[0]
  part1 = part1.substring(0, part1.length - part1.length/2)
  return `${part1}...@${splited[1]}`
}
console.log(protect_email("robin_singh@example.com"));
console.log(protect_email("harsh.shinde8908080@gmail.com"));
console.log("------------------------------------------------------------")

/*
7. Write a JavaScript function to parameterize a string.
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa 
*/

const string_parameterize = (input) =>{
  return input.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/,"").replace(/\s/g,"-")
}
console.log(string_parameterize("Robin Singh from USA."));
console.log(string_parameterize("   harshAl from,, SolapUR"));
console.log("------------------------------------------------------------")

/*
8. Write a JavaScript function to capitalize the first letter of a string.
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
*/

const capitalize = (input) =>{
  return input.charAt(0).toUpperCase() + input.slice(1)
}
console.log(capitalize('js string exercises'));
console.log(capitalize('harshal'));
console.log("------------------------------------------------------------")

/*
9. Write a JavaScript function to capitalize the first letter of each word in a string.
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
*/

const capitalize_Words = (input) =>{
  let splitArray = input.split(" ")
  let capitalizeArray = splitArray.map( (val) => { return val.charAt(0).toUpperCase() + val.slice(1) })
  return capitalizeArray.join(" ")
}
console.log(capitalize_Words('harshal sambhaji shinde'));
console.log("------------------------------------------------------------") 

/*
10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
*/

const swapcase = (input) =>{
  let worlds = input.split("")
  let swappedCase = worlds.map( (val) => {
    if(val.toLowerCase() === val){
      return val.toUpperCase()
    }
    else{
      return val.toLowerCase()
    }
  } )
  return swappedCase.join("")
}
console.log(swapcase('AaBbc'));
console.log(swapcase('hArShAl'));
console.log("------------------------------------------------------------") 


