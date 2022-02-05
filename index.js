const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');
const user_model = require("./models/user_model");
const uuid = require('uuid');
require('dotenv').config();

const app = express();
app.use(express.json());

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});


app.get("/api/users", (req, res) => {
    user_model
        .getUsers()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

app.post("/api/login", (req, res) => {
  user_model
      .getUser(req.body.useremail)
      .then((response) => {
          const crypt = (bcrypt.compare(req.password, response.userpassword, function (err, isValid) {
            if (err) return "error";

            return true
          }))
          if (crypt != "error") { 
            delete response[0].userpassword;
            res.status(200).send(response);
          }
      })
      .catch((error) => {
          res.status(500).send(error);
      });
});


app.post("/api/userCreation", (req, res) => {
    const myPlaintextPassword = req.body.userpassword;
    const hash = bcrypt.hashSync(myPlaintextPassword, salt);
    req.body.userpassword = hash;
    newUUID = uuid.v4();

    user_model.createUser(req.body, newUUID)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
  })

// example api endpoint
// app.get('/api/getList', (req,res) => {
//     var list = ["item1", "item2", "item3"];
//     res.json(list);
//     console.log('Sent list of items');
// });

// redirects any other paths to the client
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', function(req,res) {
    console.log('trying to redirect to client build')
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log('App is listening on port ' + port);