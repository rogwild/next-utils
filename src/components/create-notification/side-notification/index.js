import React from "react";
import Link from "next/link";
import useBreakpoint from "../../../hooks/use-breakpoint";
import SmartButton from "../../smart-button";

const SideNotificationLayout = ({
  title,
  titleClasses = "",
  message,
  iconName,
  iconClassName = "w-5 h-5",
  link,
  linkTitle = "See more",
  onClose,
  Icon = () => {},
}) => {
  const breakpoint = useBreakpoint();

  return (
    <div className="w-auto md:w-360px z-50 shadow-lg rounded-10px group px-5 py-3 flex flex-col gap-1 border border-true-gray-150 bg-white dark:bg-true-gray-750">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          {iconName && <Icon name={iconName} className={iconClassName} />}
          {title && (
            <p
              className={`font-family-inter-semi-bold text-12px leading-18px ${
                titleClasses || "text-black dark:text-white"
              }`}
            >
              {title}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          {link && (
            <Link href={link} passHref>
              <a className="font-family-inter-medium text-10px leading-14px text-blue-primary dark:text-blue-650 ml-auto hover:opacity-70 duration-200">
                {linkTitle}
              </a>
            </Link>
          )}
          <SmartButton
            variant="text"
            onClick={onClose}
            className={`duration-200 text-true-gray-450 ${
              breakpoint === "sm"
                ? `opacity-100`
                : `opacity-0 group-hover:opacity-100`
            }`}
          >
            <svg
              className={`fill-current w-4`}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5659 5.24616C13.8936 4.91762 14.4257 4.91762 14.7542 5.24616C15.0827 5.57391 15.0827 6.10671 14.7542 6.43442L11.1711 10.0175L14.7042 13.5506C15.0302 13.8758 15.0302 14.4037 14.7042 14.7297C14.379 15.0558 13.8511 15.0558 13.5251 14.7297L9.99199 11.1966L6.43466 14.7539C6.10696 15.0817 5.57493 15.0817 5.2464 14.7539C4.91787 14.4262 4.91787 13.8942 5.2464 13.5656L8.80368 10.0084L5.27056 6.47527C4.94451 6.1501 4.94451 5.62226 5.27056 5.29621C5.59573 4.97016 6.12357 4.97016 6.44962 5.29621L9.98275 8.8293L13.5659 5.24616Z"
              />
            </svg>
          </SmartButton>
        </div>
      </div>
      {message && (
        <p className="font-family-inter-medium text-left text-10px leading-14px text-true-gray-450">
          {message}
        </p>
      )}
    </div>
  );
};

export default SideNotificationLayout;
