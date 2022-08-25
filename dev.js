import React, { useState } from "react";
import * as ReactDOM from "react-dom/client";
// import Modal from "./src/components/modal";
import utils from "./dist/index";
const { Modal: PackageModal, Input } = utils.components;
import SmartButton from "./src/components/smart-button";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  console.log(`🚀 ~ App ~ 'test'`);

  return (
    <div className="main">
      <div className="min-w-screen min-h-screen bg-gray-100 realtive flex flex-col items-center justify-center">
        <Input value="Input value" />
        <SmartButton
          onClick={() => {
            setShowPopup(true);
            console.log("SmartButton clicked");
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
        <PackageModal
          RenderCard={Popup}
          show={showPopup}
          setShow={setShowPopup}
          renderCardProps={{
            setShow: setShowPopup,
          }}
          childContainerClasses={`@wh w-full xl:w-fit`}
          containerClasses={`@pg px-2 py-5 md:px-4 md:py-10`}
        />
      </div>
      <div id="modal"></div>
    </div>
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
console.log(`🚀 ~ ReactDOM`, root);
