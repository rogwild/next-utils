import { drop } from "ramda";
import { transformResponseItem as transformResponseItemFunc } from "./transform-response-item";

export function getFileUrl(
  obj: { formats?: object; url: string },
  options: {
    size?: string;
    BACKEND_URL?: string;
  } = {}
) {
  const { size, BACKEND_URL } = options;
  if (!obj) {
    return null;
  }

  const url = size ? obj.formats?.[size]?.url || obj.url : obj.url;

  const httpsExists = url.match(/^https?:\/\//);

  if (httpsExists) {
    return url;
  }

  return `${BACKEND_URL || ""}${url}`;
}

/**
 * @deprecated
 * Use `getFileUrl`
 */
export const getImageUrl = getFileUrl;

export function appendFilesToFormData(formData: any, files: any) {
  if (Object.keys(files).length) {
    for (const key of Object.keys(files)) {
      if (Array.isArray(files[key])) {
        for (const [_, file] of files[key].entries()) {
          formData.append(`files.${key}`, file);
        }
      } else {
        formData.append(`files.${key}`, files[key]);
      }
    }
  }
}

export function prepareFormDataToSend(params: any) {
  const { data, files } = params;
  // console.log(`🚀 ~ prepareFormDataToSend ~ files`, files);

  let passData = { ...data };
  delete passData.files;

  if (files) {
    for (const key of Object.keys(data.files)) {
      // console.log(`🚀 ~ prepareFormDataToSend ~ key`, key, data.files[key]);

      const delPath = key.replaceAll(`[`, `.`)?.replaceAll(`]`, ``)?.split(`.`);

      const cleared = delByPath({ ...passData }, delPath);

      // console.log(`🚀 ~ prepareFormDataToSend ~ cleared`, cleared);

      passData = cleared;
    }
  }

  const formData = new FormData();
  formData.append(`data`, JSON.stringify(passData));

  if (files) {
    appendFilesToFormData(formData, files);
  }

  // console.log(`🚀 ~ prepareFormDataToSend ~ passData`, passData, files);

  return formData;
}

export const transformResponseItem = transformResponseItemFunc;

function delByPath(obj: any, path: any[]): any {
  if (path.length > 1) {
    if (Array.isArray(obj)) {
      const passArray = [];

      for (const [index, el] of obj.entries()) {
        if (`${index}` === path[0]) {
          passArray.push(delByPath(obj[path[0]], drop(1, path)));

          continue;
        }

        passArray.push(el);
      }

      return passArray;
    } else {
      return {
        ...obj,
        [path[0]]: delByPath(obj[path[0]], drop(1, path)),
      };
    }
  }

  obj[path[0]] = null;

  return obj;
}
