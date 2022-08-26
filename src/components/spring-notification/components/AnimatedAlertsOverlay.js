import React, { useState } from "react";
import { useTransition } from "react-spring";
import Alert from "./Alert";

const alertContainerClassName = `fixed bottom-0 right-0 flex items-end flex-col mx-4`;

const AnimatedAlertsOverlay = ({ alerts = [], removeAlert = () => {} }) => {
  // use weakmap to get div height for alert items
  // prevents memory leaks by garbage collecting removed items
  const [refMap] = useState(() => new WeakMap());

  const transitionConfigWithHeightAnimation = {
    from: {
      height: 0,
    },
    enter: (item) => async (next) => {
      await next({
        height: refMap.get(item).offsetHeight,
      });
    },
    leave: () => async (next) => {
      await next({
        height: 0,
      });
    },
  };

  const transitions = useTransition(
    alerts,
    transitionConfigWithHeightAnimation
  );
  console.log(`🚀 ~ transitions`, transitions);

  //   transitions((...props) => {
  //     return console.log(`🚀 ~ transitions ~ props`, props);
  //   });

  return (
    <div className={alertContainerClassName}>
      {transitions((styles, item) => {
        console.log(`🚀 ~ transitions ~ item`, item);

        return (
          <Alert
            key={item.id}
            styles={styles}
            ref={(ref) => ref && refMap.set(item, ref)}
            {...item}
          />
        );
      })}
    </div>
  );
};

export default AnimatedAlertsOverlay;
