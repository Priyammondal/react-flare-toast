import React from "react";
import { useCallback, useState } from "react";
import Notification from "../components/notification";
import { v4 as uuidv4 } from "uuid";

const useNotification = (position = "top-right") => {
  const [notifications, setNotifictions] = useState([]);
  const triggerNotification = useCallback((notificationProps) => {
    const toastId = uuidv4();
    setNotifictions((previousNotifications) => [
      ...previousNotifications,
      { id: toastId, ...notificationProps },
    ]);

    setTimeout(() => {
      setNotifictions((previousNotifications) =>
        previousNotifications.filter((n) => n.id !== toastId)
      );
    }, notificationProps.duration);
  }, []);

  const handleNotificationClose = (index) => {
    setNotifictions((previousNotifications) => {
      const updatedNotifications = [...previousNotifications];
      updatedNotifications.splice(index, 1);
      return updatedNotifications;
    });
  };

  const NotificationComponent = notifications ? (
    <div
      className={`notification-container ${position} ${position.split("-")[0]}`}
    >
      {notifications.map((notification, index) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={() => handleNotificationClose(index)}
        />
      ))}
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
