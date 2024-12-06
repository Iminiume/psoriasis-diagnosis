import React from "react";

import { UserProvider } from "@/context/user-context";
import { AuthProvider } from "@/context/auth-context";

export async function generateStaticParams({ req }) {
  const token = req.cookies?.token || null; // Extract token from cookies
  const role = req.cookies?.role || null;

  return {
    props: {
      initialAuthState: {
        token,
      },
      initialUserState: {
        role,
      },
    },
  };
}

async function ServerLayout({ children, params }) {
  const { initialUserState, initialAuthState } = await params;
  return (
    <>
      <UserProvider initialUserState={initialUserState}>
        <AuthProvider initialAuthState={initialAuthState}>
          {children}
        </AuthProvider>
      </UserProvider>
    </>
  );
}

export default ServerLayout;
