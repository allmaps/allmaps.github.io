import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

// import ports from '../../ports.json'

const STATS_WEBSITE_ID = import.meta.env.VITE_STATS_WEBSITE_ID

const isDevelop = import.meta.env.DEV
const branch = isDevelop ? 'develop' : 'main'
const editLinkBaseUrl = `https://github.com/allmaps/allmaps.github.io/tree/${branch}/`

export default defineConfig({
  server: {
    // port: ports.docs,
    host: true
  },
  integrations: [
    starlight({
      title: 'Allmaps',
      social: {
        github: 'https://github.com/allmaps/allmaps'
      },
      logo: {
        src: './src/images/allmaps-logo.svg'
      },
      head: [
        STATS_WEBSITE_ID && {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://stats.allmaps.org/script.js',
            'data-website-id': STATS_WEBSITE_ID
          }
        }
      ],
      favicon: '/favicon.png',
      sidebar: [],
      editLink: {
        baseUrl: editLinkBaseUrl
      },
      components: {
        PageFrame: './src/components/overrides/PageFrame.astro',
        PageTitle: './src/components/overrides/PageTitle.astro',
        ThemeProvider: './src/components/overrides/ThemeProvider.astro'
      },
      customCss: [
        './src/css/overrides.css',
        './src/css/tailwind.css',
        './src/css/fonts.css',
        './src/css/starlight.css'
      ]
    }),
    svelte(),
    tailwind({ applyBaseStyles: false })
  ]
})
