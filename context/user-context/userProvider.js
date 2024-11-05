"use client";

import { useEffect, useReducer } from "react";
import UserContext from "./userContext";
import useLocalStorage from "@/utils/hooks/useLocalStorage";

// Define initial state
const initialState = {
  role: null,
  userData: null,
  loading: true,
};

// Define actions
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

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [role, setRoleLS, removeRole] = useLocalStorage("role", null);

  useEffect(() => {
    if (role) {
      dispatch({ type: "SET_ROLE", payload: role });
      dispatch({ type: "SET_LOADING", payload: false });
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [role]);

  const setRole = (user) => {
    setRoleLS(user);
    dispatch({ type: "SET_ROLE", payload: role });
    dispatch({ type: "SET_LOADING", payload: false });
  };

  return (
    <UserContext.Provider value={{ state, setRole, removeRole, dispatch }}>
      {!state.loading && children}
    </UserContext.Provider>
  );
};
