declare const useSetParentsInput: ({ passedState, passedFiles, parentKey, setParentInputs, setParentFiles, setParentErrors, }: {
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
export default useSetParentsInput;
