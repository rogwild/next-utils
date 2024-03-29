import React, { useRef } from "react";
import { useTransition } from "@react-spring/web";
import Notification from "./Notification";

const defaultNotificationHeight = 44;

const Overlay = ({
  notifications = [],
  remove = () => ({}),
  isFromTop = false,
  className,
}) => {
  // use weakmap to get div height for alert items
  //
  // prevents memory leaks by garbage collecting removed items
  const ref = useRef(new Map());
  const refMap = ref.current;

  const transitionConfigWithHeightAnimation = {
    from: {
      opacity: 0,
      height: 0,
      transform: `translateY(${isFromTop ? "-100%" : 0}) scale(1)`,
      marginBottom: 0,
    },
    enter: (item) => async (next) => {
      const minHeight = item.minHeight || defaultNotificationHeight;
      const offsetHeight = refMap.get(item).offsetHeight;
      await next({
        opacity: 1,
        height: offsetHeight >= minHeight ? offsetHeight : minHeight,
        transform: `translateY(0) scale(1)`,
        marginBottom: 8,
      });
    },
    update: (item) => async (next) => {
      const minHeight = item.minHeight || defaultNotificationHeight;
      const offsetHeight = refMap.get(item).offsetHeight;
      await next({
        height: offsetHeight >= minHeight ? offsetHeight : minHeight,
      });
    },
    leave: () => async (next) => {
      await next({
        opacity: 1,
        height: 0,
        transform: `translateY(0 scale(0.9)`,
        marginBottom: 0,
      });
    },
  };

  const transitions = useTransition(
    notifications,
    transitionConfigWithHeightAnimation
  );

  return (
    <div
      className={`spring_notification ${className ? className : ""} ${
        isFromTop ? "is_from_top" : ""
      }`}
    >
      {transitions((styles, item) => {
        return (
          <Notification
            key={item.id}
            styles={styles}
            ref={(ref) => {
              return ref && refMap.set(item, ref);
            }}
            remove={() => remove(item.id)}
            {...item}
          />
        );
      })}
    </div>
  );
};

export default Overlay;
