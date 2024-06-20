/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'isro-blue': '#0E88D3',
        'isro-orange': '#F47216',
      },
    },
    fontFamily:{
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'mono': ['Inconsolata', 'monospace'],
      'space': ['Speedy', 'monospace'],
      'ubuntu': ['Ubuntu-med', 'sans-serif'],
      'space-mono': ['Space-Mono-Reg', 'monospace'],
    }
  },
  plugins: [],
};
