const { MUMBAI_RPC_URL, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;
console.log(CONTRACT_ADDRESS);
// For Truffle
// const contract = require("./build/contracts/HelloWorld.json");

// For Hardhat
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

//console.log(JSON.stringify(contract.abi));

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(
  (network = "maticmum"),
  MUMBAI_RPC_URL
);

// ethers.providers.al
// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

async function main() {
  const message = await helloWorldContract.message();
  console.log("The message is: " + message);

  // console.log("Updating the message...");
  // const tx = await helloWorldContract.update("this is the new message");
  // await tx.wait();

  // const newMessage = await helloWorldContract.message();
  // console.log("The new message is: " + newMessage);
}

main();