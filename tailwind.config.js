// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          200: '#FFE5B4',
          400: '#FFD700',
          500: '#DAA520',
          600: '#B8860B',
        }
      },
      animation: {
        'float-clouds': 'float-clouds 20s linear infinite',
        'confetti': 'confetti 3s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s infinite',
        'shake': 'shake 0.5s infinite',
        'fadeIn': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        'float-clouds': {
          '0%, 100%': { transform: 'translateX(-100%) translateY(0)' },
          '50%': { transform: 'translateX(100vw) translateY(20px)' },
        },
        'confetti': {
          '0%': { 
            transform: 'translateY(0) rotateZ(0)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100vh) rotateZ(720deg)',
            opacity: '0'
          },
        },
        'scale-in': {
          '0%': { 
            transform: 'scale(0)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}