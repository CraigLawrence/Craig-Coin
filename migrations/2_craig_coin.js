var CraigCoin = artifacts.require("CraigCoin");

module.exports = function(deployer) {
  deployer.deploy(CraigCoin, 5000);
};
