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
        LabelComponent,
        ErrorComponent,
        labelContainerClassName: `@gp gap-4`,
        checkerFuncs: [`checkRequiredField`],
        inputContainerClassName: ``,
        inputClassName: `@bdc bg-white @pg p-3`,
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
        baseItemClassName: `@brw border @brc border-transparent hover:border-black`,
        activeItemClassName: `@brw border @brc border-black`,
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
      {
        field: `version`,
        label: "Select version",
        defaultValue: `base`,
        checkerFuncs: [`checkRequiredField`],
        placeholder: `Project version`,
        inputContainerClassName: ``,
        items: [
          {
            title: `Base`,
            slug: `base`,
          },
          {
            title: `Primary`,
            slug: `primary`,
          },
          {
            title: `VIP`,
            slug: `vip`,
          },
        ],
        inputClassName: ``,
        inputContainerClassName: `@bdc bg-white @bxsw shadow-lg`,
        dropdownClassName: `@pg p-2 @dy flex @fxd flex-col @gp gap-1`,
        baseItemClassName: `@brw border @brc border-transparent hover:border-black`,
        Icon: DropdownIcon,
        activeItemClassName: `@brw border @brc border-black`,
        activeMatcher: (item, value) => item.slug === value,
        setter: (item) => item.slug,
        type: `dropdown`,
      },
      {
        field: `otp`,
        label: "One time password",
        containerClassName: `@brw border @brc border-black @pg p-1`,
        inputClassName: `@bdc bg-white @pn py-4`,
        checkerFuncs: [`checkRequiredField`],
        type: `otp`,
      },
      {
        field: `message`,
        label: "Your message",
        inputClassName: `@bdc bg-white @pg p-3`,
        checkerFuncs: [`checkRequiredField`],
        type: `text-area`,
      },
      {
        field: `cover`,
        label: "Your cover",
        checkerFuncs: [`checkRequiredField`],
        accept: `*/*`,
        multiple: true,
        inputClassName: `@bdc bg-white @wh w-1/4 @ht h-[100px] @pg p-4 @dy flex @ani items-center @jyc justify-center @tta text-center @fxd flex-col gap-3`,
        uploadTitleClassName: `text-gray-500 text-xs`,
        fileCardClassName: `@wh w-1/4 @ht h-[100px]`,
        containerClassName: `@gp gap-2`,
        BeforeUploadFileIcon: BeforeUploadFileIcon,
        DeleteFileButton: DeleteFileButton,
        FileComponent: FileComponent,
        BACKEND_URL: "http://localhost:1337",
        type: `file`,
      },
    ];
  }, []);

  const { inputs, inputsValues, files, setErrors } = useForm({
    inputsConfig,
    inputPropsType: `object`,
  });

  useEffect(() => {
    setErrors({ title: { id: "wrong", message: "wrong password" } });
  }, [inputsValues]);

  console.log(`🚀 ~ FormPage ~ inputs`, inputs);

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-4/12 flex flex-col gap-4 p-8 bg-gray-200">
        <Input {...inputs.title} />
        <Input {...inputs.status} />
        <Input {...inputs.privacy} />
        <Input {...inputs.amount} />
        <Input {...inputs.version} />
        <Input {...inputs.otp} />
        <Input {...inputs.message} />
        <Input {...inputs.cover} />
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

const BeforeUploadFileIcon = () => {
  return (
    <div className="w-5 h-5 flex flex-shrink-0 bg-green-500 rounded-full"></div>
  );
};

const DeleteFileButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="w-8 h-8 bg-red-500 rounded-full"></div>
  );
};

const FileComponent = ({ file }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center flex-col">
      <p className="text-black">{getShortFileName(file.name)}</p>
    </div>
  );
};

const getShortFileName = (string) => {
  const extensionReg = /(?:\.([^.]+))?$/;

  if (string?.length > 15) {
    const currentExtension = extensionReg.exec(string)[1];
    const nameWithoutExtension = string.replace(currentExtension, ``);
    return nameWithoutExtension.substring(0, 15) + `...` + currentExtension;
  }

  return string;
};

const LabelComponent = (props) => {
  const { label } = props;
  console.log(`🚀 ~ LabelComponent ~ props`, props);

  return (
    <div className="w-full">
      <p className="text-lg text-blue-500 font-bold">{label}</p>
    </div>
  );
};

const DropdownIcon = (props) => {
  console.log(`🚀 ~ DropdownIcon ~ props`, props);

  return (
    <div
      className={`absolute right-2 top-1 w-3 h-3 bg-green-500 transform duration-200 transition ${
        props.isDropdownOpen ? "rotate-90" : "rotate-45"
      }`}
    ></div>
  );
};

const ErrorComponent = (props) => {
  console.log(`🚀 ~ ErrorComponent ~ props`, props);

  return (
    <div className="w-full">
      <p className="text-xl text-orange-500 capitalize">
        {props.error?.message}
      </p>
    </div>
  );
};
