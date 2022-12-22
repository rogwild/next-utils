import { ChainIds } from "./configs/networks";
declare const web3: {
    connectors: {
        connectorsByName: {
            injected: import("@web3-react/injected-connector").InjectedConnector;
            walletConnect: import("@web3-react/walletconnect-connector").WalletConnectConnector;
        };
        getLibrary: (provider: any) => import("@ethersproject/providers").Web3Provider;
        connectorLocalStorageKey: string;
    };
    utils: {
        getContract: ({ address, abi, signer, chainId, }: {
            address: string;
            abi: import("ethers").ContractInterface;
            signer: import("ethers").Signer;
            chainId: ChainIds;
        }) => import("ethers").Contract;
    };
    walletActions: {
        setupNetwork: (provider: any, chainId: ChainIds) => Promise<any>;
        signMessage: ({ account, message, provider }: {
            account: any;
            message: any;
            provider: any;
        }) => any;
        signTypedMessage: ({ provider, account, expires, signatureElements, }: {
            provider: any;
            account: any;
            expires: any;
            signatureElements: any;
        }) => Promise<any>;
        registerToken: (provider: any, tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => Promise<any>;
    };
    configs: {
        supportedChains: number[];
        rpcUrlByChains: {
            31337: string;
            1: string;
            3: string;
            5: string;
            56: string;
            97: string;
            80001: string;
            137: string;
        };
        ChainIds: typeof ChainIds;
        wallets: {
            title: string;
            icon: string;
            connectorId: string;
            uid: string;
            background: string;
        }[];
    };
};
export default web3;
