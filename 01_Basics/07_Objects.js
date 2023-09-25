// Create a object

const jsUser = {
    name : "Harshal Shinde",
    age : 22,
    city : "Solapur",
    email : "harshal@javascript.com"
}
// console.log(jsUser);

// Accessing the object's elements
// console.log(jsUser.name);
// console.log(jsUser['city']);
// console.log(jsUser.email);
// console.log(jsUser['age']);


// Modify object
jsUser.name = "Harshal S. Shinde"
jsUser['city'] = "Smart City Solapur"
// console.log(jsUser);

// Adding more elements
jsUser.college = "NKOCET"
// console.log(jsUser);

// Freeze the objects
// Object.freeze(jsUser);
jsUser.college = "NKOCET_faltu"
// console.log(jsUser);

// Adding a function in the object
jsUser.greeting = () => {
    console.log("Welcome!");
}
console.log(jsUser.greeting());


//In the below case the  array function do not have their own 'this' context. So regular function should be used.
/*
jsUser.greetName = () =>{
    console.log(`Welcome boiiii ${this.name}`);
}
console.log(jsUser.greetName());
*/


jsUser.greetName = function(){
    console.log(`Welcome boiiii ${this.name}`);
}

// console.log(jsUser.greetName())
/*
- It will print undefined after "Welcome boiiii Harshal S. Shinde". Because it doesnt have any return type.
- To avoid this just call method, no need to log the result
*/  

jsUser.greetName() 
console.log(jsUser);

console.log("----------------------------------------------------------------------------------------");

const noobPlayer = new Object();
noobPlayer.userName = {
    userFullName : {
        name : "Dinesh",
        inGameName : "ignite"
    }
}
noobPlayer.kd = 2.69;
noobPlayer.botKiller = true,
noobPlayer.killChor = true,
noobPlayer.tattiAim = true

console.log(noobPlayer.userName.userFullName.inGameName);

// Print keys of object
console.log(Object.keys(noobPlayer));

// Combining the Object

let obj1 = {1 : 'a', 2 : 'b'}
let obj2 = {3 : 'c', 4 : 'd'}

// let obj3 = {obj1, obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// Object.assign(target, source)
// let obj3 = Object.assign({}, obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
let obj3 = {...obj1, ...obj2}

console.log(obj3);

console.log('------------------------------------------------------------------------------------------');

// Object destructuring
const course = {
    name : "BGMI Rank Push",
    price : 999,
    courseInstructor : "Troy_OP"
}

const {courseInstructor : teacher} = course
console.log(teacher);

console.log('------------------------------------------------------------------------------------------');

