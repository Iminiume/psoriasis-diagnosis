import "@/public/styles/fonts.css";
import "@/public/styles/globals.css";

export const metadata = {
  title: "Hoorie Masoorian Medical",
  description: "Website",
};

export default function Layout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`relative m-0 box-border min-h-screen p-0 antialiased`}
      >
        <main className="mx-auto h-full max-w-custom">{children}</main>
      </body>
    </html>
  );
}
