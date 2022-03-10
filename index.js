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

// Opportunity API
const opportunityApi = require('./models/opportunity_api');

// Request API
const requestApi = require('./models/request_api');

// AUTH API 
const authApi = require('./models/auth_api');

// Organization Type API
const organizationTypeApi = require('./models/organizationType_api');

// Organization API
const organizationApi = require('./models/organization_api');

// OpportunityType API
const opportunityTypeApi = require('./models/opportunityType_api');

require('dotenv').config();

const app = express();

/**
 *  SOCKET.IO SET UP CODE
 *  
 */
 const http = require('http');
 const server = http.createServer(app);
 const { Server } = require("socket.io");
 const { user } = require('pg/lib/defaults');
 const io = new Server(server);
 
 // an array that holds a list of online users.
 let onlineUsers = [];
 
 /**
  * Maps the userId and their respective socketId and stores it inside
  * Array of online Users
  * @param {*} userId 
  * @param {*} socketId 
  */
 const addOnlineUser = (userId, socketId) =>{
   if (onlineUsers.some( (user) => user.userId === userId) === false){
     onlineUsers.push({ userId, socketId});
     // Debug 
     console.log(onlineUsers);
   };
 };
 
 const removeOnlineUser = (socketId) =>{
   onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
 }
 
 const getUser = (userId) =>{
   return onlineUsers.find((user) => user.userId === userId);
 }
 
 
 io.on('connection', (socket) => {
   console.log('a user connected');
 
   socket.on('ping', () =>{
     console.log('Still connected!: ' + socket.id);
   });

   // Send notification
   socket.on('sendNotification', (userId) => {
    const receiver = getUser(userId);
    io.to(receiever.socketId).emit('getNotification');
   });
 
   // Add a event listener for when a user is authenticated.
   // If user is authenticated, it will be added on the online user array.
   socket.on('newOnlineUser', (userId) =>{
     addOnlineUser(userId, socket.id);
     console.log('A new User has connected: ' +  userId);
     console.log(onlineUsers);
   });
 
   //This event occurs when the user's browser is closed
   socket.on('disconnect', () =>{
     console.log('Socket disconnected: ' + socket.id);
     removeOnlineUser(socket.id);
     console.log(onlineUsers);
   });
 
 });

app.use(express.json());

/** This is for setting up the cookie parser and express jwt
 */
 app.use(cookieParser());

app.use(function (req, res, next) {
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
app.get('/api/users', userApi.getActiveUsers);

app.post('/api/login', userApi.userVerifyPost);

app.post('/api/userDeactivation', userApi.userDeactivate);

app.post('/api/userCreation', userApi.userPost);


//  Profile CRUD operations
//
//
app.get('/api/getActiveProfiles', profileApi.getActiveProfiles);

app.post('/api/profileCreation', profileApi.profilePost);

app.get('/api/getProfile/:userid', profileApi.getProfile);

app.put('/api/updateProfile', profileApi.profileUpdate);

app.get('/api/getProfileName/:profileid', profileApi.profileGetName)

//  Opportunity CRUD operations
//
//
app.get('/api/getOpportunities', opportunityApi.getOpportunities);

app.get('/api/getJoinedOpportunities/:profileid', opportunityApi.getJoinedOpportunities);

app.get('/api/getCreatedOpportunities/:profileid', opportunityApi.getCreatedOpportunities);

app.get('/api/getPastOpportunities/:profileid', opportunityApi.getPastOpportunities);

app.post('/api/postOpportunity', opportunityApi.postOpportunity);

// Request CRUD operations
//
//
app.get('/api/getPendingOpportunities/:profileid', requestApi.getPendingOpportunities);

// OrganizationType CRUD operations
//
//
app.get('/api/getOrganizationTypes', organizationTypeApi.getOrganizationTypes);

// Organizations CRUD operations
//
//
app.get('/api/getOrganizations/:type', organizationApi.getOrganizations);

// OpportunityType CRUD operations
//
//
app.get('/api/getOpportunityTypes', opportunityTypeApi.getOpportunityTypes);

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
// just returns the JWT token upon authentication success
app.get('/api/dummy', authApi.check, authApi.dummy);



// redirects any other paths to the client
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', function (req, res) {
  console.log('trying to redirect to client build');
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log('App is listening on port ' + port);
})
// DEBUG
/*
profileModel.createProfile(
    {
      'userid': `82f2d80c-a9ff-49c9-a0d7-7b8edfcfb24c`,
    },
);
*/
