"use client";
import { AuthProvider } from "@/context/authContext";
import { NotificationProvider } from "@/context/notificationContext";
import { UserProvider } from "@/context/userContext";
import React, { useEffect, useState } from "react";

function Layout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <html lang="en" dir="rtl">
      <body className={`m-0 box-border p-0 text-[14px] antialiased`}>
        <AuthProvider>
          <UserProvider>
            <NotificationProvider>{children}</NotificationProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

export default Layout;
