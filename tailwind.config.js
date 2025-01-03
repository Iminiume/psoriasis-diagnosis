/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./view/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        blueShadow: "url(/images/blueShadow.png)",
        bigPinkShadow: "url(/images/bigPinkShadow.png)",
        blueShadowBottom: "url(/images/blueShadowBottom.png)",
        orangeShadow: "url(/images/orangeShadow.png)",
        pinkShadow: "url(/images/pinkShadow.png)",
        "custom-gradient":
          "linear-gradient(180deg, rgba(38, 34, 80, 0.65) 0%, rgba(27, 25, 66, 0.85) 57.44%, #17163B 100%)",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "1/1": "1 / 1",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        progress: {
          from: { width: "100%" },
          to: { width: "0%" },
        },
      },
      animation: { fadeIn: "fadeIn 0.1s ease-in-out" },
      maxWidth: {
        custom: "1440px",
        "3xl": "1920px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primaryColor: "var(--primary-color)",

        mainTextColor: "var(--main-text-color)",
        secondTextColor: "var(--second-text-color)",

        blueColor: "var(--blue-color)",
        greenColor: "var(--green-color)",
        darkPinkColor: "var(--dark-pink-color)",
        purpleColor: "var(--purple-color)",
        orangeColor: "var(--orange-color)",
        redColor: "var(--red-color)",

        socialIconBg: "var(--social-icon-bg)",
        navbarBg: "var(--navbar-bg)",
        footerBg: "var(--foter-bg)",
        loginBg: "var(--login-bg)",

        loginBorder: "var(--login-border)",
        cardBg: "var(--card-bg)",
        pinkShadowBg: "var(--ping-shadow-bg)",
        inputBg: "var(--input-bg)",
        buttonShadow: "var(--button-shadow)",
        buttonHover: "var(--button-hover)",
        disabledElementColor: "var(--disabled-element-color)",

        cardBg100: "var(--card-bg-100)",
        cardBg200: "var(--card-bg-200)",
        cardBg300: "var(--card-bg-300)",
        cardBorderOp10: "var(--card-border-op-10)",
        cardBorderOp20: "var(--card-border-op-20)",
        cardBorderOp30: "var(--card-border-op-30)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
