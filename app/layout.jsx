import { AuthProvider } from "@/context/auth-context";
import { NotificationProvider } from "@/context/notification-context";
import { UserProvider } from "@/context/user-context";
import ClientLayout from "@/features/client-layout";
import React from "react";

import "@/public/styles/fonts.css";
import "@/public/styles/globals.css";

export const metadata = {
  title: "Hamyar Pesooriazis",
  description:
    "This website is for detecting whether you have pesooriazis or not",
};

function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <link rel="icon" href="/images/logo.png" sizes="any" />

      <body
        className={`m-0 box-border flex min-h-screen flex-col p-0 antialiased`}
      >
        <ClientLayout>
          {/* <UserProvider> */}
            <AuthProvider>
              <NotificationProvider>salam</NotificationProvider>
            </AuthProvider>
          {/* </UserProvider> */}
        </ClientLayout>
      </body>
    </html>
  );
}

export default RootLayout;
