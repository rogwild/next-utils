import { Api } from "./client";
export declare const getImageUrl: (obj: {
    formats?: object;
    url: string;
}, size: string, BACKEND_URL: string) => string;
export declare const ApiClient: typeof Api;
export declare const transformResponseItem: (resItem: any) => any;
export declare const transformPageBlock: (block: any, transformers: any) => any;
export declare const isObject: (data: any) => boolean;
export declare const isArray: (data: any) => boolean;
export declare const flatItemAttributes: (data: any) => any;
export declare const combineHeaders: ({ withAuth }: {
    withAuth?: boolean;
}) => {
    Authorization?: string;
};
export declare const snakeToCamel: (str: string) => string;
export declare const transformEntriesInObj: (item: any) => any;
export declare const removeEmptyFields: ({ data, passKey, files }: {
    data: any;
    passKey: any;
    files: any;
}) => any;
export declare const appendFilesToFormData: (formData: any, files: any) => void;
