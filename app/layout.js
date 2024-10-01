import "@/public/styles/fonts.css";
import "@/public/styles/globals.css";

import Navbar from "./features/navbar";
import Footer from "./features/footer";

export const metadata = {
  title: "Hoorie Masoorian Medical",
  description: "Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`text-[14px] antialiased`}>
        <div className="mx-auto max-w-custom">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
