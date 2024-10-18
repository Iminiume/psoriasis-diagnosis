import { AuthProvider } from "@/context/authContext";
import { NotificationProvider } from "@/context/notificationContext";
import React from "react";

function Layout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`m-0 box-border p-0 text-[14px] antialiased`}>
        <AuthProvider>
          <NotificationProvider>{children}</NotificationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

export default Layout;
