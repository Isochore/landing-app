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
    },
  },
  plugins: [],
}

