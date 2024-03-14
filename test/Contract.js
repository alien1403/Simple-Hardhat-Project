// Import Chai testing library
const { expect } = require("chai");

// Describe the test suite
describe("Test Call Function Attempt of Winner Contract", function () {
  let winnerContract;
  
  // Before each test case, deploy the Winners contract
  beforeEach(async () => {
    const Winners = await ethers.getContractFactory("Winners");
    winnerContract = await Winners.deploy();
    await winnerContract.deployed();
  });

  // Test case: should invoke Winner event
  it("should emit Winner event when callAttempt is called", async function () {
    // Deploy the Contract contract
    const Contract = await ethers.getContractFactory("Contract");
    const contract = await Contract.deploy();
    const instanceContract = await contract.deployed();

    // Call callAttempt function and expect it to emit Winner event
    await expect(instanceContract.callAttempt(winnerContract.address))
      .to.emit(winnerContract, "Winner");
  });
});
