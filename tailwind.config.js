/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
        colors: {
            'spline': '#0e1129',
            'download': 'rgba(0, 0, 0, 0.2)',
        },
        fontFamily: {
            'spline-sans': ['Spline Sans', 'sans-serif'],
            'spline-sans-mono': ['Spline Sans Mono', 'monospace']
        },
        screens: {
            'xxs': '400px',
        },
        scale: {
            '30': '.3',
            '40': '.4',
            '60': '.6',
            '70': '.7',
            '80': '.8',
        },
        transform: {
            '128': 'translateX(32rem)',
        },
        maxWidth: {
            'xxs': '250px',
        },
  },
  plugins: [],
}
}