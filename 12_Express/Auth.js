const jwt = require("jsonwebtoken");
// const mongoose = require('mongoose')
const express = require("express");
jwtPass = "1234";

const app = express();
app.use(express.json())

const mongoose = require("mongoose");
const { EMPTY_PATH } = require("zod");
mongoose.connect(
  "mongodb+srv://harshshinde70:DGaYOt8QmCMJV6ok@apitesting01.kdhu3hg.mongodb.net/usersNew"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signin", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existUser = await User.findOne({name : name})
    if(existUser){
        return res.status(400).send("user already exists")
    }
  const user = new User({
    name: name,
    email: email,
    password: password,
  });
  
  user.save().then(() => console.log("meow"));
  res.json({
    "msg" : "User created"
  })

});

app.listen(3000)