import "@/public/styles/fonts.css";
import "@/public/styles/globals.css";

export const metadata = {
  title: "Hoorie Masoorian Medical",
  description: "Website",
};

export default function Layout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`relative m-0 box-border p-0 text-[16px] antialiased`}>
        <div className="mx-auto max-w-custom">{children}</div>
      </body>
    </html>
  );
}
