"use client";
import React, { useReducer, useEffect } from "react";
import { setCookie, getCookie, removeCookie } from "@/utils/useCookie";
import AuthContext from "./authContext";

const initialState = {
  isLoggedIn: false,
  token: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true, token: action.payload };
    case "LOGOUT":
      return { ...state, isLoggedIn: false, token: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      dispatch({ type: "LOGIN", payload: token });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, []);

  const login = (token) => {
    setCookie("token", token);
    dispatch({ type: "LOGIN", payload: token });
  };

  const logout = () => {
    removeCookie("token");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
