import React, { useState } from "react";
import Radio from "./index";

export default {
  component: Radio,
  title: `UI/Forms/Radio`,
};

const Template = (args) => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-fit mx-auto flex items-center justify-center h-auto my-20">
      <Radio {...args} active={active} onClick={() => setActive(!active)} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
