import React, { useEffect, useRef } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";
import "./notification.css";

const icons = {
  success: <AiOutlineCheckCircle />,
  info: <AiOutlineInfoCircle />,
  warning: <AiOutlineWarning />,
  error: <AiOutlineCloseCircle />,
};

const animations = {
  fade: "fadeIn",
  pop: "popUp",
  slide: "slideIn",
};

const notification = ({
  type = "info",
  message,
  onClose,
  animation = "slide",
}) => {
  const notificationRef = useRef(null);

  useEffect(() => {
    if (notificationRef.current) {
      notificationRef.current.focus();
    }
  }, []);

  const ariaRole = type === "error" || type === "warning" ? "alert" : "status";
  const ariaLive =
    type === "error" || type === "warning" ? "assertive" : "polite";

  return (
    <div
      className={`notification ${type} ${animations[animation]}`}
      role={ariaRole}
      aria-live={ariaLive}
      tabIndex={-1}
      ref={notificationRef}
    >
      {icons[type]}
      {message}
      <AiOutlineClose
        color="white"
        className="closeBtn"
        onClick={() => onClose()}
      />
    </div>
  );
};

export default notification;
