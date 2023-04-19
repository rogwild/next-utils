export declare function checkIsServer(): boolean;
export declare function loadScripts({ u, type, id }: {
    u: any;
    type?: string;
    id: any;
}): Promise<unknown>;
export declare function GTMPageView(url: any): {
    event: string;
    page: any;
};
export declare function isNil(value: any): boolean;
export declare const urlRegex: RegExp;
export declare function addProtocolToUrl(url: any): string;
export declare function getURLsFromText(text: any): {
    textWithMarkup: any;
    displayUrl: string;
};
export declare function parseMimeType(mime: any): {
    type?: undefined;
    ext?: undefined;
} | {
    type: any;
    ext: any;
};
export declare function getPastDay(days: any): Date;
export declare function getMonthRange({ date, firstDayQuantity, lastDayQuantity }: {
    date: any;
    firstDayQuantity: any;
    lastDayQuantity: any;
}): Date[];
