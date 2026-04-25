import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0F0F',
        surface: '#1A1A1A',
        border: '#2A2A2A',
        primary: '#F0EDE8',
        secondary: '#888888',
        accent: '#F0A500',
        'badge-soon': '#4F46E5',
        'badge-progress': '#06B6D4',
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
