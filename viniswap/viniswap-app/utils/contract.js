import { ethers } from "ethers";
import {
  bridgeAbi,
  factoryABI,
  mtb24ABI,
  pairABI,
  routerABI,
  wethABI,
} from "./abi";

const INFURA_PROJECT_ID = "ce8d632a5fdf485ea8e0f041b48c3f69";

export const getProvider = () => {
  if (typeof window !== "undefined" && window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    // return new ethers.providers.JsonRpcProvider(`https://optimism-sepolia.infura.io/v3/${INFURA_PROJECT_ID}`);
    return new ethers.providers.JsonRpcProvider(
      `https://optimism-sepolia.mainnet.io/v3/${INFURA_PROJECT_ID}`
    );
  }
};

export const getSignerOrProvider = async (provider) => {
  if (provider.getSigner && window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length === 0) {
        // return new ethers.providers.JsonRpcProvider(`https://optimism-sepolia.infura.io/v3/${INFURA_PROJECT_ID}`);
        return new ethers.providers.JsonRpcProvider(
          `https://optimism-sepolia.mainnet.io/v3/${INFURA_PROJECT_ID}`
        );
      } else {
        return provider.getSigner();
      }
    } catch (error) {
      console.error(
        "Error while trying to get signer or connect to RPC provider",
        error
      );
      throw new Error("Error processing the request.");
    }
  }
  return provider;
};

export const mtb24Contract = async (address) => {
  const provider = getProvider();
  console.log(provider, "provider");

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
