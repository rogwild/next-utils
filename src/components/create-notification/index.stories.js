import React from "react";
import createNotification from "../create-notification";
import SmartButton from "../smart-button";

export default {
  component: createNotification,
  title: "Notification/CreateNotification",
  decorators: [(story) => <div className="w-64 mx-auto mt-40">{story()}</div>],
};

const Template = (args) => (
  <SmartButton onClick={() => createNotification(args)} variant="primary">
    Click me!
  </SmartButton>
);

export const Default = Template.bind({});

Default.args = {
  title: "Notification title",
  titleClasses: "text-green-450",
  message: "Hello! I am message",
  link: "/",
  iconName: "NotificationWarning",
};

export const Custom = Template.bind({});

Custom.args = {
  title: "smth",
  titleClasses: "text-green-450",
  message: "We have just sent you a confirmation e-mail.",
  iconName: "NotificationSuccess",
};
