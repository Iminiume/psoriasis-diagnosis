"use client";

const { createContext } = require("react");

const UserContext = createContext();
UserContext.displayName = "UserContext";

export default UserContext;
