export const textInputProps = {
  inputClassName:
    "@brw border @brc border-black @ttc text-black @pg px-2 py-1 @brr rounded-md",
};

export const otpInputProps = {
  inputClassName:
    "@wh w-8 @brw border @brc border-black @ttc text-black @pg px-2 py-1 @brr rounded-md",
  containerClassName: "@mn mx-auto",
  labelContainerClassName: "@wh w-60 @mn mx-auto",
};

const baseButtonClassName = `@wh w-full @pg py-2 px-3 @brr rounded-md @tta text-center`;

export const blackButtonProps = {
  className: `@bdc bg-black @ttx text-white ${baseButtonClassName}`,
};

export const redButtonProps = {
  className: `@bdc bg-red-500 @ttx text-white ${baseButtonClassName}`,
};

export const grayButtonProps = {
  className: `@bdc bg-zinc-100 @ttc text-zinc-800 ${baseButtonClassName}`,
};
