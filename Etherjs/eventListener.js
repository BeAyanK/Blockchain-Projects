const { ethers } = require("ethers");

const eventListener = () => {
 const provider = new ethers.providers.JsonRpcProvider(
  "https://goerli.infura.io/v3/a907409389124f949c91b1e8edd6015e"
 );

 const topicSetsFilter = [
  ethers.utils.id("Transfer(address,address,uint256)"),
 ];

 provider.on(topicSetsFilter, (res) => {
  console.log(res);
 });
};

eventListener();