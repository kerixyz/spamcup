/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spam: {
          blue: '#0047AB',
          yellow: '#FFDE3A',
          'blue-dark': '#003380',
          'blue-light': '#0066CC',
        },
        primary: '#0047AB',
        secondary: '#FFDE3A',
        accent: '#0066CC',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shine': 'shine 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' },
          'to': { filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.6))' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' },
        },
      },
    },
  },
  plugins: [],
}
