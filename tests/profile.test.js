/*
const supertest = require('supertest');
const http = require('http');
const app = require('../index');

let server;

beforeAll(() => {
  server = http.createServer(app);
  server.listen();
  request = supertest(server);
});

afterAll((done) => {
  server.close(done);
});
*/
// TEST BY: npx jest --runInBand --coverage --verbose --forceExit
// POST Tests for Profile
/*
const profileInfoTest = {
  'userid': '82f2d80c-a9ff-49c9-a0d7-7b8edfcfb24c',
};

test('Post a new Profile Object', async ()=>{
  await request.post('/api/profileCreation')
      .send(profileInfoTest)
      .expect(201);
});
*/
