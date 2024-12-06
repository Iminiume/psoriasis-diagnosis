"use client";
import { useEffect, useReducer } from "react";
import UserContext from "./userContext";
import { setCookie, getCookie, removeCookie } from "@/utils/hooks/useCookie";

const initialState = {
  role: null,
  userData: null,
  loading: true,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_ROLE":
      return { ...state, role: action.payload };
    case "SET_USER_DATA":
      return { ...state, userData: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const UserProvider = ({ children, initialUserState }) => {
  const [state, dispatch] = useReducer(userReducer, {
    ...initialState,
    ...initialUserState,
  });
  const role = getCookie("role");

  useEffect(() => {
    if (role) {
      dispatch({ type: "SET_ROLE", payload: role });
      dispatch({ type: "SET_LOADING", payload: false });
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [role]);

  const setRole = (user) => {
    setCookie("role", user);
    dispatch({ type: "SET_ROLE", payload: role });
    dispatch({ type: "SET_LOADING", payload: false });
  };

  const removeRole = () => {
    removeCookie("role");
  };

  return (
    <UserContext.Provider value={{ state, setRole, removeRole, dispatch }}>
      {!state.loading && children}
    </UserContext.Provider>
  );
};
