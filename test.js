console.log("Running tests...");

const result = 2 + 2;

if (result !== 4) {
  throw new Error("Test Failed");
}

console.log("All tests passed");