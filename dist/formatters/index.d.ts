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
export declare const shortenAddress: (address: any, symbols?: number[]) => string;
