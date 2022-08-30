import React from "react";

import Calendar from "react-calendar";
import SmartButton from "../../../smart-button";

const PopupCalendar = ({
  setOpen,
  onClick,
  value,
  setValue,
  setActiveTimeframe,
  LeftArrowIcon = () => {},
  RightArrowIcon = () => {},
}) => {
  return (
    <div className="@dy flex flex-col md:flex-row @bdc bg-white overflow-hidden @pg p-0 divide-x divide-true-gray-150 @bxsw shadow-none rounded-[8px]">
      <div className="px-2 flex flex-col items-center text-black">
        <Calendar
          {...calendarSettings}
          nextLabel={RightArrowIcon}
          prevLabel={LeftArrowIcon}
          value={new Date(value)}
          onChange={setValue}
          onClickDay={(value) => {
            setActiveTimeframe(`Custom`);
            setValue(value);
          }}
        />
        <div className="flex flex-row items-center justify-end w-full mb-4 md:mb-7">
          <SmartButton
            className="@ftf font-roboto @ftw font-medium @bdc bg-primary-900 hover:bg-primary-700 @ttc text-white @brr rounded-[4px] @mn mr-3 @pg px-5 py-1 @cr cursor-pointer @tndn duration-200"
            onClick={() => {
              onClick(value);
              setOpen(false);
            }}
          >
            <h5 className="@ttc text-current">Применить</h5>
          </SmartButton>
          <SmartButton
            className="@ftf font-roboto @ftw font-medium @bdc bg-primary-200 hover:bg-primary-700 @ttc text-primary hover:text-white @brr rounded-[4px] @pg px-5 py-1 @cr cursor-pointer @tndn duration-200"
            onClick={() => {
              setValue();
              setOpen(false);
            }}
          >
            <h5 className="@ttc text-current">Сбросить</h5>
          </SmartButton>
        </div>
      </div>
    </div>
  );
};

const calendarSettings = {
  locale: `en`,
  className: `border-none p-3 md:p-6`,
  selectRange: false,
  showNavigation: true,
  returnValue: `start`,
};

export default PopupCalendar;
