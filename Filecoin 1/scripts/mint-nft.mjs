const CONTRACT_ADDRESS = "0x8Dbb0c6c2181a05af06861620936Ce8cDF86E4E0";
const META_DATA_URL = "ipfs://bafyreidb5mcwiycvogrcf4dg2seyqsjvhxdg32ic3vdrskyofnua32fjjm/metadata.json";

// paste function here
// Function to mint NFT
async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
 }

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
