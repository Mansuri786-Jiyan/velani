import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a1628',
          800: '#0f2240',
          700: '#152d54',
          600: '#1c3a6a',
        },
        steel: {
          400: '#5a9fd4',
          500: '#3a7abf',
          600: '#2a5f8f',
          700: '#1e4a70',
        },
        accent: {
          DEFAULT: '#e85d26',
          hover: '#d14e1c',
          light: '#ff7a45',
        },
        surface: {
          50: '#f8f9fb',
          100: '#f4f6f8',
          200: '#e8ecf0',
          300: '#d1d8e0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

