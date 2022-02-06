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

test('get All Users', async ()=>{
  await request.get('/api/users')
      .expect(200);
});
*/
