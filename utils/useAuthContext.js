import { useContext } from "react";
import AuthContext from "@/context/authContext/authContext";

export const useAuthContext = () => {
  if (!AuthContext) {
    throw Error("No AuthContext");
  }
  return useContext(AuthContext);
};
