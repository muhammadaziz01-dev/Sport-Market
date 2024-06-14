import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true, // containerni markazga joylash
        padding: '2rem', // containerning ichki bo'shliq miqdori
        screens: {
          sm: '100%', // kichik ekranlarda 100% kenglik
          md: '100%', // o'rta ekranlarda 100% kenglik
          lg: '1024px', // katta ekranlarda 1024px kenglik
          xl: '1280px', // juda katta ekranlarda 1280px kenglik
        },
      },
    },
  },
  plugins: [],
  
};
export default config;
