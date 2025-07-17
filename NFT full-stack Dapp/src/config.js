"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description = "Instinct's PolyAliens NFT collection.";
const baseUri = "ipfs://Qmaa5gi2ewT9UppsDfRkN3pAA1d3vyMZtXDggyx1S1dyZ6";

const layerConfigurations = [
  {
    growEditionSizeTo: 50,
    layersOrder: [
      { name: "Background" },
      { name: "Skin" },
      { name: "Eye" },
      { name: "Mouth" },
      { name: "Shirt" },
      { name: "Neck" },
      { name: "Weed" },
      { name: "Eyewear" },
      { name: "Head" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 600,
  height: 600,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 15,
  thumbWidth: 200,
  imageRatio: format.width / format.height,
  imageName: "collage.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
