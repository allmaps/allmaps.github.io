<script lang="ts">
  export let inverted = false

  let src: string
  if (inverted) {
    src =
      'https://raw.githubusercontent.com/allmaps/style/master/images/allmaps-logo-inverted.svg'
  } else {
    src =
      'https://raw.githubusercontent.com/allmaps/style/master/images/allmaps-logo.svg'
  }
</script>

<img alt="Allmaps" class="m-0" {src} />
