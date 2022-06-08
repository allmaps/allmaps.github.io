import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({ postcss: true }),
    mdsvex({
      extensions: ['.md']
    })
  ],

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),
    paths: {
      base: dev ? '' : ''
    },
    prerender: {
      default: true
    }
  },

  extensions: ['.svelte', '.md']
}

export default config
