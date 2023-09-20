import typegraphy from '@tailwindcss/typography'

import { theme } from '@allmaps/tailwind'

import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/@allmaps/ui/dist/components/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    ...theme,
    extend: {
      typography: {
        DEFAULT: {
          css: {
            lineHeight: 1.6
          }
        }
      }
    }
  },

  plugins: [typegraphy]
} satisfies Config
