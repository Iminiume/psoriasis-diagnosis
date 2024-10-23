// utils/useUserContext.js
import { createContext, useContext, useReducer } from "react";
import UserContext from "./userContext";

// Define initial state
const initialState = {
  isAuthenticated: false,
  isLoading: true,
  role: null,
  userData: null,
};

// Define actions
const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_ROLE":
      return { ...state, role: action.payload };
    case "SET_USER_DATA":
      return { ...state, userData: action.payload };
    case "AUTH_SUCCESS":
      return { ...state, isAuthenticated: true, isLoading: false };
    case "AUTH_FAIL":
      return { ...state, isAuthenticated: false, isLoading: false };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
