
const request = require("supertest");
const app = require("./app");

test("mean", async function(){
  const resp = await request(app).get("/mean?nums=1,3,5,7");
  expect(resp.body).toEqual({"operation":"mean","result":4});
})

test("median", async function(){
  const resp = await request(app).get("/median?nums=1,3,5,7");
  expect(resp.body).toEqual({"operation":"median","result":4});
})

test("mode", async function(){
  const resp = await request(app).get("/mode?nums=1,3,5,7");
  expect(resp.body).toEqual({"operation":"mode","result":1});
})
