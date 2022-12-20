import { ChainIds } from "./configs/networks";
export declare const setupNetwork: (provider: any, chainId: ChainIds) => any;
export declare const registerToken: (provider: any, tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => Promise<any>;
export declare const signMessage: ({ account, message, provider }: {
    account: any;
    message: any;
    provider: any;
}) => any;
export declare const signTypedMessage: ({ provider, account, expires, signatureElements, }: {
    provider: any;
    account: any;
    expires: any;
    signatureElements: any;
}) => Promise<any>;
