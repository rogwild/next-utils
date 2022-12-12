export declare const combineHeaders: ({ withAuth }: {
    withAuth?: boolean;
}) => {
    Authorization?: string;
};
export declare const isObject: (data: any) => boolean;
export declare const isArray: (data: any) => boolean;
export declare const snakeToCamel: (str: string) => string;
export declare const transformEntriesInObj: (item: any) => any;
export declare const transformResponseItem: (resItem: any) => any;
export declare class Api {
    baseUrl: string;
    constructor(url?: string);
    request({ model, query, method, data, withAuth, headers, id, notifyError, }: {
        model: string;
        query?: object;
        method?: string;
        data?: object;
        withAuth?: boolean;
        headers?: object;
        id?: string | number;
        notifyError?: boolean;
    }): Promise<any>;
}
