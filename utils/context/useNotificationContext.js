"use client";

import { NotificationContext } from "@/context/notification-context";
import { useContext } from "react";

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw Error("No NotificationContext");
  }
  return context;
};
