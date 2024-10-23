import Navbar from "@/features/navbar";
import Footer from "@/features/footer";

import "@/public/styles/globals.css";
import "@/public/styles/fonts.css";

export const metadata = {
  title: "Hoorie Masoorian Medical",
  description: "Website",
};

export default function RootLayout({ children }) {
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
