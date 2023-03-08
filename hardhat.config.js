require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1;
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2;
const PRIVATE_KEY3 = process.env.PRIVATE_KEY3;
const PRIVATE_KEY4 = process.env.PRIVATE_KEY4;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
    },
    localhost: {
      chainId: 31337,
    },
    goerli: {
      chainId: 5,
      blockConfirmations: 6,
      url: GOERLI_RPC_URL,
      accounts:
        PRIVATE_KEY1 !== undefined &&
        PRIVATE_KEY2 !== undefined &&
        PRIVATE_KEY3 !== undefined &&
        PRIVATE_KEY4 !== undefined
          ? [PRIVATE_KEY1, PRIVATE_KEY2, PRIVATE_KEY3, PRIVATE_KEY4]
          : [],
    },
  },
  namedAccounts: {
    buyer: {
      default: 0,
    },
    seller: {
      default: 1,
    },
    inspector: {
      default: 2,
    },
    lender: {
      default: 3,
    },
  },
};
