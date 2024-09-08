import React, { useCallback, useState } from "react";
import ToastComponent from "../components/ToastComponent";

const generateId = () => {
  const timeStamp = Date.now().toString(36); // Convert current timestamp to base-36
  const randomNum = Math.random().toString(36).slice(2, 11); // Generate a random number
  const perfTime = Math.floor(performance.now()).toString(36); // Use high-resolution timer for more uniqueness
  return `${timeStamp}-${randomNum}-${perfTime}`;
};

const useToast = (position = "top-right") => {
  const [toasts, setToasts] = useState([]);

  const triggerToast = useCallback((toastProps) => {
    const toastId = generateId();
    setToasts((prev) => [...prev, { id: toastId, ...toastProps }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
    }, toastProps.duration || 3000);
  }, []);

  const handleToastClose = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const Toast = toasts.length > 0 && (
    <div className={`toast-container-react-flare-toast ${position}`}>
      {toasts.map((toast) => (
        <ToastComponent
          key={toast.id}
          {...toast}
          onClose={() => handleToastClose(toast.id)}
        />
      ))}
    </div>
  );

  return { Toast, triggerToast };
};

export default useToast;
