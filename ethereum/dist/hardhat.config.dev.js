"use strict";

require("@nomicfoundation/hardhat-toolbox"); //const INFURA_API_KEY = "f9c3b14afaa642da9215fed194fa0446";


var INFURA_PRIVATE_KEY = "efe51fbaa938bddbc6014454594c0b33ca2537d436759066c2446163c3cddfd2";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/f9c3b14afaa642da9215fed194fa0446",
      accounts: [INFURA_PRIVATE_KEY]
    }
  }
};