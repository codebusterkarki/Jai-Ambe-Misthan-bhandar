/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        kesar: {
          50: '#FFFDF5',
          100: '#FFF9E5',
          200: '#FFF0BF',
          300: '#FFE28A',
          400: '#FFCE47',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        royal: {
          50: '#FDF2F2',
          100: '#FCE7E7',
          200: '#F9D1D1',
          300: '#F4ADAD',
          400: '#EA7575',
          500: '#DC2626',
          600: '#B91C1C',
          700: '#991B1B',
          800: '#7F1D1D',
          900: '#581010',
          950: '#350606',
        },
        gold: {
          light: '#FDE68A',
          DEFAULT: '#D4AF37',
          dark: '#B48222',
        },
        pistachio: {
          50: '#F3FAF6',
          100: '#E2F3E9',
          200: '#C5E6D3',
          500: '#10B981',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        warmcream: {
          50: '#FCFBF7',
          100: '#F8F5EC',
          200: '#F1EBD8',
          300: '#E6DCBF',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'royal': '0 10px 30px -5px rgba(185, 28, 28, 0.15), 0 4px 6px -2px rgba(185, 28, 28, 0.05)',
        'gold': '0 10px 25px -5px rgba(212, 175, 55, 0.25)',
      }
    },
  },
  plugins: [],
}

