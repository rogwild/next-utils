// import qs from "qs";

export const getImageUrl = (obj, size = `medium`, BACKEND_URL) => {
  if (!obj) {
    return null;
  }

  const url = obj.formats?.[size]?.url || obj.url;

  return `${BACKEND_URL}${url}`;
};

export const transformResponseItem = (resItem) => {
  if (isArray(resItem)) {
    return resItem.map((item) => transformResponseItem(item));
  }

  if (isObject(resItem)) {
    if (isArray(resItem.data)) {
      resItem = [...resItem.data];
    } else if (isObject(resItem.data)) {
      resItem = transformEntriesInObj(flatItemAttributes(resItem.data));
    } else if (resItem.data === null) {
      resItem = null;
    } else {
      resItem = transformEntriesInObj(flatItemAttributes(resItem));
    }

    for (const key in resItem) {
      resItem[key] = transformResponseItem(resItem[key]);
    }

    return resItem;
  }

  return resItem;
};

export const transformPageBlock = (block, transformers) => {
  const key = block?._Component;

  if (!transformers?.[key]) {
    return null;
  }

  return transformers[key](block);
};

export const isObject = (data) => data && typeof data === `object`;

export const isArray = (data) => data && Array.isArray(data);

export const flatItemAttributes = (data) => {
  if (!data?.attributes) return data;

  return {
    id: data?.id,
    ...data.attributes,
  };
};

export const combineHeaders = ({ withAuth }) => {
  const headers = {};

  if (withAuth) {
    const token = localStorage.getItem(`jwt`);
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

export const snakeToCamel = (str) => {
  return str.replace(/([-_][a-z])/gi, (char) => {
    return char.toUpperCase().replace(`-`, ``).replace(`_`, ``);
  });
};

export const transformEntriesInObj = (item) => {
  if (isObject(item) && !isArray(item)) {
    const entries = Object.entries(item).map((entry) => {
      const key = snakeToCamel(entry[0]);

      let value = entry[1];

      if (isObject(value)) {
        value = transformEntriesInObj(value);
      } else if (isArray(value)) {
        value = value.map((elem) => transformEntriesInObj({ item: elem }));
      }

      return [key, value];
    });

    return Object.fromEntries(entries);
  }

  return item;
};

export const removeEmptyFields = ({ data, passKey, files }) => {
  // console.log(`🚀 ~ removeEmptyFields ~ files`, files);
  let modified;
  if (typeof data === `object` && data !== null) {
    modified = {};
    if (Array.isArray(data)) {
      modified = [];
      for (const element of data) {
        modified.push(removeEmptyFields({ data: element, passKey, files }));
      }
    } else {
      for (const key of Object.keys(data)) {
        if (data[key] === `` && key !== `publishedAt`) {
          continue;
        }
        modified[key] = removeEmptyFields({
          data: data[key],
          passKey: `${passKey ? `${passKey}.` : ``}${key}`,
          files,
        });
      }
    }
  } else {
    modified = data;
  }
  return modified;
};

export const appendFilesToFormData = (formData, files) => {
  // console.log(`🚀 ~ appendFilesToFormData ~ formData`, formData);
  if (Object.keys(files).length) {
    for (const key of Object.keys(files)) {
      // console.log(`🚀 ~ key`, key);
      if (Array.isArray(files[key])) {
        for (const [_, file] of files[key].entries()) {
          // console.log(`🚀 ~ file`, file, files[key]);
          formData.append(`files.${key}`, file);
        }
      } else {
        // console.log(`🚀 ~ appendFilesToFormData ~ key`, key);
        // console.log(`🚀 ~ file`, file, files[key]);
        formData.append(`files.${key}`, files[key]);
      }
    }
  }
};
