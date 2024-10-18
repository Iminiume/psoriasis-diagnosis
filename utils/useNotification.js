import { NotificationContext } from "@/context/notificationContext";
import { useContext } from "react";

export const useNotification = () => {
  if (!NotificationContext) {
    throw Error("No NotificationContext");
  }
  return useContext(NotificationContext);
};
