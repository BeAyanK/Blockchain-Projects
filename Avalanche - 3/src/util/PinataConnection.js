import axios from "axios";
import FormData from "form-data";

const API_KEY = "cb4dfdec58324dd61a10";
const API_SECRET = "afc59565570035d8d9fe36e35e331cd2bc044b1aa9d21a1908c56e7f5ae2b7de";

export default async function uploadImage(fileLocation, fileName) {
  const response = await axios.get(fileLocation, {
    responseType: "blob",
  });
  return await uploadToPinata(response.data, fileName);
}

async function uploadToPinata(image, name) {
  // put file into form data
  const formData = new FormData();
  formData.append("file", image, name);

  // the endpoint needed to upload the file
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const response = await axios.post(url, formData, {
    maxContentLength: "Infinity",
    headers: {
      "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
      pinata_api_key: API_KEY,
      pinata_secret_api_key: API_SECRET,
    },
  });
  return { imageHash: response.data.IpfsHash };
}
