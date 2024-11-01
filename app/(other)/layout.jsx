"use client";
import Navbar from "@/features/navbar";
import Footer from "@/features/footer";

import "@/public/styles/globals.css";
import "@/public/styles/fonts.css";
import { useAuthContext } from "@/utils/context/useAuthContext";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="w-full flex-grow">{children}</main>
      <Footer />
    </>
  );
}
