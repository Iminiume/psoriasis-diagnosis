import { NotificationContext } from "@/context/notificationContext";
import { useContext } from "react";

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw Error("No NotificationContext");
  }
  return context;
};
