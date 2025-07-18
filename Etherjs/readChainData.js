const { ethers } = require('ethers');

const readChainData = async () => {
  // 1. Create a provider instance
  const provider = new ethers.providers.JsonRpcProvider(
    'https://goerli.infura.io/v3/a907409389124f949c91b1e8edd6015e'
  );

  // 2. Get current block number
  const blockNumber = await provider.getBlockNumber();
  console.log('Block Number:', blockNumber);

  // 3. Get ethers balance for a specific wallet
 const balance = await provider.getBalance("0x0b0605d0D05552C02c9CE6C442e14d781DD65a84");
 const formattedBalance = ethers.utils.formatEther(balance);
 console.log("Balance:", formattedBalance, "ether");
}
readChainData();