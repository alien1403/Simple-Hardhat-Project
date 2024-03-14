const hre = require("hardhat");

require('dotenv').config();

async function main() {
  const url = process.env.GOERLI_URL;
  const privateKey = process.env.PRIVATE_KEY;

  const provider = new hre.ethers.providers.JsonRpcProvider(url);
  let wallet = new hre.ethers.Wallet(privateKey, provider);

  let artifacts = await hre.artifacts.readArtifact("Contract");
  
  let Contract = new hre.ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);
  const contract = await Contract.deploy();
  const instanceContract = await contract.deployed();

  await instanceContract.callAttempt("0xaf0362e215Ff4e004F30e785e822F7E20b99723A")
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});