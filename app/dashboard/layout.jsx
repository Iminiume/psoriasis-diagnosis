"use client";

import DashboardLayout from "@/view/dashboard/DashboardLayout";

export default function Layout({ children }) {
  return (
    <main className="w-full flex-grow">
      <DashboardLayout>{children}</DashboardLayout>
    </main>
  );
}
