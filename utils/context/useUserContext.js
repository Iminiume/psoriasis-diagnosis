import UserContext from "@/context/userContext/userContext";
import { useContext } from "react";

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw Error("No UserContext");
  }
  return context;
};
