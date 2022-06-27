const app = require("../index");
const supertest = require("supertest");
const delete_model = require('../models/delete_model');

afterEach(async() => { 
    await app.close();
});

it('Testing to see if Jest works', () => {
    expect(1).toBe(1);
});

// Getting a JWT
const loginData = {
    'useremail': 'dev18@gmail.com',
    'userpassword': 'pass'
};
let userinfo = {};
test("JWT Token get", async () => {
    await supertest(app).post('/api/login')
    .send(loginData)
    .expect(200)
    .then( (response) =>{
        userinfo = response.body;
    });
});

// call getOpportunityTypes
// THERE is a response code mistake, the api should return 200 instead of 201
test("Get OpportunityTypes", async() =>{
    await supertest(app).get('/api/getOpportunityTypes')
    .set('Cookie', [`accessToken=${userinfo.accessToken}`])
    .expect(201)
    .then ((response) =>{
        // validate information here TODO
    });
});