import { transformResponseItem as transformResponseItemFunc } from "./transform-response-item";
export declare function getFileUrl(obj: {
    formats?: object;
    url: string;
}, options?: {
    size?: string;
    BACKEND_URL?: string;
}): any;
/**
 * @deprecated
 * Use `getFileUrl`
 */
export declare const getImageUrl: typeof getFileUrl;
export declare function appendFilesToFormData(formData: any, files: any): void;
export declare function prepareFormDataToSend(params: any): FormData;
export declare const transformResponseItem: typeof transformResponseItemFunc;
