import React from "react";

import { UserProvider } from "@/context/user-context";
import { AuthProvider } from "@/context/auth-context";
import { NotificationProvider } from "@/context/notification-context";

async function ServerLayout({ children }) {
  return (
    <UserProvider>
      <AuthProvider>
        <NotificationProvider>{children}</NotificationProvider>
      </AuthProvider>
    </UserProvider>
  );
}

export default ServerLayout;
