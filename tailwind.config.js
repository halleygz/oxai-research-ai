/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#797979",
          "200": "#2b2a2a",
          "300": "#2a2a2a",
          "400": "#0c0c0c",
        },
        white: "#fff",
        darkslategray: "#3b3b3b",
        gainsboro: "#d9d9d9",
        "schemes-primary": "#65558f",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "9xl": "28px",
        xl: "20px",
        "54xl": "73px",
        "31xl": "50px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "7xl": "1.625rem",
      "2xl": "1.313rem",
      "25xl": "2.75rem",
      "16xl": "2.188rem",
      mini: "0.938rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      "13xl": "2rem",
      lgi: "1.188rem",
      "15xl": "2.125rem",
      xl: "1.25rem",
      "8xl": "1.688rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
