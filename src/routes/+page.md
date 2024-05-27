<script>
  import {onMount } from 'svelte'

  import { MapMonster, Logo } from '@allmaps/ui'
  import { Latest } from '@allmaps/latest'

  import { pink, white } from '@allmaps/tailwind'

  import Cards from '$lib/components/Cards.svelte'
  import Card from '$lib/components/Card.svelte'
  import About from '$lib/components/About.svelte'
  import Data from '$lib/components/Data.svx'

  const speechBalloonBackgroundColor = pink
  const speechBalloonTextColor = white

  let latestCount = 10

  onMount(() => {
    if (window.innerWidth < 640) {
      latestCount = 5
    } else if (window.innerWidth < 768) {
      latestCount = 10
    }

    console.log(window.innerWidth, latestCount)

  })
</script>

<Cards>
  <Card title="Works with any IIIF map" src="allmaps-editor.jpg" href="https://editor.allmaps.org/#/collection?url=https%3A%2F%2Fcdm21033.contentdm.oclc.org%2Fiiif%2Finfo%2Fkrt%2F2175%2Fmanifest.json">
    <p>
    More and more institutions across the world are adopting <a href="https://iiif.io/">IIIF</a> to provide access to their collections of digitized images. Among all these images are 100,000s of maps.
    </p>
    <p>
      With Allmaps, you can georeference any map from any institution by using its IIIF URL. Allmaps doesn't require complicated GIS infrastructure and it doesn't need to generate XYZ map tiles. All that's needed is a IIIF server.
    </p>
  </Card>

  <Card title="Built on open standards" src="georef-annotation.jpg" href="https://annotations.allmaps.org/images/e97a79d041525120">
    <p>
      All components of Allmaps rely on <a href="https://iiif.io/api/extension/georef/">Georeference Annotations</a> that hold information about each map’s georeference data. Georeference Annotations are based on W3C's <a href="https://www.w3.org/TR/annotation-model/">Web Annotation standard</a> and are an <a href="https://iiif.io/api/index.html#approved-extensions">approved extension</a> to the IIIF Presentation API.
    </p>
  </Card>

  <Card title="Client-side map warping" src="allmaps-viewer.jpg" href="https://viewer.allmaps.org/#data=data%3Atext%2Fx-url%2Chttps%3A%2F%2Fannotations.allmaps.org%2Fimages%2Fa7afe9a34c3b8633">
    <p>
      Allmaps can warp maps on-the-fly, in the browser. Allmaps functions without the need to first create image derivatives such as GeoTIFFs or map tiles.
    </p>
    <p>
      To warp a map, Allmaps uses the <a href="https://iiif.io/api/image/3.0/#4-image-requests">IIIF Image API</a> to only download the portion of the image that's needed, in the right scale. The <a href="https://viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmanifests%2Fc390af06ea724803">new version of Allmaps Viewer</a> can even stitch together hundreds of maps at the same time.
    </p>
  </Card>

  <Card title="More than displaying map layers" src="annotorious.jpg" href="https://observablehq.com/@allmaps/allmaps-and-annotorious">
    <p>
    But Allmaps is not just about warping images and displaying map overlays: it's about open standards and open data. A Georeference Annotation can be used to display a warped map, but there's much more Allmaps can do with this data.
    </p>
    <p>
      For example, you can build geospatial indexes to quickly find the maps you're looking for, <a href="https://twitter.com/aboutgeo/status/1408063666176487426">improve tools for map vectorization</a>, <a href="https://observablehq.com/@allmaps/using-allmaps-to-draw-geojson-on-a-iiif-image">draw GeoJSON on an original unwarped map</a> or <a href="https://observablehq.com/@allmaps/georeferencing-a-map-by-transcribing-toponyms">automatically georeference maps by geocoding transcribed toponyms</a>.
    </p>
    <!-- Add section about API, about open data, about using this data in your own tools -->
  </Card>

  <Card title="It's all about the URL" src="allmaps-viewer-url.jpg" href="https://viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fimages%2Fa7afe9a34c3b8633">
    <p>
      All that's needed to start georeferencing an image with <a href="https://editor.allmaps.org/">Allmaps Editor</a> is the URL of a <a href="https://iiif.io/api/image/3.0/#22-image-information-request-uri-syntax">IIIF Image</a> or <a href="https://iiif.io/api/presentation/3.0/#52-manifest">IIIF Manifest</a>. You don't need to create an account or to first download and import images.
    </p>
    <p>
      And <a href="https://viewer.allmaps.org/">Allmaps Viewer</a> only needs the URL of a Georeference Annotation to warp a map. Both tools are simple static sites and don't need a database or GIS infrastructure to run — just a IIIF server. They function by referencing IIIF images or Georeference Annotations in their URL. This makes it easy to share maps and georeference data on the internet.
    </p>
  </Card>

  <Card title="Open source components" src="github.jpg" href="https://github.com/allmaps">
    <p>
      The core components of Allmaps are open source and will always be freely available. The most important goal of the project is to make maps more accessible, from map collections from institutions big and small.
    </p>
    <p>
      We're working on plugins for <a href="https://openlayers.org/">OpenLayers</a> and <a href="https://leafletjs.com/">Leaflet</a>. These plugins will make it easy to start displaying georeferenced maps on your own website, without using infrastructure provided by Allmaps.
    </p>
  </Card>

  <Card title="Not just the browser" src="qgis.jpg" href="https://observablehq.com/@allmaps/allmaps-tile-server">
    <p>
      Allmaps can export georeferenced maps to formats like GeoJSON or GeoTIFF. You can keep using your favorite scripting language, database or GIS.
    </p>
    <p>
      The <a href="https://observablehq.com/@allmaps/allmaps-tile-server">Allmaps Tile Server</a>, a tiny proxy server that turns Georeference Annotations into <a href="https://en.wikipedia.org/wiki/Tiled_web_map">XYZ map tile layers</a>, can be used to view warped maps in existing mapping websites or applications like QGIS.
    </p>
  </Card>

  <Card title="Aerial photos & building plans" src="allmaps-viewer-building-plan.jpg" href="https://viewer.allmaps.org/?url=https%3A%2F%2Fsammeltassen.nl%2Fiiif-manifests%2Fallmaps%2Frivierahal-blijdorp.json">
    <p>
      Allmaps works with any IIIF resource that can be georeferenced. Maps hiding out as illustrations in books, newspapers or archival folders can be edited and viewed as well. Or other types of documents such as <a href="https://viewer.allmaps.org/?url=https%3A%2F%2Fsammeltassen.nl%2Fiiif-manifests%2Fallmaps%2Frivierahal-blijdorp.json">architectural drawings</a> or <a href="https://viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fimages%2F4bcc9463d2a68df4">aerial photographs</a>.
    </p>
    <p>
      You can use Allmaps to study the past, but also to present contemporary maps or future proposals. In <a href="https://cityatlas.theberlage.nl/">education contexts</a>, it can be used to study a site accross different times and scales.
    </p>
  </Card>
