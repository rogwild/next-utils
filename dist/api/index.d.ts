import { Api } from "./client";
export declare const getImageUrl: (obj: {
    formats?: object;
    url: string;
}, size: string, BACKEND_URL: string) => string;
export declare const transformPageBlock: (block: any, transformers: any) => any;
export declare const removeEmptyFields: ({ data, passKey, files }: {
    data: any;
    passKey: any;
    files: any;
}) => any;
export declare const appendFilesToFormData: (formData: any, files: any) => void;
export declare const ApiClient: typeof Api;
export declare const transformResponseItem: (resItem: any) => any;
