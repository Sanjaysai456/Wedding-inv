/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kumkum: {
          DEFAULT: '#8C1C13',
          light: '#B22222',
          dark: '#5C120B'
        },
        turmeric: {
          DEFAULT: '#F4D03F',
          light: '#F9E79F',
          dark: '#D4AC0D'
        },
        emerald: {
          DEFAULT: '#196F3D',
          light: '#27AE60',
          dark: '#0B5345'
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F1C40F',
          dark: '#B8860B'
        }
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Lora', 'sans-serif'],
      },
      backgroundImage: {
        'mandala-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDAgTDIwIDQwIE0wIDIwIEw0MCAyMCIgc3Ryb2tlPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4xNSkiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjE1IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjEyLCAxNzUsIDU1LCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')",
      }
    },
  },
  plugins: [],
}
