const { getDefaultConfig } =  require("expo/metro-config");

const defaultCofig = getDefaultConfig(__dirname);
defaultCofig.resolver.assetExts.push("cjs");

module.exports = defaultCofig;