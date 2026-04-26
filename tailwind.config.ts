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
        beige: {
          50: "#FFF9F5",
          100: "#FFF3EB",
          200: "#FFE8D6",
          300: "#FDDCBF",
        },
        ivory: {
          50: "#FFFFF5",
          100: "#FEFCF3",
          200: "#FDF8E8",
        },
        sage: {
          50: "#F5F9F4",
          100: "#E8F0E6",
          200: "#D1E2CD",
          300: "#B5CEB0",
          400: "#8DB585",
          500: "#6B9E61",
          600: "#547D4C",
        },
        coral: {
          50: "#FFF5F2",
          100: "#FFE8E1",
          200: "#FFD0C4",
          300: "#FFB3A0",
          400: "#FF8C73",
          500: "#E8735C",
          600: "#D45A42",
        },
        apricot: {
          50: "#FFF7F0",
          100: "#FFEDD9",
          200: "#FFD9B3",
          300: "#FFC48C",
          400: "#FFB06B",
          500: "#F59B4E",
        },
        warm: {
          50: "#FDFBF7",
          100: "#FAF5ED",
          200: "#F5EDE0",
          300: "#EDE2D0",
          400: "#DDD0B8",
          500: "#C4B396",
          600: "#A89474",
          700: "#5C4A32",
          800: "#3D3222",
          900: "#2A2218",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Helvetica Neue",
          "Apple SD Gothic Neo",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
