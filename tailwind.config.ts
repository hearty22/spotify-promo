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
        spotify: {
          bg: "#121212",
          card: "#181818",
          accent: "#1DB954",
          "accent-hover": "#1ED760",
          muted: "#B3B3B3",
        },
      },
    },
  },
  plugins: [],
};
export default config;
