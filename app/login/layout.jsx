"use client";

import { useAuthContext } from "@/utils/context/useAuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const { state } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (state.token) {
      router.replace("/dashboard");
    }
  }, [state]);

  return <main className="w-full flex-grow">{children}</main>;
}
