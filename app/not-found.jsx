// app/not-found.jsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found - Hoorie Masoorian Medical",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">404 - صفحه یافت نشد</h1>
      <p className="mb-6">صفحه مورد نظر شما یافت نشد</p>
      <Link href="/" className="text-blue-600 underline">
        بازگشت به خانه
      </Link>
    </div>
  );
}
