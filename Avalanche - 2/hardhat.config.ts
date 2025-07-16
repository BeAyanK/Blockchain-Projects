import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";

const RECOVERY_PHRASE = "gym area silent settle universe walk weird earn catalog actual web pigeon senior version solve voice valid page address hover message mail evil coyote";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: "0.8.17",

  networks: {
    avalanche_fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",

      accounts: {
        mnemonic: RECOVERY_PHRASE,
      },
    },
  },
};

export default config;
