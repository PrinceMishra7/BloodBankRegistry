import { ethers } from 'ethers';
import ABI from './artifacts/contracts/BloodBankRegistry.sol/BloodBankRegistry.json'
const provider = new ethers.BrowserProvider(window.ethereum)
export const contractAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'

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