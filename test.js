// console.log("Running tests...");

// const result = 2 + 2;

// if (result !== 4) {
//   throw new Error("Test Failed");
// }

// console.log("All tests passed");

const request = require("supertest");
const app = require("./index");

test("GET /msg should return message", async () => {
  const res = await request(app).get("/msg");
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Student API Working");
});

test("Failing test example", () => {
  throw new Error("Intentional failure");
});