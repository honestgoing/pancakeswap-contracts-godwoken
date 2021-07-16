import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";

import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.env.ENV_PATH ?? "./.env"),
});

["DEPLOYER_PRIVATE_KEY"].forEach((key) => {
  if (process.env[key] == null) {
    console.log("\x1b[33m%s\x1b[0m", `[warning] process.env.${key} is not set`);
  }
});

const { DEPLOYER_PRIVATE_KEY } = process.env;
const accounts =
  DEPLOYER_PRIVATE_KEY == null ? undefined : [DEPLOYER_PRIVATE_KEY];

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.4.19" },
      { version: "0.5.16" },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 500,
          },
        },
      },
      { version: "0.7.3" },
      { version: "0.8.3" },
    ],
  },

  networks: {
    // BSC testnet
    bnbt: {
      chainId: 97,
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts,
    },
    // Godwoken devnet
    gwd: {
      chainId: 3,
      url: "http://localhost:8024",
      accounts,
    },
  },
};

export default config;
