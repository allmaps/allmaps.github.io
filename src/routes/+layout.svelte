<script lang="ts">
  import Intro from '$lib/components/Intro.svelte'

  import Footer from '$lib/components/Footer.svelte'

  import '$lib/styles/style.css'
  import '$lib/styles/prism-vs.css'
</script>

<Intro />
<!-- <Header /> -->
<main class="container mx-auto p-4 max-w-screen-lg">
  <slot />
</main>
<Footer />
