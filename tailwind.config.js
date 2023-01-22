module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'book': '1px 2px 1px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
