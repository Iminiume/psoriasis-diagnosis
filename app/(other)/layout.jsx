import { Suspense } from "react";

import { AuthProvider } from "@/context/authContext/authProvider";
import Navbar from "@/features/navbar";
import Footer from "@/features/footer";
import Loading from "./loading";

import "@/public/styles/globals.css";
import "@/public/styles/fonts.css";

export const metadata = {
  title: "Hoorie Masoorian Medical",
  description: "Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`m-0 box-border p-0 antialiased`}>
        <div className="mx-auto min-h-screen w-full max-w-custom">
          <Navbar />
          <main>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
