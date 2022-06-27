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

// Get /api/getOrganizationTypes , 
// the response code is incorrect here as well, should return 200 not 201.

test("Get organization types", async () => {
    await supertest(app).get('/api/getOrganizationTypes')
    .set('Cookie', [`accessToken=${userinfo.accessToken}`])
    .expect(201)
    .then( (response) =>{
        // Todo validate data
    });
});