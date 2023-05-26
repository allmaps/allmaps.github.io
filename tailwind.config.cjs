module.exports = {
  content: [
    './src/**/*.{md,html,js,svelte,ts}',
    './node_modules/@allmaps/ui/dist/components/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            lineHeight: 1.6
          }
        }
      },
      fontFamily: {
        sans: ['Geograph', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
