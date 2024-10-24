import { useContext } from "react";
import AuthContext from "@/context/auth-context/authContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("No AuthContext");
  }
  return context;
};
