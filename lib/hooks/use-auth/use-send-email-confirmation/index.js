"use client";

import { useState, useEffect, createContext, useContext } from "react";

const useSendEmailConfirmation = ({
  profilesApi,
  ping = 30,
  initialPing = 0,
  useSelector,
  email,
  createNotification = () => ({}),
  translate = (string) => string,
  notificationDuration = 10000,
  AdditionalHeadersContext = createContext(null),
}) => {
  const additionalHeaders = useContext(AdditionalHeadersContext);
  const [sendEmailConfirmation, result] =
    profilesApi.useSendEmailConfirmationMutation();

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

    if (!email) {
      console.error(`Pass email for resending code`);

      return;
    }

    let headers = {};

    if (additionalHeaders?.headers) {
      for (const key of Object.keys(additionalHeaders.headers)) {
        headers[key] = JSON.stringify(additionalHeaders.headers[key]);
      }
    }

    sendEmailConfirmation({ data: { email }, headers });
  }

  useEffect(() => {
    if (result?.isSuccess) {
      createNotification({
        title: translate(`Code was sent to your email`),
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

export default useSendEmailConfirmation;
