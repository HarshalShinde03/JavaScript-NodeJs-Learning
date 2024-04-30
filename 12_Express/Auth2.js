const express = require('express')

const app = express();

app.use(express.json())

function isOldEnough(req,res,next){
    const age = req.body.age;
    if(age >= 14){
        next();
    }else{
        res.status(400).json({
            msg:"You are not of age yet"
        });
    }
}



app.get('/ride1',isOldEnough, (req,res)=>{
    res.json({
        msg : "You have riden the ride1"
    });
})

app.listen(3000)