import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom/client";
// import Modal from "./src/components/modal";
import utils from "./dist/index";
// const { SpringNotification } = utils.components;

// const { NotificationsWrapper, useNotifications } = SpringNotification;
import {
  NotificationsWrapper,
  useNotifications,
} from "./src/components/spring-notification";
import SmartButton from "./src/components/smart-button";

const App = () => {
  return (
    <NotificationsWrapper>
      <Page />
    </NotificationsWrapper>
  );
};

const Popup = () => {
  return (
    <div className="p-10 bg-white">
      <h1>Popup</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const notificationsContext = useNotifications();

  useEffect(() => {
    notificationsContext.add({
      title: "**Test** alert",
      message: "Test message **alert** notification",
      containerClassName: "@mn mb-2",
      Child: ChildComp,
      showDefault: false,
      duration: 1,
    });
  }, []);

  return (
    <div className="main">
      <div className="min-w-screen min-h-screen bg-gray-100 realtive flex flex-col items-center justify-center">
        {/* <Input value="Input value" /> */}
        <SmartButton
          onClick={() => {
            notificationsContext.add({
              title: "**Test** alert",
              message: "Test message **alert** notification",
              containerClassName: "@mn mb-2",
              Child: ChildComp,
              showDefault: false,
              duration: 105000,
            });
          }}
        >
          SmartButton
        </SmartButton>
        {/* <Modal
          RenderCard={Popup}
          show={showPopup}
          setShow={setShowPopup}
          renderCardProps={{
            setShow: setShowPopup,
          }}
          childContainerClasses={`@wh w-full xl:w-fit`}
          containerClasses={`@pg px-2 py-5 md:px-4 md:py-10`}
        /> */}
        {/* <PackageModal
          RenderCard={Popup}
          show={showPopup}
          setShow={setShowPopup}
          renderCardProps={{
            setShow: setShowPopup,
          }}
          childContainerClasses={`@wh w-full xl:w-fit`}
          containerClasses={`@pg px-2 py-5 md:px-4 md:py-10`}
        /> */}
      </div>
      <div id="modal"></div>
    </div>
  );
};

const ChildComp = (item) => {
  console.log(`🚀 ~ ChildComp ~ props`, item);

  return <div className="w-4 h-4 bg-red-500 rounded-full mt-1 ml-2"></div>;
};
