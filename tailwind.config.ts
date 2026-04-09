import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bbd8ff',
          300: '#8dc0ff',
          400: '#599fff',
          500: '#3379ff',
          600: '#1d5cff',
          700: '#1847eb',
          800: '#1b3dbc',
          900: '#1c378f'
        }
      },
      boxShadow: {
        card: '0 6px 24px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
