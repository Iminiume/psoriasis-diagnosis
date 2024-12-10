import React from "react";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import classNames from "classnames";

import "@/public/styles/globals.css";
import "@/public/styles/fonts.css";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/Yekan-Bakh-FaN-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Yekan-Bakh-FaN-Medium.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Yekan-Bakh-En-Medium.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Hamyar Psoriasis",
  description:
    "This website is for detecting whether you have psoriasis or not",
};

const LayoutHandler = dynamic(() => import("@/features/layout-handler"));

function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={classNames(
          "m-0 box-border flex h-full min-h-screen flex-col p-0 antialiased",
          myFont.className,
        )}
      >
        <LayoutHandler>{children}</LayoutHandler>
      </body>
    </html>
  );
}

export default RootLayout;
