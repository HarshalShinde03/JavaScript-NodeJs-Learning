/* 
When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:
*/

function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};
  
console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"
  

// arrow function
const p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Hello resolved");
    },1000).then(data=>console.log(data);
})
