"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import Overlay from "./components/Overlay";
import * as ReactDOM from "react-dom/client";
const NotificationsContext = createContext({ add: () => null });
const useNotifications = () => useContext(NotificationsContext);

const isBrowser = typeof window !== `undefined`;

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

  const isFromTop = isBrowser && window.innerWidth < 540;
  return (
    <NotificationsContext.Provider value={{ add }}>
      {children}
      <Overlay
        notifications={notifications}
        remove={remove}
        isFromTop={isFromTop}
      />
    </NotificationsContext.Provider>
  );
};

const OverlayWrapper = ({ notify = () => ({}) }) => {
  const isFromTop = isBrowser && window.innerWidth < 540;

  const [notifications, setNotifications] = useState([]);
  // use state fns to avoid passing stale alerts array to showAlert and removeAlert functions
  const remove = (timestampId) => {
    setNotifications((alertNotifications) =>
      alertNotifications.filter((alertInfo) => alertInfo.id !== timestampId)
    );
  };

  const add = ({ duration = 8000, ...props }) => {
    // use creation timestamp as psuedo-unique alert object ID
    const newNotificationId = new Date().getTime();
    const newNotification = {
      id: newNotificationId,
      ...props,
    };
    setNotifications((alertNotifications) =>
      isFromTop
        ? [newNotification, ...alertNotifications]
        : [...alertNotifications, newNotification]
    );

    if (duration !== 0) {
      setTimeout(() => remove(newNotificationId), duration);
    }
  };

  useEffect(() => {
    notify(add, remove);
  }, []);

  return (
    <Overlay
      notifications={notifications}
      remove={remove}
      isFromTop={isFromTop}
    />
  );
};

const notificationPortalId = `notification-portal`;
class NotifiactionsManager {
  constructor() {
    if (typeof window === "undefined") return;

    let portalElement = document.getElementById(notificationPortalId);

    if (!portalElement) {
      const element = document.createElement("div");

      element.id = notificationPortalId;
      // element.className = notificationsContainerClassName;
      if (document.body) {
        document.body.appendChild(element);
      }

      portalElement = element;
    }

    const portal = ReactDOM.createRoot(portalElement);
    portal.render(<OverlayWrapper notify={this.bindNotify} />);
  }

  bindNotify = (add) => {
    this.createNotificationFn = add;
  };

  createNotification(message) {
    if (this.createNotificationFn) {
      return this.createNotificationFn(message);
    }
  }
}
const notifiactionsManager = new NotifiactionsManager();

const createNotification = (message) => {
  return notifiactionsManager.createNotification(message);
};

export default {
  NotificationsWrapper,
  useNotifications,
  notificationPortalId,
  createNotification,
};
