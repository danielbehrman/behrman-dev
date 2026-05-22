import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        surface: '#F0EDE8',
        border: '#E5E2DC',
        primary: '#1C1C1E',
        secondary: '#6B7280',
        accent: '#F0A500',
        navy: '#1E3A5F',
        'badge-soon': '#4F46E5',
        'badge-progress': '#06B6D4',
        'badge-dogfood': '#F0A500',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-geist-sans)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '760px',
      },
    },
  },
  plugins: [],
}

export default config
