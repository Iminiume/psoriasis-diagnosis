"use client";

import { useAuthContext } from "@/utils/context/useAuthContext";
import { useUserContext } from "@/utils/context/useUserContext";
import DashboardLayout from "@/view/dashboard/DashboardLayout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }) {
  const { state } = useUserContext();
  const { state: authState } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!authState.token) router.replace("/login");
    else {
      if (!state.role) router.replace("/login/role-selection");
    }
  }, [state]);

  return (
    <main className="w-full flex-grow">
      <DashboardLayout>{children}</DashboardLayout>
    </main>
  );
}
