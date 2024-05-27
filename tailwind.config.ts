import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'

import { theme } from '@allmaps/tailwind'

import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{html,js,svelte,ts,md}',
    './node_modules/@allmaps/ui/dist/components/**/*.{html,js,svelte,ts}',
    './node_modules/@allmaps/latest/dist/components/**/*.{html,js,svelte,ts}'
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

  plugins: [typography, containerQueries]
} satisfies Config
