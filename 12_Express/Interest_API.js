const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors())

app.get('/interest', (req,res)=>{
    console.log(typeof (req.query.p))
    p = parseInt(req.query.p);
    r = parseInt(req.query.r);
    t = parseInt(req.query.t);
    
    const interest = (p*r*t)/100;
    const total = p+interest;
    res.json({
        interest: interest,
        total: total
    })
})

app.listen(3000, ()=>{
    console.log("Started");
})