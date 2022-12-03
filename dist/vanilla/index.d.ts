export declare const checkIsServer: () => boolean;
export declare const loadScripts: ({ u, type, id }: {
    u: any;
    type?: string;
    id: any;
}) => Promise<unknown>;
export declare const GTMPageView: (url: any) => {
    event: string;
    page: any;
};
export declare const isNil: (value: any) => boolean;
export declare const urlRegex: RegExp;
export declare const addProtocolToUrl: (url: any) => string;
export declare const getURLsFromText: (text: any) => {
    textWithMarkup: any;
    displayUrl: string;
};
export declare const parseMimeType: (mime: any) => {
    type?: undefined;
    ext?: undefined;
} | {
    type: any;
    ext: any;
};
export declare const getPastDay: (days: any) => Date;
export declare const getMonthRange: ({ date, firstDayQuantity, lastDayQuantity }: {
    date: any;
    firstDayQuantity: any;
    lastDayQuantity: any;
}) => Date[];
