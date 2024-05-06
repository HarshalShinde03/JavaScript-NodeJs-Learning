// Introdcution to Promises

// Promise represents eventual completion or failur of a asynchronus opreation and its resulting value..
/*
Syntax :->  let a = new Promise( function(resolve,reject){  code  } )
*/

let step1 = new Promise( function(resolve, reject){
    return resolve("Gate pe aao..");
} )

let step2 = step1.then( (data)=>{
    console.log(data);
    return new Promise( (res,rej)=>{
        return res('Ghar me enter kro..');
    } )
})

let step3 = step2.then( (data)=>{
    console.log(data);
    return new Promise( (res,rej)=>{
        rej(new Error('Tum pagal hoo...'));
    } )
} )

let step4 = step3.catch((data)=>{
    console.log('Yaha error hai.... \n',data);
})

/*
Output :
Gate pe aao..
Ghar me enter kro..
Yaha error hai... 
Error: Tum pagal hoo...
*/
