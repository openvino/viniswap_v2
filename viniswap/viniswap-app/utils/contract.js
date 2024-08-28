import { ethers } from "ethers";
import { bridgeAbi, factoryABI, mtb24ABI, pairABI, routerABI, wethABI } from "./abi";

const INFURA_PROJECT_ID = '2UrrpLL3Im3ATvqSRLI8EEwB25F';

export const getProvider = () => {
  if (typeof window !== "undefined" && window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    return new ethers.providers.JsonRpcProvider(`https://optimism-sepolia.infura.io/v3/${INFURA_PROJECT_ID}`);
  }
};

const getSignerOrProvider = async (provider) => {
  if (provider.getSigner && window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length === 0) {
        throw new Error("No accounts available. Please connect your wallet.");
      }
      return provider.getSigner();
    } catch (error) {
      console.error("Wallet not connected or access denied", error);
      throw new Error("Please connect your wallet to proceed.");
    }
  }
  return provider;
};

export const mtb24Contract = async (address) => {
  const provider = getProvider();
  console.log(provider, 'provider');
  
  const signerOrProvider = await getSignerOrProvider(provider);
  return new ethers.Contract(address, mtb24ABI, signerOrProvider);
};

export const wethContract = async () => {
  const provider = getProvider();
  const signerOrProvider = await getSignerOrProvider(provider);
  return new ethers.Contract(
    process.env.NEXT_PUBLIC_WETH_ADDRESS,
    wethABI,
    signerOrProvider
  );
};

export const routerContract = async () => {
  const provider = getProvider();
  const signerOrProvider = await getSignerOrProvider(provider);
  return new ethers.Contract(
    process.env.NEXT_PUBLIC_ROUTER,
    routerABI,
    signerOrProvider
  );
};

export const factoryContract = async () => {
  const provider = getProvider();
  const signerOrProvider = await getSignerOrProvider(provider);
  const router = await routerContract();
  const factoryAddress = await router.factory();
  return new ethers.Contract(factoryAddress, factoryABI, signerOrProvider);
};

export const pairContract = async (pairAddress) => {
  const provider = getProvider();
  const signerOrProvider = await getSignerOrProvider(provider);
  return new ethers.Contract(pairAddress, pairABI, signerOrProvider);
};

export const mtbContracts = async (address) => {
  const provider = getProvider();
  const signerOrProvider = await getSignerOrProvider(provider);
  return new ethers.Contract(address, mtb24ABI, signerOrProvider);
};

export const bridgeContract = async (address) => {
  const provider = getProvider();
  const signerOrProvider = await getSignerOrProvider(provider);
  return new ethers.Contract(address, bridgeAbi, signerOrProvider);
};
