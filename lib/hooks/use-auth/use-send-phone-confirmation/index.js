"use client";

import { useState, useEffect, createContext, useContext } from "react";

const useSendPhoneConfirmation = ({
  profilesApi,
  ping = 30,
  initialPing = 0,
  useSelector,
  phone,
  createNotification = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
  AdditionalHeadersContext = createContext(null),
}) => {
  const additionalHeaders = useContext(AdditionalHeadersContext);
  const [sendPhoneConfirmation, result] =
    profilesApi.useSendPhoneConfirmationMutation();

  const [counter, setCounter] = useState(initialPing);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => setCounter(counter - 1), 1000);

      return () => clearInterval(timer);
    }
  }, [counter]);

  async function onSubmit() {
    if (counter > 0) {
      return;
    }

    if (!phone) {
      console.error(`Pass phone for resending code`);

      return;
    }

    let headers = {};

    if (additionalHeaders?.headers) {
      for (const key of Object.keys(additionalHeaders.headers)) {
        headers[key] = JSON.stringify(additionalHeaders.headers[key]);
      }
    }

    sendPhoneConfirmation({ data: { phone }, headers });
  }

  useEffect(() => {
    if (result?.isSuccess) {
      createNotification({
        title: translate(`Code was sent to your phone`),
        duration: notificationDuration,
      });

      setCounter(ping);
    }
  }, [result]);

  return {
    counter,
    submitFunction: onSubmit,
    result,
  };
};

export default useSendPhoneConfirmation;
