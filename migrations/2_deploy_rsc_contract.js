const RupeeStableCoin = artifacts.require("RupeeStableCoin");

module.exports = function (deployer) {
  deployer.deploy(RupeeStableCoin);
};