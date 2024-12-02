import { AuthProvider } from "@/context/auth-context";
import { NotificationProvider } from "@/context/notification-context";
import { UserProvider } from "@/context/user-context";
import ClientLayout from "@/features/client-layout";
import React from "react";

import "@/public/styles/fonts.css";
import "@/public/styles/globals.css";
import NProgressProvider from "@/features/nprogress-provider";
import Transition from "@/features/motion/transition";
import { AnimatePresence } from "framer-motion";

export const metadata = {
  title: "Hamyar Psoriasis",
  description:
    "This website is for detecting whether you have psoriasis or not",
};

function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`m-0 box-border flex min-h-screen flex-col p-0 antialiased`}
      >
        <AnimatePresence>
          <Transition>
            <ClientLayout>
              <UserProvider>
                <AuthProvider>
                  <NotificationProvider>
                    <NProgressProvider>{children}</NProgressProvider>
                  </NotificationProvider>
                </AuthProvider>
              </UserProvider>
            </ClientLayout>
          </Transition>
        </AnimatePresence>
      </body>
    </html>
  );
}

export default RootLayout;
