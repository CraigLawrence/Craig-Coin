pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CraigCoin.sol";

contract TestCraigCoin {
    CraigCoin coin = CraigCoin(DeployedAddresses.CraigCoin());

    function testDeployedInitialBalance() public {
        uint expected = 5000;
        Assert.equal(coin.balanceOf(msg.sender), expected, "Owner has 5000 coins");
    }
}
