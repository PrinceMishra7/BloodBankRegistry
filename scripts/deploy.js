
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  // console.log("Account balance:", (await deployer.getBalance()).toString());
  const BloodBankRegistry = await hre.ethers.getContractFactory("BloodBankRegistry");
  const bloodbankregistry = await BloodBankRegistry.deploy();
  await bloodbankregistry.waitForDeployment();
  console.log("Contract deployed to:", bloodbankregistry.target);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
