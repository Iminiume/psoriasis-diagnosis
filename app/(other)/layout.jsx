"use client";
import Navbar from "@/features/navbar";
import Footer from "@/features/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="w-full flex-grow">{children}</main>
      <Footer />
    </>
  );
}
