import React, { useState } from "react";
import OtpInput from "./index";

export default {
  component: OtpInput,
  title: `UI/Forms/OtpInput`,
};

const Template = (args) => {
  const [value, setValue] = useState(``);

  return (
    <div className="w-fit mx-auto flex items-center justify-center h-auto my-20">
      <OtpInput
        {...args}
        autoFocus
        length={6}
        onChangeOTP={(otp) => console.log(`Number OTP: `, otp)}
      />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
