import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

theme: {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "#E4960E",
      primary: "#3E1C00", 
      secondary: "#E4960E", 
      hover: "#508408", 
      white: "#FFFFFF", 
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
},
  plugins: [],
};
export default config;
