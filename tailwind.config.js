/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'text': 'var(--color-light-gray)',
        'dark': 'var(--color-dark)',
        'dark-gray': 'var(--color-dark-gray)',
        'dark-gray-50': 'var(--color-dark-gray-50)'
      },
      backgroundImage: {
        'gradient': 'var(--gradient)',
        'gradient2': 'linear-gradient(180deg, rgba(22,22,23,0) 30%, rgba(52,33,17,1) 100%)',
        'gradient3': 'linear-gradient(180deg, rgba(22,22,23,1) 0%, rgba(22,22,23,0) 100%)',
      },
      fontSize: {
        'h1': '90px',
      }
    },
  },
  plugins: [],
}