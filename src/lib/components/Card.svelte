<script lang="ts">
  export let title: string
  export let src: string
  export let href: string | null = null
</script>

<li
  class="flex flex-col md:flex-row md:odd:flex-row-reverse items-center gap-8 md:gap-16"
>
  <div class="md:w-1/2 prose">
    <h2>{title}</h2>
    <slot />
  </div>
  <div class="md:w-1/2">
    {#if href}
      <a {href} class="inline-block max-w-md">
        <img src="cards/{src}" alt={title} />
      </a>
    {:else}
      <img src="cards/{src}" alt={title} />
    {/if}
  </div>
</li>
