import React, { useEffect, useMemo, useState } from "react";
import * as ReactDOM from "react-dom/client";
import Input from "./src/components/input";
// import Modal from "./src/components/modal";
// const { SpringNotification } = utils.components;

// const { NotificationsWrapper, useNotifications } = SpringNotification;
import springNotification from "./src/components/spring-notification";
const { NotificationsWrapper, useNotifications } = springNotification;
import SmartButton from "./src/components/smart-button";
import useForm from "./src/hooks/use-form";

const App = () => {
  return (
    <div>
      <NotificationsWrapper>
        <FormPage />
      </NotificationsWrapper>
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

const FormPage = () => {
  const inputsConfig = useMemo(() => {
    return [
      {
        field: `title`,
        label: "Text input",
        placeholder: `Project title*`,
        defaultValue: ``,
        checkerFuncs: [`checkRequiredField`],
        inputContainerClassName: ``,
        inputClassName: ``,
        type: `text`,
      },
      {
        field: `status`,
        label: "Select input",
        defaultValue: `seed`,
        checkerFuncs: [`checkRequiredField`],
        placeholder: `Project status`,
        // checkerFuncs: [],
        inputContainerClassName: ``,
        items: [
          {
            title: `Seed`,
            slug: `seed`,
          },
          {
            title: `Private`,
            slug: `private`,
          },
        ],
        activeMatcher: (item, value) => item.slug === value,
        setter: (item) => item.slug,
        type: `select-row`,
      },
      {
        field: `privacy`,
        defaultValue: false,
        label: "Accept privacy policy",
        checkerFuncs: [],
        Icon: CheckIcon,
        type: `checkbox`,
        inputContainerClassName: ``,
        inputClassName: `@wh w-10 @ht h-10`,
      },
      {
        field: `amount`,
        defaultValue: 3,
        maxValue: 10,
        step: 1,
        label: "Amount to sell",
        inputClassName: `@bdc bg-white @wh w-10 @ht h-10`,
        rangeClassName: `@ht h-8 @bdc bg-gray-400`,
        containerClassName: `@ht h-8`,
        activeRangeClassName: `@ht h-8 @bdc bg-black`,
        checkerFuncs: [],
        type: `range`,
      },
    ];
  }, []);

  const { inputs, inputsValues, files, setErrors } = useForm({
    inputsConfig,
    inputPropsType: `object`,
  });

  // useEffect(() => {
  //   setErrors({ title: { id: "wrong", message: "wrong password" } });
  // }, [inputsValues]);

  console.log(`🚀 ~ FormPage ~ inputs`, inputs);

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-4/12 flex flex-col gap-4 p-8 bg-gray-200">
        <Input {...inputs.title} />
        <Input {...inputs.status} />
        <Input {...inputs.privacy} />
        <Input {...inputs.amount} />
      </div>
    </div>
  );
};

const NotificationPage = () => {
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

const CheckIcon = () => {
  return (
    <div className="w-6 h-6 bg-white rounded-full flex flex-shrink-0"></div>
  );
};
