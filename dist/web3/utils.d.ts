import ethers from "ethers";
import { ChainIds } from "./configs/networks";
export declare const getContract: ({ address, abi, signer, chainId, }: {
    address: string;
    abi: ethers.ContractInterface;
    signer: ethers.Signer;
    chainId: ChainIds;
}) => any;
