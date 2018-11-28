var CraigCoin = artifacts.require("CraigCoin");

contract('CraigCoin - Initial Balance', function(accounts) {
    it("should have 5000 in creator account", function() {
        return CraigCoin.deployed().then(function(instance) {
            return instance.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            assert.equal(balance.toNumber(), 5000, "not 5000");
        });
    });
});
