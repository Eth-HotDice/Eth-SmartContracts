
var ResultsOracle = artifacts.require("./ResultsOracle.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(
      ResultsOracle,
    { from: accounts[9], gas:6721975, value: 500000000000000000 });
};
