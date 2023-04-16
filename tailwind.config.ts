import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#1C1C1F',
          text: '#606272',
          gray: '#B2B4C0',
          yellow: '#F7B40D',
          orange: '#F14C5D',
          red: '#F04264',
          pink: '#EC0393'
        },
        'alt-white': '#FDFDFD',
        background: '#F2F3F9'
      },
      spacing: {
        15: '3.75rem', // 60px
        29: '7.25rem' // 116px
      },
      maxWidth: {
        95: '23.75rem' // 380px
      },
      fontFamily: {
        titles: ['Atyp BL Text', 'sans-serif'],
        content: ['Inter', 'sans-serif']
      },
      zIndex: {
        1: '1'
      },
      boxShadow: {
        form: '0px 15px 30px -10px rgba(204, 206, 219, 0.4)',
        card: '0px 24px 44px -11px rgba(181, 183, 192, 0.3)'
      }
    }
  },
  plugins: []
} satisfies Config;
