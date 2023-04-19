export declare function hasZeroAfterDot(price: any): boolean;
export declare function getCountAfterDot(price: any): any;
export declare function formatPercent(number: any): string;
export declare function parseMimeType(mime: any): {
    type?: undefined;
    ext?: undefined;
    renderType?: undefined;
} | {
    type: any;
    ext: any;
    renderType: any;
};
export declare function shortenAddress(address: string, symbols?: number[]): string;
/**
 *
 * replacer("example@example.com", [2,2], "#") => ex###############om
 *
 * @param toReplace string
 * @param symbols how many items left in the string
 * @param replaceBy replace symbol
 * @returns string
 */
export declare function replacer(toReplace: string, symbols?: number[], replaceBy?: string): string;
