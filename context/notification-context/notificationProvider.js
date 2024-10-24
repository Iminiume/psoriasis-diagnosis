"use client";
import { useState } from "react";
import Notification from "@/components/notification";
import NotificationContext from "./notificationContext";

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    setNotifications((prev) => [...prev, notification]);
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider
      value={{ addNotification, removeNotification }}
    >
      {children}
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          onClose={() => removeNotification(notification.id)}
          {...notification}
        />
      ))}
    </NotificationContext.Provider>
  );
};
