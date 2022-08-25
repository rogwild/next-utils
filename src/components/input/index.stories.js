import React, { useState } from "react";
import Input from "./index";
import SmartButton from "../smart-button";

export default {
  component: Input,
  title: "Forms/Input",
  decorators: [
    (story) => (
      <div className="w-screen h-screen mx-auto container flex items-center justify-center bg-black dark">
        <div className="w-64 mx-auto">{story()}</div>
      </div>
    ),
  ],
};

const Icon = () => (
  <div className="absolute left-3 inset-y-0">
    <div className="flex items-center h-full justify-center">
      {/* <AllIcons name="Logo" className="w-5 text-black" /> */}
    </div>
  </div>
);

const StateComponent = (props) => {
  const [inputText, setInputText] = useState(props.value);

  return (
    <Input
      {...props}
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    />
  );
};

const SearchIcon = (props) => (
  <div
    onClick={props.onClick}
    className="@pn absolute @ht h-8 @it right-2 top-0 @cr cursor-pointer"
  >
    <div className="flex items-center h-full justify-center">
      {/* <AllIcons name={props.icon} className="w-4 text-gray-400" /> */}
    </div>
  </div>
);

const SearchComponent = (props) => {
  const [inputText, setInputText] = useState(props.value);

  const handleOnClick = () => {
    if (inputText) {
      setInputText("");
    }
  };

  return (
    <Input
      {...props}
      Icon={() => (
        <SearchIcon
          onClick={handleOnClick}
          icon={!inputText ? "Search" : "Close"}
        />
      )}
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    />
  );
};

const DropdownItems = ({ setIsDropdownOpen }) => {
  return (
    <div className="w-full text-black py-1">
      <ul>
        <li className="flex justify-center px-5 py-1 hover:text-blue-base">
          Dropdown Item
        </li>
        <li className="flex justify-center px-5 py-1 hover:text-blue-base">
          Dropdown Item
        </li>
        <li className="flex justify-center px-5 py-1 hover:text-blue-base">
          Dropdown Item
        </li>
        <li
          onClick={() => setIsDropdownOpen(false)}
          className="flex justify-center cursor-pointer px-5 py-1 hover:text-blue-base"
        >
          Close
        </li>
      </ul>
    </div>
  );
};

const Button = ({ variant = "primary", style, className }) => {
  return (
    <SmartButton variant={variant} style={style} className={className}>
      <p className="font-family-inter">Button</p>
    </SmartButton>
  );
};

const Template = (args) => <StateComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: "Username",
  placeholder: "Your username",
  type: "text",
  blocked: 0,
  Icon: Icon,
  iconClassName: "@it left-2 top-0",
  className: "@pg p-1 pl-10",
  dropdownItems: DropdownItems,
  dropdownContainerClasses: "",
  onPaste: (e) => console.log(e.clipboardData.getData("Text")),
  maxLength: 10,
};

export const WithAllIcons = Template.bind({});

WithAllIcons.args = {
  value: "Username",
  placeholder: "Your username",
  type: "text",
  blocked: 0,
  icon: "Chevron",
  iconClassName: "@it left-2 top-0",
  className: "@pg p-3 pl-6",
  dropdownItems: DropdownItems,
  dropdownPosition: "right",
  dropdownContainerClasses: "",
};

export const WithButton = Template.bind({});

WithButton.args = {
  value: "Username",
  placeholder: "Your username",
  type: "text",
  className: "@oe outline-none focus:outline-none hover:outline-none",
  blocked: 0,
  children: <Button variant="transparentOutline" className="@ht h-full" />,
  dropdownContainerClasses: "",
};

export const Blocked = Template.bind({});

Blocked.args = {
  value: "Username",
  placeholder: "Your username",
  type: "text",
  blocked: 1,
  children: <Button />,
  dropdownContainerClasses: "",
};

const SearchTemplate = (args) => <SearchComponent {...args} />;

export const SearchInput = SearchTemplate.bind({});

SearchInput.args = {
  value: "Add search",
  placeholder: "Search...",
  type: "text",
  className: "@pg py-0 px-3 pr-7 @ht h-8 @fts text-xs",
  dropdownContainerClasses: "",
};
