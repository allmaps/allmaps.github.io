<script>
  import Cards from '$lib/components/Cards.svelte'
  import Card from '$lib/components/Card.svelte'
  import About from '$lib/components/About.svelte'
</script>

<Cards>
  <Card title="Works with any IIIF map" src="annotation.jpg">
    <p>
      More and more institutions across the world are adopting <a href="https://iiif.io/">IIIF</a> to provide access to their collections of digitized images. Among all these images are 100.000s of maps, if not much more.
    </p>
    <p>
      With Allmaps, you can georeference any map from any institution by using its IIIF URL. Allmaps doesn't require complicated GIS infrastructure or map tiles and there's no need to create an account.
    </p>
    <!-- Image: Allmaps Viewer -->
  </Card>

</Cards>

<About />

Allmaps and its components are far from finished. For now, you can explore the following links:

- <a href="https://editor.allmaps.org/">Allmaps Editor</a>: georeference any IIIF map by entering the URL of a IIIF Manifest or IIIF Image.
- <a href="https://viewer.allmaps.org/">Allmaps Viewer</a>: warp a IIIF map by entering the URL or contents of a georeference annotation.
- <a href="https://github.com/allmaps">GitHub repositories</a>
- <a href="https://observablehq.com/collection/@bertspaan/allmaps">Observable notebooks</a>

## Partners

- <a href="https://heritage.tudelft.nl/">Delft University of Technology Library</a>
- <a href="https://www.library.universiteitleiden.nl/">Leiden University Libraries</a>
- <a href="https://geoplaza.vu.nl/cms/">Vrije Universiteit Amsterdam</a>
- <a href="https://www.leventhalmap.org/">Leventhal Map & Education Center at the Boston Public Library</a>
- <a href="https://openhistoricalmap.org/">OpenHistoricalMap</a>
