"use client";

import { useAuthContext } from "@/utils/context/useAuthContext";
import { useEffect } from "react";
import Jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const { state } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (state.token) {
      const decodedToken = Jwt.decode(state.token);
      if (!decodedToken?.role) {
        router.replace("/login/role-selection");
      }
    } else {
      router.replace("/login");
    }
  }, [state]);

  return <main className="w-full flex-grow">{children}</main>;
}
