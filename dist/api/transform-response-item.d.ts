export declare function combineHeaders({ withAuth }: {
    withAuth?: boolean;
}): {
    Authorization?: string;
};
export declare function isObject(data: any): boolean;
export declare function isArray(data: any): boolean;
export declare function snakeToCamel(str: string): string;
export declare function transformEntriesInObj(item: any): any;
export declare function transformResponseItem(resItem: any): any;
