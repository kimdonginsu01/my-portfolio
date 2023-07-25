/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "sidebar-with": "450px",
      },
      backgroundColor: {
        "sidebar-color": "#fefefe",
      },
      borderColor: {
        "sidebar-border": "#f9f9f9",
        light: "#dfdfdf",
      },
      colors: {
        light: "#f8f8f8",
        "light-grey": "#767676",
        "icon-light-mode": "#0000001a",
        "icon-dark-mode": "#fff3",
        dark: "#111",
        "tag-light-grey": "rgba(0,0,0,.04)",
        "tag-dark-grey": "hsla(0,0%,100%,.08)",
        "text-color": "#333",
        "text-color-dark": "#999",
      },
      borderRadius: {
        "avatar-init": "60% 40% 30% 70%/60% 30% 70% 40%",
      },
      keyframes: {
        morph: {
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateZ(0)",
          },
        },
      },
      boxShadow: {
        avatar: "inset 0 0 0 9px hsla(0,0%,100%,.3)",
      },
    },
  },
  plugins: [],
};