</Cards>

<section class="prose m-auto">

## <a name="getting-started"></a> Getting started

<!-- TODO: consider using Astro Starlight for the homepage, and
use the https://starlight.astro.build/guides/components/#steps component here -->

- lijst van 10 mooie kaarten waarop mensen kunnen klikken

https://www.leventhalmap.org/collections/

https://www.leventhalmap.org/projects/digital-projects/georeferencing/

</section>

<Latest count={latestCount} showProperties={false} showUrls={false} />

<section class="prose m-auto">

- georeference annotation
- lijst van instellingen
- ook naar yaml

## <a name="tools"></a> Tools

- [Allmaps Editor](https://editor.allmaps.org/): georeference a map by entering its IIIF URL
- [Allmaps Viewer](https://viewer.allmaps.org/): view georeferenced IIIF maps by entering the URL of a Georeference Annotation
- [Allmaps Latest](https://latest.allmaps.org): the latest maps edited with Allmaps
- [Allmaps CLI](https://github.com/allmaps/allmaps/tree/main/apps/cli): command-line interface for Allmaps
- [Allmaps Tile Server](https://observablehq.com/@allmaps/allmaps-tile-server): proxy server that generates a XYZ map tile layer from IIIF maps georeferenced with Allmaps
- Plugins for JavaScript mapping libraries:
  - [Leaflet](https://observablehq.com/@allmaps/leaflet-plugin)
  - [OpenLayers](https://observablehq.com/@allmaps/openlayers-plugin)
  - [MapLibre](https://observablehq.com/@allmaps/maplibre-plugin)

Other resources:

- [GitHub repositories](https://github.com/allmaps)
- [Observable notebooks](https://observablehq.com/@allmaps)

## <a name="data"></a> Data

<Data />

## <a name="about"></a> About Allmaps

<About />

### Contributors

- [Bert Spaan](https://bertspaan.nl/): Freelance creative technologist. Founder of Allmaps and lead developer.
- [Jules Schoonman](https://www.tudelft.nl/en/staff/j.a.schoonman/): Digital curator at Delft University of Technology Library. Founder of Allmaps and lead for educational projects.
- [Manuel Claeys Bouuaert](https://manuelclaeysbouuaert.be/): Freelance facilitator and cartographer. Developer and strategic thinker for Allmaps, expert in the mathematics that make it all work.
- [Ian Spangler](https://www.leventhalmap.org/about/people/ian-spangler/): Assistant Curator of Digital & Participatory Geography at the Leventhal Map & Education Center. Director of the project supporting Allmaps' further development founded by the National Endowment for the Humanities (NEH).
- [Luuk van de Ven](https://luukvandeven.nl/): Brand designer and art director. Art direction and wireframes for Allmaps.
- [Bryan Haberberger](https://habesoftware.rocks/): Independent contractor and full stack developer at Saint Louis University. Independent consultant for the Georeference Extension.

Other contributions have been made in the form of pull requests, issues or discussions on [GitHub](https://github.com/allmaps/), feedback and ideas provided in the [IIIF Maps Community Group](https://iiif.io/community/groups/maps/) and by our institutional partners.

<div>

### Partners

Allmaps is supported and funded by the following organizations:

- <a href="https://heritage.tudelft.nl/">Delft University of Technology Library</a>
- <a href="https://www.library.universiteitleiden.nl/">Leiden University Libraries</a>
- <a href="https://geoplaza.vu.nl/cms/">Vrije Universiteit Amsterdam</a>
- <a href="https://www.leventhalmap.org/">Leventhal Map & Education Center</a> at the Boston Public Library
- <a href="https://openhistoricalmap.org/">OpenHistoricalMap</a>
- <a href="https://www.kb.nl/en">National Library of the Netherlands</a>
- <a href="https://di.huc.knaw.nl/">Humanties Cluster Digital Infrastructure</a> and <a href="https://hisgis.nl/">HisGIS</a> of the <a href="https://www.knaw.nl/en">Royal Netherlands Academy of Arts and Sciences</a>
- <a href="https://clariahvl.hypotheses.org/">CLARIAH-VL</a>
- <a href="https://uwm.edu/libraries/agsl/">American Geographical Society Library</a> at the University of Wisconsin-Milwaukee
- <a href="https://www.neh.gov/news/neh-announces-413-million-280-humanities-projects-nationwide">National Endowment for the Humanities</a>

<div class="p-4 flex justify-end w-full sticky bottom-0">
<div class="drop-shadow-md">
  <MapMonster mood="happy" color="pink"
    {speechBalloonBackgroundColor}
    {speechBalloonTextColor}>
    <div>
      If you think Allmaps can be useful for your institution or if you have questions about the project, you can <a class="text-white underline" href="mailto:hello@allmaps.org">send us an email</a>. You can also reach us in the <code class="text-white">#allmaps</code> channel of the <a class="text-white underline" href="http://bit.ly/iiif-slack">IIIF Slack</a>.
    </div>
  </MapMonster>
  </div>
</div>
</div>
</section>
