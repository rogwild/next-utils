import React, { createRef, useEffect, useState } from "react";
import { useTransition } from "react-spring";
import Notification from "./Notification";

const notificationsContainerClassName = `fixed bottom-0 right-0 flex items-end flex-col mx-4`;

const Overlay = ({ notifications = [], remove = () => {} }) => {
  // use weakmap to get div height for alert items
  // prevents memory leaks by garbage collecting removed items
  const [refMap] = useState(() => new WeakMap());

  const transitionConfigWithHeightAnimation = {
    from: {
      height: 0,
    },
    enter: (item) => async (next) => {
      // console.log(
      //   `🚀 ~ enter: ~ item`,
      //   refMap.get(item).offsetHeight,
      //   refMap.get(item).clientHeight
      // );
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
        // const ref = createRef();
        console.log(`🚀 ~ {transitions ~ styles`, styles);
        return (
          <Notification
            key={item.id}
            styles={styles}
            ref={(ref) => {
              return ref && refMap.set(item, ref);
            }}
            {...item}
          />
        );
      })}
    </div>
  );
};

export default Overlay;
