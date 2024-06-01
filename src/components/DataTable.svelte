<script lang="ts">
  import { onMount } from 'svelte'

  const baseUrl = 'https://pub-073597ae464e4b54b70bb56886a2ccb6.r2.dev'

  const files = [
    {
      filename: 'annotations.json',
      type: 'Georeference Annotations',
      typeUrl: 'https://iiif.io/api/extension/georef/',
      size: 0
    },
    {
      filename: 'maps.json',
      type: 'JSON',
      size: 0
    },
    {
      filename: 'maps.ndjson',
      type: 'Newline-delimited JSON',
      size: 0
    },
    {
      filename: 'maps.geojson',
      type: 'GeoJSON',
      size: 0
    },
    {
      filename: 'maps.geojsonl',
      type: 'Newline-delimited GeoJSON',
      typeUrl: 'https://stevage.github.io/ndgeojson/',
      size: 0
    }
  ]

  onMount(() => {
    files.forEach((file, index) => {
      // TODO: get base URL for data files from config/env
      const url = `https://pub-073597ae464e4b54b70bb56886a2ccb6.r2.dev/${file.filename}`
      fetch(url, { method: 'HEAD' }).then((response) => {
        if (response.ok) {
          const contentLength = response.headers.get('Content-Length')
          files[index].size = Number(contentLength)
        }
      })
    })
  })

  function formatSize(size: number) {
    return size ? `${Math.round(size / 1024 / 1024)} MB` : ''
  }
</script>

<table>
  <thead>
    <tr>
      <th class="text-left">File</th>
      <th class="text-left">Type</th>
      <th class="text-right">Size</th>
    </tr>
  </thead>
  <tbody>
    {#each files as file}
      <tr>
        <td>
          <a href={`${baseUrl}/${file.filename}`}>
            <code>{file.filename}</code>
          </a>
        </td>
        <td
          >{#if file.typeUrl}
            <a href={file.typeUrl}>{file.type}</a>
          {:else}
            {file.type}
          {/if}
        </td>
        <td class="text-right">{formatSize(file.size)}</td>
      </tr>
    {/each}
  </tbody>
</table>
