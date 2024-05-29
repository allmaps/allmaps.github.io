import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

// import ports from '../../ports.json'

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
      favicon: '/favicon.png',
      sidebar: [],
      editLink: {
        // TODO: pick main or develop branch depending on NODE_ENV or something similar
        baseUrl: 'https://github.com/allmaps/allmaps/tree/develop/apps/docs/'
      },
      components: {
        PageFrame: './src/components/overrides/PageFrame.astro',
        PageTitle: './src/components/overrides/PageTitle.astro'
      },
      customCss: [
        './src/css/overrides.css',
        './src/css/tailwind.css',
        './src/css/fonts.css',
        './src/css/starlight.css'
      ],
      themes: [ 'starlight-light'],
      useStarlightDarkModeSwitch: false
    }),
    svelte(),
    tailwind({ applyBaseStyles: false })
  ]
})
