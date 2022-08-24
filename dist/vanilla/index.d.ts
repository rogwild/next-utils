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
