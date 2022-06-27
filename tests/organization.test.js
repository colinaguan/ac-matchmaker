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

// Testing get /api/getOrganizations/:type
// c76e37dd-7a83-44d1-8ebf-5d8323c81549 should exist, and it is part of Service
test("Get organizations given a type parameter",async () => {
    await supertest(app).get(`/api/getOrganizations/Service`)
    .set('Cookie', [`accessToken=${userinfo.accessToken}`])
    .expect(201)
    .then( (response) =>{
        // console.log(response.body);

        // Checks to see if the array contains some object with the id: c76e37dd-7a83-44d1-8ebf-5d8323c81549
        expect(response.body.some(element => element.organizationid === 'c76e37dd-7a83-44d1-8ebf-5d8323c81549')).toBe(true);
    });
});
