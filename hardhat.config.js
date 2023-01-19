require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-celo");

const dotenv=require("dotenv");
const { task } = require("hardhat/config");
dotenv.config();

task("accounts","Prints the list of accounts", async(taskArgs,hre)=>{
  const accounts= await hre.ethers.getSigners();
  for(const account of accounts){
    console.log(account.address);
  }
});


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    alfajores:{
      url: process.env.REACT_APP_RINKEBY_RPC_URL,
      accounts:[process.env.REACT_APP_PRIVATE_KEY]
    }
  },
  etherscan:{
    //apiKey:process.env.REACT_APP_ETHERSCAN_KEY
    
    apiKey:{
      alfajores: "M6WWENPJ2INPW24TPVBBE8VVH3HAU34JV2",
      //celo: "M6WWENPJ2INPW24TPVBBE8VVH3HAU34JV2",
    },
    customChains: [
      {
        network: 'alfajores',
        chainId: 44787,
        urls: {
          apiURL: ' https://explorer.celo.org/alfajores/api',
          browserURL: 'https://alfajores-blockscout.celo-testnet.org/',
        },
      }
    ]
  }
};
