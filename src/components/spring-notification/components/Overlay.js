import React, { createRef, useEffect, useState } from "react";
import { useTransition } from "@react-spring/web";
import Notification from "./Notification";

const notificationsContainerClassName = `z-50 fixed bottom-0 right-0 flex items-end flex-col mx-4`;

const Overlay = ({ notifications = [], remove = () => {} }) => {
  // use weakmap to get div height for alert items
  //
  // prevents memory leaks by garbage collecting removed items
  const [refMap] = useState(() => new Map());

  const transitionConfigWithHeightAnimation = {
    from: {
      height: 0,
    },
    enter: (item) => async (next) => {
      await next({
        height: refMap.get(item)?.offsetHeight,
      });
    },
    update: (item) => async (next) => {
      await next({
        height: refMap.get(item)?.offsetHeight,
      });
    },
    leave: () => async (next) => {
      await next({
        height: 0,
      });
    },
  };

  const transitions = useTransition(
    notifications,
    transitionConfigWithHeightAnimation
  );

  return (
    <div className={notificationsContainerClassName}>
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
