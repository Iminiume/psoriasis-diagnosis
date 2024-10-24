"use client";
import "@/public/styles/fonts.css";
import "@/public/styles/globals.css";
import DashboardLayout from "@/view/dashboard/DashboardLayout";

export default function Layout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`m-0 box-border min-h-screen p-0 antialiased`}>
        <main className="w-full flex-grow">
          <DashboardLayout>{children}</DashboardLayout>
        </main>
      </body>
    </html>
  );
}
