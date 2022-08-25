import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import ReachAlert from "@reach/alert";
import { useTimeout, createAnimationConfig } from "./utils";

export const Message = ({
  id,
  message,
  position,
  onRequestRemove,
  requestClose = false,
  duration = 30000,
}) => {
  const [timeout, setTimeout] = useState(duration);
  const [localShow, setLocalShow] = useState(true);

  const onMouseEnter = () => setTimeout(null);

  const onMouseLeave = () => setTimeout(duration);

  const onRest = () => {
    if (!localShow) {
      onRequestRemove();
    }
  };

  function onClose() {
    setLocalShow(false);
  }

  useEffect(() => {
    if (requestClose) {
      setLocalShow(false);
    }
  }, [requestClose]);

  const renderMessage = () => {
    return message({
      id,
      onClose,
    });
  };

  useTimeout(onClose, timeout);

  const animation = createAnimationConfig(position, onRest);

  const transition = useTransition(localShow, animation);

  return transition(
    (props, item) =>
      item && (
        <animated.div
          className="Toaster__message"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{
            opacity: props.opacity,
            height: props.height,
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <animated.div
            style={{
              transform: props.transform,
              pointerEvents: "auto",
            }}
            className="Toaster__message-wrapper"
          >
            <ReachAlert>{renderMessage()}</ReachAlert>
          </animated.div>
        </animated.div>
      )
  );
};
