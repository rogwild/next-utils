export interface IWeb3State {
    chainId: number | undefined;
}
declare const web3Slice: import("@reduxjs/toolkit").Slice<{
    chainId: number;
}, {
    setupNetwork: (state: import("immer/dist/internal").WritableDraft<{
        chainId: number;
    }>, action: {
        payload: any;
        type: string;
    }) => void;
}, "web3">;
export declare const selectors: {
    selectChainId: (state: any) => any;
};
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setupNetwork: (state: import("immer/dist/internal").WritableDraft<{
        chainId: number;
    }>, action: {
        payload: any;
        type: string;
    }) => void;
}, "web3">;
export default web3Slice;
