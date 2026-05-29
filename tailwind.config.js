/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '1700px',
      },
      maxWidth: {
        site: '1440px',
      },
      colors: {
        gold:          '#C9A84C',
        'gold-light':  '#E8D5A3',
        'gold-dark':   '#8B6914',
        brown:         '#4A2C0A',
        'brown-mid':   '#6B3F18',
        'brown-light': '#8B5E3C',
        beige:         '#F5ECD7',
        'beige-dark':  '#E8D5B7',
        cream:         '#FAF6EE',
        offwhite:      '#FDFAF4',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Jost', 'system-ui', 'sans-serif'],
        arabic:  ['"Noto Naskh Arabic"', 'serif'],
        urdu:    ['"Noto Nastaliq Urdu"', 'serif'],
        hindi:   ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      // Tailwind-managed animations (for className usage)
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.65s ease both',
      },
    },
  },
  plugins: [],
}
