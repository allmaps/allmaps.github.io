<script lang="ts">
  export let title: string
  export let src: string
  export let href: string | null = null
</script>

<li class="md:flex flex-row odd:flex-row-reverse flex-none items-center">
  <div class="md:w-1/2">
    <h2>{title}</h2>
    <slot />
  </div>
  <div class="md:w-1/2">
    {#if href}
      <a {href}>
        <img src="cards/{src}" alt={title} />
      </a>
    {:else}
      <img src="cards/{src}" alt={title} />
    {/if}
  </div>
</li>
