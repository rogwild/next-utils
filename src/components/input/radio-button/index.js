import React from "react";

const Primary = ({ placeholder, id, onClick, active, buttonClasses }) => {
  return (
    <>
      <label
        key={id}
        className={`${buttonClasses} ${
          active ? `border border-primary-700` : `border border-transparent`
        }`}
        htmlFor="radio-1"
        id={id}
        onClick={onClick}
      >
        {placeholder}
      </label>
      <input type="radio" id="radio-1" className="hidden"></input>
    </>
  );
};

const Picture = ({ src, id, onClick, active, buttonClasses }) => {
  return (
    <>
      <label
        key={id}
        className={`${buttonClasses} ${
          active ? `border border-[#3A5AB7]` : `border border-transparent`
        } ${`py-3 px-3`}`}
        htmlFor="radio-1"
        id={id}
        onClick={onClick}
      >
        <img src={src} alt="link" />
      </label>

      <input type="radio" id="radio-1" className="hidden"></input>
    </>
  );
};

const variants = {
  primary: Primary,
  picture: Picture,
};

function RadioButton({
  placeholder,
  id,
  onClick,
  active,
  type = `primary`,
  src,
  buttonVariant = `primary`,
}) {
  const ButtonVariant = variants[buttonVariant];
  const buttonClasses = buttonTypeClasses[type];

  return (
    <ButtonVariant
      placeholder={placeholder}
      id={id}
      onClick={onClick}
      active={active}
      src={src}
      buttonClasses={buttonClasses}
    />
  );
}

const buttonTypeClasses = {
  primary: `rounded bg-[#F1F5F9] text-[13px] font-normal px-2 py-1 text-black-500 checked:ring-1 checked:ring-[#3A5AB7]`,
  white: `rounded bg-white text-[13px] font-normal px-2 py-1 text-black-500 checked:ring-1 checked:ring-white `,
};

export default RadioButton;
