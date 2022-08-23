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
