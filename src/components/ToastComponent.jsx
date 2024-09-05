import React, { useEffect, useRef } from "react";
import "./Toast.css";

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const InfoCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4m0 0V8m0 8h.01" />
  </svg>
);

const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
    width="1.5em"
    height="1.5em"
  >
    <path
      d="M12 3l9 16H3l9-16z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 9v4m0 4h.01" strokeWidth="2" />
  </svg>
);

const CloseCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8L8 16M8 8l8 8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = ({ onClose }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon closeBtn"
    onClick={() => onClose()}
  >
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const icons = {
  success: <CheckCircleIcon />,
  info: <InfoCircleIcon />,
  warning: <WarningIcon />,
  error: <CloseCircleIcon />,
};

const animations = {
  fade: "fadeIn",
  pop: "popUp",
  slide: "slideIn",
};

const ToastComponent = ({
  type = "info",
  message,
  onClose,
  animation = "slide",
}) => {
  const toastRef = useRef(null);

  useEffect(() => {
    if (toastRef.current) {
      toastRef.current.focus();
    }
  }, []);

  const ariaRole = type === "error" || type === "warning" ? "alert" : "status";
  const ariaLive =
    type === "error" || type === "warning" ? "assertive" : "polite";

  return (
    <div
      className={`toast ${type} ${animations[animation]}`}
      role={ariaRole}
      aria-live={ariaLive}
      tabIndex={-1}
      ref={toastRef}
    >
      {icons[type]}
      {message}
      <CloseIcon color="white" onClose={onClose} />
    </div>
  );
};

export default ToastComponent;
