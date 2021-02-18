const app = require('../src/server/index');
const supertest = require('supertest');
const request = supertest(app);
//const request = require('supertest');

describe("The page should be running", () => {
  it("Returns html file successfully", async (done) => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    done();
  });
});



