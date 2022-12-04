import React from "react";

import FormInput from "./index";

export default {
  component: FormInput,
  title: "UI/Forms/FormInput",
};

const Template = (args) => (
  <div className="w-fit mx-auto mt-40">
    <FormInput {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  
};
