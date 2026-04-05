import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: '#7D907D',
        cream: '#F9F7F2',
        terracotta: '#C36B4D',
      },
      rotate: {
        'y-180': '180deg',
      },
      perspective: {
        '1000': '1000px',
      },
      fontFamily: {
        heading: [
          'Playfair Display',
          'Lora',
          'serif',
        ],
        body: [
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 4px 24px 0 rgba(125, 144, 125, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.6' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
