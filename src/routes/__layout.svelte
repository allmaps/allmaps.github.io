<script lang="ts">
  import Header from '$lib/components/Header.svelte'
  import '$lib/styles/style.css'
  import '$lib/styles/prism-vs.css'
</script>

<Header />

<main class="container mx-auto p-4 max-w-screen-lg">
  <slot />
</main>
