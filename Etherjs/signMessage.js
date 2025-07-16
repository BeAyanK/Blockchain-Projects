const { ethers, Signer } = require("ethers");

const signMessage = async () => {
 // Create a provider instance
 const provider = new ethers.providers.JsonRpcProvider(
  "https://goerli.infura.io/v3/a907409389124f949c91b1e8edd6015e"
 );

 // Create a wallet instance
 const wallet = new ethers.Wallet(
  "0x999cdfc447ae64af13413525f02cfc82a13d1ee40ecc3acf9978d290f8b10515",
  provider
 );

 // Sign the message
 const output = await wallet.signMessage('ethers.js is a powerful library');
 console.log("signature of message:", output);
};

signMessage();