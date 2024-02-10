// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BloodBankRegistry{
    struct BloodBank {
        address owner;
        string name;
        string location;
        bool isRegistered;
        mapping(uint256 => Donor) donors;
        uint256 donorCount;
    }

    struct Donor { 
        string name;
        uint256 bloodId;
        uint256 batchNo;
        uint256 adharNumber;
        string bloodGroup;
        uint256 dateOfDonation;
        bool isVerified;
    }

    mapping(address => BloodBank) public bloodBanks;

    function createBloodBank(string memory _name, string memory _location) external {
    BloodBank storage bloodBank = bloodBanks[msg.sender];
    bloodBank.owner = msg.sender;
    bloodBank.name = _name;
    bloodBank.location = _location;
    bloodBank.isRegistered = true;
    bloodBank.donorCount = 0;
}



function addDonorDetails(
    string memory _name,
    uint256 _bloodId,
    uint256 _batchNo,
    uint256 _adharNumber,
    string memory _bloodGroup,
    bool _isVerified
) external {
    BloodBank storage bloodBank = bloodBanks[msg.sender];
    require(bloodBank.isRegistered, "Blood Bank is not registered.");

    uint256 currentDate = block.timestamp; // Get current timestamp
    bloodBank.donors[bloodBank.donorCount] = Donor({
        name: _name,
        bloodId: _bloodId,
        batchNo: _batchNo,
        adharNumber: _adharNumber,
        bloodGroup: _bloodGroup,
        dateOfDonation: currentDate,
        isVerified: _isVerified
    });
    bloodBank.donorCount++;
}



function getDonorList() external view returns (Donor[] memory) {
    BloodBank storage bloodBank = bloodBanks[msg.sender];
    require(bloodBank.isRegistered, "Blood Bank is not registered.");

    Donor[] memory donorList = new Donor[](bloodBank.donorCount);

    for (uint256 i = 0; i < bloodBank.donorCount; i++) {
        donorList[i] = bloodBank.donors[i];
    }

    return donorList;
}
    function getBloodBankDetails() external view returns (string memory, string memory) {
        BloodBank storage bloodBank = bloodBanks[msg.sender];
        return (bloodBank.name, bloodBank.location);
    }



}