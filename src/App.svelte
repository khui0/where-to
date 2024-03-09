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

<main class="p-4 flex flex-col items-center justify-center gap-3">
  <h1 class="text-3xl font-bold">Where to?</h1>
  <Toggle bind:checked></Toggle>
  <Container {locations} {index}></Container>
  <button class="btn" on:click={randomize}>Randomize</button>
  <p class="fixed bottom-0 m-4 text-center">
    Travel time calculated from <a
      href="http://maps.apple.com/?q={encodeURIComponent(
        '71-111 Saddle Rock Rd, Valley Stream, NY 11581',
      )}"
      target="_blank"
      rel="noopener noreferrer"
      >71-111 Saddle Rock Rd, Valley Stream, NY 11581</a
    >
  </p>
</main>

<style>
  main {
    font-family: "Figtree", sans-serif;
  }
</style>
