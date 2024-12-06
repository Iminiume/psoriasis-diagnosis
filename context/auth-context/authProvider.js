"use client";
import React, { useReducer, useEffect } from "react";
import { setCookie, getCookie, removeCookie } from "@/utils/hooks/useCookie";
import AuthContext from "./authContext";
import { useUserContext } from "@/utils/context/useUserContext";
import JWT from "jsonwebtoken";

const initialState = {
  token: null,
  loading: true,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, token: action.payload, loading: false };
    case "LOGOUT":
      return { ...state, token: null };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const AuthProvider = ({ children, initialAuthState }) => {
  const [state, dispatch] = useReducer(authReducer, {
    ...initialState,
    ...initialAuthState,
  });
  const { setRole, removeRole } = useUserContext();

  useEffect(() => {
    const token = getCookie("token");
    const decodedToken = token ? JWT.decode(token) : null;
    if (token) {
      login(token);
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
    }
    const currentTime = Date.now();
    if (decodedToken > currentTime || token === "undefined") {
      logout();
    }
  }, []);

  const login = (token) => {
    setToken(token);
    dispatch({ type: "LOGIN", payload: token });

    const decodedToken = JWT.decode(token);
    setRole(decodedToken?.role);
  };

  const logout = () => {
    removeCookie("token");
    removeRole();
    dispatch({ type: "LOGOUT" });
  };

  const setToken = (token) => {
    setCookie("token", token);
  };

  return (
    <AuthContext.Provider value={{ state, login, logout, setToken }}>
      {!state.loading && children}
    </AuthContext.Provider>
  );
};
