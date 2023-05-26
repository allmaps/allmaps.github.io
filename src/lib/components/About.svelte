<script lang="ts">
  import Face from '$lib/components/Face.svelte'
  import Masks from '$lib/components/Masks.svelte'
</script>

<div class="about relative p-10 bg-white rounded-lg box max-w-2xl mx-auto my-8 prose">
  <p>
    Allmaps is a project by <Face
      src="bert.jpg"
      name="Bert Spaan"
      href="https://bertspaan.nl"
    /> and <Face
      src="jules.jpg"
      name="Jules Schoonman"
      href="https://www.tudelft.nl/staff/j.a.schoonman/?cHash=a50711d67f2250b0169ff757aacf8f6f"
    />. We love maps, but we can never find the maps we're looking for. We both
    think working with digitized maps is far too complicated and expensive. It
    should be easier and more fun!
  </p>
  <p>
    Bert Spaan is a freelance creative technologist with an interest in
    cartography and digital maps. He is also one of the chairs of the <a
      href="https://iiif.io/community/groups/maps-tsg/"
      >IIIF Maps Technical Specification Group</a
    >.
  </p>
  <p>
    Jules Schoonman is an architect and researcher working as a policy advisor
    at the Delft University of Technology, where he is responsible for the
    physical and digital presentation of academic heritage.
  </p>
  <p class="mb-0">
    For updates about Allmaps, follow <a href="https://twitter.com/bertspaan"
      >@bertspaan</a
    > on Twitter.
  </p>
  <Masks />
</div>

<style scoped>
  .about::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    /* background: linear-gradient(
      135deg,
      rgba(255, 199, 66, 0.4) 0%,
      rgba(255, 86, 186, 0.4) 100%
    ); */

     background: conic-gradient(
      rgba(255, 199, 66, 0.4) 0deg 0deg,
      rgba(120, 100, 100, 0.2) 70deg 90deg,
      rgba(255, 86, 186, 0.4) 135deg 180deg,
      rgba(120, 100, 100, 0.2) 225deg 225deg,
      rgba(255, 199, 66, 0.4) 310deg 360deg
     );

    filter: blur(10px);
  }
</style>
