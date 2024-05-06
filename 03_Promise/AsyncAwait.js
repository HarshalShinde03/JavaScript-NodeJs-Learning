function doSomething(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
    console.log("Inside promise")
      resolve('I did something')
    }, 3000)
  })
}

async function asyncTest(){
  console.log("hiii")
  let data = await doSomething();
  
  console.log(data);
  console.log("over")
}

asyncTest();
