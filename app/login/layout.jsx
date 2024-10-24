"use client";
import "@/public/styles/fonts.css";
import "@/public/styles/globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`m-0 box-border min-h-screen p-0 antialiased`}>
        <main className="w-full flex-grow">{children}</main>
      </body>
    </html>
  );
}
