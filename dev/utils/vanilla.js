export const textInputProps = {
  inputClassName:
    "@brw border @brc border-black @ttc text-black @pg px-2 py-1 @brr rounded-md",
};

const baseButtonClassName = `@wh w-full @pg py-2 px-3 @brr rounded-md @tta text-center`;

export const blackButtonProps = {
  className: `@bdc bg-black @ttx text-white ${baseButtonClassName}`,
};

export const redButtonProps = {
  className: `@bdc bg-red-500 @ttx text-white ${baseButtonClassName}`,
};
