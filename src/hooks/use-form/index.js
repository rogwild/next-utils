import React, { useEffect, useMemo, useState } from "react";
import {
  changeBlockedInputsFunc,
  changeInput,
  changeTypeFunc,
  checkFields,
} from "./checkers";
import { isNil } from "../../vanilla";

const useForm = ({
  inputsConfig,
  submitFunc = (submitFuncProps) => {
    return true;
  },
  afterPassed = ({ setInputs, clearInputs }) => {},
  inputPropsType = `array`,
}) => {
  const {
    initialInputs,
    initialErrors,
    initialTypes,
    initialBlocked,
    initialFiles,
  } = useMemo(() => {
    const inputs = {};
    const errors = {};
    const types = {};
    const blockedInputs = {};
    const files = {};

    inputsConfig.forEach(
      ({ field, defaultValue, type = `text`, config = {}, blocked }) => {
        defaultValue = defaultValue !== undefined ? defaultValue : ``;
        // console.log(`🚀 ~ defaultValue`, defaultValue);
        if (type === `file`) {
          if (defaultValue !== ``) {
            files[field] = defaultValue;
          }
        } else {
          inputs[field] = defaultValue;
        }
        errors[field] = null;
        if (config?.enableTypeChanging) {
          types[field] = type;
        }
        if (!isNil(blocked)) {
          blockedInputs[field] = blocked;
        }
      }
    );

    return {
      initialInputs: inputs,
      initialErrors: errors,
      initialTypes: types,
      initialBlocked: blockedInputs,
      initialFiles: files,
    };
  }, [inputsConfig]);

  const [inputs, setInputs] = useState(initialInputs);
  const [files, setFiles] = useState(initialFiles);
  const [errors, setErrors] = useState(initialErrors);
  const [types, setTypes] = useState(initialTypes);
  const [blockedInputs, setBlockedInputs] = useState(initialBlocked);
  const [requestId, setRequestId] = useState(``);

  useEffect(() => {
    setInputs(initialInputs);
    setErrors(initialErrors);
    setTypes(initialTypes);
    setFiles(initialFiles);
    setBlockedInputs(initialBlocked);
  }, [inputsConfig]);

  const [passed, setPassed] = useState(false);

  useEffect(() => {
    setErrors(initialErrors);
  }, [inputs]);

  const clearInputs = () => setInputs(initialInputs);

  // call afterPassed function after passed
  useEffect(() => {
    if (passed) {
      const unmountCallback = afterPassed({
        setInputs,
        clearInputs,
        passed,
        setPassed,
      });

      return unmountCallback;
    }
  }, [passed]);

  const onSubmitFunc = useMemo(() => {
    return (e, submitProps = {}) =>
      onSubmit(e, {
        inputsConfig,
        inputs,
        errors,
        setErrors,
        submitFunc,
        setRequestId,
        files,
        evt: e,
        ...submitProps,
      });
  }, [inputsConfig, inputs, errors, files]);

  const changeType = (e, { field }) =>
    changeTypeFunc({ types, setTypes, field });

  const changeBlockedInputs = (inputs) =>
    changeBlockedInputsFunc({
      setBlockedInputs,
      blockedInputs,
      newBlockedInputs: inputs,
    });

  const onChange = (e) => {
    changeInput(e, {
      inputs,
      errors,
      files,
      setFiles,
      setErrors,
      setInputs,
    });
  };

  const inputsProps = useMemo(() => {
    let props;
    if (inputPropsType === `array`) {
      props = [];
    } else if (`object`) {
      props = {};
    } else {
      props = null;
    }

    inputsConfig.forEach(
      ({
        field,
        blocked,
        placeholder = ``,
        title = ``,
        label = ``,
        config = {},
        type: defaultType = `text`,
        PairComponent,
        ...params
      }) => {
        if (defaultType !== `hidden`) {
          const prop = {
            id: field,
            error: errors[field],
            changeType,
            blocked: isNil(blocked) ? false : blockedInputs[field],
            title,
            label,
            placeholder,
            onChange,
            type: types[field] || defaultType,
            enableTypeChanging: config && config.enableTypeChanging,
            headingProps: config?.headingProps,
            changeBlockedInputs,
            setFiles,
            PairComponent,
            ...params,
          };

          if (prop.type === `file`) {
            // console.log(`🚀 ~ inputsProps ~ files`, files);
            prop.files = files;
            prop.value = undefined;
          } else {
            prop.value = inputs[field];
          }

          if (inputPropsType === `array`) {
            props.push(prop);
          } else if (`object`) {
            props[field] = prop;
          }
        }
      }
    );

    // console.log(`🚀 ~ inputsProps ~ props`, props, files);
    return props;
  }, [inputs, files, errors, types, blockedInputs]);

  return {
    setRequestId,
    requestId,
    inputs: inputsProps,
    onSubmit: onSubmitFunc,
    inputsValues: inputs,
    setInputsValues: setInputs,
    errors,
    files,
    setErrors,
    passed,
    setPassed,
    changeBlockedInputs,
    clearInputs,
    setInitialErrors: () => setErrors(initialErrors),
  };
};

export default useForm;

export const onSubmit = (e, props) => {
  e && e.preventDefault();

  const { inputsConfig, inputs, errors, setErrors, submitFunc, files } = props;

  const isValid = checkFields({
    setErrors,
    errors,
    inputsConfig,
    inputs,
    files,
  });

  if (isValid) {
    // console.log(`🚀 ~ if (isValid) onSubmit ~ isValid`, isValid);
    if (files) {
      selectFilesForDelete({ files, inputsConfig });
    }
    // console.log(`🚀 ~ submitFunc props`, props);
    return submitFunc(props);
  } else {
    console.log(`🚀 ~ onSubmit ~ errors`, errors);
  }
};

const selectFilesForDelete = ({ files, inputsConfig }) => {
  const filesInputsConfigs = inputsConfig.filter(
    (config) => config.type === `file`
  );

  for (const config of filesInputsConfigs) {
    const filesKey = config.field;
    const passedFiles = files[filesKey];
    if (Array.isArray(config.defaultValue)) {
      for (const defaultFile of config.defaultValue) {
        if (
          !passedFiles.filter(
            (passedFile) => passedFile.url === defaultFile.url
          ).length
        ) {
          config?.deleteFile(defaultFile);
        }
      }
    } else if (typeof config.defaultValue === `object`) {
      const passedFile = passedFiles;
      const defaultFile = config?.defaultValue;
      if (defaultFile?.url) {
        if (!passedFile || passedFile.url !== defaultFile?.url) {
          config?.deleteFile(defaultFile);
        }
      }
    }
  }
};
