export declare enum ChainIds {
    LOCAL = 31337,
    ETH = 1,
    ROPSTEN = 3,
    GOERLI = 5,
    BSC = 56,
    BSC_T = 97,
    MUMBAI = 80001,
    MATIC = 137
}
declare const networkConfigs: {
    1: {
        chainId: any;
        chainName: string;
        nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
        };
        rpcUrls: string[];
        blockExplorerUrls: string[];
    };
    3: {
        chainId: any;
        chainName: string;
        nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
        };
        rpcUrls: string[];
        blockExplorerUrls: string[];
    };
    5: {
        chainId: any;
        chainName: string;
        nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
        };
        rpcUrls: string[];
        blockExplorerUrls: string[];
    };
    137: {
        chainId: any;
        chainName: string;
        nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
        };
        rpcUrls: string[];
        blockExplorerUrls: string[];
    };
    80001: {
        chainId: any;
        chainName: string;
        nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
        };
        rpcUrls: string[];
        blockExplorerUrls: string[];
    };
    56: {
        chainId: any;
        chainName: string;
        nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
        };
        rpcUrls: string[];
        blockExplorerUrls: string[];
    };
    97: {
        chainId: any;
        chainName: string;
        nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
        };
        rpcUrls: string[];
        blockExplorerUrls: string[];
    };
    31337: {
        chainId: any;
        chainName: string;
        nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
        };
        rpcUrls: string[];
    };
};
export declare const supportedChains: number[];
export declare const rpcUrlByChains: {
    31337: string;
    1: string;
    3: string;
    5: string;
    56: string;
    97: string;
    80001: string;
    137: string;
};
export default networkConfigs;
