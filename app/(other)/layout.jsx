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
      <body className={`relative m-0 box-border p-0 antialiased`}>
        <Navbar />
        <main className="mx-auto min-h-screen w-full max-w-custom">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
