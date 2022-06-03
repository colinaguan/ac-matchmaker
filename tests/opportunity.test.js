const app = require("../index");
const supertest = require("supertest");
const delete_model = require('../models/delete_model');

afterEach(async() => { 
    await app.close();
});

it('Testing to see if Jest works', () => {
    expect(1).toBe(1);
})

// USER to obtain JWT
const loginData = {
    'useremail': 'dev18@gmail.com',
    'userpassword': 'pass'
}


