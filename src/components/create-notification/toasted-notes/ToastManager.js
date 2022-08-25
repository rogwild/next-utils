import * as React from "react";
import { Message } from "./Message";
import { positionStyles, defaultState } from "./utils";

export default class ToastManager extends React.Component {
  static idCounter = 0;

  state = defaultState;

  constructor(props) {
    super(props);
    props.notify(this.notify, this.closeAll, this.closeToast);
  }

  notify = (message, options) => {
    const toast = this.createToastState(message, options);
    const { position } = toast;

    // prepend the toast for toasts positioned at the top of the screen, otherwise append it.

    const isTop = position.includes("top");

    this.setState((prev) => {
      return {
        ...prev,
        [position]: isTop
          ? [toast, ...prev[position]]
          : [...prev[position], toast],
      };
    });
    return { id: toast.id, position: toast.position };
  };

  closeAll = () => {
    Object.keys(this.state).forEach((pos) => {
      const position = this.state[pos];
      position.forEach((toast) => {
        this.closeToast(toast.id, pos);
      });
    });
  };

  createToastState = (message, options) => {
    const id = ++ToastManager.idCounter;

    // a bit messy, but object.position returns a number because it's a method argument.

    const position =
      options.hasOwnProperty("position") && typeof options.position === "string"
        ? options.position
        : "top";

    return {
      id,
      message,
      position,
      showing: true,
      duration:
        typeof options.duration === "undefined" ? 5000 : options.duration,
      onRequestRemove: () => this.removeToast(String(id), position),
      type: options.type,
    };
  };

  closeToast = (id, position) => {
    this.setState((prev) => {
      return {
        ...prev,
        [position]: prev[position].map((toast) => {
          if (toast.id !== id) return toast;
          return {
            ...toast,
            requestClose: true,
          };
        }),
      };
    });
  };

  // actually fully remove the toast
  removeToast = (id, position) => {
    this.setState((prev) => {
      return {
        ...prev,
        [position]: prev[position].filter((toast) => toast.id !== id),
      };
    });
  };

  getStyle = (position) => ({
    maxWidth: "560px",

    position: "fixed",
    zIndex: 5500,
    pointerEvents: "none",
    ...positionStyles[position],
  });

  render() {
    return Object.keys(this.state).map((position) => {
      const toasts = this.state[position];

      return (
        <div
          key={position}
          className={"Toaster__manager-" + position}
          style={this.getStyle(position)}
        >
          {toasts.map((toast) => (
            <Message position={position} key={toast.id} {...toast} />
          ))}
        </div>
      );
    });
  }
}
