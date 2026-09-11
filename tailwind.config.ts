import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F4F1EA",
        paper: "#FBFAF6",
        ink: "#14140F",
        charcoal: "#1C1B17",
        orange: "#FF4E1F",
        line: "#DDD9CD",
        linedark: "#2A2A24",
        muted: "#8B8878",
        mutedlight: "#B9B6A8",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        accent: ["var(--font-accent)"],
        sans: ["var(--font-sans)"],
      },
      maxWidth: {
        wrap: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
