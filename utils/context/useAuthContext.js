"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("No AuthContext");
  }
  return context;
};
