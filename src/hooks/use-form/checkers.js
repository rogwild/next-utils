export const changeInput = (
  e,
  { inputs, errors, files, setErrors = () => {}, setInputs, setFiles }
) => {
  let localInputs = { ...inputs };
  let localErrors = { ...errors };
  let localFiles = { ...files };
  localErrors[e.target.id] = [];

  if (!e.target.files) {
    if (!Object.keys(files).includes(e.target.id)) {
      localInputs[e.target.id] = e.target.value;
    } else {
      // Delete files on backend
      localInputs[e.target.id] = e.target.value;

      if (e.target.multiple) {
        if (localFiles && Array.isArray(localFiles[e.target.id])) {
          localFiles = {
            ...localFiles,
            [e.target.id]: [...localInputs[e.target.id]],
          };
        }
      } else {
        // Deleted not multiple file
        delete localFiles[e.target.id];
      }
    }
  } else {
    const loadedFiles = { ...e.target.files };

    for (const [index] of new Array(e.target.files.length).entries()) {
      if (e.target.multiple) {
        if (localFiles && Array.isArray(localFiles[e.target.id])) {
          localFiles = {
            ...localFiles,
            [e.target.id]: [...localFiles[e.target.id], loadedFiles[index]],
          };
        } else {
          localFiles = {
            ...localFiles,
            [e.target.id]: [loadedFiles[index]],
          };
        }
      } else {
        localFiles = {
          ...localFiles,
          [e.target.id]: loadedFiles[index],
        };
      }
    }
  }
  if (e.target.type == `checkbox`) {
    localInputs[e.target.id] = e.target.checked;
  }
  setFiles({ ...localFiles });
  setInputs({ ...localInputs });
  setErrors({ ...localErrors });
};

export const checkUsernameMask = ({ field, value, errors }) => {
  if (!/^[A-z0-9_]{5,25}$/.test(value)) {
    addError({
      errors,
      field,
      id: `usernameMask`,
      message: `Username must contain only characters, numbers and "_". Min 5 symbols`,
    });
  }
};

const regexes = {
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^[+][0-9]{11,15}$/,
};

export const checkEmailMask = ({ field, value, errors }) => {
  if (!regexes.email.test(value.trim())) {
    addError({
      errors,
      field,
      id: `mask`,
      message: `Invalid E-mail address format`,
    });
  }
};

const checkPhoneMask = ({ field, value, errors }) => {
  value = value?.replace(/[ \( \)-]*/g, ``);
  if (!regexes.phone.test(value.trim())) {
    addError({
      errors,
      field,
      id: `mask`,
      message: `Invalid phone format`,
    });
  }
};

export const checkPassword = ({ field, value, errors }) => {
  const min = 8;
  if (value.length < min || value.includes(` `)) {
    addError({
      errors,
      field,
      id: `length`,
      message: `Password is too short, minimum ${min} characters`,
    });
  }
};

export const checkRequiredField = ({ field, value, errors }) => {
  // Reset old required errors if exists
  // Add new require errors
  if (
    value === undefined ||
    value === null ||
    (typeof value == `string` && value.trim() == ``)
  ) {
    addError({
      errors,
      field,
      id: `required`,
      message: `Reqired field`,
    });
  }
};

export const checkEqualTo = ({
  field,
  value,
  errors,
  config,
  inputs,
  inputsConfig,
}) => {
  const equalTo = config.equalTo;
  if (value !== inputs[equalTo]) {
    const equalToConfig = inputsConfig.find((a) => a.field === equalTo);
    const equalToTitle = equalToConfig.title || equalToConfig.label || equalTo;
    addError({
      errors,
      field,
      id: `equal`,
      message: config.equalToError || `Not equal to ${equalToTitle}`,
    });
  }
};

export const checkFields = ({
  setErrors,
  errors,
  inputsConfig,
  inputs,
  files,
}) => {
  console.log("checkFields");

  const localErrors = { ...errors };
  inputsConfig.forEach(
    ({ field, checkerFuncs, config, title, label, type, multiple }) => {
      let value = inputs[field];
      if (files && type === `file` && files[field]) {
        if (multiple) {
          if (files[field]?.length > 0) {
            value = `uploaded`;
          }
        } else {
          value = `uploaded`;
        }
      }
      checkerFuncs.forEach((checker) => {
        if (!localErrors[field]) {
          const checkerProps = {
            value,
            field,
            errors: localErrors,
            label,
            title,
            inputs,
            config,
            inputsConfig,
          };
          if (typeof checker === `function`) {
            checker(checkerProps);
          } else if (typeof checker === `string`) {
            if (defualtCheckerFuncs[checker]) {
              defualtCheckerFuncs[checker](checkerProps);
            } else {
              throw new Error(
                `There is no function ${checker} in default chekers function. List of available functions ${Object.keys(
                  defualtCheckerFuncs
                )}`
              );
            }
          } else {
            throw new Error(`${checker} is not a valid function`);
          }
        }
      });
    }
  );
  setErrors(localErrors);

  const hasErrors = [];
  for (const [_, value] of Object.entries(localErrors)) {
    if (value) {
      // Во вложенных формах своя проверка
      if (
        Object.values(value)?.filter((m) => typeof m === "string")?.length > 0
      ) {
        hasErrors.push({ ...value });
      }
    }
  }

  const isValid = !hasErrors.length ? true : false;
  return isValid;
};

const addError = ({ errors, field, id, message }) => {
  errors[field] = { id, message };
};

const defualtCheckerFuncs = {
  checkEmailMask,
  checkPhoneMask,
  checkUsernameMask,
  checkPassword,
  checkRequiredField,
  checkEqualTo,
};

export const changeTypeFunc = ({ types, setTypes, field }) => {
  const type = types[field];
  if (types[field]) {
    const localTypes = { ...types };
    if (type === `password`) {
      localTypes[field] = `text`;
    } else if (type === `text`) {
      localTypes[field] = `password`;
    }
    setTypes(localTypes);
  }
};

export const changeBlockedInputsFunc = ({
  setBlockedInputs,
  blockedInputs,
  newBlockedInputs,
}) => {
  setBlockedInputs({ ...blockedInputs, ...newBlockedInputs });
};
