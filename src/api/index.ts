// import qs from "qs";
import {
  Api,
  transformResponseItem as transformResponseItemFunc,
} from "./client";

export const getImageUrl = (
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

  return `${BACKEND_URL || ""}${url}`;
};

export const transformPageBlock = (block, transformers) => {
  const key = block?._Component;

  if (!transformers?.[key]) {
    return block;
  }

  return transformers[key](block);
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
  keys: string[];
  additionalBlocks?: string[];
  transformers?: {};
}) => {
  const {
    url,
    locale,
    keys = [],
    page,
    transformers = {},
    additionalBlocks = [],
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

  const query = {
    locale,
    populate: {
      page_blocks: {
        populate: {
          ...keys.reduce((a, b) => ({ ...a, [b]: { populate: `*` } }), {}),
        },
      },
      ...additionalPopulate,
    },
  };

  // console.log(`🚀 ~ query`, query.populate);

  const res = await client.request({
    model: page,
    query,
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
      additionalBlocksData[block] = res[block];
    }
  }

  additionalBlocksData; //?

  return { pageBlocks, res, additionalBlocks: additionalBlocksData };
};

export const ApiClient = Api;
export const transformResponseItem = transformResponseItemFunc;
