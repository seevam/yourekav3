import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-gray': '#f8f9fa',
        'text-primary': '#1a1a1a',
        'text-secondary': '#6b7280',
        primary: '#8b5cf6',
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.2' }],
        'h1-mobile': ['2rem', { lineHeight: '1.2' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'body-mobile': ['0.875rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
}

export default config
