const NUMBERS_AFTER_ZERO = 4;

export const hasZeroAfterDot = (price) => /0[.,](0+)[0-9]+/.test(price);

export const getCountAfterDot = (price) =>
  price.toString().match(/0[.,](0*)[0-9]+/)[1].length + NUMBERS_AFTER_ZERO;

export const formatPercent = (number) =>
  number ? `${number.toFixed(2)}` : `0`;

const allowedImageExtensions = [`png`, `jpeg`, `webp`, `tiff`];
export const parseMimeType = (mime) => {
  if (!mime) return {};
  const splittedMime = mime?.split(`/`);

  const type = splittedMime[0];
  const ext = splittedMime[1];
  let renderType = type;

  if (type === `image` && !allowedImageExtensions.includes(ext)) {
    renderType = `file`;
  }

  if (type !== `image` && type !== `video`) {
    renderType = `file`;
  }

  return { type, ext, renderType };
};
