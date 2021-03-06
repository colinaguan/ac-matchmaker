const app = require("../index");
const supertest = require("supertest");

afterEach(async() => { 
    await app.close();
});

it('Testing to see if Jest works', () => {
    expect(1).toBe(1);
})

// This is the req.body data
const loginData = {
    'useremail': 'dev18@gmail.com',
    'userpassword': 'pass'
}
test("Obtain a JWT and get all majors from the api", async () => {
    // GET A JWT FIRST, access it using logininfo.accessToken
    const logininfo = await supertest(app).post('/api/login')
    .send(loginData)
    .expect(200)
    .then( (response) =>{
       return response.body;
    });

    // Get all majors
    await supertest(app).get('/api/getMajors')
    .set('Cookie', [`accessToken=${logininfo.accessToken}`])
    .expect(200)
    .then((response) =>{
        // Check if the results contains computer science, the most popular major
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    'majorname' : `Computer Science B.S.`,
                })
            ])
        );
    });
});


test("No JWT Test, expect 401", async () => {

    // Get all majors, but no jwt
    await supertest(app).get('/api/getMajors')
    .expect(401);
});


