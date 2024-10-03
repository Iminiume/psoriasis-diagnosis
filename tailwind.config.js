/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./view/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        custom: "1440px",
      },
      colors: {
        background: "var(--background)",

        primaryColor: "var(--primary-color)",
        blueColor: "var(--blue-color)",
        greenColor: "var(--green-color)",
        darkPinkColor: "var(--dark-pink-color)",
        purpleColor: "var(--purple-color)",
        orangeColor: "var(--orange-color)",
        socialIconBg: "var(--social-icon-bg)",
        navbarBg: "var(--navbar-bg)",
        footerBg: "var(--foter-bg)",
        mainTextColor: "var(--main-text-color)",
        secondTextColor: "var(--second-text-color)",
        loginBg: "var(--login-bg)",
        loginBorder: "var(--login-border)",
        cardBg: "var(--card-bg)",
        pinkShadowBg: "var(--ping-shadow-bg)",
        inputBg: "var(--input-bg)",
        buttonShadow: "var(--button-shadow)",
        buttonHover: "var(--button-hover)",

        foreground: "var(--foreground)",
        disabledElementColor: "var(--disabled-element-color)",
      },
    },
  },
  plugins: [],
};
