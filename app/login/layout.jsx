"use client";
import "@/public/styles/fonts.css";
import "@/public/styles/globals.css";

export default function Layout({ children }) {
  return <main className="w-full flex-grow">{children}</main>;
}
