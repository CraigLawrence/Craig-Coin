var CraigCoin = artifacts.require("CraigCoin");

contract('CraigCoin - Quantitative Easing', function(accounts) {
    it("central bank should be able to mint new money", function() {
        var coin;
        var before, after;
        var amount = 25000;

        return CraigCoin.deployed().then(function(instance) {
            coin = instance;
            return coin.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            before = balance.toNumber();
            return coin.quantitativeEase(amount, {from: accounts[0]});
        }).then(function() {
            return coin.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            after = balance.toNumber();
            assert.equal(after, before + amount, "minting not successful");
        });
    })
});
