<script lang="ts">
  import Intro from '$lib/components/Intro.svelte'
  import Menu from '$lib/components/Menu.svelte'
  import Footer from '$lib/components/Footer.svelte'

  import '$lib/styles/style.css'
  import '$lib/styles/prism-vs.css'
</script>

<Intro />
<Menu />
<main class="container mx-auto p-4 max-w-screen-lg">
  <slot />
</main>
<Footer />
