declare const useSetParentsInput: ({ passedState, passedFiles, setParentInputs, setParentFiles, setParentErrors, }: {
    passedState: object[];
    passedFiles: object;
    setParentInputs: (i: object) => void;
    setParentFiles: (f: object) => void;
    setParentErrors: (e: object) => void;
}) => {
    localState: object[];
    localFiles: object;
    changeFiles: (updatedFiles: any) => void;
    changeInputs: (updatedInputs: any, index: any) => void;
    handleAddItem: () => void;
    handleDeleteItem: (index: any) => void;
};
export default useSetParentsInput;
