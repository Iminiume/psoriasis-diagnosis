/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        custom: "1440px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "var(--primary-color)",
        secondaryColor: "var(--secondary-color)",
        disabledElementColor: "var(--disabled-element-color)",
        mainTextColor: "var(--main-text-color)",
        secondTextColor: "var(--second-text-color)",
        inputBg: "var(--input-bg)",
      },
    },
  },
  plugins: [],
};
