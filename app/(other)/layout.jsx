"use client";
import Navbar from "@/features/navbar";
import Footer from "@/features/footer";

import "@/public/styles/globals.css";
import "@/public/styles/fonts.css";

export default function Layout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`m-0 box-border flex min-h-screen flex-col p-0 antialiased`}
      >
        <Navbar />
        <main className="w-full flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
