import React from "react";
import { useCallback, useState } from "react";
import ToastComponent from "../components/ToastComponent";
import { v4 as uuidv4 } from "uuid";

const useToast = (position = "top-right") => {
  const [toasts, setToasts] = useState([]);
  const triggerToast = useCallback((toastProps) => {
    const toastId = uuidv4();
    setToasts((prev) => [...prev, { id: toastId, ...toastProps }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((n) => n.id !== toastId));
    }, toastProps.duration);
  }, []);

  const handleToastClose = (index) => {
    setToasts((prev) => {
      const updateToasts = [...prev];
      updateToasts.splice(index, 1);
      return updateToasts;
    });
  };

  const Toast = toasts ? (
    <div className={`toast-container ${position}`}>
      {toasts.map((toast, index) => (
        <ToastComponent
          key={toast.id}
          {...toast}
          onClose={() => handleToastClose(index)}
        />
      ))}
    </div>
  ) : null;

  return { Toast, triggerToast };
};

export default useToast;
