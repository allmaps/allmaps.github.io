---
layout: default
title: "Allmaps"
---

Allmaps is a set of [open source tools](https://github.com/allmaps) that make it easier and more fun to search, explore, georeference and work with collections of digitised maps.

**Allmaps works with any image repository that supports the [International Image Interoperability Framework](https://iiif.io/) (IIIF).**

**By using [tiled IIIF images](https://iiif.io/api/image/3.0/#54-tiles), JavaScript and WebGL, Allmaps can [warp georeferenced maps in the browser](https://viewer.allmaps.org/#data=data:text/x-url,https%3A%2F%2Fraw.githubusercontent.com%2Fbertspaan%2Fiiif-map-collections%2Fmaster%2Fgeoreferencing-annotations%2Fcommonwealth-0z709594h.json). This eliminates the need for running a map tile server or WMS server.**

All components rely on a simple JSON metadata structure that holds information about each map’s control points and mask. This metadata structure anticipates the upcoming JSON schema prepared by the [IIIF Community](https://iiif.io/community/groups/maps-tsg/), and is based on W3C’s [Web Annotation](https://www.w3.org/TR/annotation-model/) specification. Please refer to the [IIIF Map Collections](https://github.com/bertspaan/iiif-map-collections#georeference-annotations) repository for exemplary data.

Allmaps and its components are far from finished. For now, you can explore the following links:

*   [Allmaps viewer](https://viewer.allmaps.org/)
*   [Allmaps editor](https://allmaps.org/editor)
*   [GitHub repositories](https://github.com/allmaps)
*   [Observable notebooks](https://observablehq.com/collection/@bertspaan/iiif-maps)

Allmaps is a project by [Bert Spaan](https://bertspaan.nl). Follow [@bertspaan](https://twitter.com/bertspaan) for updates.

[![Screenshot of the Allmaps Viewer](screenshot.jpg)](https://viewer.allmaps.org/#data=data:text/x-url,https%3A%2F%2Fraw.githubusercontent.com%2Fbertspaan%2Fiiif-map-collections%2Fmaster%2Fgeoreferencing-annotations%2Fcommonwealth-0z709594h.json) 

Credits
-------

  <dl>
	<dt>Concept</dt>
	<dd>Bert Spaan</dd>
	<dd><a href="https://heritage.tudelft.nl/">Jules Schoonman</a> (Delft University of Technology Library)</dd>
	<!-- <dt>Design<dt>
	<dd><a href="https://luukvandeven.nl/">Luuk van de Ven</a></dd> -->
  </dl>

Partners
--------

*   [Delft University of Technology Library](https://heritage.tudelft.nl/)\*
*   [Leiden University Libraries](https://www.library.universiteitleiden.nl/)\*
*   [Rotterdams Publiek](https://rotterdamspubliek.nl/)\*
*   [IIIF Maps Community Group](https://iiif.io/community/groups/maps/)

_\* Funding partners_