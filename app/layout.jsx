import { AuthProvider } from "@/context/auth-context";
import { NotificationProvider } from "@/context/notification-context";
import { UserProvider } from "@/context/user-context";
import ClientLayout from "@/features/client-layout";
import React from "react";

export const metadata = {
  title: "Hoorie Masoorian Medical",
  description: "Website",
};

function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`m-0 box-border flex min-h-screen flex-col p-0 antialiased`}
      >
        <AuthProvider>
          <UserProvider>
            <NotificationProvider>
              <ClientLayout>{children}</ClientLayout>
            </NotificationProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

export default RootLayout;
