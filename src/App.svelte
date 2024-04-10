<script>
  import Container from "./lib/Container.svelte";
  import Toggle from "./lib/Toggle.svelte";

  import data from "./where-to.json";

  let locations;
  let index = 0;

  let checked = false;
  $: (() => {
    if (checked) {
      locations = data.filter((location) => location.periods <= 2);
    } else {
      locations = data.filter((location) => location.periods <= 1);
    }
    randomize();
  })();

  function randomize() {
    index = Math.floor(Math.random() * locations.length);
  }
</script>

<main class="p-4 flex flex-col items-center justify-center gap-4">
  <h1 class="text-3xl">Where to?</h1>
  <Toggle bind:checked></Toggle>
  <Container {locations} {index}></Container>
  <button class="btn rounded-full" on:click={randomize}>Randomize</button>
  <p
    class="fixed bottom-0 m-3 text-center text-neutral-content opacity-25 hover:opacity-100 transition-opacity"
  >
    Travel time calculated from <a
      class="link"
      href="http://maps.apple.com/?q={encodeURIComponent(
        '71-111 Saddle Rock Rd, Valley Stream, NY 11581',
      )}"
      target="_blank"
      rel="noopener noreferrer">71-111 Saddle Rock Rd, Valley Stream, NY 11581</a
    >
  </p>
</main>

<style>
  main {
    font-family: "Figtree", sans-serif;
  }
</style>
