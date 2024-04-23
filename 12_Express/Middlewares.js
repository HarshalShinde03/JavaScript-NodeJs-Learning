const express = require('express')
const z = require('zod')
const app = express()

let noOfReq = 0;
function validate(req,res,next){
    // const schema = z.object({
    //     name: z.string().min(3),
    //     age: z.number()
    // })
    // const result = schema.safeParse(req.body)
    // if(result.success){
    //     res.send(result.data)
    //     next();
    // }else{
    //     res.status(400).json({
    //         message: 'Invalid data',
    //         errors: result.error.issues
    //     })
    // }
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