const express = require('express')

const app = express();

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.get('/author/:username', (req,res)=>{
    res.send(`Welcome, ${req.params.username}`);
})

app.listen(3000,()=>{
    console.log('Server is running');
})