import { ethers } from 'ethers';
import ABI from './artifacts/contracts/BloodBankRegistry.sol/BloodBankRegistry.json'
const provider = new ethers.BrowserProvider(window.ethereum)
export const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

export async function connectWallet(){
    console.log(provider)
    return (await provider.getSigner()).address;
}

export async function createbloodbank(name, location){
    try {
        const signer =await  provider.getSigner();
        const contract = new ethers.Contract(contractAddress, ABI.abi, signer);
        const tx = await contract.connect(signer).createBloodBank(name, location);
        await tx.wait();
    } catch (error) {
        console.log(error)
    }
    
}


export async function addDonorDetails(name, bloodId, batchNo, adharNumber, bloodGroup, isVerified) {
    try {
        const signer = await provider.getSigner();
        console.log("signer : "+signer);
        const contract = new ethers.Contract(contractAddress, ABI.abi, signer);
        const tx = await contract.connect(signer).addDonorDetails(name, bloodId, batchNo, adharNumber, bloodGroup, isVerified);
        await tx.wait();

        console.log("donor added...")
    } catch (error) {
        console.log(error);
    }
}

export async function getDonorList() {
    try {
        const contract = new ethers.Contract(contractAddress, ABI.abi, provider);
        const donorList = await contract.getDonorList();
        return donorList;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getBloodBankDetails() {
    try {
        const contract = new ethers.Contract(contractAddress, ABI.abi, provider);
        const bloodBankDetails = await contract.getBloodBankDetails();
        return bloodBankDetails;
    } catch (error) {
        console.log(error);
        return [];
    }
}



