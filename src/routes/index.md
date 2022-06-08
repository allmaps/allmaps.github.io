<script>
  import Cards from '$lib/components/Cards.svelte'
  import Card from '$lib/components/Card.svelte'
  import About from '$lib/components/About.svelte'
</script>

<Cards>
  <Card title="Works with any IIIF map" src="allmaps-editor.jpg" href="https://editor.allmaps.org/#/collection?url=https%3A%2F%2Fcdm21033.contentdm.oclc.org%2Fiiif%2Finfo%2Fkrt%2F2175%2Fmanifest.json&image=tp4PzMTZyxZFrsW6">
    <p>
      More and more institutions across the world are adopting <a href="https://iiif.io/">IIIF</a> to provide access to their collections of digitized images. Among all these images are 100,000s of maps.
    </p>
    <p>
      With Allmaps, you can georeference any map from any institution by using its IIIF URL. Allmaps doesn't require complicated GIS infrastructure and it doesn't need to generate XYZ map tiles. All that's needed is a IIIF server.
    </p>
  </Card>

  <!-- <Card title="Built on open standards" src="georef-annotation.jpg" href="https://annotations.allmaps.org/images/tKd1WKckZzZmFj7r">
    <p>
      Allmaps is working with the @iiif_io community on a data specification for georeferencing IIIF images.
    iiif annotation spec <a href="https://iiif.io/community/groups/maps/">IIIF Maps Community Group</a>
    </p>
  </Card>-->

  <Card title="Client-side map warping" src="allmaps-viewer.jpg" href="https://viewer.allmaps.org/#data=data%3Atext%2Fx-url%2Chttps%3A%2F%2Fannotations.allmaps.org%2Fimages%2Fmgc1WXkYnhMcA4Hz">
    <p>
      Allmaps can warp maps on-the-fly, in the browser. Allmaps functions without the need to first create image derivatives such as GeoTIFFs or map tiles.
    </p>
    <p>
      To warp a map, Allmaps uses the <a href="https://iiif.io/api/image/3.0/#4-image-requests">IIIF Image API</a> to only download the portion of the image that's needed, in the right scale. The <a href="https://allmaps.org/webgl2-preview/">new version of Allmaps Viewer</a> can even stitch together hundreds of maps at the same time.
    </p>
  </Card>

  <!--
  <Card title="More than displaying map layers" src="annotorious.jpg" href="https://observablehq.com/@bertspaan/allmaps-and-annotorious">
    <p>
    But Allmaps is not just about warping images and displaying map overlays: it's about open standards and open data.
      not just images
      All components rely on a simple JSON metadata structure that holds information about each
    map’s control points and mask.
    </p>
    <p>
      With this data, you can, for example, build geospatial indexes to quickly find the maps you're looking for, <a href="https://twitter.com/aboutgeo/status/1408063666176487426">improve tools for map vectorization</a>, <a href="https://observablehq.com/@bertspaan/using-allmaps-to-draw-geojson-on-a-iiif-image">draw GeoJSON on an original unwarped map</a> or <a href="https://observablehq.com/@bertspaan/georeferencing-a-map-by-transcribing-toponyms">automatically georeference maps by geocoding transcribed toponyms</a>.
    </p>
  </Card>

  <!--
  <Card title="It's all about the URL" src="allmaps-viewer-url.jpg" href="https://viewer.allmaps.org/#data=data%3Atext%2Fx-url%2Chttps%3A%2F%2Fdev.annotations.allmaps.org%2Fimages%2F813b0579711371e2">
    <p>
     and there's no need to create an account to start
    They are static sites, just HTML and JavaScript, they function by referencing IIIF or Web Annotation URLs. They don't need a database or cloud infrastructure.
    </p>
  </Card> -->

  <Card title="Open source components" src="github.jpg" href="https://github.com/allmaps">
    <p>
      The core components of Allmaps are open source and will always be freely available. The most important goal of the project is to make maps more accessible, from map collections from institutions big and small.
    </p>
    <p>
      We're working on plugins for <a href="https://openlayers.org/">OpenLayers</a> and <a href="https://leafletjs.com/">Leaflet</a>. These plugins will make it easy to start displaying georeferenced maps on your own website, without using infrastructure provided by Allmaps.
    </p>
  </Card>

  <Card title="Not just the browser" src="qgis.jpg" href="https://observablehq.com/@bertspaan/allmaps-tile-server">
    <p>
      Allmaps can export georeferenced maps to formats like GeoJSON or GeoTIFF. You can keep using your favorite scripting language, database or GIS.
    </p>
    <p>
      The <a href="https://observablehq.com/@bertspaan/allmaps-tile-server">Allmaps Tile Server</a>, a tiny proxy server that turns georeference annotations into <a href="https://en.wikipedia.org/wiki/Tiled_web_map">XYZ map tile layers</a>, can be used to view warped maps in existing mapping websites or applications like QGIS.
    </p>
  </Card>
</Cards>

<About />

Allmaps and its components are far from finished. For now, you can explore the following links:

- <a href="https://editor.allmaps.org/">Allmaps Editor</a>: georeference any IIIF map by entering the URL of a IIIF Manifest or IIIF Image.
- <a href="https://viewer.allmaps.org/">Allmaps Viewer</a>: warp a IIIF map by entering the URL or contents of a georeference annotation.
- <a href="https://github.com/allmaps">GitHub repositories</a>
- <a href="https://observablehq.com/collection/@bertspaan/allmaps">Observable notebooks</a>

## Partners

Allmaps supported and funded by the following organizations:

- <a href="https://heritage.tudelft.nl/">Delft University of Technology Library</a>
- <a href="https://www.library.universiteitleiden.nl/">Leiden University Libraries</a>
- <a href="https://geoplaza.vu.nl/cms/">Vrije Universiteit Amsterdam</a>
- <a href="https://www.leventhalmap.org/">Leventhal Map & Education Center at the Boston Public Library</a>
- <a href="https://openhistoricalmap.org/">OpenHistoricalMap</a>

<strong>If you think Allmaps can be useful for your institution or if you have questions about the project, you can send an email to <a href="mailto:hello@bertspaan.nl">Bert Spaan</a>.</strong>
