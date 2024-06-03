import starlightPlugin from '@astrojs/starlight-tailwind'
import containerQueries from '@tailwindcss/container-queries'
import typography from '@tailwindcss/typography'

import { theme } from '@allmaps/tailwind'

import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/@allmaps/ui/dist/components/**/*.{svelte,ts}',
    './node_modules/@allmaps/latest/dist/components/**/*.{svelte,ts}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme,
  plugins: [starlightPlugin(), containerQueries, typography]
} satisfies Config
