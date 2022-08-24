import { Api } from "./client";
export declare const getImageUrl: (obj: {
    formats?: object;
    url: string;
}, options?: {
    size?: string;
    BACKEND_URL?: string;
}) => string;
export declare const transformPageBlock: (block: any, transformers: any) => any;
export declare const removeEmptyFields: ({ data, passKey, files }: {
    data: any;
    passKey: any;
    files: any;
}) => any;
export declare const appendFilesToFormData: (formData: any, files: any) => void;
/**
 * Get data for Next.js page form Strapi API
 *
 * @param additionalBlocks - ex. ['header', 'footer']
 * @param transformers - ex.
 * { [`page-blocks.main-block`]: (block) => {
 *   return {
 *      ...block,
 *      images: block?.images?.map((image) =>
 *              getImageUrl(image, {BACKEND_URL: "http://localhost:1337"})) || null,
 *            };
 *    },
 * }
 */
export declare const getPageData: (params: {
    url?: string;
    page: string;
    locale?: string;
    keys: string[];
    additionalBlocks?: string[];
    transformers?: {};
}) => Promise<{
    pageBlocks: any;
    res: any;
    additionalBlocks: {};
}>;
export declare const ApiClient: typeof Api;
export declare const transformResponseItem: (resItem: any) => any;
