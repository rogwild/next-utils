import React from "react";
import PopupCalendar from "./index";

export default {
  component: PopupCalendar,
  title: `Pages/Trade/PopupCalendar`,
};

const Template = (args) => (
  <div className="w-fit mx-auto flex items-center justify-center h-auto my-20">
    <PopupCalendar {...args}></PopupCalendar>
  </div>
);

export const Default = Template.bind({});

Default.args = {};
