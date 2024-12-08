"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";

import Transition from "@/features/motion/transition";
import { UserProvider } from "@/context/user-context";
import { AuthProvider } from "@/context/auth-context";
import { NotificationProvider } from "@/context/notification-context";
import NProgressProvider from "@/features/nprogress-provider";

function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDashboardPath = pathname.startsWith("/dashboard");

  return (
    <>
      <AnimatePresence key={isDashboardPath ? "dashboard" : pathname}>
        <Transition>
          <UserProvider>
            <AuthProvider>
              <NotificationProvider>
                <NProgressProvider>{children}</NProgressProvider>
              </NotificationProvider>
            </AuthProvider>
          </UserProvider>
        </Transition>
      </AnimatePresence>
    </>
  );
}

export default ClientLayout;
