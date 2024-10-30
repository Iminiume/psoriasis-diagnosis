"use client";

import { useContext } from "react";
import { NotificationContext } from "@/context/notification-context";

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw Error("No NotificationContext");
  }
  return context;
};
