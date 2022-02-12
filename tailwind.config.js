module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js,jsx}","./pages/**/*.{html,js,jsx}","./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
