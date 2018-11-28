var CraigCoin = artifacts.require("CraigCoin");

contract('CraigCoin', function(accounts) {
    it("should send money correctly", function() {
        var coin;
        var aBefore, bBefore, aAfter, bAfter;
        var amount = 125;

        return CraigCoin.deployed().then(function(instance) {
            coin = instance;
            return coin.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            aBefore = balance.toNumber();
            return coin.balanceOf.call(accounts[1]);
        }).then(function(balance) {
            bBefore = balance.toNumber();
            return coin.transfer(accounts[1], amount, {from: accounts[0]});
        }).then(function() {
            return coin.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            aAfter = balance.toNumber();
            return coin.balanceOf.call(accounts[1]);
        }).then(function(balance) {
            bAfter = balance.toNumber();
            assert.equal(aAfter, aBefore - amount, "sender balance not right");
            assert.equal(bAfter, bBefore + amount, "receiever balance not right");
        });
    });

    it("should send money back", function() {
        var coin;
        var aBefore, bBefore, aAfter, bAfter;
        var amount = 125;

        return CraigCoin.deployed().then(function(instance) {
            coin = instance;
            return coin.balanceOf.call(accounts[1]);
        }).then(function(balance) {
            aBefore = balance.toNumber();
            return coin.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            bBefore = balance.toNumber();
            return coin.transfer(accounts[0], amount, {from: accounts[1]});
        }).then(function() {
            return coin.balanceOf.call(accounts[1]);
        }).then(function(balance) {
            aAfter = balance.toNumber();
            return coin.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            bAfter = balance.toNumber();
            assert.equal(aAfter, aBefore - amount, "sender balance not right");
            assert.equal(bAfter, bBefore + amount, "receiever balance not right");
        });
    })
});
