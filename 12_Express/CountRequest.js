const express = require('express')
const z = require('zod')
const app = express()

let noOfReq = 0;
function validate(req,res,next){
   
    noOfReq++;
    console.log(noOfReq);
    next();
    
}

app.use(express.json())
app.use(validate)

app.get('/check', (req,res)=>{
    res.send('Hello World');
})

app.post('/check', (req,res)=>{
    res.send('Hello');

})


app.listen(3000)