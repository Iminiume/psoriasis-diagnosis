import { NotificationContext } from "@/context/notificationContext";
import { useContext } from "react";

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw Error("No NotificationContext");
  }
  return context;
};
