/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        color1: "#5EA4C2", //
        color2: "#3949D6", //
        color3: "#202135", //
        color31: "#ac4a3f", //
        color4: "#828B6D", //
        color41: "#5E6947",
        color5: "#e5e9e8",
        color51: "#6897b5", //
        color6: "#c9c9c9",
        color61: "#efe8e4",
        color7: "#a87c50",
        color8: "#f6f7ef", //
        color9: "#f2f0ed",
        "color-light-black": "#666",
        "color-medium-black": "#999",
        "color-line": "rgba(0, 0, 0, 0.1)",
      },
      boxShadow: {
        nav: "-4px 5px 10px 0px rgba(0, 0, 0, 0.28)",
      },
      screens: {
        sm: "576px",
        md: "800px",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        widestmore: ".15em",
      },
    },
  },
  plugins: [],
};
