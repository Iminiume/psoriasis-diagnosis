import "@/public/styles/fonts.css";
import "@/public/styles/globals.css";

import Navbar from "@/features/navbar";
import Footer from "@/features/footer";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Hoorie Masoorian Medical",
  description: "Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`m-0 box-border p-0 text-[14px] antialiased`}>
        <div className="mx-auto w-full max-w-custom">
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </div>
      </body>
    </html>
  );
}
