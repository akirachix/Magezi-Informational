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
      primary: '#3E1C00',
      secondary: '#508408',
      tertiary: '#3E1C00',
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    theme: {
      extend: {
        fontFamily: {
          jost: ['Jost', 'sans-serif'],
        },
      },
    },
  },
},
  plugins: [],
};
export default config;