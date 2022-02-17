const express = require('express');

/** Required to parse cookies containing JWTs
 * ---------------------------------------------------
 *  express-jwt is a plugin for express to handle JWT
 *  cookie-parser allows for cookies to be read in from the 'req' parameters
 *  secrets is DEV environment only, DO NOT USE in production
 */
const jwt = require('express-jwt');
const cookieParser = require('cookie-parser')
const jsonwebtoken = require('jsonwebtoken');
const secrets = require('./models/secrets.json');

const path = require('path');

// User API
const userApi = require('./models/user_api');

// Profile API
const profileApi = require('./models/profile_api');

// Auth 
const authApi = require('./models/auth_api');

require('dotenv').config();
const app = express();
app.use(express.json());

/** This is for setting up the cookie parser and express jwt
 */
app.use(cookieParser());
/*
app.use(
  jwt({
    secret: secrets.accessToken,
    getToken: req => req.cookies.accessToken,
    algorithms: ['HS256'],
  })
);
*/

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS',
  );
  res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Access-Control-Allow-Headers',
  );
  next();
});


//   User CRUD operations
//
//
app.get('/api/users', userApi.userGet);

app.post('/api/login', userApi.userVerifyPost);

app.delete('/api/userDeletion', userApi.userDelete);

app.post('/api/userCreation', userApi.userPost);


//  Profile CRUD operations
//
//
app.post('/api/profileCreation', profileApi.profilePost);

app.put('/api/updateProfile', profileApi.profileUpdate);
//  Event CRUD operations
//
//

//  Preferences CRUD operations
//
//

//  Feedback CRUD operations
//
//

//  Event type CRUD operations
//
//

// AUTH test 
//
//

app.get('/api/dummy', authApi.check, authApi.dummy);


// redirects any other paths to the client
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', function(req, res) {
  console.log('trying to redirect to client build');
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log('App is listening on port ' + port);
