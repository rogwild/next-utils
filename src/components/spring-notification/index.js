import React, { useState, useContext, useEffect } from "react";
import Overlay from "./components/Overlay";

const NotificationsContext = React.createContext({ showAlert: () => null });
const useNotifications = () => useContext(NotificationsContext);

const NotificationsWrapper = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // use state fns to avoid passing stale alerts array to showAlert and removeAlert functions
  const remove = (timestampId) => {
    setNotifications((alertNotifications) =>
      alertNotifications.filter((alertInfo) => alertInfo?.id !== timestampId)
    );
  };

  const add = ({ duration = 8000, ...props }) => {
    // use creation timestamp as psuedo-unique alert object ID
    const newNotificationId = new Date().getTime();
    const newNotification = {
      id: newNotificationId,
      ...props,
    };
    setNotifications((alertNotifications) => [
      ...alertNotifications,
      newNotification,
    ]);

    if (duration !== 0) {
      setTimeout(() => remove(newNotificationId), duration);
    }
  };

  // on first render ref is undefined
  // create empty alert helps to fix height error
  useEffect(() => {
    add({
      duration: 1,
    });
  }, []);

  return (
    <NotificationsContext.Provider value={{ add }}>
      {children}
      <Overlay notifications={notifications} remove={remove} />
    </NotificationsContext.Provider>
  );
};

export { NotificationsWrapper, useNotifications };
