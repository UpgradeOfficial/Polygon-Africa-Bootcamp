/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { MUMBAI_RPC_URL, GOERLI_RPC_URL, PRIVATE_KEY } = process.env;
// console.log(MUMBAI_RPC_URL, GOERLI_RPC_URL, PRIVATE_KEY)
module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: GOERLI_RPC_URL,
         accounts: [PRIVATE_KEY]
      },
      mumbai: {
         url: MUMBAI_RPC_URL,
         accounts: [PRIVATE_KEY]
      }
   },
}
// 0x35da0E4dDF880f4b2A838507a50d82B024D61F36 
// this is what is gotten from the default 

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };
