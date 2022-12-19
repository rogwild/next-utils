import { useMemo, useEffect, useState } from "react";

const useSetParentsInput = ({
  passedState,
  passedFiles = {},
  parentKey,
  setParentInputs = () => {},
  setParentFiles = () => {},
  setParentErrors = () => {},
}: {
  passedState: any;
  passedFiles: any;
  parentKey: any;
  setParentInputs: any;
  setParentFiles: any;
  setParentErrors: any;
}) => {
  // console.log(`🚀 ~ passedState`, passedState);
  const [localState, setLocalState] = useState(passedState);
  const [localFiles, setLocalFiles] = useState(passedFiles);
  // console.log(`🚀 ~ passedFiles`, passedFiles, localFiles);

  useEffect(() => {
    // console.log(`🚀 ~ passedState`, passedState);
    if (JSON.stringify(passedState) === JSON.stringify(localState)) {
      return;
    }
    if (
      typeof passedState === `object` &&
      Object.keys(passedState).length === 0
    ) {
      return;
    }
    setLocalState(passedState);
  }, [passedState]);

  const handleAddItem = () => {
    setLocalState((prev: any) => {
      return [...prev, { i: 3 }];
    });
  };

  const handleDeleteItem = (index) => {
    // setParentErrors((prev) => {
    //   console.log(`🚀 ~ setErrors ~ prev`, prev);
    //   return prev;
    // });
    setParentErrors((prev) => {
      const clearedErrors = {};
      console.log(`🚀 ~ setParentErrors ~ clearedErrors`, clearedErrors);
      for (const key of Object.keys(prev)) {
        clearedErrors[key] = null;
      }

      return clearedErrors;
    });
    setLocalState(
      localState.filter((item, stageIndex) => stageIndex !== index)
    );
  };

  const changeInputs = (updatedInputs, index) => {
    if (!updatedInputs || typeof updatedInputs !== `object`) {
      return;
    }

    if (typeof updatedInputs === `object` && Array.isArray(updatedInputs)) {
      // console.log(
      //   `🚀 ~ changeInputs ~ updatedInputs`,
      //   updatedInputs,
      //   localState
      // );
      if (localState && Array.isArray(localState)) {
        let newState = [...localState];
        let updated = false;
        for (const [index, localStateItem] of localState.entries()) {
          const eq = objAreEq(updatedInputs[index], localStateItem);
          if (!eq) {
            updated = true;
            newState[index] = { ...localStateItem, ...newState[index] };
          }
        }

        if (newState.length !== updatedInputs.length) {
          if (updatedInputs.length > newState.length) {
            for (const [index, updatedItem] of updatedInputs.entries()) {
              if (index > newState.length) {
                newState.push(updatedItem);
              }
            }
          } else {
            // delete
            newState = newState.filter(
              (item, index) => index <= updatedInputs.length
            );
          }
          updated = true;
        }

        if (updated) {
          // console.log(`🚀 ~ changeInputs ~ newState`, newState);
          // console.log(`🚀 ~ changeInputs ~ updated`, newState, updated);
          setLocalState(newState);
        }
      }
    } else if (index !== undefined) {
      const eq = objAreEq(updatedInputs, localState[index]);
      // console.log(
      //   `🚀 ~ changeInputs`,
      //   localState[index],
      //   updatedInputs,
      //   index,
      //   eq
      // );
      if (eq) {
        return;
      }

      setLocalState((prev) => {
        const loc = [...prev];
        if (prev) {
        }
        loc[index] = { ...loc[index], ...updatedInputs };
        // console.log(`🚀 ~ setLocalState ~ prev`, prev);
        // console.log(
        //   `🚀 ~ setLocalState ~ loc[index]`,
        //   loc[index],
        //   updatedInputs
        // );
        return loc;
      });

      // console.log(`🚀 ~ changeInputs ended`);
    }
  };

  const changeFiles = (updatedFiles) => {
    // console.log(`🚀 ~ changeFiles ~ updatedFiles`, updatedFiles, localFiles);
    // console.log(`🚀 ~ changeFiles`, localFiles, updatedFiles);
    for (const updatedFileKey in updatedFiles) {
      updatedFileKey;
      // console.log(
      //   `🚀 ~ changeFiles ~ updatedFileKey`,
      //   updatedFileKey,
      //   localState
      // );
      const newFiles = updatedFiles[updatedFileKey];
      // Если файл передается
      if (typeof newFiles === `object` && newFiles !== null) {
        // Если передается массив файлов
        if (Array.isArray(newFiles)) {
          // console.log(`🚀 ~ changeFiles ~ newFiles-массив`, newFiles);
          setLocalFiles((prev) => {
            return { ...prev, [updatedFileKey]: newFiles };
          });

          // Обнулить компонент с файлом, нужно в inputState передать пустой массив
          if (parentKey && Array.isArray(localState) && !newFiles.length) {
            const clearedKey = updatedFileKey
              .replace(parentKey, ``)
              .replace(`[`, ``)
              .replace(`]`, ``)
              .split(`.`);

            if (clearedKey.length === 2) {
              const newLocalState = localState.map((item, index) => {
                if (index === parseInt(clearedKey[0])) {
                  return { ...item, [clearedKey[1]]: newFiles };
                }
                return item;
              });
              setLocalState(newLocalState);
            }
            // console.log(`🚀 ~ changeFiles ~ parentKey`, parentKey);
          }
          continue;
        } else {
          // console.log(`🚀 ~ changeFiles ~ newFiles-объект`, newFiles);
          setLocalFiles((prev) => {
            return { ...prev, [updatedFileKey]: newFiles };
          });
          continue;
        }
      } else {
        // console.log(`🚀 ~ changeFiles ~ delete`, updatedFileKey);
        // удалить этот файл
        setLocalFiles((prev) => {
          const newFiles = { ...prev };
          delete newFiles[updatedFileKey];
          return newFiles;
        });
      }
    }

    // console.log(`🚀 ~ changeFiles ~ updatedFiles`, updatedFiles, localFiles);

    const toDeleteFilesKeys = [];
    for (const oldFileKey in localFiles) {
      let keyIsExists = false;
      for (const passedKey in updatedFiles) {
        if (passedKey === oldFileKey) {
          keyIsExists = true;
        }
      }
      if (!keyIsExists) {
        toDeleteFilesKeys.push(oldFileKey);
      }
    }
    if (toDeleteFilesKeys.length) {
      setLocalFiles((prev) => {
        const newFiles = { ...prev };
        for (const toDeleteFilesKey of toDeleteFilesKeys) {
          delete newFiles[toDeleteFilesKey];
        }
        return newFiles;
      });
      // console.log(`🚀 ~ changeFiles ~ toDeleteFilesKeys`, toDeleteFilesKeys);
    }
  };

  useEffect(() => {
    // console.log(`🚀 ~ useEffect ~ localFiles`, localFiles);
    setParentFiles(localFiles);
  }, [localFiles]);

  useEffect(() => {
    // console.log(`🚀 ~ useEffect ~ localState`, localState);
    setParentInputs(localState);
  }, [localState]);

  return {
    localState,
    localFiles,
    changeFiles,
    changeInputs,
    handleAddItem,
    handleDeleteItem,
  };
};

export default useSetParentsInput;

function objAreEq(newObj, prevObj) {
  if (typeof newObj !== `object` || typeof prevObj !== `object`) {
    return false;
  }

  let equals = true;
  for (const key in newObj) {
    if (newObj[key] !== prevObj[key]) {
      equals = false;
    }
  }

  return equals;
}
