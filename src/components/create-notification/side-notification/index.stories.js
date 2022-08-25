import React from "react";
import { withNextRouter } from "storybook-addon-next-router";

import SideNotificationLayout from "./index";

export default {
  component: SideNotificationLayout,
  title: "UI/SideNotificationLayout",
  decorators: [
    withNextRouter,
    (story) => (
      <div className="w-full h-screen flex items-center justify-center ">
        {story()}
      </div>
    ),
  ],
};

const Template = (args) => <SideNotificationLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Check your email",
  titleClasses: "text-green-450",
  message: "We have just sent you a confirmation e-mail.",
  iconName: "NotificationError",
  link: "/",
};
