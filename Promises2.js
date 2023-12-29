const myPromise = new Promise((res,rej)=>{
  let a = true;
  setTimeout(()=>{
    return a ? res('a found') : rej('a not found');
  },2000)
})

anotherPromise = myPromise.then((value)=>{
  console.log(value);
})

//--------------------------------------------------------------


const promiseOne = new Promise((res,rej)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            res({username:'Harshal',password : 'ha123'})
        }
        else{
            rej('ERROR : Something went wrong')
        }
    },1000)
})
console.log(promiseOne);

let ans = promiseOne.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

//-----------------------------------------------------------------
