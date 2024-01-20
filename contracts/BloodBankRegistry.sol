// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BloodBankRegistry{
    struct BloodBank {
        address owner;
        string name;
        string location;
        bool isRegistered;
    }

    mapping(address => BloodBank) public bloodBanks;

    function createBloodBank(string memory _name, string memory _location) external {
        
        bloodBanks[msg.sender] = BloodBank({
            owner: msg.sender,
            name: _name,
            location: _location,
            isRegistered: true
        });

    }

    function getBloodBankDetails() external view returns (string memory, string memory) {
        BloodBank storage bloodBank = bloodBanks[msg.sender];
        return (bloodBank.name, bloodBank.location);
    }

}