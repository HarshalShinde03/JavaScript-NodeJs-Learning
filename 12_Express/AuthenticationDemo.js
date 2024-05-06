const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();

app.use(express.json())

const ALL_USERS = [
  {
    username: "harsh@gmail.com",
    password: "270",
    name: "Harshal Shinde",
  },
  {
    username: "vardhan@gmail.com",
    password: "696969",
    name: "Vardhan Chatla",
  }
];

function userExists(username, password) {
  let user = false;
  // write logic to return true or false if this user exists in ALL_USERS array
  for(let i=0;i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
      return true;
    }
  }
  return user;
}

app.post("/signin", function (req, res) {
  const {username, password} = req.body;
  console.log(username);
  console.log(password);
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
        if(user.username == username)
          return false;
        else
          return true;
      }),
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)
