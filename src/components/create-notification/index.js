import React from "react";
import toaster from "./toasted-notes";
import SideNotificationLayout from "./side-notification";
import useBreakpoint from "../../hooks/use-breakpoint";

const createNotification = (props) => {
  const breakpoint = useBreakpoint();

  return toaster.notify(renderLayout(props), {
    duration: 6000,
    position: breakpoint === "sm" ? "top" : "bottom-right",
  });
};

export default createNotification;

export const renderLayout =
  (props) =>
  ({ onClose }) =>
    <SideNotificationLayout {...props} onClose={onClose} />;
