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
        bodyColor: "#030D25",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        todoShadow: "0px 0px 20px 4px rgba(11,4,209,1)",
      },
    },
  },
  plugins: [],
};
export default config;
