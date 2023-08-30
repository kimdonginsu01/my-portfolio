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
        "sidebar-width": "450px",
        "sidebar-width-sm": "270px",
        "header-height": "70px",
      },
      backgroundColor: {
        "sidebar-color": "#fefefe",
      },
      borderColor: {
        "sidebar-border": "#f9f9f9",
        "sidebar-dark": "#111",
        light: "#dfdfdf",
        dark: "hsla(0,0%,100%,.1)",
        testimonials: "#e5edf4",
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
        "text-grey": "#efefef",
        "text-skillbox": "#bbb",
        bar: "rgba(0,0,0,.09)",
        "bar-dark": "#444",
        "resume-time": "rgba(0, 0, 0, 0.05)",
        "resume-line-dark": "#56585c",
        "service-item": "#323232",
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
        readMoreAnim2: {
          "0%": {
            transformOrigin: "left center",
            transform: "scaleX(0.2)",
          },
          "70%": {
            transformOrigin: "left center",
            transform: "scaleX(1)",
          },

          "71%": {
            transformOrigin: "right center",
          },
          to: {
            transformOrigin: "right center",
            transform: "scaleX(0.3)",
          },
        },
      },
      boxShadow: {
        avatar: "inset 0 0 0 9px hsla(0,0%,100%,.3)",
      },
      transitionTimingFunction: {
        slideIn: "cubic-bezier(.6,.01,0,1)",
        activeMenu: "cubic-bezier(.215,.61,.355,1)",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1040px",
        // => @media (min-width: 1024px) { ... }

        xl: "1200px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1600px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
