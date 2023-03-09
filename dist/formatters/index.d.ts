export declare const hasZeroAfterDot: (price: any) => boolean;
export declare const getCountAfterDot: (price: any) => any;
export declare const formatPercent: (number: any) => string;
export declare const parseMimeType: (mime: any) => {
    type?: undefined;
    ext?: undefined;
    renderType?: undefined;
} | {
    type: any;
    ext: any;
    renderType: any;
};
export declare const shortenAddress: (address: string, symbols?: number[]) => string;
/**
 *
 * replacer("example@example.com", [2,2], "#") => ex###############om
 *
 * @param toReplace string
 * @param symbols how many items left in the string
 * @param replaceBy replace symbol
 * @returns string
 */
export declare const replacer: (toReplace: string, symbols?: number[], replaceBy?: string) => string;
