const app = require("../index");
const supertest = require("supertest");
const delete_model = require("../models/delete_model");

afterEach(async () => {
  await app.close();
});

it("Testing to see if Jest works", () => {
  expect(1).toBe(1);
});

// USER to obtain JWT
const loginData = {
    useremail: "dev18@gmail.com",
    userpassword: "pass",
};
test("Get Profile with JWT", async () => {
  // GET A JWT FIRST
  const logininfo = await supertest(app)
  .post("/api/login")
  .send(loginData)
  .expect(200)
  .then((response) => {
    // console.log(response.body);
    // jwt = response.body.accessToken;
    // console.log(jwt);
    return response.body;
  });
  
//   supertest(app).get("/api/getActiveProfiles")
//   .set('Cookie', [`accessToken=${logininfo.accessToken}`])
//   .expect(200)
//   .then((response) => {
//     console.log(response.body);
//   });
});
