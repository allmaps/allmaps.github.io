<script lang="ts">
  import Face from '$lib/components/Face.svelte'
</script>

<div class="drop-shadow-lg p-4 rounded about-me max-w-2xl mx-auto">
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
  <p>
    For updates about Allmaps, follow <a href="https://twitter.com/bertspaan"
      >@bertspaan</a
    > on Twitter.
  </p>
</div>

<style scoped>
  .about-me {
    background-color: var(--yellow-2);
  }
</style>
