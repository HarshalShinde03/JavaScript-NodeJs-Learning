// gist link - https://gist.github.com/hkirat/1618d30e03dc2c276b1cd4b351028d14
// 1. Create a new express app
// 2. Create a new route /signin
// 

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json())
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  let user = false;
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  for(let i=0;i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
      return true;
    }
  }
  return user;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
      users : ALL_USERS.filter((user)=>{
        if(user.username == username){
          return false;
        }else{
          return true;
        }
      }),
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)