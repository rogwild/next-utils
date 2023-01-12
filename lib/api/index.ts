// import qs from "qs";
import {
  Api,
  transformResponseItem as transformResponseItemFunc,
} from "./client";

export const getFileUrl = (
  obj: { formats?: object; url: string },
  options: {
    size?: string;
    BACKEND_URL?: string;
  } = {}
): string => {
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
};

/**
 * Will be deprecated, use getFileUrl
 */
export const getImageUrl = getFileUrl;

export const transformPageBlock = (block, transformers) => {
  const key = block?._Component;

  if (!transformers?.[key]) {
    return block;
  }

  return transformers[key](block);
};

export const appendFilesToFormData = (formData, files) => {
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
};

export const unlunkRemovedFiles = ({ data }) => {
  let sanitized;
  if (typeof data === `object`) {
    sanitized = {};
    for (const key of Object.keys(data)) {
      // If we should unlink files from model
      let sanitizedKey = key;
      let priority = 1;
      const splitted = key.split(`].`);
      if (splitted.length > 1) {
        priority = 2;

        sanitizedKey = splitted[splitted.length - 1];
      }
      if (Array.isArray(data[key])) {
        if (sanitized[sanitizedKey]?.length) {
          if (priority !== 2) {
            continue;
          }
        }

        sanitized[sanitizedKey] = data[key].map((item) =>
          unlunkRemovedFiles({ data: item })
        );
      } else {
        sanitized[sanitizedKey] = data[key];
      }
    }
  } else {
    sanitized = data;
  }

  return sanitized;
};

export const removeEmptyFields = ({
  data,
  passKey,
  files,
}: {
  data: object;
  passKey?: string;
  files: any;
}) => {
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
const mainTransformers = {
  [`page-blocks.main-block`]: (block) => {
    return {
      ...block,
      images: block?.images?.map(getImageUrl) || null,
    };
  },
};

/**
 * Get data for Next.js page form Strapi API
 *
 * @param additionalBlocks - ex. ['header', 'footer']
 * @param transformers - ex.
 * { [`page-blocks.main-block`]: (block) => {
 *   return {
 *      ...block,
 *      images: block?.images?.map((image) =>
 *              getImageUrl(image, {BACKEND_URL: "http://localhost:1337"})) || null,
 *            };
 *    },
 * }
 */
export const getPageData = async (params: {
  url?: string;
  page: string;
  locale?: string;
  keys?: string[];
  additionalBlocks?: string[];
  transformers?: {};
  query?: {};
}) => {
  const {
    url,
    locale,
    keys = [],
    page,
    transformers = {},
    additionalBlocks = [],
    query,
  } = params;

  const client = new Api(url ? url : undefined);

  const additionalPopulate = {};
  if (additionalBlocks) {
    for (const block of additionalBlocks) {
      additionalPopulate[block] = {
        populate: {
          ...keys.reduce((a, b) => ({ ...a, [b]: { populate: `*` } }), {}),
        },
      };
    }
  }

  const filledQuery = {
    locale,
    populate: {
      page_blocks: {
        populate: {
          ...keys.reduce((a, b) => ({ ...a, [b]: { populate: `*` } }), {}),
        },
      },
      ...additionalPopulate,
    },
    ...query,
  };

  // console.log(`🚀 ~ query`, query.populate);

  const res = await client.request({
    model: page,
    query: filledQuery,
  }); //?

  // console.log(`🚀 ~ res`, res);

  const pageBlocks = res?.pageBlocks?.map((block) => {
    return transformPageBlock(block, transformers);
  });

  const additionalBlocksData = {};
  for (const block of additionalBlocks) {
    block; //?

    if (res[block]) {
      res[block];
      additionalBlocksData[block] = transformPageBlock(
        { ...res[block], _Component: block },
        transformers
      );
    }
  }

  return { pageBlocks, res, additionalBlocks: additionalBlocksData };
};

export const handleApiError = (error: any) => ({
  event: `error`,
  title: error
    ? error.data?.error.message || error.message
    : `Something went wrong :(`,
});

export const prepareFormDataToSend = (params) => {
  const { data, files } = params;

  // console.log(`🚀 ~ prepareDataToSend ~ data`, data);

  const clearedData = removeEmptyFields({ data, files });

  // console.log(`🚀 ~ prepareDataToSend ~ clearedData`, clearedData);

  const formData = new FormData();
  formData.append(`data`, JSON.stringify(clearedData));

  // console.log(`🚀 ~ prepareDataToSend ~ files`, files);

  if (files) {
    appendFilesToFormData(formData, files);
  }

  return formData;
};

export const ApiClient = Api;
export const transformResponseItem = transformResponseItemFunc;
