import * as apiUtils from "./api";
import * as formatters from "./formatters";
import * as vanilla from "./vanilla";
declare const _default: {
    api: typeof apiUtils;
    formatters: typeof formatters;
    vanilla: typeof vanilla;
    hooks: {
        useDetectMouseover: (el: any, initialState: any) => any[];
        useDetectOutsideClick: (trigger: any, initialState: any) => any[];
        useLookupTable: ({ columns, data: passedData, getRowId, config, initialFiltersState, }: array<import("./hooks/use-lookup-table/index").ColumnItemObject>) => import("./hooks/use-lookup-table/index").ReturnObject;
        useBreakpoint: (breakpoint: any) => boolean;
        useSetParentsInput: ({ passedState, passedFiles, parentKey, setParentInputs, setParentFiles, setParentErrors, }: {
            passedState: any;
            passedFiles: any;
            parentKey: any;
            setParentInputs: any;
            setParentFiles: any;
            setParentErrors: any;
        }) => {
            localState: any;
            localFiles: any;
            changeFiles: (updatedFiles: any) => void;
            changeInputs: (updatedInputs: any, index: any) => void;
            handleAddItem: () => void;
            handleDeleteItem: (index: any) => void;
        };
        useStyleRewriter: (baseClassName: any, className: any, cleared?: boolean) => string;
    };
};
export default _default;
