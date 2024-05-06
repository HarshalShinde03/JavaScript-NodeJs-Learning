const express = require('express')
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
// console.log("Views directory:", app.get('views'));


app.get('/', function(req,res){
    fs.readdir(`./files`, function(err,files){
        res.render("index", {files});
    })
})


app.post('/create', function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect('/');
    });
})

app.get('/file/:filename', (req,res)=>{
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', function(err,data){
        res.render("file", {filename: req.params.filename, data: data});
    })
})

app.get('/edit/:filename', (req,res)=>{
    res.render("edit", {filename: req.params.filename});
})

app.post('/edit', (req,res)=>{
    console.log(req.body)
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err){
        res.redirect("/");
    })
})
// fs.rename('./files/nodejs.txt','./files/naya.txt',function(err){
//     console.log("done");
// })

app.listen(3000);