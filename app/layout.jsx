import Navbar from "@/features/navbar";
import React from "react";

function Layout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`m-0 box-border p-0 text-[14px] antialiased`}>
        {children}
      </body>
    </html>
  );
}

export default Layout;
