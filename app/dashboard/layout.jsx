"use client";

import { useUserContext } from "@/utils/context/useUserContext";
import DashboardLayout from "@/view/dashboard/DashboardLayout";
import { useEffect } from "react";

export default function Layout({ children }) {
  const { state } = useUserContext();

  useEffect(() => {
    if (!state.role) router.replace("/login/role-selection");
  }, [state]);

  return (
    <main className="w-full flex-grow">
      <DashboardLayout>{children}</DashboardLayout>
    </main>
  );
}
