/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      colors: {
        "isro-blue": "#0E88D3",
        "isro-orange": "#F47216",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Inconsolata", "monospace"],
      space: ["Speedy", "monospace"],
      ubuntu: ["Ubuntu-med", "sans-serif"],
      "space-mono": ["Space-Mono-Reg", "monospace"],
    },
  },
  plugins: [],
};

