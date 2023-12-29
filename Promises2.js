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

