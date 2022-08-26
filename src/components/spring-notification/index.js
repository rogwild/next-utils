import React, { useState, useContext } from "react";
import AnimatedAlertsOverlay from "./components/AnimatedAlertsOverlay";

const AlertContext = React.createContext({ showAlert: () => null });
const useAlerts = () => useContext(AlertContext);

const AlertsWrapper = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  console.log(`🚀 ~ AlertsWrapper ~ alerts`, alerts);

  // use state fns to avoid passing stale alerts array to showAlert and removeAlert functions
  const removeAlert = (timestampId) => {
    setAlerts((alertArray) =>
      alertArray.filter((alertInfo) => alertInfo?.id !== timestampId)
    );
  };

  const showAlert = ({ type, title, message, duration = 8000 }) => {
    // use creation timestamp as psuedo-unique alert object ID
    const newAlertId = new Date().getTime();
    const newAlert = {
      id: newAlertId,
      type,
      title,
      message,
    };
    setAlerts((alertArray) => [...alertArray, newAlert]);

    if (duration !== 0) {
      setTimeout(() => removeAlert(newAlertId), duration);
    }
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alerts.length ? (
        <AnimatedAlertsOverlay alerts={alerts} removeAlert={removeAlert} />
      ) : null}
    </AlertContext.Provider>
  );
};

export { AlertsWrapper, useAlerts };
