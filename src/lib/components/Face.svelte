<script lang="ts">
  export let href: string
  export let name: string
  export let src: string
</script>

<a {href} class="no-underline">
  <img class="w-6 inline-block rounded-lg" src="faces/{src}" alt={name} />
  <span class="underline">{name}</span>
</a>
