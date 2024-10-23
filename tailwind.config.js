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
      backgroundImage: {
        blueShadow: "url(/images/blueShadow.png)",
        bigPinkShadow: "url(/images/bigPinkShadow.png)",
        blueShadowBottom: "url(/images/blueShadowBottom.png)",
        orangeShadow: "url(/images/orangeShadow.png)",
        pinkShadow: "url(/images/pinkShadow.png)",
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
      },
    },
  },
  plugins: [],
};
